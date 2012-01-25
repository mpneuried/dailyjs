---
layout: post
title: "Node Roundup: 0.6.8 and 0.7.1, Summit Coverage, Connect Router, Mongolian DeadBeef, AWS"
author: Alex Young
categories: 
- node
- modules
- express
- middleware
- mongo
- amazon
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

### Node 0.6.8 and 0.7.1

[Node 0.6.8](http://blog.nodejs.org/2012/01/19/node-v0-6-8/) is out.  V8 and npm are both updated in this release, and there are also numerous bug fixes including one for the cluster module and another for `fs.stat` in Windows.

Meanwhile, the unstable branch has been updated to [Node 0.7.1](http://blog.nodejs.org/2012/01/23/node-v0-7-1/).  I noticed that this brings V8 up to 3.8.8 which is the latest version in the [V8 Changelog](http://code.google.com/p/v8/source/browse/trunk/ChangeLog).  
### Node Summit Coverage

This week is the [Node Summit](http://nodesummit.com/), and David Herron has been writing up some detailed coverage at [nodejs.davidherron.com/](http://nodejs.davidherron.com/).  This includes talks from Microsoft, Yahoo, VMWare, and Heroku, so it's interesting stuff for anyone interested in Node, the cloud, and the near future of Node development.

> Node is a great fit for some applications, a terrible fit for others. There's a danger in the Node excitement to try and use Node to solve every problem. Hence, PAAS needs to be polyglot.

From [Node.js Summit: Platform as a Service](http://nodejs.davidherron.com/2012/01/nodejs-summit-platform-as-service.html).

### Connect Router

![Connect Router syntax diagram](/images/posts/craig-express-router.png)

[Connect Router](https://github.com/crcn/connect-router) (License: _MIT_, npm: _connect-router_) by Craig Condon is a unique take on routing in Express by using strings to express relationships between routes, HTTP methods, and middleware.  Routes can be loaded from a file or directory, making splitting up applications into logical groupings extremely easy.

The basic API looks like this:

{% highlight javascript %}
app.use(connectRouter(function(router) {
  router.on('parseBody', express.bodyParser());

  router.on('user/exists', function(req, res, next) {
    if (userExists(req.query.username)) {
      res.send('That username already exists');
      return;
    }
    next();
  });

  router.on('-method=POST parseBody -> user/exists -> signup', function(req, res, next) {
    res.send('Successfuly signed up ');
  });
}));
{% endhighlight %}

Notice that existing Express middleware can be applied to a router -- in this case `bodyParser` has been used.

Rather than using an API based around HTTP verbs, Craig's routers look like `EventEmitter` objects, and use a DSL to define what HTTP verbs should be applied.  Middleware can be triggered by listing it like this: `'user/exists -> signup'`.  Middleware can also be greedy, which is a convenient way of applying permissions to sets of routes.

### Mongolian DeadBeef

Have you always wanted a Node MongoDB driver that has the same API as MongoDB's shell?  It seems so obvious, yet it's tantalizingly hard to find such a module.  Oleg Podsechin said he's been using [Mongolian DeadBeef](https://github.com/marcello3d/node-mongolian) (License: _zlib_, npm: _mongolian_) by Marcello Bastéa-Forte and it looks like it does the job admirably.  It even includes GridFS support using streams.

Collections can be accessed using `db.collection()`, and then records can be found and inserted with familiar methods like `collection.insert()`, `collection.findOne()`, and `collection.find`.  It allows queries to be built up using chains, like this: `collection.find().limit(5).sort({ created: 1 })`.

### Amazon Web Services Node Library

It seems like Amazon are hell-bent on creating a service for everything in the universe.  How can a Node hacker take advantage of this?  Well, [aws-lib](https://github.com/livelycode/aws-lib) (License: _MIT_, npm: _aws-lib_) by Mirko Kiefer is an Amazon Web Services library that provides clients for EC2, Product Advertising API, SimpleDB, SQS, SNS, SES, and ELB.

The project is dubbed as "simple" but already seems fairly extensive.  Thanks to some recent Hacker News coverage it currently has 260 followers on GitHub.

