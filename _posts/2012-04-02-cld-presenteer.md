---
layout: post
title: "cld.js, Presenteer.js, Algorithmic MochiKit Extensions"
author: Alex Young
categories: 
- node
- language
- libraries
- jquery
- MochiKit
---

###cld.js
[cld.js](https://github.com/jaukia/cld-js) (License: _BSD_) by Janne Aukia is a language detection library, ported from the [Compact Language Detector](http://src.chromium.org/svn/trunk/src/third_party/cld/) in Chromium using [Emscripten](http://emscripten.org/).  It should work in Node and browsers, and has a simple API for detecting languages:

{% highlight javascript %}
var cld = require('./cld-min.js');

console.log('Language:', cld.detectLanguage('上'));
// Chinese
console.log('Language:', cld.detectLanguage('上か'));
// Japanese
{% endhighlight %}

###Presenteer.js

[Presenteer.js](http://willemmulder.github.com/Presenteer.js/) (GitHub: [willemmulder / Presenteer.js](https://github.com/willemmulder/Presenteer.js), License: _CC BY-SA 3.0_) by Willem Mulder is a presentation library that's based around a class that applies CSS3 transforms and transitions to a set of elements:

{% highlight javascript %}
var presentation = new Presenteer('#presentation', $('#presentation > div'));
{% endhighlight %}

The `presentation` instance can then be interacted with using the mouse, or programatically with methods like `presentation.start()` and `presentation.next()`.  The nice thing about this API is multiple presentations can be displayed on a page.

###Algorithmic MochiKit Extensions

Fredrik Blomqvist sent in his [functional programming extensions for MochiKit](http://blq.github.com/mochikit/doc/html/MochiKit/Base-ext.html).  It includes an alternative `bind` method inspired by the one in the Boost C++ library that supports placeholder arguments.  Other methods have also been extended to include placeholder arguments.

Fredrik has written several other MochiKit modules, inspired by Python:

* [Bisect](http://blq.github.com/mochikit/doc/html/MochiKit/Bisect.html) -- Array bisection
* [HeapQ](http://blq.github.com/mochikit/doc/html/MochiKit/HeapQ.html) -- Priority queue implementation
* [Iterator extensions](http://blq.github.com/mochikit/doc/html/MochiKit/Iter-ext.html) -- More iterator methods
* [Random](http://blq.github.com/mochikit/doc/html/MochiKit/Random.html) -- Random numbers and related algorithms

