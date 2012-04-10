---
layout: post
title: "jQuery Roundup: modplug, NailThumb, HiddenPosition"
author: Alex Young
categories: 
- jquery
- plugins
- images
- thumbnails
- jqueryui
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###modplug

[modplug](http://larsjung.de/modplug/) (GitHub: [lrsjng / modplug](https://github.com/lrsjng/modplug), License: _MIT_) by Lars Jung is an abstraction on top of jQuery plugins that makes adhering to jQuery's [Plugins/Authoring](http://docs.jquery.com/Plugins/Authoring) document a little bit easier.

Using `modplug` to define a plugin will automatically put methods under the same "namespace".  Static methods can also be defined:

{% highlight javascript %}
modplug('color', {
  statics: {
    random: function() {
      return 'hsl(' + Math.floor(Math.random() * 360) + ',95%,75%)';
    }
  },

  methods: {
    back: function(col) {
      return this.each(function () {
        $(this).css('background-color', col);
      });
    }
  }
});

$(selector).color('back', '#f00');

// get a hsl formatted color string
var col = $.color.random();
{% endhighlight %}

###NailThumb

[NailThumb](http://www.garralab.com/nailthumb.php) (Repository: [SourceForge / NailThumb](http://sourceforge.net/p/nailthumb/code/2/tree/), License: _GPL v3_) from Garralab is an image thumbnail plugin that can apply animation effects and a scrolling tooltip.  A container is assumed, so basic usage looks like this: `$('.nailthumb-container').nailthumb()`.

CSS has been supplied, and there are also LESS mixins.

###HiddenPosition

[HiddenPosition](http://www.garralab.com/hiddenposition.php) (Repository: [SourceForge / HiddenPosition](http://sourceforge.net/p/hiddenposition/code/3/tree/), License: _GPL v3_) also from the developers at Garralab is based on [jQuery UI Position](http://jqueryui.com/demos/position/), but has been adapted to work with hidden elements.  There's an interactive demo on the project's page that shows how it works.

The API is compatible with `$().position`, so existing jQuery UI projects can simply swap this with `$().hiddenPosition`.
