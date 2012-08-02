---
layout: post
title: "Node Roundup: NodeConf Resources, ErrorBoard, Override"
author: "Alex Young"
categories: 
- node
- modules
- apps
- express
- events
- middleware
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###NodeConf Resources

This week has been all about [NodeConf](http://www.nodeconf.com/), and I've been collecting resources for those of us who can't make it:

* [Ryan Dahl's slides](http://tinyclouds.org/nodeconf2012.pdf) about the early influences of Node
* [Isaac Schlueter's slides](http://t.co/G1IoKpB8) (Keynote, PDF mirror: [isaacs-nodeconf-2012.pdf](/images/posts/isaacs-nodeconf-2012.pdf))
* [Tim Caswell's talk and code](https://github.com/creationix/nodeconf2012), and [the most important slide](https://twitter.com/creationix/status/220213691268857857/photo/1)
* [Marco Rogers Steam API code samples](https://github.com/polotek/nodeconf-2012-streams-talk)
* [Rick Waldron's Arduino programming slides](https://dl.dropbox.com/u/3531958/nodeconf/index.html#/) and [a video of his robots powered by JavaScript](http://www.youtube.com/watch?v=GVGMjsKy3WQ)
* [Bert Belder's slides on libuv](http://www.2bs.nl/nodeconf2012/#1), or "the little library that could"
* [Max Ogden's slides on streams](http://imgur.com/a/9vFGa#0)
* [Russell Hay's slides on Node and SPI](https://www.dropbox.com/s/ff2k39ul5bs29e2/Node%20and%20SPI%20%28nodeconf2012%29.pdf)

The [Coverage of NodeConf 2012](http://lanyrd.com/2012/nodeconf/coverage/) on Lanyrd has more material.  That should be enough to get your teeth into!

###ErrorBoard

[ErrorBoard](https://github.com/Lapple/ErrorBoard) (License: _MIT_) by Aziz Yuldoshev is an open source Express application that collects client-side JavaScript errors.  The author has split the project up into routes and modules, rather than something that follows the popular MVC-inspired approach.  It uses MongoDB, and the interface is Bootstrap-based so it's fairly easy to modify.

###Override

[Override](https://github.com/olegp/override) (License: _MIT_, npm: [override](http://npmjs.org/package/override)) by Oleg Podsechin is a "general purpose middleware framework" -- that is, it extends the concept of middleware to processes, allowing self-contained environments to be composed that override standard behaviour.

> For example, Override modules make it possible to replace the built in `console.log` with a version that sends the logs to a third party service, chroot the current process, enable profiling, etc.

Override modules have a signature similar to other Node middleware APIs:

{% highlight javascript %}
module.exports = function(next) {
  console.log('Hello Override!');
  next();
};
{% endhighlight %}

The `next` parameter is the next function to call in the override middleware chain.  Oleg also recommends distributed reusable modules through npm, and prefixing the module's name with `or-` so they're easy to find.
