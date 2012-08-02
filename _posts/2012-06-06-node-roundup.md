---
layout: post
title: "Node Roundup: Boxcars, password-reset, Kraken"
author: "Alex Young"
categories: 
- node
- modules
- express
- middleware
- images
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Boxcars

[Boxcars](https://github.com/azer/boxcars) (npm: [boxcars](http://npmjs.org/package/boxcars)) by Azer Koçulu is a library for fetching remote or local resources:

{% highlight javascript %}
boxcars('http://google.com', '/var/log/foo.log', 'http://github.com')(function(error, homepages) {
  // Prints the homepage of google.com
  console.log(homepages[0]);
});
{% endhighlight %}

It can also be used to define collections of resources, or cache them through preloading.  The author has included tests written with his _highkick_ and _lowkick_ modules.

###password-reset

[password-reset](https://github.com/substack/node-password-reset) (License: _MIT/X11_, npm: [password-reset](http://npmjs.org/package/password-reset)) by James Halliday is middleware for dealing with password resets that will work with Express.

It's built with James' [pony](http://npmjs.org/package/pony) module which sends emails, and a full example including the required Express routes is included in the project's documentation.

###Kraken

[Kraken](https://github.com/matylla/node-kraken) (License: _MIT_, npm: [kraken](http://npmjs.org/package/kraken)) by Przemek Matylla is a client for the [Kraken Web Optimizer](http://kraken.io/).

Image URLs or uploads can be optimised using this module, and a [Kraken Account](http://kraken.io/developers/) is required to use it.

Kraken itself was built with Node, and there are a few details about their implementation on the [Kraken About page](http://kraken.io/about).
