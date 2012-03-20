---
layout: post
title: "jQuery Roundup: Declarative, jQR, Ender-Carousel, Stapes.js"
author: Alex Young
categories: 
- jquery
- plugins
- ender
- frameworks
- libraries
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Declarative

[Declarative](https://github.com/alexlawrence/declarative) (License: _MIT_, npm: _declarative_) by Alex Lawrence allows HTML to be mapped to behavioural JavaScript using _mappings_.  The author's first example is a search form with a character counter that uses the following HTML:

{% highlight html %}
<form action="/" method="POST">
  <input id="search" name="search" type="text" maxlength="50" />
  <span data-widget-counter="target: 'search', text: '{0} characters left'"></span>
  <input type="submit">
</form>
{% endhighlight %}

Notice the use of data attributes to supply options to the JavaScript mapping:

{% highlight javascript %}
declarative.mappings.add({
  id: 'counter',
  prefix: 'data-widget-',
  types: ['counter']
  callback: function(counter, type, options) {
    var input = document.querySelector(options.target);
    var maxlength = input.getAttribute('maxlength');
    countCharacters(input, counter, maxlength);
  }
});
{% endhighlight %}

Once a mapping has been declared, it can be mapped to the whole DOM using `apply`:

{% highlight javascript %}
declarative.apply('counter').to(document);
{% endhighlight %}

None of this depends on jQuery, but the author has provided examples that demonstrate jQueryUI integration.  [Jasmine](http://pivotal.github.com/jasmine/) tests and examples are included in the project's source.

###jQR

[jQR](http://s01.de/~tox/hgexport/jqr/) (GitHub: [Gottox / jQR](https://github.com/Gottox/jQR), License: _GPL3_) by Enno Boland is a QR Code generator for jQuery.  It's similar to [jquery.qrcode.js](https://github.com/jeromeetienne/jquery-qrcode) by Jerome Etienne, featured previously on DailyJS -- both use the same method name:

{% highlight javascript %}
$('#qrcode').qrcode('Hello World');
{% endhighlight %}

Jerome's plugin includes [qrcode.js](http://d-project.googlecode.com/svn/trunk/misc/qrcode/js/qrcode.js) by Kazuhiko Arase, whereas Enno's plugin is a rewrite that's influenced by Kazuhiko's original code.

###Ender-Carousel

![Ender-Carousel example](/images/posts/ender-carousel.png)

[Ender-Carousel](http://nemeseri.com/ender-carousel/) (GitHub: [nemeseri / ender-carousel](https://github.com/nemeseri/ender-carousel), ender: _ender-carousel_, npm: _ender-carousel_) by Andras Nemeseri is a carousel plugin for [Ender](http://ender.no.de/) that's jQuery-compatible.  The [Ender-Carousel Basic Configuration Tutorial](http://nemeseri.com/ender-carousel/demos/basics.html) has sample HTML, CSS, and JavaScript, which is just `$('.carousel').carousel()`.

###Stapes.js

[Stapes.js](http://hay.github.com/stapes/) (GitHub: [hay / stapes](https://github.com/hay/stapes), License: _MIT_) by Hay Kranen is a small JavaScript MVC framework.  Like other recent takes on MVC, it's based around events and inheritance.  It also works nicely with RequireJS, jQuery, and Zepto.

Stapes uses modules:

{% highlight javascript %}
var Module = Stapes.create();

Module.extend({
  init: function() {
    this.emit('ready');
  }
});
{% endhighlight %}

Modules include data methods for getting and setting attributes:

{% highlight javascript %}
var module = Stapes.create();

module.set({
  name: 'Alex'
, title: 'Mr'
});

module.get('name'); // Alex
{% endhighlight %}

Attributes can be removed, filtered, and updated.  The author has written up full documentation and a rationale behind the project at the [Stapes.js homepage](http://hay.github.com/stapes).
