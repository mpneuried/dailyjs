---
layout: post
title: "New Control Flow Libraries"
author: Alex Young
categories: 
- node
- libraries
- async
---

There are a lot of control flow libraries for Node.  Most libraries seek to wrap more complex patterns like promises with a simpler API, and others place a unique emphasis on a particular aspect of control flow.  Some are the result of extracting generic functionality from another project, and others purport to be the next great 'async micro-framework'.

Here are some interesting new control flow libraries that I've been looking at recently.

### Nue

[Nue](https://github.com/nakamura-to/nue) (License: _MIT_, npm: _nue_) by Toshihiro Nakamura supports serial execution, nesting, error handling, and sharing data between functions through `this.data`:

{% highlight javascript %}
var flow = require('nue').flow
  , fs = require('fs')
  , myFlow;

myFlow = flow(
  function(file1, file2) {
    this.data.file1 = file1;
    this.data.file2 = file2;
    fs.readFile(file1, 'utf8', this.async());
    fs.readFile(file2, 'utf8', this.async());
  },
  function(data1, data2) {
    this.next(data1 + data2);
  },
  function(data) {
    if (this.err) throw this.err;
    console.log(data);
    console.log(this.data.file1 ' and ' + this.data.file2 ' are concatenated.');
    this.next();
  }
);

myFlow('file1', 'file2');
{% endhighlight %}

I liked the way the author's examples made each 'flow' a reusable function, rather than simply demonstrating that arbitrary asynchronous functions can be executed in series.  The API for Nue uses `this` quite a lot -- for example, `this.async` is used to accept the parameters for the next function and return a suitable callback.

The author has also written [Mocha](http://visionmedia.github.com/mocha/) tests.

### Batch

[Batch](https://github.com/visionmedia/batch) (License: _MIT_, npm: _batch_) by TJ Holowaychuk makes it easier to collect groups of results from asynchronous operations:

{% highlight javascript %}
var Batch = require('batch')
  , batch = new Batch;

ids.forEach(function(id) {
  batch.push(function(done) {
    User.get(id, done);
  });
});

batch.end(function(err, users) {
  // `users` now has all of the users that were loaded
});
{% endhighlight %}

Rather than using a promise, or enhancing `forEach`, TJ has opted to use an event-based API that should be familiar to Node developers.

### Cascade

[Cascade](https://github.com/scottrabin/cascade) (License: _MIT_, npm: _cascade_) by Scott Rabin allows nested callbacks to be flattened by passing an array of functions and their arguments to the `cascade` function:

{% highlight javascript %}
// Standard code
fs.rename('/tmp/hello', '/tmp/world', function(err) {
  if (err) throw err;
  fs.stat('/tmp/world', function(err, stats) {
    if (err) throw err;
    console.log('stats: ' + JSON.stringify(stats));
  });
});

// Cascade
cascade('/tmp/hello', '/tmp/world',
  cascade.chain(fs.rename),
  cascade.raise(null, 2),
  fs.stat,
  cascade.raise,
  function(stats) {
     console.log('stats: ' + JSON.stringify(stats));
  }
);

{% endhighlight %}

The API has lots of helpers for working with arguments, like `filter`, `join`, and `map`:

{% highlight javascript %}
cascade(1, 2, 3, 4, 5, 6,
  cascade.map(function(i) {
     return (i % 2 === 0 ? 'even' : 'odd');
  }),
  callout
);

// "callout" receives these arguments:
// 'odd', 'even', 'odd', 'even', 'odd', 'even'
{% endhighlight %}

The author has written detailed tests using [Vows](http://vowsjs.org/).

### Pattern

[Pattern](https://github.com/dscape/p) (License: _Apache v2.0_, npm: _p_) by Nuno Job uses patterns to manage asynchronous iteration:

{% highlight javascript %}
var insert_all = require('p')(), _;

// Simulate an asynchronous operation
function insert_element(data, callback) {
  setTimeout(function() { callback(data); },
    Math.ceil(Math.random() * 100));
}

insert_all([], _, function stop(l,cb) { cb(); });
insert_all(_, _, function catchall(l, cb) {
  insert_element(l.shift(), function elem_cb(elem) {
    console.log(elem + ' inserted');
    insert_all(l, cb);
  });
});

insert_all([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
  function done() { console.error('done'); });
{% endhighlight %}

This is by the same developer who made [Clarinet](https://github.com/dscape/clarinet), an evented SAX parser.

### Invoke

[Invoke](https://github.com/repeatingbeats/invoke) (License: _MIT_, npm: _invoke_) by Steve Lloyd combines chainable methods with an API that looks inspired by promises:

{% highlight javascript %}
invoke(function(data, callback) {
  // Async operation
}).and(function(data, callback) {
  // Parallel operation
}).then(function(data, callback) {
  // Runs after the first two
}).rescue(function(err) {
  // Error handler
}).end(initialData, function(data) {
  // Done
});
{% endhighlight %}

Notice how `.then` implies serial execution, while `.and` is used for parallel invocations.

This library has some [nodeunit](https://github.com/caolan/nodeunit) tests, and a full example (in [examples / simple.js](https://github.com/repeatingbeats/invoke/blob/master/examples/simple.js)).

### More

As I was researching this post I built up metadata from GitHub and npm to figure out what the newest modules were.  For modules that I didn't cover, have a look at [New Control Flow Libraries](https://gist.github.com/c16690e2102c0ea442a7).
