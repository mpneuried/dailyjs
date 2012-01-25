---
layout: post
title: "jQuery Roundup: Publish Subscribe, Transparency, slabText"
author: Alex Young
categories: 
- jquery
- plugins
- graphics
- text
- events
- templating
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

### Publish Subscribe Plugin

[Joseph Zimmerman's Publish Subscribe Plugin](http://www.joezimjs.com/projects/publish-subscribe-jquery-plugin/) (License: _GPL_) is an implementation of the aforementioned messaging pattern aimed at browser-based JavaScript:

{% highlight javascript %}
var handle = $.subscribe('foo', function(topic, data) {
  console.log(data, topic);
});

$.publish('foo bar', 'This is some data');

$.unsubscribe(handle);
{% endhighlight %}

The author has implemented it with core jQuery methods like `$.type` and `$.each` so the source is readily understandable.

### Transparency

[Transparency](http://leonidas.github.com/transparency/) (GitHub: [leonidas / transparency](https://github.com/leonidas/transparency), License: _MIT_) by Jarno Keskikangas is a template engine for jQuery that maps JSON to DOM elements using a `$.render` method:

{% highlight javascript %}
var hello = {
  hello:   'Hello',
  goodbye: 'Goodbye!'
};

$('.container').render(hello);
{% endhighlight %}

This example would write the values to tags matching the selectors `.hello` and `.goodbye`:

> Transparency relies on convention over configuration and requires you to have 1:1 match between
> CSS classes and JSON objects. The idea is to minimize the cognitive noise you have to deal
> with. Just call `$('.container').render(data)` and move on.

There's a detailed blog post about Transparency here: [Implementing Semantic Anti-Templating With jQuery](https://github.com/leonidas/codeblog/blob/master/2012/2012-01-13-implementing-semantic-anti-templating-with-jquery.md).

### slabText

![slabText example](/images/posts/slabtext.png)

[slabText](http://www.frequency-decoder.com/demo/slabText/) (GitHub: [freqdec / slabText](https://github.com/freqDec/slabText/), License: _MIT/GPLv2_) by Brian McAllister splits headlines into rows, and resizes them to fill the available space.  This works as the browser viewport changes.

Brian notes that this is based on Erik Loyer's [slabtype algorithm](http://erikloyer.com/index.php/blog/the_slabtype_algorithm_part_1_background/), which is interesting reading for those inspired by [FitText](http://fittextjs.com/).

