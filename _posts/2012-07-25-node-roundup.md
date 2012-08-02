---
layout: post
title: "Node Roundup: Node 0.9.0, ttycast, Simba"
author: "Alex Young"
categories: 
- node
- modules
- terminal
- config
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Node 0.9.0

[Node 0.9.0](http://blog.nodejs.org/2012/07/20/version-0-9-0-unstable/) is out, and this marks the first in the 0.9 series of unstable releases.  In the recent commits there's been an [interesting discussion about uncaughtException](https://github.com/joyent/node/commit/e8af3405574dfee2cb8c11bf27195b774332db96):

> So if `uncaughtException` may be removed in the future, does that mean every node.js process will have at least 1 domain?

[Node 0.8.3](http://blog.nodejs.org/2012/07/19/node-v0-8-3-stable/) is the latest addition to the stable line, and this release adds a lot of fixes:

* net: fix `net.Server.listen({fd:x})` error reporting (Ben Noordhuis)
* net: fix bogus errno reporting (Ben Noordhuis)
* build: fix add-on loading on freebsd (Ben Noordhuis)
* build: fix spurious mksnapshot crashes for good (Ben Noordhuis)
* domain: Fix memory leak on error (isaacs)
* events: Fix memory leak from `removeAllListeners` (Nathan Rajlich)
* zlib: Fix memory leak in `Unzip` class. (isaacs)
* crypto: Fix memory leak in `DecipherUpdate()` (Ben Noordhuis)

###ttycast

![ttycast](/images/posts/ttycast.png)

[ttycast](http://me.dt.in.th/page/ttycast) (GitHub: [dtinth / ttycast](https://github.com/dtinth/ttycast), License: _MIT_, npm: [ttycast](http://npmjs.org/package/ttycast)) by Thai Pangsakulyanont is a terminal-to-web broadcasting utility built with [ttyrec](http://0xcc.net/ttyrec/index.html.en), Connect, and [Socket.IO](http://socket.io/).

Once ttyrec and ttycast are installed, activity within a terminal can be viewed through a browser.  The author has written up some tips on how to do this over SSH.

I tried it out, but I had a problem running it due to a Connect version issue.  I've let the author know through GitHub so hopefully it'll work out of the box fairly soon.

###Simba

[Simba](https://github.com/cbou/simba.js) (License: _MIT_, npm: [simba](http://npmjs.org/package/simba)) by Charles Bourasseau is a configuration management module:

{% highlight javascript %}
simba
  .add('db')
  .children() 
    .add('host', 'localhost')
    .add('port')
    .add('username')
    .add('password')
  .end();

console.log(simba.get('db').get('host')); // 'localhost'
{% endhighlight %}

There is full [documentation available for Simba](https://github.com/cbou/simba.js/blob/master/doc/api.md) that explains some of the underlying concepts and each API method.
