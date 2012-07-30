---
layout: post
title: "Rivets.js, BackboneMVC, Unitools, Moog Source"
author: Alex Young
categories: 
- backbone.js
- mvc
- unicode
- library
- audio
---

###Rivets.js

[Rivets.js](http://rivetsjs.com/) (GitHub: [mikeric / rivets](https://github.com/mikeric/rivets), License: _MIT_) by Michael Richards is a data binding library that can be used with frameworks like Backbone.js.  It has an `adapter` option that can be set up to support event-based models.  Data formatting is supported, so data types like monetary values or dates can be displayed consistently.

Data attributes are used to describe the data bindings in HTML templates.  There are built-in bindings like `data-html` for `innerHTML`, but tag attributes are also supported, so to write `modelInstance.url` to an image's `src` attribute `data-src` could be used.

Rivets.js embraces a pipe-inspired syntax for certain operations.  For example, rendering a collection could automatically sort the results like this:

{% highlight javascript %}
<ul data-html="model.tags | sort | tagList"></ul>
{% endhighlight %}

###BackboneMVC

[BackboneMVC](http://chance-an.github.com/backbone-mvc/) (GitHub: [chance-an / backbone-mvc](https://github.com/chance-an/backbone-mvc), License: _LGPL_) by Changsi An adds a controller to Backbone.  Controllers are singletons, which means the same instance will always be returned.  I suspect this might fit well if you're wrapping classes with AMD and loading them with RequireJS.

Methods on controllers can be executed by `Backbone.Router`, so it works very much like Rails (the author states the project is inspired by CakePHP).  The `beforeFilter` and `afterRender` hooks are executed based on a jQuery `Deferred` object, but `false` can be returned as well.

###Unitools

[Unitools](http://u-n-i.co/de/) is a collection of Unicode web-related tools for creating all manner of useful and ludicrous text effects.

It includes the Twitter favourite upside down mapping ("sɾʎlıɐp ɯoɹɟ ollǝɥ"), Zalgo, and tools for escaping and working with raw Unicode values.

###Moog Google Doodle Open Sourced

I noticed the Moog Google Doodle has been released under the Apache 2.0 license here: [bob-moog-google-doodle](http://code.google.com/p/bob-moog-google-doodle/) ([HN discussion](http://news.ycombinator.com/item?id=4311004)).  I was coincidentally recently working on some web audio stuff, so it's useful to have something like this to refer to.
