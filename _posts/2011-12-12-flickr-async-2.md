---
layout: post
title: "Flickr's Asynchronous Script Loading Part 2"
author: "Alex Kessinger"
categories: 
- events
- dom
- code-review
- flickr-async
---

<div class="box">
Alex Kessinger is a programmer who lives in the Bay Area. He strives to make websites, cook, and write a little bit better each day. You can find more from Alex at his <a href="http://alexkessinger.net/">blog</a>, on <a href="http://twitter.com/voidfiles">Twitter</a>, and <a href="https://plus.google.com/108319722006237870403/posts">Google+</a>. 
</div>

[Part One: Flickr's Asynchronous Script Loading](http://dailyjs.com/2011/11/28/flickr-async/)

This is part two of _Production Teardown: Flickr's Asynchronous Script Loading_. To recap, if we use an async JS loader, or even if we just put our script tags at the bottom of our pages we have a problem. There is a small window where it's possible to interact with the page before the code has loaded.

Flickr uses something they call an `actionQueue`, and their code is very tight and isolated. With little modification I think we could use that exact same piece of code for other things. We are going to build a simple page to put this to the test. To start, we need to make a few changes to the original code so that we can load multiple modules instead of just one.

*Note*: I am using [QUnit](http://docs.jquery.com/QUnit) to run the tests.

### Adapting `actionQueue.js`

The code: [actionQueue.js](https://gist.github.com/1398040).

I had to make a couple of changes to the stock code for the purposes of generalizing the library, and to make it more testable. First, the original module is hard to test because its state is private. I wouldn't expect anything less, the state is only used by the `actionQueue` function. However, during testing we need to reset the internal state of `actionQueue`.

One possible way to do this is to write an `actionQueue` factory. This is a function that creates a brand new `actionQueue` every time it's called. Then it can be assigned to `A.actionQueue` as required. This has a lot of advantages but seems like overkill for our requirements. An alternative solution is to simply create a new function that can reset the internal state of the module. I've called this function `refresh_module`.

The second thing I did was to use [JSLint](http://www.jslint.com/) to help clean up the original code. For example, there were cases when a variable was assigned in a `for` loop:

{% highlight javascript %}
for (var i in an_array) {

}
{% endhighlight %}

This is usually a bad idea because it's re-initializing `i` every iteration of the loop. A better form suggested by JSLint is this:

{% highlight javascript %}
var i;
for (i in an_array) {

}
{% endhighlight %}

I expect the engineers who wrote this code knew about this. I don't even think everything needs to pass JSLint, it's just a rubric that one can use to begin the process of evaluating code. What I think happened here is that they used the first version to save space. In the second version `i` is repeated twice, it's not as small as the first version. Also, they were also looping over a very small array. They probably optimized their code for the most pressing priority which was code size. Given that this code is going to show up in many, many pages on Flickr, which is an extremely popular site, then the size argument makes sense.

With testability improved and static analysers applied, I made one more major functional modification. When I started looking at Flickr's code I could see that there was an internal flag called `queueing`. When `true`, which is its default, interim functions get executed. When `false`, nothing happens; everything just passes through to the `queue_click` function. 

What's curious about `queueing` is that it's global. `actionQueue` was clearly written with the idea of multiple modules, but apparently that part ended up not being needed. When the first module gets loaded `queueing` is set to `false`. That means all `queue_click` calls now pass through, even for modules that haven't yet called `module_load`. I have a feeling that Flickr loads all of its modules in a monolithic file. They aren't seeing any repercussions in this code because if one module has loaded, they have all loaded. I don't think that this will be the story for everyone who might want to use this code. So, I modified it so that each module has its own `queueing` state.

I've added the code on [line 38](https://gist.github.com/1398040#L38) to set `queueing` to `true` for any new modules that get added by the `register` function. Then as `module_loaded` gets called, it will only turn `queueing` off for that module. You can see all my tests, and how I tested the multiple module section in [actionQueue tests](https://gist.github.com/1456038).

### Building a Like Button

To demonstrate this code, we are going to build a simple "like" button. There will be two steps. When clicked it will change state, and then there will be an action for when the module loads.  The compete example is here: [actionQueue in practice](https://gist.github.com/1456035).

This simple markup creates a like button with two states. The visual state is controlled by flipping a class name. Then I set up some initial code building our global container, and include the `actionQueue` code.

[Line 20](https://gist.github.com/1456035#L20) is where we start to see how the like button is going work. This is comprised of two steps.  In the interim step the like button will get a new class. This will flip the visual state. In the cleanup state, which will fire after the module, `like-handler` loads and the like button is set to `Done!`.

The like button itself is implemented as HTML.  It's important to note that the anchor tag has an `onclick`. I know, this looks dirty, but really it's the easiest way to handle events before all of the code has loaded. The arguments behind this were covered in the previous tutorial.  So, when a user clicks the like button an event gets fired into the action queue which will first fire the interim step.

Later I setup a link that will 'load' the module. This will then fire the cleanup function.

### Conclusion

By first researching Flickr's code, then adapting it to be easier to test, we've created something genuinely useful and reusable.  And although using <code>onclick</code> might be a little bit controversial, the previous part had a great [comment from Ross Harmes](http://dailyjs.com/2011/11/28/flickr-async/#comment-375246751) that explained the thinking behind it:

> I can speak to why we use onclick in this situation. For performance reasons, we want to load as little JS as possible until the page content is fully loaded.
> We also don't want to litter the page with script blocks just to attach these interim events. These two constraints mean that we can't load a library that
> normalizes event handling across browsers, nor can we attach event listeners in the standard way, using JS only.
> onclick is the only approach left to us, but it isn't a bad one. Like you said, we try to not be too dogmatic about these things.

