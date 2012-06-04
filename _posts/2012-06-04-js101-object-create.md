---
layout: post
title: "JS101: Object.create"
author: Alex Young
categories: 
- js101
- tutorials
- language
- beginner
---

<div class="intro">
  JS101 is a tutorial series aimed at beginners.  Each post is a bite-sized chunk aimed to elucidate JavaScript fundamentals.  To read previous posts, view the <a href="/tags.html#js101">js101</a> tag.
</div>

The inheritance examples we looked at last week used the form `Rectangle.prototype = new Shape()`.  The reason I like this example is it shows how powerful prototypes are, despite their simplicity.  The downside is the constructor for the parent object is executed, which isn't always what's desired.

ECMAScript 5 introduced `Object.create`, which creates new objects based on a prototype object and an additional set of properties.

The main differences between `B.prototype = new A();` and `B.prototype = Object.create(A.prototype)` are as follows:

* The constructor, `A` isn't called, so `B` remains uninitialised until instantiated
* `Object.create` accepts a second argument that causes `Object.create` to behave as if `Object.defineProperties` was called

###Using `Object.create`

Imagine that I want to represent a queue of things, much like an array but sufficiently different that a new object is desired.  These `Queue` objects could inherit from `Array` like this:

{% highlight javascript %}
function Queue() {
  this.active = true;
}

Queue.prototype = Object.create(Array.prototype);

var q = new Queue();

q.push(1);
q.push(2);

console.log('queue:', q);
// queue: { '0': 1, '1': 2, active: false, length: 2 }
{% endhighlight %}

Now we have array-like objects that we can customise with our own methods.

###The Second Argument

According to the [Annotated ECMAScript 5 Object.create documentation](http://es5.github.com/#x15.2.3.5), passing a second argument behaves as if `Object.defineProperties` had been called.  This method requires a bit of knowledge before it can be used -- the properties have to be passed in the expected format.

In this example, `Queue` inherits from array and gets a property called `activate` at the same time:

{% highlight javascript %}
Queue.prototype = Object.create(Array.prototype, {
  activate: {
    value: function() { this.active = true; }
  },

  deactivate: {
    value: function() { this.active = false; }
  }
});
{% endhighlight %}

Now calling `q.activate()` and `q.deactivate()` is possible.  Notice that the second argument is in the form `{ propertyName: { value: function() {} } }` -- the `value` property is important and I haven't arbitrarily picked it.  These properties are known as [property attributes](http://es5.github.com/#x8.6.1).

Property attributes can be "named data" and "named attribute" properties.  These additional flags can be applied to named data properties:

* `writable`: Determines if the property is writable
* `enumerable`: Should this property be included in `for-in` enumeration?
* `configurable`: If `false`, attempts to delete or change the property's attributes will fail

Although this is new to ECMAScript 5, it adds a much desired level of control to properties and their definition.

{% highlight javascript %}
function Queue() {
  this._active = false;
}

Queue.prototype = Object.create(Array.prototype, {
  active: {
    get: function() {
      console.log('Queue.prototype.active get');
      return this._active;
    },

    set: function(value) {
      console.log('Queue.prototype.active set');
      this._active = value;
    }
  }
});

var q = new Queue();

q.active = true;
console.log(q.active);

console.log('queue:', q);
{% endhighlight %}

In this example I've renamed `active` to `_active`, but it can still be accessed using `q.active` because I've defined an `active` property with a `get` and `set` method.  Now it's possible to track whenever this value is changed.

###Calling Constructors

By using the `Function.prototype.call` or `apply` methods, it's entirely possible to call another constructor even when using `Object.create`.  For example:

{% highlight javascript %}
function Shape2D() {
  this.x = 0;
  this.y = 0;
}

Shape2D.prototype = {
  move: function(x, y) {
    this.x += x;
    this.y += y;
  }
};

function Shape3D() {
  Shape2D.call(this);
  this.z = 0;
}

Shape3D.prototype = Object.create(Shape2D.prototype);
{% endhighlight %}

###Calling "Super" Methods

When inheriting, we sometimes need to replace a method with one more tailored to the child object.  Last week I demonstrated how to call the parent's original method using `MyObject.prototype.method.apply(this, [arguments])`.  Another way to do this is with `Object.getPrototypeOf`.

Building on the previous example, let's add a new `move` to `Shape3D`:

{% highlight javascript %}
Shape3D.prototype.move = function(x, y, z) {
  Object.getPrototypeOf(Object.getPrototypeOf(this)).move.call(this, x, y);
  this.z += z;
};
{% endhighlight %}

Although in this example `Object.getPrototypeOf` seems unwieldy, it can be used in cases where we don't actually know what the parent class was.  It's one of the techniques library authors use to create class-like implementations in JavaScript.

###References

* [Annotated ECMAScript 5.1](http://es5.github.com/)
* [Object.create MDN](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/create)
* [defineProperty MDN](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/defineProperty)
