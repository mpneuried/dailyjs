---
layout: post
title: "jQuery Roundup: jQuery++, Wtwui, jSignature"
author: Alex Young
categories: 
- jquery
- plugins
- svg
- ui
- widgets
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###jQuery++

[jQuery++](http://jquerypp.com/) (GitHub: [jupiterjs / jquerypp](https://github.com/jupiterjs/jquerypp)) from Chicago-based JavaScript consulting firm [Bitovi](http://bitovi.com/), is a collection of DOM and event-related jQuery plugins.  The project's site has a tool for creating a single file that contains all of the plugins that you want, but they can also be loaded using an AMD module loader like RequireJS.

Highlights include a CSS3 version of `$.fn.animate`, a text range plugin, swipe gesture support, and a version of `jQuery.event.fix` that uses ECMAScript 5 getters.

There are discussions about the project on Hacker News:

* [Introducing jQuery++ (bitovi.com)](http://news.ycombinator.com/item?id=4067135)
* [jQuery++ (jquerypp.com)](http://news.ycombinator.com/item?id=4067260)

###Wtwui

[Wtwui](http://wtw-software.github.com/wtwui/) (GitHub: [wtw-software / wtwui](https://github.com/wtw-software/wtwui), License: _MIT_) from WTW Software is a collection of UI widgets influenced by [UIKit](https://github.com/visionmedia/uikit) by TJ Holowaychuk.  It currently includes a dialog, overlays, tooltips, and a confirmation box.  It's built using AMD, so each component can be loaded using RequireJS.

The project is tested with Jasmine, and it includes a build script built with Node.

###jSignature

[jSignature](http://willowsystems.github.com/jSignature/) (GitHub: [willowsystems / jSignature](https://github.com/willowsystems/jSignature), License: _MIT_) is a fork of [brinley / jSignature](https://github.com/brinley/jSignature) with additions and tweaks by Daniel Dotsenko.

jSignature allows signatures to be captured in a browser, and works on touchscreen devices as well.  Older version of IE are supported by FlashCanvas.  A special effort has been made to capture smooth-looking signatures, and it supports extra editing options like undoing the last stroke.
