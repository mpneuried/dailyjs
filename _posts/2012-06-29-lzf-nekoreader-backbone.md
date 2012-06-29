---
layout: post
title: "LZF Compression, Nekoreader, Backbone.BindTo"
author: Alex Young
categories: 
- libraries
- backbone.js
- html5
- filesystem
---

###LZFjs

[LZFjs](http://lzf.childnodes.com/) (GitHub: [pkalogiros / LZFjs](https://github.com/pkalogiros/LZFjs), License: _GPL3_) by Pantelis Kalogiros is a compression library based on [LibLZF](http://oldhome.schmorp.de/marc/liblzf.html) that uses the File API to compress files in client-side JavaScript:

> The script is converted from the C version of LZF and works surprisingly fast and well. Both its functions (compress/decompress) accept and return an arraybuffer.

Even though it's been converted from C, the JavaScript is surprisingly easy to follow. 

###Nekoreader

[Nekoreader](http://nekoreader.github.com/) (GitHub: [nekoreader / nekoreader.github.com](https://github.com/nekoreader/nekoreader.github.com)) is a client-side feed reader created by Vincent Grastic.  It uses JSONP, and [Google's Feed API](https://developers.google.com/feed/) to handle feeds.  It has an API that allows a list of feeds to be specified in a JSON file.  A template file and CSS can also be supplied to style the results.

Although people have been using Google's Feed API for a while for similar projects, I like the fact the author's example shows how to configure an entirely client-side app using services like GitHub and Dropbox.

###Backbone.BindTo

Radoslav Stankov's [Backbone.BindTo](https://github.com/RStankov/backbone-bind-to) (License: _MIT_) is a [Backbone.js](http://backbonejs.org/) extension that makes it easier to bind models to views.  The author's example compares standard Backbone.js code with his extension:

{% highlight javascript %}
window.UserCardView = Backbone.View.extend({
  initialize: function() {
    this.model.bind('change:name',  this.renderName,  this);
    this.model.bind('change:email', this.renderEmail, this);
  },
  remove: function() {
    this.model.unbind('change:name',  this.renderName,  this);
    this.model.unbind('change:email', this.renderEmail, this);
    Backbone.View.prototype.remove.apply(this, arguments);
  },
  renderName:  function() { /* ... code ... */ },
  renderEmail: function() { /* ... code ... */ }
});
{% endhighlight %}

Using Backbone.BindTo makes this feel less like boilerplate:

{% highlight javascript %}
window.UserCardView = Backbone.View.extend({
  bindToModel: {
    'change:name':  'renderName',
    'change:email': 'renderEmail'
  },
  renderName:  function() { /* ... code ... */ },
  renderEmail: function() { /* ... code ... */ }
});
{% endhighlight %}

Events will be unbound when views are removed, and there's also `Backbone.BindTo.noConflict` for using the extension without modifying `Backbone.View`.

The same author has also recently released [Backbone.Handlebars](https://github.com/RStankov/backbone-handlebars), which helps integrate Backbone.js and [Handlebars.js](http://handlebarsjs.com/).
