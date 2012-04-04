---
layout: post
title: "Node Roundup: Nodetime, Flow.js, Lox"
author: Alex Young
categories: 
- node
- modules
- authentication
- middleware
- express
- benchmarks
- async
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Nodetime

![Nodetime screenshot](/images/posts/nodetime.png)

[Nodetime](http://nodetime.com/) (GitHub: [dmelikyan / nodetime](https://github.com/dmelikyan/nodetime), License: _MIT_, npm: _nodetime_) by Dmitri Melikyan is an instrumentation service for profiling Node applications.

Once the `nodetime` module has been added to a project, running `require('nodetime').profile()` will cause it to start sending HTTP and database statistics to the Nodetime service:

> The Nodetime profiler running within the application securely sends profiling data to the Nodetime server, where it is stored and sent to the browser in real-time. Profiling data is kept on the server for 10 minutes.

It's also possible to avoid sending the profiling data to the server, by using `require('nodetime').profile({ stdout: true })`.

Nodetime is built on the author's [Timekit](https://github.com/dmelikyan/node-timekit) module, which adds some useful bindings to `gettimeofday` and `getrusage`.

###Flow.js

[Flow.js](https://github.com/it-ony/flow.js) (License: _MIT_, npm: _flow.js_) by Tony Findeisen is inspired by [Seq](https://github.com/substack/node-seq) and [Async.js](https://github.com/caolan/async), but is written from scratch rather than forking these projects.  It's based around the idea of creating 'flows' which can be executed synchronously or asynchronously.  Results can be collected from each operation, and callbacks are used to signal the completion of parallel methods:

{% highlight javascript %}
flow()
 .par({
    a: function() {
      return 123;
    },
    b: function(cb) {
      setTimeout(function(){
        cb(null, 'I completed after 100ms');
      }, 100);
    }
    // and even more
  })
  .exec(function(err, results) {
    console.log(results);
    // results.a: 123;
    // results.b: 'I completed after 100ms');
  });
{% endhighlight %}

This library uses the `.length` property of functions to determine if an argument has been supplied -- if so, the function is considered asynchronous.  Libraries like this benefit from the fact that functions in JavaScript are objects:

> Every function in JavaScript is actually a `Function` object.

Flow.js comes with tests written with Mocha.

-- [Function documentation at MDN](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function)

###Lox

[Lox](http://reaktivo.github.com/lox/) (GitHub: [reaktivo / lox](https://github.com/reaktivo/lox), License: _MIT_, npm: _lox_) by Marcel Miranda is a Mongoose-based authentication middleware library for Express, and includes tests written with Mocha.

The `lox` function itself takes a MongoDB connection URI string, and the result can be passed to `app.use`.  It needs suitable routes for managing users, but provides middleware for logging in and out:

{% highlight coffeescript %}
# Sign in
app.post '/login', lox.routes.login('/success_uri', '/fail_uri')

# Sign out
app.get '/logout', lox.routes.logout('/success_uri', '/fail_uri')
{% endhighlight %}

