---
layout: post
title: "Node Roundup: 0.7, Cromag, Servitude, Magician"
author: Alex Young
categories: 
- node
- modules
- date
- graphics
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

### Node 0.7

[Node 0.7.0](http://blog.nodejs.org/2012/01/16/node-v0-7-0-unstable/) was announced on the Node blog, which marks the first release of the new unstable series:

> Almost all users will want to remain using the stable v0.6 releases

This version includes experimental isolates support.  There's a lot of discussion on this in the [Node v0.7.0 nodejs group](http://groups.google.com/group/nodejs/browse_thread/thread/22db2d4e2711911d/6f7ef4fc5fdc49f3?#6f7ef4fc5fdc49f3) thread.  Ben Noordhuis gave a brief overview:

> Isolates are (will be) API-compatible with child processes. So you
> call `child_process.fork({thread:true})` and it will spawn a new isolate
> instead a new process.

Isolates are something that will crop up a lot more as Node heads towards 0.8, so it's worth being aware of what they are and how they work.

### Cromag

[Cromag](https://github.com/JerrySievert/cromagjs) (License: _MIT_, npm: _cromag_) by Jerry Sievert is named after the fact it doesn't use monkey patching, unlike a lot of date libraries.  We've recently seen some extremely solid date libraries, including [XDate](http://arshaw.com/xdate/), and Cromag is another offering with a different API.

Cromag currently offers a slew of methods to manipulate dates and times, which are documented in the [Cromag readme](https://github.com/JerrySievert/cromagjs/blob/master/README.md).  The author has also included tests written with [Vows](http://vowsjs.org/), so it should be fairly easy to hack and patch it.

### Servitude

[Servitude](http://legitimatesounding.com/blog/Servitude_CSS_and_JavaScript_Injection_Sugar.html) (GitHub: [JerrySievert / servitude](https://github.com/JerrySievert/servitude), License: _MIT/X11_, npm: _servitude_) also by Jerry Sievert, helps inject CSS and JavaScript into the DOM to cut down on requests.  It can also optionally cache requests and mangle them with Uglify.

Jerry's examples demonstrate Servitude being used with [Bricks](http://bricksjs.com/index.html) which is his Node web framework.  Servitude's plugin signature looks similar to Connect middleware, but I don't think Bricks uses the same API for the `request` and `response` objects.

### Magician

[Magician](https://github.com/vdemedes/magician) (License: _MIT_, npm: _magician_) by Vadim Demedes is an [ImageMagick](http://www.imagemagick.org/script/index.php) library.  The command-line ImageMagick libraries are required, but once they're installed lots of image manipulation tools are possible from within your Node applications.
