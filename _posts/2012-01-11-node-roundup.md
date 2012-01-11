---
layout: post
title: "Node Roundup: Buster.JS, Word, Persist"
author: Alex Young
categories: 
- node
- modules
- strings
- testing
- databases
- ORM
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

### Buster.JS

A reader sent in [Buster.JS](http://busterjs.org/) (GitHub: [busterjs](https://github.com/busterjs), npm: _buster_, License: _BSD_) by Christian Johansen and August Lilleaas, which is a new test framework for Node and browsers.  It's made up of a large set of modules that support everything from CommonJS assertions to JsTestDriver.  The entire suite of modules can be viewed in the [Buster.JS module documentation](http://busterjs.org/docs).

Asynchronous testing is supported through a callback function, similar to other frameworks, and promises.  Any object with a `then` method is considered a promise:

{% highlight javascript %}
function someAsyncTestFunction() {
  var promise = {
    then: function (callback) {
      this.callbacks = this.callbacks || [];
      this.callbacks.push(callback);
    }
  };

  setTimeout(function () {
    buster.assert(true);
    var callbacks = promise.callbacks || [];

    for (var i = 0, l = callbacks.length; i < l; ++i) {
      callbacks[i]();
    }
  }, 100);

  return promise;
}
{% endhighlight %}

Buster.JS supports setup and teardown methods, which can be nested inside groups of tests.  Setup and teardown methods can also be asynchronous.

Tests can be written with TDD or BDD syntax, and several reporters are included, including a XML (which should work with test automation tools).

[Buster.JS overview](http://busterjs.org/docs/overview/) includes highlights and examples for the major features of the framework.

### Word

[Word](https://github.com/vesln/word) (License: _MIT_, npm: _word_) by Veselin Todorov is a string library.  It has methods for stripping slashes, stripping quotes, random strings, auto HTML links, and a lot more.  It plays nicely with Express, so if you want to use these as helper methods then just call `app.helpers({ word: word });`. 

### Persist

[Persist](https://github.com/nearinfinity/node-persist) (npm: _persist_, License: _MIT_) by Joe Ferner and Jeff Kunkle is a new ORM framework that supports SQLite, MySQL, PostgreSQL, and Oracle.  Models and their relationships are defined using a chainable API.  This example is from the project's documentation:

{% highlight javascript %}
var persist = require('persist')
  , type = persist.type;

// define some model objects
var Phone = persist.define('Phone', {
  'number': type.STRING
});

var Person = persist.define('Person', {
  'name': type.STRING
}).hasMany(this.Phone);

persist.connect({
  driver: 'sqlite3',
  filename: 'test.db',
  trace: true
}, function(err, connection) {
  Person.using(connection).all(function(err, people) {
    // people contains all the people
  });
});
{% endhighlight %}

As you can see, the `Phone` and `Person` models are defined in a fashion reminiscent of popular Node ODMs like [Mongoose](http://mongoosejs.com/).  The `hasMany` method sets up a relationship between the two models, and this also supports a `through` option for more complex join models.

The `connection.chain(chainables, callback)` method is one of Persist's interesting features: it can take an array of chainable queries in sequence.  This solves a common Node control flow issue without having to use a control flow library (or lots of nested callbacks).

