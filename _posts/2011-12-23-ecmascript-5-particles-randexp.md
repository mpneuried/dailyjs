---
layout: post
title: "randexp.js, ECMAScript 5 Presentation, Online Editor for Sparks.js"
author: Alex Young
categories: 
- webgl
- slides
- ecmascript
- standards
---

### randexp.js

[randexp.js](http://fent.github.com/randexp.js/) (GitHub: [fent / randexp.js](https://github.com/fent/randexp.js), License: _MIT_, npm: _randexp_) by Roly Fentanes is a library for creating random strings based on a regular expression.  The resulting string will match the expression provided:

{% highlight javascript %}
require('randexp');
/hello+ (world|to you)/.gen
// => hellooooooooooooooooooo world
{% endhighlight %}

A more useful example might be generating a random date:

{% highlight javascript %}
new RegExp((January|February|March|April|May|June|July|August|September|October|November|December) ([1-9]|[12][0-9]|3[01]), (19|20)[0-9][0-9]).gen
// March 4, 2038
{% endhighlight %}

This could be a useful way to generate test data in unit tests.

The way the `RegExp` object is modified by this library goes against the grain a little bit, and using a getter to return values seems a little bit odd, so I've asked the author about the API design through GitHub.

### ECMAScript 5 Presentation

I don't usually post slides, because without the corresponding talk they're usually too hard to follow.  [ECMAScript 5 by Damian Wielgosik](http://www.slideshare.net/ferrantes/ecmascript-5-10575898) is a 150 slide presentation that introduces ECMAScript 5, and is relatively easy to follow if you don't mind pressing the right arrow key 150 times.

The majority of the slides are concerned with new methods on `Object`, and some patterns that make use of these new methods are explained.  Other areas covered include `Function.prototype.bind`, new `Array.prototype` methods, and strict mode.

### Particles: Online Editor for Sparks.js

![sparkseditor](/images/posts/sparkseditor.png)

[Particles: Online Editor for Sparks.js](http://learningthreejs.com/blog/2011/12/19/particles-online-editor-for-sparks-js/) is an introductory tutorial for [sparkseditor](http://jeromeetienne.github.com/sparkseditor/) (GitHub: [jeromeetienne / sparkseditor](https://github.com/jeromeetienne/sparkseditor), License: _MIT_) by Jerome Etienne which is a GUI editor for [Sparks.js](https://github.com/zz85/sparks.js/), a 3D JavaScript particle engine.

Press the "code" button to show the code used to generate the particle system.  The code can be edited, and the changes will be displayed in real time.  To share the results, press the "export" button.

A wide range of effects can be created with Sparks.js.  There are examples available at [jabtunes.com/labs/arabesque/](http://jabtunes.com/labs/arabesque/).
