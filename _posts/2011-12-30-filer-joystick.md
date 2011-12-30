---
layout: post
title: "Meincraft, Virtual Joystick, Filer.js"
author: Alex Young
categories: 
- html5
- filesystem
- libraries
- webgl
---

### Meincraft

![Meincraft screenshot](/images/posts/meincraft.jpg)

[Meincraft](http://dev.pocoo.org/~mitsuhiko/webglmc/) (GitHub: [mitsuhiko / webgl-meincraft](https://github.com/mitsuhiko/webgl-meincraft), License: _BSD_) by Armin Ronacher a WebGL demo that generates terrain and allows navigation with its own camera implementation.

It's currently a simple personal project rather than a fully-fledged web-based Minecraft engine, similar to the [three.js Minecraft demo](http://mrdoob.github.com/three.js/examples/webgl_geometry_minecraft_ao.html), but it's an interesting start and different to the other WebGL Minecraft clones that I've found so far.

### Virtual Joystick

[Let's Make a 3D Game: Virtual Joystick](http://learningthreejs.com/blog/2011/12/26/let-s-make-a-3d-game-virtual-joystick/) by Jerome Etienne is a tutorial on his [virtualjoystick.js](https://github.com/jeromeetienne/virtualjoystick.js) project which provides a joystick suitable for use with touchscreens.  It works a lot like the joysticks seen in many iOS and Android games.

The tutorial post includes a demo, and it even works with a mouse.  The basic API is simply `var joystick = new VirtualJoystick()`.

### Filer.js

[Filer.js](http://ericbidelman.tumblr.com/post/14866798359/introducing-filer-js) (GitHub: [ebidel / filer.js](https://github.com/ebidel/filer.js), License: _Apache 2.0_) by Eric Bidelman is a friendly API for the HTML5 FileSystem API based around Unix commands.  Most commands are asynchronous and expect a callback:

{% highlight javascript %}
var filer = new Filer();
filer.init({size: 1024 * 1024}, onInit.bind(filer), onError);

function onInit(fs) {
  filer.ls('/', function(entries) {
    // entries is an Array of file/directories in the root folder.
  }, onError);
}

function onError(e) { ... }
{% endhighlight %}

That example lists a directory.  Other familiar commands include `cd`, `create`, `mkdir`, `rm`, `cp`, `mv`, `open`, and `write`.  Each API method is documented in the project's README file in the repository.
