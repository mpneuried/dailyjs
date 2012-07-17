---
layout: post
title: "jQuery Roundup: trunk8, tcsst, MaxImage"
author: Alex Young
categories: 
- jquery
- plugins
- galleries
- testing
- truncation
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###trunk8

[trunk8](http://jrvis.com/trunk8/) (GitHub: [rviscomi / trunk8](https://github.com/rviscomi/trunk8)) by Rick Viscomi is a text truncation plugin.  Truncating text in browsers is actually quite awkward to do well, and I haven't yet found a plugin that does it particularly well when a certain number of vertical lines is required.  However, this one appears to do that through the `lines` option, and it also does a lot more: tooltips can be created, character count is supported, and the internal calculations are cached so it should perform very well.

The author has attempted to address performance using several familiar client-side hacks, so if speed is an issue this might be a good choice.  The author hasn't included unit tests or benchmarks, so it might take a bit of [jsPerf](http://jsperf.com/) to really see how efficient it is.

###tcsst

[tcsst](https://github.com/threedaymonk/tcsst) by Paul Battley is a CSS testing script for jQuery.  The author wrote it because "life's too short to click around".  It's basically a simple test runner with a CSS-specific flavour: tests are defined in terms of CSS selectors:

{% highlight javascript %}
tcsst(function(tc){
  tc.test('top of paragraph should be at a multiple of line-height', 'p',
    function(test, element){
      var lineHeight = parseInt($('body').css('line-height'), 10);
      var diff = $(element).offset().top % lineHeight;
      test.assert((0 == diff), 'Off by ' + diff + 'px');
    });
});
{% endhighlight %}

It's an interesting concept, and I think there's a lot of room for time-saving assertions that are tailored for CSS.

###MaxImage 2.0

[MaxImage 2.0](http://blog.aaronvanderzwan.com/2012/07/maximage-2-0/) (GitHub: [akv2 / MaxImage](https://github.com/akv2/MaxImage), License: _MIT/GPL_) by Aaron Vanderzwan is a fullscreen background slideshow plugin.  There's a [demo of MaxImage](http://www.aaronvanderzwan.com/maximage/2.0/) that shows it being used with the [jQuery Cycle](http://jquery.malsup.com/cycle/) and [Easing](http://gsgd.co.uk/sandbox/jquery/easing/) plugins.

This plugin actually checks if the browser supports `background-size`, so it should look good in modern browsers.  It also pre-loads images.
