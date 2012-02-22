---
layout: post
title: "Node Roundup: Mongorito, Memcacher, Restify, Versionator, FeedSub"
author: Alex Young
categories: 
- node
- modules
- mongo
- rss
- feeds
- express
---

### Mongorito

[Mongorito](https://github.com/vdemedes/mongorito) (License: _MIT_, npm: _mongorito_) by Vadim Demedes is a new [MongoDB](http://www.mongodb.org/) ODM with some interesting features: it has built-in caching using [Memcacher](https://github.com/vdemedes/memcacher) (another module by the same author), and a small codebase by building on [Mongolian](https://github.com/marcello3d/node-mongolian).  Automatic caching can even be set up, simply by setting a Memcached host using `Mongorito.cache`.

Mongorito has a model class, and the author gives examples in both JavaScript and CoffeeScript:

{% highlight javascript %}
var Post = (function(){
  function Post() {
    Post.__super__.constructor.call(this, 'posts');
  }

  Post.prototype.validateTitle = function(callback) {
    if (!this.title) {
      callback(false);
    } else {
      callback(true);
    }
  }
})();

Post = Mongorito.bake(Post);

Post.find(function(err, posts){
  var length = posts.length;
  for (var i = 0; i < length; i++) {
    // posts[i] is an instance of the Post class
    posts[i].remove(function() {
    });
  }
});
{% endhighlight %}

The model definitions offer an alternative to [Mongoose](http://mongoosejs.com/), and may appeal to those working on CoffeeScript-based projects.

Despite being a new library, the author says the code is being used in production software, and he's written some [Mocha](http://visionmedia.github.com/mocha/) unit tests.

### Memcacher

[Memcacher](https://github.com/vdemedes/memcacher) (License: _MIT_, npm: _memcacher_) also by Vadim Demedes adds additional functionality to the [Memcached](https://github.com/3rd-Eden/node-memcached) module by Arnout Kazemier, in the form of tags and chainable methods:

{% highlight javascript %}
Client
  .set('test-key', 'value', 2592000, ['some-tag'])
  .get('test-key', function(err, value) {
    // This callback intentionally left blank
  });
{% endhighlight %}

It's a small but significant addition that should help those working with Memcached.

### Restify

[Restify](http://mcavage.github.com/node-restify/) (GitHub: [mcavage / node-restify](https://github.com/mcavage/node-restify), License: _MIT_, npm: _restify_) by Mark Cavage is a new Express-inspired framework for building REST APIs.  It includes both client and server support, so it'll consume REST services as well as serve them.

Creating a basic server and setting up middleware looks just like Express:

{% highlight javascript %}
var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
{% endhighlight %}

It made me wonder if it's Connect middleware compatible, because setting up routes looks the same as Express as well:

{% highlight javascript %}
server.get('/echo/:name', function(req, res, next) {
  res.send(req.params);
  return next();
});
{% endhighlight %}

There are a healthy amount of unit tests (built with the [tap](https://github.com/isaacs/node-tap) module), detailed documentation, and a [demo app](https://github.com/mcavage/node-restify/blob/master/examples/demo.js).

### Versionator

[Versionator](http://blog.clock.co.uk/2012/02/17/versionator-static-content-versioning-in-node-js-using-express/) (GitHub: [serby / versionator](https://github.com/serby/versionator), License: _New BSD_, npm: _versionator_) by Paul Serby is Connect middleware for managing static asset caching.  The basic middleware allows a global application version to be set, and adds an extra path to asset URLs so they'll effectively be expired when the app version changes:

{% highlight javascript %}
app.version = '0.1.0';
var basic = require('versionator').createBasic(app.version);

app.configure(function() {
  app.use(basic.middleware('v' + app.version))
    .use(express.static(__dirname + '/public', { maxAge: 2592000000 }));
});
{% endhighlight %}

Assuming a client-side script is at `/js/app.js`, it'll now be available from `/js/v0.1.0/app.js`.  There's a Jade helper so the original URL can be referenced in templates.

There's also 'mapped' middleware, which will only change resource locations when the files have changed.

### FeedSub

[FeedSub](https://github.com/fent/node-feedsub) (License: _MIT_, npm: _feedsub_) by Roly Fentanes is an event-based feed downloader, that works the way a Node developer would expect:

{% highlight javascript %}
var FeedSub = require('feedsub');

reader = new FeedSub('http://feeds.feedburner.com/dailyjs', {
  interval: 10 // check feed every 10 minutes
});

reader.on('item', function(item) {
  console.log('Got item!');
  console.dir(item);
});

reader.start();
{% endhighlight %}

It'll also do a conditional `GET` based on the last modified headers:

{% highlight javascript %}
// check headers for conditional get
if (res.headers['last-modified']) {
  self.getOpts['If-Modified-Since'] = res.headers['last-modified'];
}
if (res.headers.etag) {
  self.getOpts['If-None-Match'] = res.headers.etag;
}
{% endhighlight %}
