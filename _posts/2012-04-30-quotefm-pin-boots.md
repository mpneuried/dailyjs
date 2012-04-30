---
layout: post
title: "quotefm-node, Pin, Boots"
author: Alex Young
categories: 
- node
- modules
---

###quotefm-node

[quotefm-node](https://github.com/Gottox/quotefm-node) (License: _MIT_, npm: [quotefm](http://search.npmjs.org/#/quotefm)) by Enno Boland is a module for working with the [QUOTE.fm](http://quote.fm/) API.  It can be used to get recommendations, articles, and user information back from the service.

The module includes some good documentation, and the [QUOTE.fm API documentation](http://quote.fm/labs/documentation/index) is also easy to follow as well.

###Pin

[Pin](https://github.com/vesln/pin) (License: _MIT_, npm: [pin](http://search.npmjs.org/#/pin)) by Veselin Todorov is a small module for uptime monitoring:

{% highlight javascript %}

pin('http://google.com/')
  .interval(10000) // in ms
  .up(function(response) {
      console.log(response);
   })
  .down(function(error, response) {
    console.log(error, response);
  });
{% endhighlight %}

The chainable API also allows HTTP headers to be set.

###Boots

[Boots](http://projects.jga.me/boots/) (GitHub: [jgallen23 / boots](https://github.com/jgallen23/boots), npm: [boots](http://search.npmjs.org/#/boots)) by Greg Allen is a command-line utility for building custom [Bootstrap](http://twitter.github.com/bootstrap/) asset files.

If `.less` files are passed to it then a CSS file will be generated:

{% highlight text %}
boots --js bootstrap-modal.js,bootstrap-tooltip.js --css modals.less,tooltip.less -o public/bootstrap
{% endhighlight %}
