---
layout: post
title: "jQuery Roundup: Jewel, Custom Drag and Drop, TouchTouch, BetterExamples.js"
author: Alex Young
categories: 
- jquery
- jqueryui
- touchscreen
- templating
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Jewel

[Jewel](https://github.com/vdemedes/jewel) (License: _MIT_) by Vadim Demedes is an [ActiveRecord](http://api.rubyonrails.org/classes/ActiveRecord/Base.html)-inspired DOM query API:

{% highlight javascript %}
var Post = Jewel.define('#posts', {
  keys: {
    title: 'h1'
  , body: 'p'
  },

  template: function(fields) {
    return '<div class="post"><h1>' + fields.title + '</h1><p>' + fields.body + '</p></div>';
  }
});

// Get all of the posts
var posts = Post.all;

// Create a new post
var post = new Post();
post.title = 'Latest post';
post.body = 'Latest content';
post.save(); // Will be prepended to #posts
{% endhighlight %}

It actually combines templating and querying, which seems to work quite well.  The author has included some Mocha unit tests, and he's tested it in everything except IE.

###Custom Drag and Drop with Mouse

[Roll your own drag-and-drop handling, with help from jQuery UI](http://www.solitr.com/blog/2012/05/roll-your-own-drag-and-drop-handling-with-jquery-ui/) by Jo Liss is a tutorial that explains how to build customised drag-and-drop interfaces using the [jQuery UI Mouse](https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.mouse.js) widget.

It's interesting because I've struggled to get [Draggable](http://jqueryui.com/demos/draggable/) to do what I wanted in more complex or unique situations, and building on Mouse seems to offer the flexibility some projects demand.

###TouchTouch

![TouchTouch](/images/posts/touchtouch.png)

[TouchTouch](http://tutorialzine.com/2012/04/mobile-touch-gallery/) (GitHub: [martinaglv / touchTouch](https://github.com/martinaglv/touchTouch/), License: _MIT_, [Demo](http://demo.tutorialzine.com/2012/04/mobile-touch-gallery/) by Martin Angelov is an image gallery that's also touchscreen-friendly.  It features a responsive interface with CSS3 animations and gestures like swiping.

All it needs is a list of images with links: `$('#thumbs a').touchTouch();`

###BetterExamples.js

[BetterExamples.js](http://willemmulder.github.com/BetterExamples.js/) (GitHub: [willemmulder / BetterExamples.js](https://github.com/willemmulder/BetterExamples.js), License: _CC BY-SA 3.0_) by Willem Mulder is an attempt to make JavaScript code examples more interactive.

It'll display both logging and errors, next to the code that generated them.  This is something that I'd like to succeed because even with great tools like [jsFiddle](http://jsfiddle.net/) I feel like it's still difficult to create easy to follow interactive code examples.
