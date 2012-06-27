---
layout: post
title: "Node Roundup: 0.8, ES6 Modules, Kapitalize, Avatars.io"
author: "Alex Young"
categories: 
- node
- modules
- bitcoin
- images
- apis
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Node 0.8

Node 0.8 has been released, and Isaac Schlueter has written up a detailed post with some impressive benchmarks: [Node v0.8.0](http://blog.nodejs.org/2012/06/25/node-v0-8-0/).  In terms of compatibility, reports from the community seem positive so far.  As always, keeping an eye on the [nodejs Google Group](http://groups.google.com/group/nodejs) is a wise idea to gauge potential issues.

As I've been researching material for the [Windows and Node](http://dailyjs.com/tags.html#windows-and-node) series, I'm excited about the future of cross-platform addons:

> GYP was used already in Node v0.6 to build on Windows, but now it defines the build on all platforms. Node is still in the process of migrating external addon modules to GYP, and node-gyp is included with npm. In future releases, node-waf will be officially deprecated.

The REPL has been improved -- long lines now wrap correctly, and built-in modules are automatically loaded without needing a `require`.  For example, typing `net` will automatically return the net module.  There's no magic to this, [repl.js now defines a list of built-in modules](https://github.com/joyent/node/blob/v0.8/lib/repl.js#L72-75) that are [automatically loaded](https://github.com/joyent/node/blob/v0.8/lib/repl.js#L225-226) when a command matches one.

[Work has already started on 0.9](https://github.com/joyent/node/commit/42ea37afb2b6e8cf6cd2aad36b7106be87e89e4a), and Isaac mentions the long talked about HTTP refactoring.  However, 0.6 releases will continue to the end of 2012, so don't fret if you're still heavily invested in 0.6.

###ES6 Modules: A Simpler Proposal

The [ECMAScript Modules Proposal](http://wiki.ecmascript.org/doku.php?id=harmony:modules) represents a major point of contention in the JavaScript community.  Frustrated at discussing it in 140 characters, Isaac Schlueter finally wrote what he really thinks of it all in [On ES 6 Modules](http://blog.izs.me/post/25906678790/on-es-6-modules).

> This isn't politics. We're not voting for parties. The goal is to figure out the best API, which is a complex thing. The solution space is wide, and it is naive to reduce it to a boolean prematurely.

The discussion is ongoing, but Brendan Eich responded directly here: [ES Modules: suggestions for improvement](https://mail.mozilla.org/pipermail/es-discuss/2012-June/023760.html)

> Static module systems are static, in dependency prefetching, in binding, and in export vs. import checking.

###Kapitalize

[Kapitalize](https://github.com/Weltschmerz/Kapitalize) (License: _MIT_, npm: [kapitalize](http://search.npmjs.org/#/kapitalize)) is a Bitcoin client that has a chainable API and supports [the Bitcoin API](https://en.bitcoin.it/wiki/Original_Bitcoin_client/API_Calls_list).

{% highlight javascript %}
var kapitalize = require('kapitalize')()

kapitalize
.auth('Macintyre', 'mypassword')
.set('host', '127.0.0.1')
.set({
    port:8332
})
.getNewAddress()
.getBalance()
{% endhighlight %}

The module includes tests, and documentation can be found in the readme.

###Avatars.io

[Avatars.io](http://avatars.io/) is a new service that makes avatars easier to work with for developers.  The [Avatars.io client library](https://github.com/chute/avatars-io-node) (License: _MIT_, npm: [avatars.io](http://search.npmjs.org/#/avatars.io)) by Vadim Demedes is a Node module that works with this service:

{% highlight javascript %}
AvatarsIO.upload('path/to/image.jpg', function(err, url) {
  // url is a URL of just uploaded avatar
});
{% endhighlight %}

On a related note, [Chute](https://github.com/chute/chute-node) (npm: [chute](http://search.npmjs.org/#/chute)) by the same author is a client for [Chute](http://getchute.com/), which allows sets of photos to be uploaded and managed using a simple API.
