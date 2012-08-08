---
layout: post
title: "Node Roundup: Node 0.8.6, Axon, NextFlow"
author: "Alex Young"
categories: 
- node
- modules
- async
- pubsub
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Node 0.8.6

[Node 0.8.6](http://blog.nodejs.org/2012/08/07/node-v0-8-6-stable/) is out, and this release is the first to include binary distributions for all supported Unix systems.

The 0.6 series has also been updated, with the release of [0.6.21](http://blog.nodejs.org/2012/08/03/node-v0-6-21-maintenance/).  This release fixes a bug in `fs.watch` that affected Solaris.

###Axon

[Axon](https://github.com/visionmedia/axon) (License: _MIT_, npm: [axon](https://npmjs.org/package/axon)) by TJ Holowaychuk is a zeromq-inspired message-oriented socket library.  It uses the push/pull and publish/subscribe patterns, and features a lightweight wire protocol that supports binary messages.

Axon is JavaScript, so it might work well in situations where a messaging system is desired but additional software installation is not.  The API is friendly for Node developers, particularly the `EmitterSocket` object which behaves like Node's `EventEmitter`.

TJ has included information on the protocol and some rough benchmarks.

###NextFlow

[NextFlow](https://github.com/jprichardson/node-nextflow) (License: _MIT_, npm: [nextflow](https://npmjs.org/package/nextflow)) by JP Richardson is a control flow library for Node that has a CoffeeScript-friendly API.  Rather than using a chainable API or a list of arguments, NextFlow accepts an object:

{% highlight coffeescript %}
next = require('nextflow')

vals = []
x = 0

next flow =
  1: ->
    vals.push(1)
    @next()
  2: ->
    vals.push(2)
    x = Math.random()
    @next(x)
  3: (num) ->
    vals.push(num)
    @next()
  4: ->
    vals.push(4)
    @next()
  5: ->
    console.log vals[0] #is 1
    console.log vals[1] #is 2
    console.log vals[2] #is x
    console.log vals[3] #is 4
{% endhighlight %}

The author has included CoffeeScript comparisons with well-known Node control flow libraries.
