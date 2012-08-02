---
layout: post
title: "Reznik, JSQA, Riloadr"
author: Alex Young
categories: 
- node
- amd
- images
- responsive
---

###Reznik

[Reznik](https://github.com/alexlawrence/reznik) (License: _MIT_, npm: [reznik](http://npmjs.org/package/reznik)) by Alex Lawrence is a code analysis tool for [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) projects.  Given a set of AMD modules, Reznik's server-side component can resolve individual module dependencies on demand.  It builds a module list, and then checks the code for circular or missing dependencies.

The author notes that Reznik was developed in Node, but also works in [PhantomJS](http://phantomjs.org/).  There's a command-line tool that can run under either of these environments and output module lists using various formats, including HTML and JSON.

###JSQA

[JSQA](https://github.com/PaquitoSoft/JSQA) from PaquitoSoft uses [JSHint](http://www.jshint.com/) to statically analyse your code using an Express/Bootstrap-powered web application.  It uses [Socket.IO](http://socket.io/) and `fs.watch` or `fs.watchFile` so changes to source files are updated dynamically.

The `lib/config.js` file must be edited to include a path to a suitable JavaScript project.

###Riloadr

[Riloadr](https://github.com/tubalmartin/riloadr) (License: _MIT_) by Túbal Martín is a cross-browser, framework-independent responsive image loader.  The library supports quite a few options, but basic usage involves specifying "breakpoints" for loading the right images based on the viewport's size:

{% highlight javascript %}
var group1 = new Riloadr({
  breakpoints: [
    { name: '320px', maxWidth: 320 }, // iPhone 3
    { name: '640px', maxWidth: 320, minDevicePixelRatio: 2 }, // iPhone 4 Retina display
    { name: '640px', minWidth: 321, maxWidth: 640 },
    { name: '1024px', minWidth: 641 }
  ]
});
{% endhighlight %}

As this example demonstrates, Riloadr is a useful library for supporting high-density displays.

> When Riloadr parses your `breakpoints` it mimics CSS behavior: Riloadr computes the browser's viewport width in CSS pixels, then traverses your breakpoints to find out the appropiate image size to load and makes use of your breakpoint names to get the correct `src` (image URL) to load the image.
