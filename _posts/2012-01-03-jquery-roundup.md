---
layout: post
title: "jQuery Roundup: CraftMap, Scrollorama, Plugins Archive"
author: Alex Young
categories: 
- jquery
- plugins
- geo
- maps
- animation
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

### CraftMap

![CraftMap](/images/posts/craftmap.png)

[CraftMap](http://www.jscraft.net/plugins/craftmap.html) (License: _free for non-commercial use_, Price: $49, Size: 13KB, Minified: 6.5KB) by Marcin Dziewulski is a lightweight plugin that turns an image into a map, complete with overlays and markers.

The plugin comes with lots of options, including saving position to cookies, map positioning, and controls.

Marcin has also written a whole slew of other plugins:

* [Scroller](http://www.jscraft.net/plugins/scroller.html) (License: _free for non-commercial use_, Price: $24, Size: 5KB, Minified: 2.7KB)
* [CSS 3D Gallery](http://www.jscraft.net/experiments/css-3d-image-gallery.html)
* [Custom Preloader Effect](http://www.jscraft.net/experiments/custom-preloader-effect.html)
* [Horizontal Bar Graph with CSS3](http://www.jscraft.net/experiments/horizontal-bar-graph-with-css3-and-jquery.html)

### Scrollorama

![Scrollorama](/images/posts/scrollorama.png)

[Scrollorama](http://johnpolacek.github.com/scrollorama/) (GitHub: [johnpolacek / scrollorama](https://github.com/johnpolacek/scrollorama), License: _MIT and GPL_, Size: 9.63KB) by John Polacek is a plugin for controlling animations as a page is scrolled.  Once a page is split into blocks, events can be triggered as blocks become visible:

{% highlight javascript %}
var scrollorama = $.scrollorama({
  blocks: '.scrollblock'
});

scrollorama.onBlockChange(function() {
  alert('You just scrolled to block#' + scrollorama.blockIndex);
});
{% endhighlight %}

Elements can be animated, like the examples on Scrollorama's site:

{% highlight javascript %}
scrollorama.animate('#example1', {
  duration: 400, property: 'opacity'
});
{% endhighlight %}

### Plugins Archive

After the official jQuery plugin site was shelved, the old content has now been reinstated at [archive.plugins.jquery.com](http://archive.plugins.jquery.com/).

The new site is open source and can be found at [GitHub: jquery / plugins.jquery.com](https://github.com/jquery/plugins.jquery.com).  It can be installed locally, and requires a web server, PHP, MySQL, WordPress, Node, and Git.

