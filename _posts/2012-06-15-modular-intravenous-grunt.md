---
layout: post
title: "WebModular, Intravenous, Sindre's Grunt Tasks"
author: "Alex Young"
categories: 
- grunt
- audio
- libraries
---

###WebModular

![WebModular](/images/posts/webmodular.png)

[WebModular](http://www.g200kg.com/en/docs/webmodular/index.html) is a modular synthesiser built using JavaScript and the Web Audio API.  It's a bit like the [Google Doogle for Robert Moog's birthday](http://www.google.com/doodles/robert-moogs-78th-birthday), except it's a bit more powerful.  This synth includes a pair of VCOs, VCFs, VCAs, envelopes, LFOs, and a ring modulator.  It's also got a little mixer built-in, and a keyboard.  The keyboard has CV and gate outputs.

It's a mind-blowing piece of work, and makes me wonder if we'll ever see the likes of the Korg and Yamaha iOS apps ported to browsers.

###Intravenous

[Intravenous](http://royjacobs.github.com/intravenous/) (GitHub: [RoyJacobs / intravenous](https://github.com/RoyJacobs/intravenous), License: _MIT_, npm: [intravenous](http://npmjs.org/package/intravenous)) by Roy Jacobs is an inversion of control library for browsers and Node.  It's distributed as a CommonJS module, but it'll also work with AMD and in browsers without AMD.
The idea behind this library is to reduce coupling between components by using a system of containers that help manage object lifecycles and manage their relationships.  Containers can be nested, which seems like it would help manage objects in single page applications.

Containers are created, then services are registered with them, then classes can be defined along with their dependencies:
{% highlight javascript %}
var container = intravenous.create();
container.register('logger', loggerClass);
container.register('someGlobalData', { data: 'hello' });

function ExampleClass(logger, someGlobalData) {
  /* use logger here */
}

ExampleClass.$inject = ['logger', 'someGlobalData'];
container.register('ExampleClass', ExampleClass);
{% endhighlight %}

There's a lot more to it, but the author has written detailed examples in the project's documentation.

###Sindre's Grunt Tasks

Sindre Sorhus has been writing quite a few [Grunt](https://github.com/cowboy/grunt) tasks:

* [grunt-recess](https://github.com/sindresorhus/grunt-recess) -- lint and minify CSS or LESS using [Twitter's RECESS module](https://github.com/twitter/recess)
* [grunt-sass](https://github.com/sindresorhus/grunt-sass) -- Compile SASS and SCSS using libsass
* [grunt-sizediff](https://github.com/sindresorhus/grunt-sizediff) -- Show the difference between file sizes in the current git branch and a branch/commit
* [grunt-shell](https://github.com/sindresorhus/grunt-shell) -- Run shell commands
