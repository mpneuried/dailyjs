---
layout: post
title: "Node Roundup: express-soap2json, cb, ApiServer"
author: "Alex Young"
categories: 
- node
- modules
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###express-soap2json

SOAP might not be the most exciting technology to work with, but if you like Node and Express then [express-soap2json](https://github.com/tonyskn/express-soap2json) (License: _MIT_, npm: [express-soap2json](http://npmjs.org/package/express-soap2json)) by Tony Sokhon can make it a little bit easier to work with.

By wrapping around a SOAP service, express-soap2json creates a JSON/HTTP proxy.  It's built using the [soap](https://github.com/milewise/node-soap) module by Vinay Pulim.  Tony has included some Mocha tests, and the README has some basic documentation.

###An Alternative to Node's `console.time`

In [A Powerful Alternative to Node's console.time()](http://nodetime.com/blog/powerful-alternative-to-nodes-console-time), Dmitri Melikyan discusses using his [Nodetime](http://nodetime.com/) profiler in place of `console.time` and `console.timeEnd`.

> What if you want to know more about what happens in-between, say CPU time or other nested network of file operations in microsecods precision?

###cb

[cb](https://github.com/jmar777/cb) (License: _MIT_, npm: [cb](http://npmjs.org/package/cb)) by Jeremy Martin is yet another control flow library.  Or is it?

> Not exactly. There are literally hundreds of libraries available for easing some of the pains associated with the continuation passing style, and most of them do a pretty good job at this.  

> Rather than compete with these libraries, `cb()` focuses on a much narrower range of problems, and is intended to be complementary to your control flow library (or lack thereof) of choice.

It features timeout and error handling with a chainable API, so the following is possible:

{% highlight javascript %}
var cb = require('cb')
  , fs = require('fs');

fs.readFile(
  '/usr/share/dict/words'
, 'utf8'
, cb(console.log)
    .error(console.error)
    .timeout(50)
    .once()
);
{% endhighlight %}

###ApiServer

[ApiServer](http://kilianc.github.com/node-apiserver/) (GitHub: [kilianc / node-apiserver](https://github.com/kilianc/node-apiserver), License: _MIT_, npm: [apiserver](http://npmjs.org/package/apiserver)) by Kilian Ciuffolo is a modular framework that's a bit like [Restify](http://mcavage.github.com/node-restify/), but can also be used to make Express-style web applications.  Kilian has written his own comparisons with Express and Restify, and it's compatible with Express middleware even though it's not built with Connect.

The routing module, [apiserver-router](https://github.com/kilianc/node-apiserver-router), features a caching system, and applications are built using objects.  These objects are known as modules, and each method is an API endpoint.  It works with plain objects and prototype classes -- classes are ideal if the module has a state (Kilian's example passes in a database reference).

The author has also included a Mocha test suite, and the documentation is pretty solid too.
