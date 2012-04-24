---
layout: post
title: "jQuery Roundup: SelectBoxIt, jQuery Hooks, jQuery contextMenu"
author: Alex Young
categories: 
- jquery
- jqueryui
- plugins
- menus
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###SelectBoxIt

![SelectBoxIt screenshot](/images/posts/selectboxit.png)

[SelectBoxIt](http://www.selectboxit.com/) (GitHub: [gfranko / jQuery.selectBoxIt.js](https://github.com/gfranko/jQuery.selectBoxIt.js), License: _MIT_) by Greg Franko is a select box replacement that uses progressive enhancement and has some notable features:

* Works with jQueryUI ThemeRoller
* Supports jQuery and jQueryUI's animations
* ARIA support

It also includes Jasmine tests: [SelectBoxIt tests](http://gregfranko.com/test/SpecRunner.html).

The author has written a detailed post [documenting SelectBoxIt](http://gregfranko.com/blog/introducing-the-jquery-plugin-selectboxit/), and the GitHub repository contains suitable CSS and images if you want to duplicate the style used in Greg's examples.

###jQuery Hooks

In [jQuery Hooks](http://blog.rodneyrehm.de/archives/11-jQuery-Hooks.html), Rodney Rehm discusses jQuery's hooks feature.  The [jQuery.cssHooks](http://api.jquery.com/jQuery.cssHooks/) documentation covers adding hooks to CSS getters and setters, but there are other hooks in jQuery's code, for `.val()`, `.attr()`, and `.prop()`.

###jQuery contextMenu

[jQuery contextMenu](http://medialize.github.com/jQuery-contextMenu/) (GitHub: [medialize / jQuery-contextMenu](https://github.com/medialize/jQuery-contextMenu), License: _MIT and GPL3_) from Medialize GbR (and also by Rodney Rehm) helps create menus that appear when an element is right-clicked.

The authors have written lots of examples showing the flexibility of the plugin, including [using input elements](http://medialize.github.com/jQuery-contextMenu/demo/input.html), [dynamically adding new triggers](http://medialize.github.com/jQuery-contextMenu/demo/dynamic.html), and [access keys](http://medialize.github.com/jQuery-contextMenu/demo/accesskeys.html).
