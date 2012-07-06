---
layout: post
title: "Bootstrap Tour, DOM Utils, asEvented"
author: Alex Young
categories: 
- backbone.js
- dom
- events
---

###Bootstrap Tour

[Bootstrap Tour](http://pushly.github.com/bootstrap-tour/index.html) (GitHub: [pushly / bootstrap-tour](https://github.com/pushly/bootstrap-tour), License: _Apache 2.0_) from Push.ly is a small library for building interactive product tours with Twitter Bootstrap.  Tours are instances of `Tour`, and can contain a reference to an element to anchor to along with a title and descriptive text:

{% highlight javascript %}
var tour = new Tour();

tour.addStep({
  element: 'selector'
, title: 'Popup Title'
, content: 'Descriptive text'
});
{% endhighlight %}

Steps will be displayed using [popovers](http://twitter.github.com/bootstrap/javascript.html#popovers), and the tour can be ended at any time.  Steps can also contain a `path` option so tours can span several pages.

###DOM Utils

[Utils](http://www.fortybelow.ca/Projects/JavaScript/Utils/) (License: _MIT_) by Matt McDonald is a modular DOM library designed to degrade gracefully and work in a wide range of browsers.  It contains a lot of the utility functions we find ourselves needing when working without a larger framework, for example:

* `Utils.is.arrayLike`: Is a given object array-like?
* `Utils.node.prepend`: An `insertBefore` wrapper method
* `Utils.select.byClassName`: Returns an array of node-like objects that match the class name

Some methods will return `null` in browsers that don't support the underlying DOM API calls.  This is [documented thoroughly](http://www.fortybelow.ca/Projects/JavaScript/Utils/Docs/select.html), with a suggestion on how to proceed:

> Warning: this property will return null if the host environment is detected to be unsuitable; an if block or a similar construct should be used for detection.

Rather than falling over to less efficient methods, this library prefers to make the developer determine how to proceed.

_Utils_ can be downloaded by selecting the required modules: [Utils Download](http://www.fortybelow.ca/Projects/JavaScript/Utils/Download/).

###asEvented

[asEvented](https://github.com/mkuklis/asEvented) (License: _MIT_, npm: [asEvented](http://search.npmjs.org/#/asEvented)) by Michal Kuklis is a small event emitter module that works in Node and browsers.  It works using a mixin style rather than through inheritance:

{% highlight javascript %}
function Model() {
  this.id = 0;
}

asEvented.call(Model.prototype);
{% endhighlight %}

This gives `Model` methods for dealing with events, like `trigger` and `bind`.

The project has already received a few contributions, and it includes qunit tests that are easy to run in a browser.
