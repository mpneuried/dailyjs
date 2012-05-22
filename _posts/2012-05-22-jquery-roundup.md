---
layout: post
title: "jQuery Roundup: jQuery UI 1.9 Milestone 8, Chico UI, Complexify"
author: Alex Young
categories: 
- jquery
- jqueryui
- libraries
- security
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###jQuery UI 1.9 Milestone 8

[jQuery UI 1.9 Milestone 8](http://blog.jqueryui.com/2012/05/jquery-ui-1-9-milestone-8-position/) has been released.  The major change in this release is a [redesign of the Position utility script](http://wiki.jqueryui.com/w/page/12138026/Position).

There are also [bug fixes](http://bugs.jqueryui.com/query?resolution=fixed&milestone=1.9&group=component&col=id&col=summary&col=type&col=priority&report=20&order=priority) and accessibility improvements.

###Chico UI

![Chico banner](/images/posts/chico.png)

[Chico UI](http://chico-ui.com.ar/) (GitHub: [mercadolibre / chico](https://github.com/mercadolibre/chico), License: _MIT _) from MercadoLibre is a set of UI widgets built with jQuery.  The project includes demos with documentation for each widget, I've selected a few interesting ones here but there are a lot more:

* [Auto Complete](http://chico-ui.com.ar/widgets/auto-complete)
* [Calendar](http://chico-ui.com.ar/widgets/calendar)
* [Form](http://chico-ui.com.ar/widgets/form)

There's also [Chico Mesh](http://chico-ui.com.ar/mesh) for creating CSS column-based layouts, and [some tutorials on Chico](http://chico-ui.com.ar/guides).

The mix of JavaScript widgets and reusable layout CSS reminds me of a combination of jQuery UI and [Bootstrap](http://twitter.github.com/bootstrap/).  I haven't seen Chico before, but the authors have been committing frequently to the GitHub project over the last two years, so at this point it seems relatively mature.

###Complexify

![Complexify](/images/posts/complexify.png)

[Complexify](http://danpalmer.me/jquery-complexify) (GitHub: [danpalmer / jquery.complexify.js](https://github.com/danpalmer/jquery.complexify.js), License: _WTFPL v2_) by Dan Palmer is a password complexity checker.  It's used like this:

{% highlight javascript %}
$('#password').complexify({ minimumChars: 8 }, function(valid, complexity) {
  // valid: Password is the right length
  // complexity: Password complexity rated as a percentage
});
{% endhighlight %}

The algorithm Dan's written to rate complexity is based on blocks of Unicode:

> The rationale behind this is that in an attacker were wanting to include Japanese passwords in his attack, he/she may choose to include the Hiragana set in his/her attack, but not the Katakana set. Complexify divides Unicode into 94 appropriately grouped sets.

The main driver behind the algorithm is to try to distinguish between complex passwords, and passwords that have the illusion of complexity due to security policies.
