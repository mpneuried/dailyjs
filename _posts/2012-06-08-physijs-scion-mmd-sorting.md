---
layout: post
title: "Physijs, SCION, mmd, Sorting"
author: Alex Young
categories: 
- libraries
- webgl
- physics
- SCXML
---

###Physijs Tutorial

![Physijs](/images/posts/physijs.png)

Jerome Etienne has written some introductory tutorials on physics and WebGL.  In [3D Physics With Three.js and Physijs](http://learningthreejs.com/blog/2012/06/05/3d-physics-with-three-js-and-physijs/), he discusses using [Physijs](http://chandlerprall.github.com/Physijs/) with his [tQuery](https://github.com/jeromeetienne/tquery) project.

The tutorial includes creating a world with lighting, textures, object spawning, and using collision events.

###SCION

[SCION](https://github.com/jbeard4/SCION) (License: _Apache 2_, npm: [scion](http://npmjs.org/package/scion)) by Jacob Beard is an implementation of [State Chart XML (SCXML)](http://www.w3.org/TR/scxml/).

> SCXML provides a declarative markup for Statecharts, a powerful modelling language for developing complex, timed, reactive, state-based systems, and can offer elegant solutions to many problems faced in development of JavaScript-based applications across various domains.

The project's documentation demonstrates how to use SCXML to implement drag and drop in browsers using XML.  SCION can load this XML with `scion.urlToModel`, then interpret it and connect the relevant event listeners  in an asynchronous callback.  The project also works with Rhino 1.7R3.

###mmd

[mmd](https://github.com/alexlawrence/mmd) by Alex Lawrence is a small patch to enable AMD modules to function when an AMD implementation isn't available (or perhaps desired).  When the author sent us this project he lamented the fact it's 143 characters long -- three characters over a tweet's limit.

Can anyone make it shorter?

###Sorting - We're Doing It Wrong

Rodney Rehm has written a detailed guide to sorting in JavaScript: [Sorting - We're Doing It Wrong](http://blog.rodneyrehm.de/archives/14-Sorting-Were-Doing-It-Wrong.html).  He covers sorting different types, sorting strings, sorting DOM elements, boosting jQuery's performance, and more besides.

The post has some interesting comments about the finer points raised in the article, and Rodney has included some benchmarks on jsPerf.
