---
layout: post
title: "Node Roundup: Plunker, Mixr, FnQueue, timekeeper"
author: Alex Young
categories: 
- node
- modules
- testing
- mocking
- assets
- apps
- async
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

### Plunker

![Plunker](/images/posts/plunker.png)

[Plunker](http://plunker.no.de/) (GitHub: [ggoodman / stsh](https://github.com/ggoodman/stsh/), License: _MIT_) by Geoff Goodman is a web application for editing web snippets.  It's inspired by other popular services like [jsFiddle](http://jsfiddle.net/), but has Node source that you can fork, and has an interface more suited to editing multiple files.  It has all the obvious features like syntax highlighting, using the venerable [Ace](https://github.com/ajaxorg/ace) editor.  The interface has been built with Twitter's Bootstrap, so it also serves as an example of a Bootstrap web application.

There's a [public API for Plunker](http://plunker.no.de/documentation) which allows "plunks" to be created, updated, retrieved, and deleted.

### Mixr

[Mixr](https://github.com/arbarlow/mixr) (npm: _mixr_) by Alex Barlow is an Express compiler and pre-processor for client-side JavaScript and CSS.  It can also handle other formats like LESS and CoffeeScript.  To use Mixr, write client-side code in separate files, then include other files using comments:

{% highlight javascript %}
//= require lib/jquery.min.js
//= require main.js
//= require something.js.coffee
{% endhighlight %}

In this example, Mixr would automatically process the CoffeeScript file.

During development, it's possible to compile assets on each request:

{% highlight javascript %}
app.configure(function(){
  Mixr.addHelpers(app);
});

app.configure('development', function(){
  // Add Mixr routes for development mode only
  Mixr.addExpressRoutes(app);
});
{% endhighlight %}

Then during deployment, a compiled file can be generated with `./node_modules/mixr/bin/mixr compile`.

### FnQueue

[FnQueue](https://github.com/kilianc/node-fnqueue) (License: _MIT_, npm: _fnqueue_) by Kilian Ciuffolo is a utility for chaining functions:

{% highlight javascript %}
new FnQueue({
  // This will wait for 'searchSomething'
  funnyStuff: function(processSomething, callback) {
    callback(null, 'ciao!');
  },
  searchSomething: function(callback) {
    callback(err, results);
  },
}, function(err, data) {
    if (err) {
      throw(err);
    }

    console.log(data.searchSomething);
  }
});
{% endhighlight %}

If you want to read more about Node's wealth of control flow libraries, check out [New Control Flow Libraries](http://dailyjs.com/2012/02/20/new-flow-control-libraries/).

### timekeeper

I often find myself needing to travel time, so rather than hacking `Date` I'd prefer to use mocks through Veselin Todorov's [timekeeper](https://github.com/vesln/timekeeper) (License: _MIT_, npm: _timekeeper_) library.  Time can be frozen by using `timekeeper.freeze(date)`.  Once the normal passage of time is required, the fourth dimension can be corrected simply by calling `timekeeper.reset()`.

The only caveat is `setTimeout` and `setInteval` won't work as expected until `timekeeper.reset()` is called.
