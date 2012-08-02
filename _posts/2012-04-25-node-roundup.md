---
layout: post
title: "Node Roundup: node-webcl, node-webgl, node-glfw"
author: "Mikael Bourges-Sevenier"
categories: 
- node
- modules
- webgl
- webcl
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

Mikael Bourges-Sevenier has sent in three WebGL and WebCL modules that he's written for Node.  We'll resume our regularly scheduled Node Roundup posts next week!

###node-webcl

node-webcl (GitHub: [Motorola-Mobility / node-webcl](https://github.com/Motorola-Mobility/node-webcl), License: _BSD_, npm: [node-webcl](http://npmjs.org/package/node-webcl)) from Motorola Mobility is an implementation of the [Khronos WebCL working draft](https://cvs.khronos.org/svn/repos/registry/trunk/public/webcl/spec/latest/index.html) using Node.  It has been tested on Mac OS X 10.7 and Linux.  It should also work on Windows 7.  Its only dependency is node-webgl, another Node module that implements the WebGL standard.

The module contains various tests and sample applications to help developers leverage multiple CPU and GPU cores.  It is also used as a tool to develop experimental features that may or may not be in the WebCL standard.

Installing node-webcl with npm will fetch node-webgl and node-glfw. Since they rely on native libraries, make sure they're available:

* [freeimage](http://freeimage.sourceforge.net)
* [GLEW](http://glew.sourceforge.net/)
* [AntTweakBar](http://www.antisphere.com/Wiki/tools:anttweakbar)

There are more details in the project's readme.  [Intel's OpenCL SDK](http://software.intel.com/en-us/articles/vcsource-tools-opencl-sdk/) can also be installed as a pure WebCL implementation, and be sure to check you've got the latest drivers installed for your graphics card.

###node-webgl

node-webgl (GitHub: [mikeseven / node-webgl](https://github.com/mikeseven/node-webgl), License: _BSD_, npm: [node-webgl](http://npmjs.org/package/node-webgl)) is an implementation of the [Khronos WebGL specification](https://www.khronos.org/registry/webgl/specs/1.0/).  This is a fork of Tim Caswell's WebGL project that started life as [Blue GPU Lava](http://nodeknockout.com/teams/minimason) at Node Knockout.

This module allows WebGL applications originally created for browsers to run using Node on the desktop without modification. It provides support for DOM methods commonly used to create WebGL content.

Like node-webcl, this module has been tested with Mac OS X and Linux. It relies on GLEW, GLFW, and AntTweakBar.  Lots of samples have been included -- some show how to use AntTweakBar to create a compelling GUI.

###node-glfw

Finally, node-glfw (GitHub: [mikeseven / node-glfw](https://github.com/mikeseven/node-glfw), License: _BSD_, npm: [node-glfw](http://npmjs.org/package/node-glfw)) is a JavaScript wrapper around GLFW. This provides implementations, where possible, of WebGL methods on top of desktop OpenGL as well as a browser compliant event model.

Although this module will run on Node 0.6, at least 0.7.5 is recommended for the typed array support.  This module is intended as a platform-level binding -- node-webgl should be used to create OpenGL applications.
