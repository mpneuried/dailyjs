---
layout: post
title: "jQuery Roundup: jQuery 1.8: Beta 1, AttC, DPB, Iframe Height"
author: Alex Young
categories: 
- jquery
- plugins
- iframes
- graphs
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###jQuery 1.8: Beta 1

[jQuery 1.8: Beta 1](http://blog.jquery.com/2012/06/22/jquery-1-8-beta-1-see-whats-coming-and-going/) is out, and there's going to be more jQuery news to follow over the coming weeks:

> There will be even more exciting jQuery news at the jQuery Conference in San Francisco later this month, with blog posts to follow.

Custom jQuery builds are now supported through [Grunt](http://gruntjs.com/).  That means the ajax, css, dimensions, effects, and offset modules can be safely removed, and even replaced with another library.

In addition, the animation code has been cleaned up, and CSS transitions are supported.  Interestingly, by jQuery 1.9 `$.browser` will be dropped:

> Ever since jQuery 1.4, we've been evangelizing that browser detection via the user agent string is a bad idea. Yet we've been an enabler of bad practice by continuing to offer `$.browser`. As of jQuery 1.9 we'll remove it entirely and you'll need to use the 1.9 compat plugin.

As usual there's a full list of changes in the blog post: [jQuery 1.8: Beta 1](http://blog.jquery.com/2012/06/22/jquery-1-8-beta-1-see-whats-coming-and-going/).

###AttC

[AttC](http://code.google.com/p/auto-table-to-chart/) (License: _Apache 2.0_) is a jQuery plugin that converts HTML tables to graphs using the [Google Visualization API](https://developers.google.com/chart/interactive/docs/reference).

The jQuery part is a simple method call, `$(selector).attc()`, but configuration is performed through the corresponding HTML using data attributes.  The authors have written a [guide to basic usage for AttC](http://code.google.com/p/auto-table-to-chart/wiki/HowToUseGoogleCharts).

###DPB

[DPB](http://mvc-loader.com/dpb/index.htm) (License: _GPL_) by Dannie Hansen is a dynamic popup plugin that supports iframes and modal popups.  An overlay can be displayed that dims the page, and there are callbacks for the open and close events:

{% highlight javascript %}
$(selector).DPB({
  animation: 'topSlide'
, type: 'inline'
, width: 200
, height: 100
, top: 20
, selector: $('.inlineElement')
});
{% endhighlight %}

###Iframe Height

[Iframe Height Jquery Plugin](https://github.com/Sly777/Iframe-Height-Jquery-Plugin/) by Ilker Guller sets the height of an iframe based on the content, and includes a fix for cross-domain iframe resizing.  The plugin is invoked with `$('#autoIframe').iframeHeight`, and the options available are as follows:

{% highlight javascript %}
$(selector).iframeHeight({
  resizeMaxTry: 2
, resizeWaitTime: 300
, minimumHeight: 100
, defaultHeight: 500
, heightOffset: 90
, exceptPages: ''
, debugMode: false
, visibilitybeforeload: true
, blockCrossDomain: true
});
{% endhighlight %}
