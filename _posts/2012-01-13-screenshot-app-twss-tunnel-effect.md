---
layout: post
title: "Screenshot App, twss.js, WebGL Tunnel Tutorial"
author: Alex Young
categories: 
- node
- webgl
- graphics
---

### Screenshot App

[Screenshot App](https://github.com/visionmedia/screenshot-app) (License: _MIT_) by TJ Holowaychuk is an Express app that uses [PhantomJS](http://www.phantomjs.org/) to generate screenshots of web pages.  It's a small web service with a simple API that'll return a PNG when called with a URL:

{% highlight text %}
curl -# http://localhost:3000/example.com > example.com.png
{% endhighlight %}

This is a nice little example of an Express app.  Like TJ's other public apps, this one is structured around a lightweight `app.js` file, and then the HTTP methods are split into files in `routes/`.  TJ defines the Express `app` object as a global, which means it's visible inside the routes modules.  There's a lot to learn here if you're an eager Express developer.

### twss.js

Earlier this week a reader sent in [twss.js](https://github.com/DanielRapp/twss.js) (npm: _twss_, License: _MIT_) by Daniel Rapp, a classifier for Node that determines if a string can be replied with "that's what she said".  I actually took a look at how it works, and rather than being a simple joke module, the author has actually attempted to build a [K-fold cross-validation](http://en.wikipedia.org/wiki/Cross-validation_%28statistics%29#K-fold_cross-validation) classifier.  What's even more hilarious is the module currently has 457 GitHub watchers.

The module includes data, so it'll classify things out of the box:

{% highlight javascript %}
twss.is("You're not going fast enough!");   // true
{% endhighlight %}

If you're interested in classifiers, there are a few for Node -- we've featured [brain](https://github.com/harthur/brain) (npm: _brain_, License: _MIT_) by Heather Arthur before.

### WebGL Tunnel Tutorial

I recently mentioned a [WebGL tunnel effect](http://jeromeetienne.github.com/tunnelgl/) created by Jerome Etienne.  He's now published his tutorial that explains how the demo works, in [Tunnel Effect for Your Demo](http://learningthreejs.com/blog/2012/01/11/tunnel-effect/).  By "demo" the title is referring to [demoscene](http://en.wikipedia.org/wiki/Demoscene) demos.

Amazingly, the source for the effect is only 20 lines.
