---
layout: post
title: "Shardjs, soma.js, jsprops"
author: Alex Young
categories:
- libraries
- testing
- node
- browser
---

###Shardjs

[Shardjs](https://github.com/sullof/shardjs) (License: _MIT_) by Francesco Sullo is a module for managing keys of up to 3844 Redis nodes.  The author was inspired by [Sharding and IDs at Instagram](http://instagram-engineering.tumblr.com/post/10853187575/sharding-ids-at-instagram) where the Instagram developers discuss a solution to generating unique IDs at scale.

To get around the lack of 64-bit integers in JavaScript, the author has opted to use 62-bit strings.  He discusses his algorithm for generating unique keys and where the number 3844 comes from in the project's readme:

> The advantage of this approach is that since all the keys generated at the same millisecond will go on the same virtual shard and there is the incremental sequence, we can mantain the key well sorted by time.

###soma.js

[soma.js](http://somajs.github.com/somajs/) (GitHub: [somajs / somajs](https://github.com/somajs/somajs), License: _MPL_) by Romuald Quantin is a new MVC framework that uses the observer pattern with native events, and the [command pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#commandpatternjavascript), with the ultimate goal of encouraging development of decoupled modules:

> The command pattern aims to encapsulate method invocation, requests or operations into a single object and gives you the ability to both parameterize and pass method calls around that can be executed at your discretion. In addition, it enables you to decouple objects invoking the action from the objects which implement them, giving you a greater degree of overall flexibility in swapping out concrete 'classes'.

-- Addy Osmani on [the command pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#commandpatternjavascript)

In soma.js applications, there are wires, models, views, and commands.  Wires are used to represent the logic of an application and coordinate between other elements of the framework.  Models don't necessarily imply a particular storage solution, they're more like a convention for integrating with other solutions like `localStorage` or [Knockout](http://knockoutjs.com/) -- there's a demo showing how to use soma.js with Knockout's data bindings.

The project's website includes demos and a tutorial that explain how everything works.

###jsprops

[jsprops](https://github.com/TobiaszCudnik/jsprops) (License: _MIT_) by Tobiasz Cudnik adds class-based properties to prototypes, the goal being to reduce redundancy when copying properties to instances.  It also includes inheritance-based signalling.

Tobiasz has included CoffeeScript and JavaScript examples, but I've reproduced the JavaScript one here because it's a little bit easier to understand:

{% highlight javascript %}
var property = require('jsprops').property;

function Klass() {}

Klass.prototype.foo = property('foo');
Klass.prototype.bar = property('bar', null, 'def_value');
Klass.prototype.baz = property('baz', {
  set: function(set, val) {
    set(val.replace(/a/, 'b'));
  }
});
{% endhighlight %}

The project comes with tests that further illustrate the intended usage.
