---
layout: post
title: "jQuery Roundup: jQuery-CreditCardValidator, pow.js, idom"
author: Alex Young
categories: 
- jquery
- plugins
- css
- validation
- templating
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###jQuery-CreditCardValidator

[jQuery-CreditCardValidator](http://paweldecowski.github.com/jQuery-CreditCardValidator/) (GitHub: [PawelDecowski / jQuery-CreditCardValidator](https://github.com/PawelDecowski/jQuery-CreditCardValidator/), License: _CC BY-SA 3.0_) by Pawel Decowski is a nicely presented credit card validator:

{% highlight javascript %}
$('#cc_number').validateCreditCard(function(result) {
  alert('CC type: ' + result.card_type
    + '\nLength validation: ' + result.length_valid
    + '\nLuhn validation: + result.luhn_valid');
});
{% endhighlight %}

All the popular cards are supported, including debit cards.

###pow.js

![pow.js](/images/posts/pow-sunburst.png)

[pow.js](http://obadger.com/pow/) (GitHub: [greim / pow.js](https://github.com/greim/pow.js), License: _MIT_) by Greg Reimer is an "algorithmic sunburst generator".  It's a bit of fun with CSS, but I really liked the way the plugin is presented by combining the API options with form fields to create a self-documenting interface.

###idom

[idom](http://idibidiart.github.com/idi.bidi.dom/) (GitHub: [idibidiart / idi.bidi.dom](https://github.com/idibidiart/idi.bidi.dom), License: _BSD_) by Marc Fawzi is a data-driven templating library.  It caches elements that have an `idom-node-id` attribute, and will insert values from JSON where the `idom$` prefix has been used.

This project extends built-in prototypes to make the syntax that the author wants possible, and adds some jQuery plugin methods if it's available.  The author has some interesting ideas, so I'm hoping to see a version that works more like jQuery (avoiding using native elements).
