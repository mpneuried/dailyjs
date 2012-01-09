---
layout: post
title: "Ender Roundup: Swig, Traversty, NWMatcher, Ender-Overlay, Dagron"
author: Rod Vagg
categories: 
- ender
- frameworks
- modules
- libraries
- templating
- dom
- dnd
- selectorengines
- events
- css4
---

<div class="intro">
You can send in your Ender-related projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
Be sure to also update the <a href="https://github.com/ender-js/Ender/wiki/Ender-package-list">Ender package list</a> page on the <a href="https://github.com/ender-js/Ender/wiki">Ender wiki</a>.
</div>

### Swig for Ender

[Swig for Ender](https://github.com/naholyr/ender-swig) (npm / Ender: _ender-swig_), by [Nicolas Chambrier](https://github.com/naholyr), is a wrapper and build script for [Swig](https://github.com/paularmstrong/swig), by [Paul Armstrong](https://github.com/paularmstrong). Swig is a fast template engine inspired by Django.

When included in an Ender build you get a `$.swig` object and a `$.render` method that lets you render templates from `<script>` tags by ID.

{% highlight html %}
<script type="text/html" id="tpl">
Hello, {{ "{{ name " }}}}.
</script>

<script type="text/javascript">
$.render('tpl', {"name": "dude"}) // →  "Hello, dude."
</script>
{% endhighlight %}

Swig also includes support for template inheritance:

{% highlight html %}
{% raw %}
<script type="text/html" id="parent">
Hello, {% block name %}John Doe{% endblock %}.
</script>
<script type="text/html" id="child">
{% extends 'parent' %}
{% block name %}dude{% endblock %}
</script>

<script type="text/javascript">
$.render('child') // →  "Hello, dude."
</script>
{% endraw %}
{% endhighlight %}

Swig depends on [Underscore.js](http://documentcloud.github.com/underscore/), which will be automatically included in your Ender build.

Another popular templating library for Ender is [Wings](https://github.com/amccollum/wings) (npm / Ender: _wings_) by [Andrew McCollum](https://github.com/amccollum), based on [Mustache](http://mustache.github.com/).

### Traversty

[Traversty](https://github.com/rvagg/traversty) (npm / Ender: _traversty_), by [Rod Vagg](https://github.com/rvagg), is a simple DOM traversal utility heavily inspired by Prototype's "DOM traversal toolkit". You get `up()`, `down()`, `next()` and `previous()` with optional `selector` and `index` arguments, all in a multi-element environment (jQuery-like rather than Prototype's single-element implementation).

In their simplest form, `up()`, `down()`, `next()` and `previous()` let you move around the DOM by single-element steps but can be used like an optionally indexed `find()` in all four directions:

{% highlight javascript %}
$('#root > ul') // can match and operate on multiple elements
  .down(0).css('color', 'red')
  .next('li', 1).css('color', 'green')
  .next().down('li', 2).css('color', 'blue')
  .next().down().css('color', 'yellow')
  .up(2).next().css('color', 'purple');
{% endhighlight %}

Traversty has no dependencies but will detect the presence of a selector engine if included in the Ender build (officially supports [Qwery](https://github.com/ded/qwery), [Sel](https://github.com/amccollum/sel) [Sizzle](https://github.com/jquery/sizzle) and [NWMatcher](https://github.com/dperini/nwmatcher)). Without a selector engine, Traversty will rely on native `querySelectorAll()` and the various vendor-prefixed native `matchesSelector()` implementations (available everywhere post-IE8).

Traversty can also be used as a stand-alone library:

{% highlight javascript %}
traversty('li:nth-child(20)').previous('.interesting');
{% endhighlight %}

### NWMatcher

[NWMatcher](http://javascript.nwbox.com/NWMatcher/) (npm / Ender: _nwmatcher_), by [Diego Perini](https://github.com/dperini) is a battle-hardened selector engine with a strong focus on standards compatibility. It's consistently fast across browsers and has continuing support for some very old browsers. NWMatcher became a popular alternative selector engine for [Prototype](http://www.prototypejs.org) users when the selector engine code was modularised in version 1.7. It continues to have a strong following, particularly amongst purists who appreciate NWMatcher's close adherence to W3C standards.

NWMatcher now has Ender support and is in npm so can be easily included in your Ender builds: `ender build nwmatcher undersore bonzo bean`

Some of NWMatcher's advanced features are supported directly via Ender:

{% highlight javascript %}
// adjust NWMatcher's internals
$.configure({ USE_QSAPI: false, VERBOSITY: false });

// a collection containing the first match only, works like
// querySelector() and halts processing upon first match
$.first('div');

// just like calling $('div', root) but will trigger a callback
// function on each match found
$.select('div', root, callback);

// does at least one element in the current collection match
// the given selector?
$('div').match('.someclass');

// alias for .match()
$('div').is('.someclass');

// a new collection of child elements matching the given selector
$('div').find('.someclass');

// a new collection that includes the original collection and
// additional elements matching the given selector
$('div').and('.someclass');
{% endhighlight %}

As with all Ender modules, the original library can be accessed via `require('nwmatcher')`, this gives you the same object as `NW.Dom` when running outside of Ender.

NWMatcher has no dependencies and can be used as a stand-alone library.

### Ender-Overlay

[Ender-Overlay](http://nemeseri.com/ender-overlay/) (npm / Ender: _ender-overlay_), by [Andras Nemeseri](http://about.nemeseri.com/) is a _highly_ configurable module for building dialogs, galleries, lightboxes etc.

{% highlight html %}
{% raw %}
<a id="trigger-vimeo" class="thumbs"><img src="http://www.samholdren.com/vimeo-Logo2.png" alt="Vimeo HTML5 Embed" width="100" height="100"></a>

<div id="overlay-vimeo" class="ender-overlay overlay-vimeo">
  <a class="close close-button" title="Close">&#9747;</a>
</div>

<script type="text/javascript">
$(document).ready(function() {
  $("#overlay-vimeo").overlay({ trigger: "#trigger-vimeo" });
});
</script>
{% endraw %}
{% endhighlight %}

![Ender-Overlay](http://js.vagg.org/dailyjs/ender-overlay_596.jpg)

Andras has put together a tutorial, demos and documentation covering all options, events and methods on the [Ender-Overlay](http://nemeseri.com/ender-overlay/) page.

Ender-Overlay depends on the [Jeesh](https://github.com/ender-js/jeesh) (Ender's official <i>starter pack</i>) and [Morpheus](https://github.com/ded/morpheus) for animation.

### Dagron

[Dagron](https://github.com/ded/Dagron) (npm / Ender: _dagron_), by [Dustin Diaz](http://twitter/ded), is a very simple interface to HTML5 drag and droppables.

{% highlight javascript %}
$('div.draggables').dagron({
    // all options are 'optional'
    handle: 'div.handle'
  , target: 'div.droptarget'
  , start: function(el) {} // el is the item you started dragging
  , drag: function(el) {} // el is dragged element
  , drop: function(el) {} // el is the target the dragged item was dropped on
  , enter: function(el) {} // el is the element target you entered into
  , leave: function(el) {} // el is the item left from
  , end: function(el) {} // el is the element you stopped dragging
})
{% endhighlight %}

Dagron depends on [Qwery](https://github.com/ded/qwery) and [Bean](https://github.com/fat/bean) (both part of the [Jeesh](https://github.com/ender-js/jeesh)).

### _Tidbits_

There were a couple of notable updates to Ender modules recently:

#### Bean

[Bean](https://github.com/fat/bean), by [Jacob Thornton](https://github.com/fat), is Ender's default event handling library. It received a major internal overhaul and a version bump to 0.4.x. Bean has a new internal registry for storing event handler data and it no longer relies on storing an ID on your DOM elements or your JavaScript objects. There have been some small fixes and optimisations and the inclusion of a new `event.stop()` method that invokes both `event.preventDefault()` and `event.stopPropagation()`, but otherwise the external API remains largely untouched.

#### Reqwest gets jQuery compatibility

[Reqwest](https://github.com/ded/reqwest), by [Dustin Diaz](https://github.com/ded), is Ender's native Ajax library, giving you a jQuery-like `$.ajax()` method. There are some differences in options between Reqwest and jQuery / Zepto which has caused some pain for jQuery users migrating to Ender and for libraries designed for jQuery integration, such as [Backbone.js](https://github.com/documentcloud/backbone/pull/322). In particular, jQuery uses `type` where Reqwest uses `method`, jQuery uses `dataType` where Reqwest uses `type`. Thankfully, Reqwest now has a _compat_ mode. Calling `$.ajax.compat()` gives you access to the same option names as jQuery.

You can also install *jQuery / Zepto mode* as default in your projects with: `$.ajax.compat && $.ender({ ajax: $.ajax.compat });`

Full details can be found in the [Reqwest README](https://github.com/ded/reqwest#readme).

#### Sel gets CSS4

[Sel](https://github.com/amccollum/sel), by [Andrew McCollum](https://github.com/amccollum), a selector engine for Ender, is one of the first selector engines to receive some CSS4 love. Working from the [latest working draft](http://dev.w3.org/csswg/selectors4/), Andrew has enabled some excellent additions to Sel's query syntax:

{% highlight css %}
/* subject overriding, was '$div .box' in a previous CSS4 draft,
   returns 'div' rather than '.box' */ 
div! .box

/* id references, 'input' who's ID matches 'label's 'for' attribute */
label /for/ input

/* case insensitive attribute matching */
[attr = "val" i]

/* :nth-match and :nth-last-match to match against sub-selectors */
div:nth-match(3 of .box)

/* links who's target absolute URI matches the current document's URI,
   arguments specify the degree of locality */
a:local-link(0)

/* :column */
td:column(col.profit)

/* :nth-column and :nth-last-column */
td:nth-column(even)

{% endhighlight %}

The subject identifier (`!`) in CSS4 is going to be particularly useful for JavaScripters.
