---
layout: post
title: "jQuery Roundup: Knob, OmniWindow, bPopup, Pageflipper, Tiler"
author: Alex Young
categories: 
- jquery
- touchscreen
- modal
- games
- tiling
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###jQuery Knob

![jQuery Knobs](/images/posts/jquery-knob.png)

[jQuery Knob](http://anthonyterrien.com/knob/) (GitHub: [aterrien / jQuery-Knob](https://github.com/aterrien/jQuery-Knob), License: _MIT/GPL_) by Anthony Terrien is a nice and configurable dial widget.

It can be configured to exhibit a wide range of behaviours, from value range entry to an iPod clicker-style "infinite" wheel.  The value that is displayed can be directly manipulated as well, and it works with scroll wheels and touchscreens.

###OmniWindow

[OmniWindow](http://0x000000.github.com/OmniWindow/) (GitHub: [0x000000 / OmniWindow](https://github.com/0x000000/OmniWindow), License: _MIT_) by Alexander Rudenko is a fairly small modal window plugin, and the author has attempted to target it at programmers rather than designers.

The documentation is good and covers the main use-cases, and despite stating that the plugin doesn't support tonnes of options, it includes enough to keep it flexible.

It's based around events, so it can be used like this:

{% highlight javascript %}
$('div.modal').omniWindow()
  .trigger('show');
{% endhighlight %}

And it allows class names to be overridden, in case you want to integrate it with an existing project:

{% highlight javascript %}
$('div.another-modal').omniWindow({
  overlay: {
    selector: '.custom-overlay', // don't forget the period symbol! 
    hideClass: 'custom-overlay-closed'
  },
  modal: {
    hideClass: 'custom-modal-closed'
  }
});
{% endhighlight %}

###bPopup

[bPopup](http://dinbror.dk/bpopup/) by Bjørn Klinggaard is another modal plugin that is simply triggered by calling `$('element_to_pop_up').bPopup()`.  By default it'll reposition the popup when the browser's size is changed.

For full details on the available downloads and source code, see [21.04.12: New release, bPopup version 0.7.0](http://dinbror.dk/blog/bPopup/).

###Pageflipper

[Pageflipper](http://wtw-software.github.com/pageflipper/) (GitHub: [wtw-software / pageflipper](https://github.com/wtw-software/pageflipper/), License: _MIT_) from wtw-software uses CSS3 transitions to creative a native-feeling page sliding effect.  It looks like something that would appeal to mobile web developers, but will also work with a mouse.

It can also be controlled programmatically:

{% highlight javascript %}
$('#pageflipper').pageflipper('flipleft')
{% endhighlight %}

###Tiler

[Tiler](http://borbit.github.com/tiler/) (GitHub: [borbit / tiler](https://github.com/borbit/tiler/), License: _MIT_) by Serge Borbit is a library for working with infinite grids of tiles.  This could be used to display map content, but the author has designed it with games in mind.

It feels more like a standard JavaScript library than a jQuery plugin (although jQuery is a dependency), so using it requires creating an instance of a `Tiler` object:

{% highlight javascript %}
var tiler = new Tiler($('#viewport'), {
  tileSize: 200,

  sync: function(options, callback) {
    var tosync = options.tosync;

    tosync.forEach(function(tile) {
      var img = new Image();
      var x = tile[0];
      var y = tile[1];

      img.onload = function() {
        callback([[x, y, $('<img/>').attr('src', img.src)]]);
      };

      img.src = 'image_' + x + '_' + y + '.png';
    });
  }
});
{% endhighlight %}

QUnit tests are included.
