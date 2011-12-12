---
layout: post
title: "Production Teardown: Flickr's Asynchronous Script Loading"
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

[Part 2](http://dailyjs.com/2011/12/12/flickr-async-2/)

If you are using a script loader, or even if you are just putting your scripts at the bottom of your DOM, you have a problem. In some cases your scripts will load after the user has clicked on something that requires a JavaScript function to handle the click. It's possible you have a pure HTML version, but if the user has JavaScript enabled then we want to use it, even if the JavaScript hasn't loaded yet. There needs to be a way of handling events before all of the assets have finished loading.

There are a number of ways we could do this, but it's helpful to look at a working implementation. This is going to be a two part series. First, we are going to look at how Flickr does this. In the second part, we'll take the code that Flickr uses and extract the main features so that anyone can use the code.

In all of the code that Flickr loads before the body this is the part that matters to us: [Isolated actionQueue Code](https://gist.github.com/1394593).

Let's walk through this. `F` is the global Flickr object that contains all of Flickr's JavaScript. Not only is this a common pattern among frontend developers, this technique is widely taught, and accepted at Yahoo. By keeping all of your site's functionality in one global object you are not polluting the global namespace. It also is a great way to organize your code.

If a user is able to interact with the site before the scripts have finished loading, you still want to handle the user's click somehow. It may not need to be completely handled, but the interface should be responsive. Code may run in the time between when the click event is fired, and when the module that can handle the event is loaded. Finally, it should be possible to run code after everything has loaded.

Using Flickr's terminology, there are two phases: _interim_ and _cleanup_. Interim code will be run right away, as soon as the user clicks something. Cleanup code will run as soon as the rest of the code has finished loading.

Flickr calls this module the `actionQueue`. Given that we now understand the basics of how the `actionQueue` works, the first step is to register a `click_queue` handler. The fav button is a good example of this.

### How the Fav Button is Supposed to Work

In the un-faved state the star is black and white:

![Flickr Favourite Button](/images/posts/x1jg.png)

The active state is a colour star:

![Flickr Active Favourite Button](/images/posts/_8wh.png)

There are two things that need to happen when a person clicks on the favorite button.

1. The button needs to change state to purple
2. An Ajax call needs to be made to register the state change

The visual state change is as simple as adding a class to the element. Very little code is required for that. On the other hand, the Ajax operation is going to require a lot more code. So, to use `actionQueue` an action should be registered so that in the interim the visual state can be changed, and in the cleanup stage the Ajax operation will be performed.

The advantage of this approach is immediate feedback. Once the module has loaded then the Ajax operation can be performed.  And, this is exactly how Flickr implemented this functionality: [Flickr actionQueue Fav Handler](https://gist.github.com/1394631).

The `register` function only handles potential actions, and not actions that have actually been triggered. That is what the `queue_click` function is for.  The `queue_click` function can be called when an actual event has happened. In the case of the fav button, this will be a click event.

Looking at the HTML for the button shows that the `queue_click` function is just called from the `onclick` handler. In turn the function will return `false` if the page is still waiting for code to load, thus canceling the browser's default operation: [Flickr Favorite Button](https://gist.github.com/1394649).

Now, this is where things get awesome. I am a fan of killing sacred cows. One of those in the front-end community is to not use `onclick` attributes -- it's certainly become dogma for many. Clearly Flickr doesn't care about this. I don't know the details of _why_ Flickr is using `onclick`, but I have to assume it's because it's the lowest common denominator, and it works.

And, that's it. In this manner Flickr is able to handle all of us who are able to click faster than JavaScript is able to load. After breaking down this technique I wondered if there might be an easier way to handle actions before they loaded.

### Conclusion

Now that we have seen how Flickr handles this problem, how can we use the techniques in our own code? In part 2, I'll explore Flickr's code in detail, and demonstrate how it can be used with any site.

