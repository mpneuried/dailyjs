---
layout: post
title: "Spaceship Pilot, CARPE Slider, CasperJS, lazyload"
author: Alex Young
categories: 
- node
- iOS
- images
- games
---

###Spaceship Pilot

![Spaceship Pilot screenshot](/images/posts/spaceship-pilot.png)

[Spaceship Pilot](http://www.webdigi.co.uk/fun/space/) from Webdigi is a browser-based game that's controlled by tilting an iOS device.  A QR code can be used to easily launch the site that's used to collect accelerometer data -- the Google iOS app is a relatively painless way of doing this (using the image search).

The authors have written a [blog post](http://www.webdigi.co.uk/blog/2012/using-an-ios-device-to-control-a-game-on-your-browser/) about the client and server-side code -- the server uses Node and [Socket.IO](http://socket.io/).

###CARPE Slider

[CARPE Slider](http://carpe.ambiprospect.com/slider/drafts/v2.0.6/) by Tom Hermansson Snickars is a cross-browser slider widget with no dependencies.  It doesn't require any image files, and works well with both the mouse and keyboard.

When used with HTML5, data attributes can be used to configure sliders without extra JavaScript.  Multiple sliders can safely coexist on a single page as well.

The project is distributed free for open source or non-commercial projects, otherwise it costs $99 for a license.

###CasperJS

[CasperJS](http://casperjs.org/) (GitHub: [n1k0 / casperjs](https://github.com/n1k0/casperjs), License: _MIT_) by Nicolas Perriault is a testing tool for [PhantomJS](http://www.phantomjs.org/).

Using PhantomJS seems like the ideal solution for creating advanced browser-like scripting environments, and CasperJS has an appealing API:

{% highlight javascript %}
casper.start('http://google.fr/', function() {
  // search for 'casperjs' from google form
  this.fill('form[action="/search"]', { q: 'casperjs' }, true);
});

casper.then(function() {
  // aggregate results for the 'casperjs' search
  links = this.evaluate(getLinks);
  // now search for 'phantomjs' by filling the form again
  this.fill('form[action="/search"]', { q: 'phantomjs' }, true);
});
{% endhighlight %}

The author has written a tutorial including installation instructions on the CasperJS homepage, and the project includes tests.

###lazyload

[lazyload](https://github.com/fasterize/lazyload) (License: _MIT_) by Vincent Voyer and Stéphane Rios is an image loader that uses a temporary base64 image:

{% highlight javascript %}
<img
  data-src="real/image/src.jpg"
  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
  onload="lzld(this)" />
{% endhighlight %}

The authors opted to use the inline `onload` so each image effectively registers itself with the lazy loading system, rather than calling something like `getElementsByTagName` or `querySelectorAll`.
