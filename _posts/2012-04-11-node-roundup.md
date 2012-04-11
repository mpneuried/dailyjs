---
layout: post
title: "Node Roundup: 0.6.15, node-inherit, Synchronize.js, jaded"
author: Alex Young
categories: 
- node
- modules
- jade
- templating
- thumbnails
- images
- async
- fibers
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Node 0.6.15

[Node 0.6.15](http://blog.nodejs.org/2012/04/09/version-0-6-15-stable/) is out.  It includes npm 1.1.16, and some platform-specific bug fixes for Windows and Mac OS.

###Thumbbot

[Thumbbot](http://vdemedes.github.com/thumbbot/) [GitHub: [vdemedes / thumbbot](https://github.com/vdemedes/thumbbot), License: _MIT_, npm: [thumbbot](http://search.npmjs.org/#/thumbbot)) by Vadim Demedes is a thumbnail generator API built with PhantomJS, ImageMagick, and ffmpeg.

The `Thumbbot` class is instantiated with a source and output file:

{% highlight coffeescript %}
bot = new Thumbbot 'video.mp4', 'video_thumb.png'
bot.set width: 200, height: 150
bot.set position: '00:05:04'
bot.snap (err) ->
    # done
{% endhighlight %}

The author has included Mocha tests, and various output formats are supported (png, jpg, gif).

###node-inherit

[node-inherit](https://github.com/dfilatov/node-inherit) (License: _MIT_, npm: [inherit](http://search.npmjs.org/#/inherit)) by Dmitry Filatov adds some sugar to help with class-like declarations, constructors, super calls, and static methods.

An inherited class looks like this:

{% highlight javascript %}
var B = inherit(A, {
    getProperty: function() {
      return this.property + ' of instanceB';
    },

    getType: function() {
      return this.__base() + 'B';
    }
  },

  staticMethod: function() {
    return this.__base() + ' of staticB';
  }
});
{% endhighlight %}

This example assumes a class called `A` -- notice how the `getType` method can access `A`'s `getType` using `this.__base`.  The full example can be viewed in the project's readme.

Dmitry has included some Nodeunit tests that also demonstrate the main features of the library.

###Synchronize.js

[Synchronize.js](http://alexeypetrushin.github.com/synchronize/docs/index.html) (GitHub: [alexeypetrushin / synchronize](https://github.com/alexeypetrushin/synchronize), License: _MIT_, npm: [synchronize](http://search.npmjs.org/#/synchronize)) by Alexey Petrushin is another library that's built on [fibers](https://github.com/laverdet/node-fibers) to attempt to "flatten" all of those pesky callbacks people like to talk about on Hacker News.

Existing methods can be wrapped with the `sync` method provided by the library:

{% highlight javascript %}
var sync = require('synchronize')
  , fs = require('fs');

fs.readFile_ = sync(fs.readFile);

sync.fiber(function() {
  var data = fs.readFile_(__filename, 'utf8');
  console.log(data);

  try {
    data = fs.readFile_('invalid', 'utf8');
  } catch (err) {
    console.log(err);
  }
});
{% endhighlight %}

Asynchronous methods can be used in a synchronous fashion within the `sync.fiber` callback.  Wrapped functions will behave as if `return` and `throw` were called synchronously.  The author has written Mocha tests, but the library itself is fairly small so it's not too hard to figure out how it uses fibers to wrap functions: [synchronize.js](https://github.com/alexeypetrushin/synchronize/blob/master/synchronize.js).

###jaded

[jaded](https://github.com/wearefractal/jaded) (License: _MIT_, npm: [jaded](http://search.npmjs.org/#/jaded)) from Fractal is an alternate command-line interface for Jade that includes AMD support:

{% highlight text %}
  Usage: jaded [options]

  Options:

    -h, --help            output usage information
    -V, --version         output the version number
    -i --input [folder]   Specify input folder
    -o --output [folder]  Specify output folder
    -d --development      Beautify output and insert line numbers
    -a --amd              Wrap output in AMD closure
{% endhighlight %}
