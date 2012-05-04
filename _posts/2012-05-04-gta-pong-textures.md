---
layout: post
title: "WebGL GTA, 3D Pong, webgl-texture-utils"
author: Alex Young
categories: 
- webgl
- graphics
- libraries
- games
---

###WebGL GTA

![WebGL GTA](/images/posts/gta-webgl.png)

[WebGL GTA](http://experiments.hertzen.com/webgl-gta/index.html) (GitHub: [niklasvh / WebGL-GTA](https://github.com/niklasvh/WebGL-GTA), [Demo](http://niklasvh.github.com/WebGL-GTA/)) by Niklas von Hertzen is a WebGL interpretation of the original Grand Theft Auto.  It parses the game files and builds maps and game objects, all rendered with glorious WebGL.

There are a few glitches, but it's amazing how much the author has done while keeping the code relatively easy to follow.

###3D Pong

In [Augmented Reality 3D Pong](http://learningthreejs.com/blog/2012/05/02/augmented-reality-3d-pong/) by Jerome Etienne, a version of Pong is presented that works using a gesture-based interface.  There's a detailed screencast that explains the code here: [Augmented Reality 3D Pong Live Coding Screencast](http://www.youtube.com/watch?v=iunNd5lmAVE).  The actual code is here: [jeromeetienne / augmentedgesture.js](https://github.com/jeromeetienne/augmentedgesture.js/tree/master/examples/augmentedpong) -- take a look at the [index.html](https://github.com/jeromeetienne/augmentedgesture.js/blob/master/examples/augmentedpong/index.html) file to see the non-library part of the project.

###webgl-texture-utils

[webgl-texture-utils](https://github.com/toji/webgl-texture-utils) by Brandon Jones (the author of [TojiCode](http://blog.tojicode.com/)) is a set of WebGL texture libraries that can help with loading compressed formats.  The file format is inferred by the file extension, but can also be overridden.

It also includes support for the [crunch](http://code.google.com/p/crunch/) format:

> And yes, it does support DDS. The full list of supported formats is currently JPG, PNG, GIF, BMP, DDS, CRN (Crunch), and some TGAs. I don't actually advocate using TGAs in your WebGL apps, but I had the code available so why not?
