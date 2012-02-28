---
layout: post
title: "jQuery Roundup: TOC, Curtain.js, Griffin.editor, imgg"
author: Alex Young
categories: 
- jquery
- plugins
- ui
- effects
- editors
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

### TOC

[TOC](http://projects.jga.me/toc/) (GitHub: [jgallen23 / toc](https://github.com/jgallen23/toc), License: _MIT_) by Greg Allen will generate a table of contents for a page, and automatically highlight the current section.  Basic usage is simply `$('#toc').toc();`, but it supports some configuration options as well:

{% highlight javascript %}
$('#toc').toc({
  'selectors': 'h1,h2,h3',   // elements to use as headings
  'container': 'body',       // element to find all selectors in
  'smoothScrolling': true,   // enable or disable smooth scrolling on click
  'prefix': 'toc',           // prefix for anchor tags and class names
  'highlightOnScroll': true, // add class to heading that is currently in focus
  'highlightOffset': 100     //offset to trigger the next headline
});
{% endhighlight %}

The design of the plugin allows multiple tables of contents to be used on a page, and the author is planning to add support for Zepto and Ender.

### Curtain.js

[Curtain.js](http://curtain.victorcoulon.fr/#intro) (GitHub: [Victa / curtain.js](https://github.com/Victa/curtain.js), License: _MIT_) by Victor Coulon and submitted by [Hirvesh](http://functionn.blogspot.com) displays pages using an effect similar to a slide show.  It supports keyboard shortcuts and conventional scrolling.  The panels that make up the page will automatically resize to fill the window.

The plugin is invoked by `$('.curtains').curtain()` and expects an ordered list:

{% highlight html %}
<ol class="curtains">
  <li class="cover">your content</li>
  <li>
    <div class="fixed"> <!-- if you need a "fixed" content -->
      Fixed content
    </div>
  </li>
</ol>
{% endhighlight %}

Panels can also be added dynamically using `$('.curtains').data('plugin_curtain').insert()`.

### Griffin.editor

[Griffin.editor](http://blog.gauffin.org/2012/02/introducing-griffin-editor-a-jquery-textarea-plugin/) (GitHub: [jgauffin / griffin.editor](https://github.com/jgauffin/griffin.editor), License: _MPL_) by Jonas Gauffin is a jQuery-enhanced, zero configuration, `textarea`.  It supports markdown, but the author notes other formats are easily supported, access keys, and syntax highlighting.  It uses jQuery UI, and is easily set up with a call to `$('.editor').griffinEditor()` and suitable HTML.

The [griffin.editor / Demos](https://github.com/jgauffin/griffin.editor/tree/master/Demos) folder contains examples of how to use the plugin.

### imgg

[imgg](http://bugzu.github.com/imgg/index.html) (GitHub: [bugzu / imgg](https://github.com/bugzu/imgg), License: _MIT_) by Gaurav Sharma displays images using an animated mosaic effect.  It's used by passing an array of image locations to `$().imgg`:

{% highlight javascript %}
$('#gallery').imgg({
  images: ['images/img11.png', 'images/img22.jpg', 'images/img33.jpg']
});
{% endhighlight %}

The author has provided sample images and CSS.
