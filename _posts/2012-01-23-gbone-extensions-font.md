---
layout: post
title: "Gbone.js, Writing Browser Extensions, Font.js"
author: Alex Young
categories: 
- backbone.js
- extensions
- plugins
- fonts
---

###Gbone.js

[Gbone.js](https://github.com/gobhi/gbone.js) (License: _MIT_) by Gobhi Theivendran is a framework built on top of Backbone.js for building mobile applications, inspired by [Spine Mobile](http://spinejs.com/mobile/index).  It contains several classes that extend Backbone's classes to make it easier to build mobile applications.  For example, `Gbone.Stage` contains multiple `Gbone.Panel`s, and the panels are managed internally by a panel manager.  They have a default skeleton like this:

{% highlight html %}
<div class="container">
  <header></header>
  <article></article>
</div>
{% endhighlight %}

Panels can be activated and deactivated, animated using a transition.  Only one stage and panel can be active at one time, so the end result is similar to native Android and iOS interfaces.

There's a [Gbone.js](https://github.com/gobhi/gbone.js/tree/master/example) demo app, which is a rewrite of [currency.io](https://github.com/benschwarz/currency.io).  Gbone.js works with both jQuery and Zepto.

### Writing Browser Extensions - Comparing Firefox, Chrome and Opera

[Writing Browser Extensions - Comparing Firefox, Chrome and Opera](http://blog.nparashuram.com/2011/10/writing-browser-extensions-comparing.html) by Parashuram Narasimhan explores writing a browser extension for multiple browsers.  The author covers a lot of topics, including manifest files, background processes, message passing, and debugging.

This tutorial is based on Parashuram's experiences writing the [MediaPlus](http://nparashuram.com/projects/flashresizer.html), so some of the coverage is specific to that, but it's general enough to get a good overview of how difficult it is to support all of the major browsers with a single extension.

### Font.js

[Font.js](http://pomax.nihongoresources.com/pages/Font.js/) (GitHub: [Pomax / Font.js](https://github.com/Pomax/Font.js), License: _MIT_) by Mike Kamermans is a font API for client-side JavaScript.  Fonts can be loaded on demand, and an `onload` callback will run once the font has been loaded:

{% highlight javascript %}
var font = new Font();

font.onload = function() {
  // The new font has loaded
};

font.src = 'http://example.com/font.ttf';
{% endhighlight %}

Metrics for a font can be accessed.  For example, `font.metrics.leading` will give the line height.

