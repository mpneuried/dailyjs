---
layout: post
title: "jQuery Roundup: cookieConsent, Timing, Tagit"
author: Alex Young
categories: 
- jquery
- jqueryui
- cookies
- timers
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###jquery.cookieConsent

![The EU doesn't understand cookies](/images/posts/eu-cookies.png)

[jquery.cookieConsent](https://github.com/phuu/jquery.cookieConsent) (License: _MIT_) by Tom Ashworth is a drop-in plugin for satisfying new EU policies regarding cookies.  By running `$.cookieConsent()`, this plugin will display a banner.  Once the banner is clicked, a cookie called `cookieConsent` will be set so the banner won't need to annoy the visitor again.

The irony of setting a cookie to hide a message informing users about the use of cookies is amusing, but that's not Tom's fault so much as the nature of the beast.

###Timing

[Timing](http://creativecouple.github.com/jquery-timing/) (GitHub: [creativecouple / jquery-timing](https://github.com/creativecouple/jquery-timing), License: _MIT_) by Peter Liske is a wrapper around `setTimeout` and other timer functions.  It has a chainable API, so it's easy to create complex scenarios without too much code:

{% highlight javascript %}
$.wait(1000,'myQueue').now(first).wait(1000).now(second);
{% endhighlight %}

###Tagit

[Tagit](http://webspirited.com/tagit/) (GitHub: [hailwood / jQuery-Tagit](https://github.com/hailwood/jQuery-Tagit), License: _CC BY-SA 3.0_) by Matthew Hailwood uses jQuery UI's [Autocomplete](http://jqueryui.com/demos/autocomplete/) to present an alternative way of entering lists.  Features include:

* Automatically adding partially typed tags if the control loses focus
* Friendly behaviour when deleting tags
* Sortable items using drag and drop

The sortable version only requires a single option to work:

{% highlight javascript %}
$(selector).tagit({ tagSource: ['one', 'two', 'three'], sortable: 'handle' });
{% endhighlight %}

It's quite easy to theme this plugin, and the author has kindly bundled quite a few CSS files.
