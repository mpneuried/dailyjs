---
layout: post
title: "Node Roundup: BinaryJS, Advice, Buildify, MaDGe"
author: "Alex Young"
categories: 
- node
- modules
- graphics
- binary
- websockets
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###BinaryJS

[BinaryJS](http://binaryjs.com/) (GitHub: [binaryjs / binaryjs](https://github.com/binaryjs/binaryjs), License: _MIT_, npm: [binaryjs](https://npmjs.org/package/binaryjs)) by Eric Zhang uses WebSocket to stream binary data.  The streams can be bidirectional, and is binary end-to-end.  This basically gives browsers something closer to TCP sockets, and allows multimedia data to be streamed.

The client-side portion works with Chrome, Firefox, Internet Explorer 10, and Safari's nightly builds.  The authors are working on supporting older browsers (presumably through Flash).

> BinaryJS employs `BinaryPack` a modified version of the MessagePack protocol. The Node.js server uses a modified version of the `ws` library enhanced to pass through the status of the socket buffer so adherence to Node.js Stream API is possible.

###Advice Functional Mixin

[Advice](https://github.com/PuerkitoBio/advice) (License: _MIT_, npm: [advice](https://npmjs.org/package/advice)) by Martin Angers is inspired by [Angus Croll's](https://gist.github.com/2864853) functional mixin example.  It can be used to modify an object with `after`, `before`, and `around` methods:

{% highlight javascript %}
var myObj = { fn: function() {} }
  , withAdvice = require('advice');

withAdvice.call(myObj)
myObj.before(fn, function() {
  // Things that should happen before fn
});

// the 'before' method will now run automatically
myObj.fn();
{% endhighlight %}

The author has kindly included thorough Mocha tests as well.

###Buildify

[Buildify](https://github.com/powmedia/buildify) (License: _MIT_, npm: [buildify](https://npmjs.org/package/buildify)) by Charles Davison is a build script API:

{% highlight javascript %}
var buildify = require('buildify');

buildify()
  .load('base.js')
  .concat(['part1.js', 'part2.js'])
  .wrap('../lib/template.js', { version: '1.0' })
  .save('../distribution/output.js')
  .uglify()
  .save('../distribution/output.min.js');
{% endhighlight %}

###MaDGe

[MaDGe](https://github.com/pahen/node-madge) (License: _MIT_, npm: [madge](https://npmjs.org/package/madge)) by Patrik Henningsson generates graphs based on CommonJS or AMD dependencies.  It can generate various output including text-based lists in the console, and PNGs using [Graphviz](http://www.graphviz.org/).  There are lots of commnad-line options, which can be loaded from a JSON file.

This example shows the result of using MaDGe with Express:

[![MaDGe/Express](/images/posts/express-madge-thumb.png)](/images/posts/express-madge.png)
