---
layout: post
title: "Flavors of JavaScript, 3D Events, LowKick"
author: Alex Young
categories: 
- webgl
- graphics
- language
- ECMAScript
- testing
---

### Different Flavors of JavaScript

In [Different flavors of JavaScript](http://laktek.com/2012/01/19/different-flavors-of-javascript/) by Lakshan Perera, ECMAScript, ES3, ES5, and ES.Next (Harmony) are explained.  Lakshan gives helpful links in context, like [es5.github.com](http://es5.github.com/), and gives hits on what browser support is available.

For related reading, I touched on some of these areas before in the [History of JavaScript](http://dailyjs.com/tags.html#hoj) series.

### DOM Events in 3D Space

[DOM Events in 3D Space](http://learningthreejs.com/blog/2012/01/17/dom-events-in-3d-space/) is a tutorial by Jerome Etienne that demonstrates how to use [threex.domevent.js](https://github.com/jeromeetienne/threex/blob/master/threex.domevent.js).  The [3D DOM event demo](http://jeromeetienne.github.com/threex/examples/threex.domevent/) shows how this works -- click on each teapot and different animations will be triggered.  `THREE.Ray` is used, in particular the `intersectScene` method, to determine if an event intersects an object.

Jerome has also recently published [Boilerplate Builder for Three.js](http://jeromeetienne.github.com/threejsboilerplatebuilder/) which allows a customised set of HTML, JavaScript, and CSS to be generated that includes everything needed to get started with three.js.

### LowKick

<a href="/images/posts/lowkick-large.png"><img src="/images/posts/lowkick.png" /></a>

[LowKick](https://github.com/azer/lowkick) by E. Azer Koçulu simplifies running tests in multiple JavaScript environments.  For example:

{% highlight sh %}
./bin/lowkick command ie6 test/config.json
{% endhighlight %}

This example, given suitable tools, will run tests in IE using VirtualBox.  Headless testing is documented in the project's readme, but it'll need a little bit of effort to get it working.

Other drivers can be used, or added through configuration files.  For example, LowKick comes with a Node driver, VirtualBox, and "virtualbox-ie".
