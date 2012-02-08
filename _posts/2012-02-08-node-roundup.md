---
layout: post
title: "Node Roundup: 0.6.10, 0.7.3, Backbone.IO, Notes"
author: Alex Young
categories: 
- node
- modules
- fibers
- backbone.js
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

### 0.6.10, 0.7.3

[Node 0.6.10](http://blog.nodejs.org/2012/02/02/node-v0-6-10/) was released last week.  Of interest to Windows users is the following:

* Add npm msysgit bash shim to msi installer
* dgram: Implement udp multicast methods on Windows

Node [0.7.3](http://blog.nodejs.org/2012/02/07/node-v0-7-3/) has also been released.  This [reverts support for isolates](https://github.com/joyent/node/commit/74a8215a8699f89ee4b82ca616a4eafa3b11203b):

> It was decided that the performance benefits that isolates offer (faster spin-up
> times for worker processes, faster inter-worker communication, possibly a lower
> memory footprint) are not actual bottlenecks for most people and do not outweigh
> the potential stability issues and intrusive changes to the code base that
> first-class support for isolates requires.

Ben Noordhuis finishes the commit message with "Good bye, isolates. We hardly knew ye".  I couldn't find any discussions about this in the [nodejs-dev](http://groups.google.com/group/nodejs-dev/) group, but I noticed David Herron mention it here: [Good bye isolates, Node.js hardly knew ye](http://nodejs.davidherron.com/2012/02/good-bye-isolates-nodejs-hardly-knew-ye.html).

### Backbone.IO

[Backbone.IO](https://github.com/scttnlsn/backbone.io) (License: _MIT_, npm: _backbone.io_) by Scott Nelson is a [Backbone.js](http://documentcloud.github.com/backbone/) module that can synchronise multiple clients.  When a model is synced, the server-side code will trigger events on collections across multiple clients.

The server-side code uses a Connect-inspired middleware API.  Notice the familiar signature:

{% highlight javascript %}
var backend = backboneio.createBackend();

backend.use(function(req, res, next) {
    console.log(req.backend);
    console.log(req.method);
    console.log(JSON.stringify(req.model));
    next();
});

backend.use(backboneio.middleware.memoryStore());
{% endhighlight %}

Scott has included tests as well, which are built using [Mocha](http://visionmedia.github.com/mocha/) and [Sinon](https://github.com/cjohansen/Sinon.JS).

### Notes

[Notes](https://github.com/olegp/notes) by Oleg Podsechin is an example app built using his [Common Node](http://olegp.github.com/common-node/) and [Mongo Sync](https://github.com/olegp/mongo-sync/) libraries.  This is an effort to bring traditional declarative synchronous code to Node through [node-fibers](https://github.com/laverdet/node-fibers).

Here's a taster:

{% highlight javascript %}
// Get an array of notes
mongo.db('notes').getCollection('notes').find().toArray();

// Save a note
mongo.db('notes').getCollection('notes').save({ name: request.params.name });
{% endhighlight %}



