---
layout: post
title: "tQuery, Catchall, Geometry.js"
author: Alex Young
categories: 
- webgl
- errors
- games
- mathematics
---

### tQuery Valentine's Day Card

Jerome Etienne, WebGL experimenter and author of the [Learning Three.js](http://learningthreejs.com/) blog, recently published [a WebGL Valentine's Day card tutorial](http://learningthreejs.com/blog/2012/02/15/valentine-card-in-tquery/) which demonstrates his new library, [tQuery](https://github.com/jeromeetienne/tquery) (License: _MIT_).  While development on tQuery is still ongoing, it provides a friendly alternative API for WebGL based around chainable calls:

{% highlight javascript %}
tQuery.createText('tQuery is fun!').addTo(world);

tQuery.createShape()
  .moveTo(0, 0)
  .lineTo(1, 1)
  .lineTo(-1, 1)
  .lineTo(0, 0);
{% endhighlight %}

As a JavaScript developer, this API appeals to me and results in some surprisingly concise code.  The tutorial also includes a screencast which covers the methods used by the Valentine's Day card example in detail.

### Catchall

[Catchall](https://github.com/crcn/catchall) (License: _MIT_) by Craig Condon is an alternative to [window.onerror](https://developer.mozilla.org/en/DOM/window.onerror) created to aid development by catching all exceptions.  To do this, all functions are wrapped, which is why the author recommends using it during development and testing only.

Connect middleware is also included, which allows arbitrary scripts to be wrapped by the `catchall` module.  The project's API allows strings of code to be wrapped by using `catchall.wrap`, and `catchall.load` can be called on a source file URL or file system path:

{% highlight javascript %}
catchall.load('http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js', function(err, result) {
    //do something
});

catchall.load('/from/fs', function(err, result) {
    //do something
});
{% endhighlight %}

### Geometry.js

[Geometry.js](https://github.com/Nijikokun/Geometry.js) (License: _AOL_) by Nijiko Yonskai is a collection of geometry classes used by the author for game development.  The following classes are included: Circle, Direction, Rectangle, Vec2d.  The vector class in particular seems like something I've found myself writing and rewriting for various WebGL and game-related experiments.

The library includes a rich set of methods, and even aliases mathematical operators:

{% highlight javascript %}
var v1 = new Vec2d(10, 20)
  , v2 = new Vec2d(33, 10);

v1['+'](v2).x;
// 43
v1.add(v2).x;
// 43
v2.toArray();
// [33, 10]
Vec2d.Zero().toArray();
// [0, 0]
{% endhighlight %}

