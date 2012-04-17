---
layout: post
title: "jQuery Roundup: Touch Patents, Standalone Deferred, Mailcheck.js"
author: Alex Young
categories: 
- jquery
- plugins
- touch
- mobile
- promises
- email
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Touch Patents

In [Getting Touchy About Patents](http://blog.jquery.com/2012/04/10/getting-touchy-about-patents/) on the official jQuery blog, the relationship between Apple and W3C's efforts to standardise touch events is discussed.  At the end of the aritcle, there are several calls to action, some of which DailyJS readers can help with:

> We would also encourage the community to experiment with Touch and MSPointer. Play with the APIs, build apps, and provide feedback.

> If you know of any prior art for multi-touch/touch lists, even outside of the Web, please [get in touch with the W3C](http://lists.w3.org/Archives/Public/public-webevents/).

The distinctions between pointer events and touch events are also explored.  This comment in particular is interesting:

> It's conceivable that in a few years developers could use Pointer Events as the only event model for pointers, leaving Mouse Events as a thing of the past.

###Standalone Deferred

[Standalone Deferred](https://github.com/Mumakil/Standalone-Deferred) (License: _MIT_) by Otto Vehviläinen is a standalone implementation of [jQuery.Deferred](http://api.jquery.com/category/deferred-object/).  The `Deferred` object is a chainable API based on the [CommonJS Promises/A](http://wiki.commonjs.org/wiki/Promises/A) specification.

The project is distributed with [Jasmine](http://pivotal.github.com/jasmine/) tests, and features the expected methods including `when`, `then`, `resolve`, and `reject`.  The author has rewritten the library using CoffeeScript, so it's not a quick and dirty extraction from jQuery's code.

###Mailcheck.js

[mailcheck.js](https://github.com/Kicksend/mailcheck) (License: _MIT_) by Derrick Ko and Receivd, Inc., is designed to help reduce email address typos by checking `input` field values against a list of popular email providers:

{% highlight javascript %}
var defaultDomains = ["yahoo.com", "google.com", "hotmail.com", "gmail.com", "me.com", "aol.com", "mac.com",
                      "live.com", "comcast.net", "googlemail.com", "msn.com", "hotmail.co.uk", "yahoo.co.uk",
                      "facebook.com", "verizon.net", "sbcglobal.net", "att.net", "gmx.com", "mail.com"];
var defaultTopLevelDomains = ["co.uk", "com", "net", "org", "info", "edu", "gov", "mil"];
{% endhighlight %}

The author has written a post that claims this [reduced confirmation email bounces by 50%](http://blog.kicksend.com/how-we-decreased-sign-up-confirmation-email-b).
