---
layout: post
title: "Gerbil, Smoking, URI.js"
author: Alex Young
categories: 
- libraries
- testing
- node
- browser
---

### Gerbil

[Gerbil](http://github.com/elcuervo/gerbil) (npm: _gerbil_) by Bruno Aguirre is a test framework for both Node and client-side development.  Tests are structured in a BDD-like style, and assertions are included.  It's a small library but it offers a quick way to get started writing tests without many dependencies.  I noticed that tests asynchronous code is supported because tests are run against a timeout, but there doesn't appear to be an explicit "this test is finished" method call to directly support asynchronous code.

Tests with Gerbil look like this:

{% highlight javascript %}
scenario('This is a group of tests', {
  'should assert true': function(g) {
    g.assert(true);
  }
});
{% endhighlight %}

### Smoking

[Smoking](http://github.com/elcuervo/smoking) (npm: _smoking_), also by the same author, is a mocking and stubbing library.  Prototype classes can be stubbed, and then expectations can be defined:

{% highlight javascript %}
smoking(anObject).expects('aMethod');
smoking(anObject).verify();
{% endhighlight %}

When `verify` fails an exception will be raised, so this should be handled by most testing libraries.

### URI.js

[URI.js](http://medialize.github.com/URI.js/) (GitHub: [medialize / URI.js](https://github.com/medialize/URI.js), License: _MIT_ and _GPL v3_) by Rodney Rehm is a library for manipulating URIs that has a method chaining API.  It makes manipulating everything from authentication details to query strings extremely easy:

{% highlight javascript %}
URI('http://dailyjs.com/example.html')
  .directory('files')
  .hash('header')
  .query('field', 'value')
    // http://dailyjs.com/files/example.html?field=value#header
{% endhighlight %}

For a complete list of methods, see the [URI.js API documentation](http://medialize.github.com/URI.js/docs.html).
