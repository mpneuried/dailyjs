---
layout: post
title: "Ender Roundup: Radio.js, one.color, Hypher"
author: Rod Vagg
categories: 
- ender
- frameworks
- modules
- libraries
- pubsub
- events
- color
- hyphenation
---

<div class="intro">
You can send in your Ender-related projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
Be sure to also update the <a href="https://github.com/ender-js/Ender/wiki/Ender-package-list">Ender package list</a> page on the <a href="https://github.com/ender-js/Ender/wiki">Ender wiki</a>.
</div>

### Radio.js

[Radio.js](http://radio.uxder.com/) (GitHub: [uxder/Radio](https://github.com/uxder/Radio), Licence: _MIT_, npm / Ender: _radio_) by Scott Murphy is a simple publish / subscribe library with a well-designed chainable API. Radio.js operates through the <code>$.radio()</code> method from within Ender.

{% highlight javascript %}
//create topic called changeTabEvent and subscribe myFunction
$.radio('changeTabEvent').subscribe(myfunction);
//publish to the topic changeTabEvent
$.radio('changeTabEvent').broadcast(data);
//unsubscribe myFunction from the topic changeTabEvent
$.radio('changeTabEvent').unsubscribe(myFunction);
//do all of the above in one line via chaining
$.radio('changeTabEvent').subscribe(myFunction).broadcast(data).unsubscribe(myFunction);
{% endhighlight %}

Event "channels" are created by the main <code>radio()</code> method.
You can then use the three main API calls to interact with the channels:
<code>subscribe()</code>, <code>broadcast()</code> and
<code>unsubscribe()</code>, each able to take different types and
numbers of arguments.

Radio.js will also work as a stand-alone browser library and in node.js.

### one.color

[one.color](https://github.com/One-com/one-color) (GitHub:
[One-com/one-color](https://github.com/One-com/one-color), Licence:
_BSD_, npm / Ender: _onecolor_) by Peter Müller and One.com is an
amazingly comprehensive color toolkit. It implicitly converts between
RGB, HSV, HSL and CMYK color spaces with or without alpha transparency.
Its API is chainable for composing, adjusting, and serializing color
values. A [demo page](http://mntr.dk/one-color/demo/) gives you some
idea of the potential of one.color.

![one.color](/images/posts/onecolor.png)

{% highlight javascript %}
$.color('rgb(102, 76, 230)'). // Can parse CSS color strings
    lightness(+.2, true).     // Implicit conversion to HSL
    red(-.1).                 // Implicit conversion back to RGB
    hex();                    // "#00a6f2"
{% endhighlight %}

one.color will also work as a stand-alone browser library and in node.js.

### Hypher

[Hypher](https://github.com/bramstein/hypher) (GitHub:
[bramstein/hypher](https://github.com/bramstein/hypher), Licence: _BSD_,
npm / Ender: _hypher_) by Bram Stein is a small hyphenation engine
compatible with [Hyphenation.js](http://code.google.com/p/hyphenator/)
language objects.

Hypher adds [soft hyphens](http://en.wikipedia.org/wiki/Soft_hyphen) to
text strings (Unicode: U+00AD, HTML: &amp;#173; or &amp;shy;) according
to language rules as defined in the `patterns` objects. Modern browsers
then use these soft hyphens to break words where wrapping is required,
otherwise they are invisible.

Hypher comes with a large number of
[language patterns](https://github.com/bramstein/hyphenation-patterns/tree/master/patterns)
which are also available in the npm repository as
<code>hyphenation.<i>lang</i></code> (e.g.
<code>hyphenation.en-us</code> or <code>hyphenation.fr</code>). Simply
include <code>hypher</code> and at least one language pattern in your
Ender build.

{% highlight javascript %}
// generates 'Hy|phen|ation is use|ful when cen|ter jus|ti|fy|ing a text.'
// where `|` is a soft hyphen
$('<p>Hyphenation is useful when center justifying a text.</p>')
  .appendTo('body')
  .hyphenate('en-us');
{% endhighlight %}

Hypher is also available as a jQuery plugin and will work as a stand-alone
browser library and in node.js.

### _Tidbits and updates_

Some minor notable items since the last Roundup:

#### Bonzo goes 1.0.0

[Bonzo](https://github.com/ded/bonzo), the DOM manipulation library included in
The Jeesh, has received a lot of minor fixes this week and its test suite has been
significantly expanded, so much that a bump to 1.0.0 seemed appropriate.

#### Minor Qwery update

[Qwery](https://github.com/ded/qwery), the selector engine included in
The Jeesh had some minor performance improvements, particularly for IE8,
and can now be configured to turn off use of native
<code>querySelectorAll</code> if required:
<code>$.configure({ useNativeQSA: false })</code>.

#### Bean does better delegation

[Bean](https://github.com/fat/bean), the event manager included in The
Jeesh, has received some delegation-love, fixing bugs related to
<code>clone()</code> and erroneous <code>event.currentTarget</code>
values.

Bean is also likely to see a change in the implementation of
<code>on()</code> that will make it (mostly) compatible with the
implementations in [Prototype](http://api.prototypejs.org/dom/Event/on/),
[jQuery](http://api.jquery.com/on/) and
[Zepto](https://github.com/madrobby/zepto/blob/master/src/event.js#L145-147).
Further details are available on [GitHub](https://github.com/fat/bean/issues/55).

#### Ender via CDN

After the flurry of recent activity on core Ender modules,
[Dustin Diaz](https://github.com/ded) has updated the The Jeesh and a
more bulky Ender build on S3 this week, so is these builds suit your
needs then point your script tag to one of these CloudFront URLs:

##### The Jeesh ([Qwery](https://github.com/ded/qwery), [Bonzo](https://github.com/ded/bonzo), [Bean](https://github.com/fat/bean), [domReady](https://github.com/ded/domready))
[http://cdn.enderjs.com/jeesh.js](http://cdn.enderjs.com/jeesh.js)
<br>[http://cdn.enderjs.com/jeesh.min.js](http://cdn.enderjs.com/jeesh.min.js)

##### Jeesh++ ([Qwery](https://github.com/ded/qwery), [Bonzo](https://github.com/ded/bonzo), [Bean](https://github.com/fat/bean), [domReady](https://github.com/ded/domready), [Reqwest](https://github.com/ded/reqwest), [Morpheus](https://github.com/ded/morpheus), [Valentine](https://github.com/ded/valentine), [Bowser](https://github.com/ded/domready), [$script.js](https://github.com/ded/script.js))
[http://cdn.enderjs.com/ender.js](http://cdn.enderjs.com/ender.js)
<br>[http://cdn.enderjs.com/ender.min.js](http://cdn.enderjs.com/ender.min.js)

#### Twitter's Bootstrap for Ender

Along with the release of [Bootstrap
v2](http://twitter.github.com/bootstrap/), an Ender compatible version
is now available on npm. Unlike the v1.x port, this new version makes
each plugin available separately so you only need to include the ones
you intend to use in your Ender build.

With all plugins installed, a minimal Ender build for full Bootstrap
functionality comes in at a little under half the size of the equivalent
jQuery Bootstrap.

Further details available on the new
[ender-bootstrap](https://github.com/rvagg/ender-bootstrap) repository.
