---
layout: post
title: "jQuery Roundup: New Sizzle, HubInfo, Select2"
author: Alex Young
categories: 
- jquery
- plugins
- selectorengines
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###The New Sizzle

In [The New Sizzle](http://blog.jquery.com/2012/07/04/the-new-sizzle/), Timmy Wilson explains how jQuery's revised CSS selector engine works.  Timmy has compared it to other selector engines, and shows how the new implementation differs to the previous version.

The part about extensibility is promising:

> ... there are a couple changes that make Sizzle even more extensible.  Now with the parser compiling a function of functions, you can receive more information when creating your custom selector. `Sizzle.compile `is exposed so you can cache your selectors before they get used.  While compiling is still very fast without caching, you can make sure that step is skipped before the selection is ever run.

###HubInfo

[HubInfo](http://projects.jga.me/hubinfo/) (GitHub: [jgallen23 / hubinfo](http://github.com/jgallen23/hubinfo), License: _MIT_) by Greg Allen displays a GitHub repository widget.  It comes bundled with CSS, so it's easy to get something looking good straight away with a small amount of JavaScript:

{% highlight javascript %}
$('#hubInfo').hubInfo({ 
  user: 'alexyoung'
, repo: 'dailyjs'
});
{% endhighlight %}

The `hubInfo` method returns an object that will fire a `render` event.  The project's documentation shows this being used to add a Twitter share button.

###Select2

[Select2](http://ivaynberg.github.com/select2/) (GitHub: [ivaynberg / select2](https://github.com/ivaynberg/select2), License: _Apache 2.0_) by Igor Vaynberg is a select box replacement that features a similar style to the popular [Chosen](http://harvesthq.github.com/chosen/) library.  Unlike Chosen, the author has made Select2 work better with large data sets -- results can be paginated, and infinite scrolling is supported.

There's an active community of Select2 users at the [Select2 Google Group](https://groups.google.com/d/forum/select2), and there's lots of demos and documentation on the project's homepage.
