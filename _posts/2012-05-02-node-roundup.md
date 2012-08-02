---
layout: post
title: "Node Roundup: 0.6.16, Node WebKit Agent, URLify, crud-bones, frontail"
author: "Alex Young"
categories: 
- node
- modules
- unix
- url
- webkit
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Node 0.6.16

The latest stable release of Node is out: [0.6.16](http://blog.nodejs.org/2012/04/30/version-0-6-16-stable/).  V8 has been upgraded to 3.6.6.25, and there are improvements for each platform.

Dave Pacheco also posted about [profiling Node with DTrace](http://blog.nodejs.org/2012/04/25/profiling-node-js/), but be forewarned that this is probably only useful if you're able to run code on OpenSolaris-derived [illumos](http://wiki.illumos.org/display/illumos/illumos+Home) systems.  I actually use DTrace in Mac OS for debugging things that aren't related to Node, but Dave notes that this won't work due to the lack of ustack helpers, and invites readers to contact Apple about this:

> OS X supports DTrace, but not ustack helpers. The way to get this changed is to contact your Apple developer liason (if you're lucky enough to have one) or file a bug report at bugreport.apple.com. I'd suggest referencing existing bugs 5273057 and 11206497. More bugs filed (even if closed as dups) show more interest and make it more likely Apple will choose to fix this.

###Node WebKit Agent

[Node WebKit Agent](https://github.com/c4milo/node-webkit-agent) (npm: [webkit-devtools-agent](http://npmjs.org/package/webkit-devtools-agent)) by Camilo Aguilar is an implementation of the [Chrome developer tools protocol](https://developers.google.com/chrome-developer-tools/docs/protocol/1.0/).  This allows WebKit browsers to debug Node applications, which includes profiling, a console, and network monitoring.

A related project that I've used a few times is [Node Inspector](https://github.com/dannycoates/node-inspector).

###URLify

[URLify](https://github.com/Gottox/node-urlify) (License: _MIT_, npm: [urlify](http://npmjs.org/package/urlify)) by Enno Boland helps convert UTF-8 strings to ASCII that's safe to use as a readable URL segment.  For example:

{% highlight javascript %}
var urlify = require('urlify').create({
  spaces: '_'
, nonPrintable: '_'
, trim: true
});

urlify('竹取物語 Taketori Monogatari');
// Taketori_Monogatari
{% endhighlight %}

###crud-bones

[crud-bones](http://words.alexeypro.com/crud-bones/) (GitHub: [alexeypro / crud-bones](https://github.com/alexeypro/crud-bones)) by Alexey Prohorenko is a boilerplate for Express-based apps that use MySQL, Mongo, or Redis.  He's also dotCloud and Heroku deployment instructions.

###frontail

![frontail](/images/posts/frontail.png)

[frontail](https://github.com/mthenw/frontail) (License: _MIT_, npm: [frontail](http://npmjs.org/package/frontail)) by Maciej Winnicki is a WebSocket-based `tail`-inspired utility for watching logs.  Imagine a version of `tail` that runs a little web server instead of writing to standard IO.  It has some command-line options as well -- for example, `-n <number>` will control how many lines are printed when it starts up.
