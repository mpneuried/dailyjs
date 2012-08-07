---
layout: post
title: "jQuery Roundup: AutobahnJS, Grid Builder, Best Ampersand"
author: Alex Young
categories: 
- jquery
- plugins
- libraries
- WebSocket
- ui
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###AutobahnJS

[AutobahnJS](http://autobahn.ws/js) (GitHub: [tavendo / AutobahnJS](https://github.com/tavendo/AutobahnJS), License: _MIT_) from Tavendo GmbH is a client library that implements the [The WebSocket Application Messaging Protocol (WAMP)](http://wamp.ws/).  The API is asynchronous and promise-based, so it can use jQuery's `Deferred` object or similar implementations.  Publish/Subscribe and RPC are both supported by the library.

The RPC API looks like this:

{% highlight javascript %}
// WAMP server
var wsuri = 'ws://localhost:9000';
ab.connect(wsuri,
  // WAMP session was established
  function(session) {
    // Asynchronous RPC, returns promise object
    session.call('http://example.com/simple/calc#add', 23, 7).then(
      // RPC success callback
      function(res) {
        console.log('got result:', res);
      },

      // RPC error callback
      function(error, desc) {
        console.log('error:', desc);
      }
    );
  },

  // WAMP session is gone
  function(code, reason) {
    console.log(reason);
  }
);
{% endhighlight %}

The authors have written tutorials for [Publish/Subscribe with AutobahnJS](http://autobahn.ws/js/tutorials/pubsub) and [RPC](http://autobahn.ws/js/tutorials/rpc).

###jQuerin Grid Builder

[jQuerin Grid Builder](http://jquer.in/builder.html) (GitHub: [kanakiyajay / jQuerin-grid-builder](https://github.com/kanakiyajay/jQuerin-grid-builder), License: _MIT/GPL_) by Jay Kanakiya is an interactive tool that generates HTML and CSS for grid-based layouts.

Attributes like `class` and `id` can be added to cells, and multiple levels of rows and columns can be created once you get the hang of the interface.

###Best Ampersand

[Best Ampersand](http://gmurphey.com/2012/07/19/jquery-plugin-best-ampersand.html) (GitHub: [gmurphey / jQuery.Best-Ampersand](https://github.com/gmurphey/jquery.best-ampersand), License: _MIT/GPL_) by Garrett Murphey is a simple plugin that wraps ampersands in spans so they can be styled [with the best available ampersand](http://simplebits.com/notebook/2008/08/14/ampersands-2/).  Garrett has written this plugin using a TDD approach, and he's included unit tests and the build script.

He also sent in [Outbound Analytics](http://gmurphey.com/2012/07/22/jquery-plugin-outbound-analytics.html), which can help track outbound links with Google Analytics.
