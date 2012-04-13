---
layout: post
title: "Colonne, n8iv, Three Bad Parts"
author: Alex Young
categories: 
- backbone.js
- oo
- language
---

###Colonne

[Colonne](https://github.com/rtsinani/colonne) (GitHub: [rtsinani / colonne](https://github.com/rtsinani/colonne), License: _MIT_) by "rtsinani" is a small [Backbone.js](http://documentcloud.github.com/backbone/) library that extends `Backbone.History` to expose two new properties: `path` and `params`:

{% highlight javascript %}
// URL fragment: /products/search?names=apple&names=nectarine&page=1

Backbone.history.path               // 'products/search'
Backbone.history.params['names']    // ['apple', 'nectarine']
Backbone.history.params['page']     // '1'
{% endhighlight %}

It also works with `Backbone.history.navigateWith`.

The author has included Backbone's router tests to demonstrate that Backbone's original functionality still works, and has added new tests for Colonne.

###n8iv

[n8iv](https://github.com/constantology/n8iv) (License: _MIT_) by Christos Constandinou is an OO library that extends native objects with `Object.defineProperty`.  The author has written lots of documentation that's viewable on GitHub at [constantology / n8iv / docs](https://github.com/constantology/n8iv/tree/master/docs).  The documentation shows what objects have been extended and what the n8iv classes provide.

For example, there's an event library that works like this:

{% highlight javascript %}
var observer = n8iv.Observer.create();
observer.log = console.log;

observer.on('foo', log)
        .on('foo', observer.log, observer)
        .broadcast('foo', 1, 2, 3);
{% endhighlight %}

The `n8iv.Class` library supports mixins, singletons, and super methods.

The author also notes that native methods are not overridden if they're already defined.  In addition, the other n8iv libraries like `n8iv.Oo.js` can be used without the native extensions.

###Three Bad Parts

In [JavaScript - Only Three "Bad" Parts](http://johnkpaul.tumblr.com/post/20720951024/javascript-only-three-bad-parts), John Paul discusses Douglas Crockford's _JavaScript:The Good Parts_ and how there are only really three "bad" parts.  His post is actually  more about learning the language properly than problems inherent to JavaScript.

John argues that once `this`, prototypal inheritance, and functions are properly understood, then budding JavaScript developers can be more productive.

> When was the last time that you had a really hard time using the `void` keyword or were foiled by type coercion?

