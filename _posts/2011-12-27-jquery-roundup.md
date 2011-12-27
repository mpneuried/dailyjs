---
layout: post
title: "jQuery Roundup: jQuery-inlog, -prefix-free, jquery.animate-enhanced"
author: Alex Young
categories: 
- jquery
- plugins
- css3
- animation
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

### jQuery-inlog

[jQuery-inlog](http://prinzhorn.github.com/jquery-inlog/) (GitHub: [Prinzhorn / jquery-inlog](https://github.com/Prinzhorn/jquery-inlog), License: _MIT_) by Alexander Prinzhorn is a passive plugin that injects `console.log` calls into jQuery core.  It can help debug selectors and chained calls.

This plugin has several options that can be changed at any time:

{% highlight javascript %}
$.inlog({
  enabled: false,    // Shortcut: $.inlog(true|false);
  thisValue: false,  // Output this-value or not
  returnValue: true, // Output return-value or not
  indent: true       // Indent nested calls or not
});
{% endhighlight %}

### -prefix-free

[-prefix-free](http://leaverou.github.com/prefixfree/) (GitHub: [LeaVerou / prefixfree](https://github.com/LeaVerou/prefixfree), License: _MIT_) by Lea Verou makes it possible to use CSS properties without vendor strings, adding the required prefixes only when they're required.  Every stylesheet in `<link>` or `<style>` tags will be processed, and jQuery's `$.css()` method can be used to get or set CSS properties without prefixes.

The browsers supported are IE9+, Opera 10+, Firefox 3.5+, Safari 4+ and Chrome:

> In older browsers like IE8, nothing will break, just properties won’t get
> prefixed. Which wouldn’t be useful anyway as IE8 doesn’t support much CSS3.

There are a few limitations that the author has documented on the project's site: `@import` stylesheets aren't supported, and neither are cross-origin stylesheets.

The jQuery plugin part of -prefix-free is here: [prefixfree.jquery.js](https://raw.github.com/LeaVerou/prefixfree/master/plugins/prefixfree.jquery.js).  This plugin adds the required changes to allow `$.css()` to work transparently.

### jquery.animate-enhanced

[jquery.animate-enhanced](http://playground.benbarnett.net/jquery-animate-enhanced/) (GitHub: [benbarnett / jQuery-Animate-Enhanced](https://github.com/benbarnett/jQuery-Animate-Enhanced), License: _MIT_) by Ben Barnett is an increasingly popular plugin for extending `$.animate()` to detect CSS transitions for modern browsers.  It's tested with jQuery 1.3.2 to 1.6.1 and is even compatible with IE6+.

> The plugin will analyse the properties you're animating on, and select the most
> appropriate method for the browser in use. This means your transitions on left,
> top and opacity will convert to a CSS3 transition on Webkit & Mozilla agents that
> support it, and Opera 10.50+. If the user is on a browser that has no CSS3
> transitions, this plugin knows about it and won't get involved.

By including this plugin on a page, jQuery animations should use CSS3 translate where available.  Outside of this basic usage, there are also three new options for `$.animate()`:

* `avoidTransforms`: Avoid using `-webkit-transform` or similar to aid hardware acceleration
* `useTranslate3d`: Use 3D translations, the author recommends this for iPhone-focused development
* `leaveTransforms`: Once transitions are complete, remove them and convert positional values back to the real values

3D support is enabled by default, and can be toggled by using `$.toggle3DByDefault()`.

