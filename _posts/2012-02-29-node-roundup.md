---
layout: post
title: "Node Roundup: Shrinkwrap, Connect 2.0, ClientSide, Pretty-Data, Clusterhub, Introspect"
author: Alex Young
categories: 
- node
- modules
- connect
- npm
- scaling
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

### Shrinkwrap

As of version 1.1.2, npm has a new feature called [shrinkwrap](http://blog.nodejs.org/2012/02/27/managing-node-js-dependencies-with-shrinkwrap/).  This allows dependencies to be locked down across the full module hierarchy.  Running `npm shrinkwrap` will generate a `npm-shrinkwrap.json` file that contains the exact version of everything installed in `node_modules/`.

This makes deploying Node apps easier to manage, because new releases of installed modules can (and probably will) be released during development.

Dave Pacheco had some interesting things to say about how Joyent use Node as part of this feature's announcement:

> It's not exactly news that Joyent is heavy on Node. Node is the heart of our
> SmartDataCenter (SDC) product, whose public-facing web portal, public API, Cloud
> Analytics, provisioning, billing, heartbeating, and other services are all
> implemented in Node. That's why it's so important to us to have robust
> components (like logging and REST) and tools for understanding production
> failures post mortem, profile Node apps in production, and now managing Node
> dependencies.

### Connect 2.0

TJ Holowaychuk has announced the release of [Connect 2.0](http://tjholowaychuk.com/post/18418627138/connect-2-0) (GitHub: [senchalabs / connect](https://github.com/senchalabs/Connect), License: _MIT_, npm: _connect_).  The [Connect documentation](http://www.senchalabs.org/connect/) is now much improved, and tests have been rewritten to use [Mocha](http://visionmedia.github.com/mocha/).

New features include:

* `cookieSession()` middleware for cookie-only sessions
* `compress()` middleware for gzip / deflate support
* `json()` middleware for parsing `application/json`

One major change is `connect()`, which replaces `connect.createServer()`:

{% highlight javascript %}
var connect = require('connect')
  , http = require('http')
  , https = require('https');

var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static('public'))
  .use(function(req, res){
    res.end('hello world\n');
  })

http.createServer(app).listen(80);
https.createServer(tlsOptions, app).listen(443);
{% endhighlight %}

TJ notes that previous versions of Connect used a `connect.Server` object that inherited from `net.Server`.  The newer `connect()` method simply returns a `Function`, which can be used with `http.createServer()` or `https.createServer()`, thereby simplifying supporting both HTTP and HTTPS.

### ClientSide

[ClientSide](http://projects.jga.me/clientside/) (GitHub: [jgallen23 / clientside](https://github.com/jgallen23/clientside), npm: _clientside_) by Greg Allen is a command-line tool for packaging client-side code from scripts that use CommonJS modules.  It can read a `package.json` to determine how your library is structured.

The author is planning to write Connect middleware, and has shipped the project with thorough Mocha/Chai tests.

### Pretty-Data

[Pretty-Data](http://www.eslinstructor.net/pretty-data/) (GitHub: [vkiryukhin / pretty-data](https://github.com/vkiryukhin/pretty-data), License: _MIT/GPL_, npm: _pretty-data_) by Vadim Kiryukhin can beautify or minify JSON, CSS, and XML.  Rather than using existing libraries, the author has opted to use his own regular expression-based parsing.  This reduces the module's dependencies, so if you're looking for something lightweight, it might fit the bill.

The project's site also has live demos that show off the library's main features with data from sources like Yahoo! Weather and Google's minified CSS.

### Clusterhub

[Clusterhub](https://github.com/fent/clusterhub) (License: _MIT_, npm: _clusterhub_) by Roly Fentanes is a bit like interprocess communication for Node:

{% highlight javascript %}
var cluster = require('cluster')
  , numCPUs = require('os').cpus().length
  , hub = require('clusterhub');

if (cluster.isMaster) {
  // Fork workers
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

} else {
  hub.on('event', function(data) {
    // Do something with `data`
  });

  // Emit event to all workers
  hub.emit('event', { foo: 'bar' });
}
{% endhighlight %}

Each hub has an in-memory [EventVat](https://github.com/hij1nx/EventVat) key/value store.  Roly has written some example apps, including [clusterchat](https://github.com/fent/clusterchat).

If you're looking to get more out of a CPU by running several Node processes, then this looks like a simple but potentially fast option.  The author notes that the project is still experimental, but given that he's written some Mocha tests it should be relatively hackable.

### Introspect

[Introspect](https://github.com/kilianc/node-introspect) (License: _MIT_, npm: _introspect_) by Kilian Ciuffolo provides `Function` introspection:

{% highlight javascript %}
var introspect = require('introspect');

function fn(foo, bar, callback) {
  // function body
}

var arguments = introspect(fn);
console.log(arguments);
// [ 'foo', 'bar', 'callback' ]
{% endhighlight %}

Kilian has included benchmarks, tests written with [Vows](http://vowsjs.org/), and provided instructions on how to run them.
