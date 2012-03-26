---
layout: post
title: "Gazel, Heroku Node Versions, nios"
author: Alex Young
categories:
- node
- browser
- hosting
- indexeddb
- database
- iOS
---

###Gazel

[Gazel](http://gazeljs.org/) (GitHub: [matthewp / gazel](https://github.com/matthewp/gazel), License: _MPL 2.0_) by Matthew Phillips is a key-value store for browsers, based on Redis.  The API is similar to Redis, and has a friendly chainable syntax:

{% highlight javascript %}
var client = gazel.createClient();

client.on('error', function(err) {
  console.error('Error:', err);
});

client.multi()
  .set('key', 1)
  .incrby('key', 10)
  .get('key')
  .exec(function(results) {
    var key = results.pop()[0];
  });
{% endhighlight %}

It uses [IndexedDB](http://www.w3.org/TR/IndexedDB/) for storage, and will attempt to use vendor-specific versions where available.  The author has written a sizeable suite of Mocha tests that can be run in a browser.

###Heroku Node Version Support

Heroku now permit Node and npm versions to be requested using your application's `package.json` file:

{% highlight javascript %}
{
  "name": "myapp",
  "version": "0.0.1",
  "engines": {
    "node": "0.6.x",
    "npm":  "1.0.x"
  }
}
{% endhighlight %}

The available versions are listed here:

* [Node.js version manifest](http://heroku-buildpack-nodejs.s3.amazonaws.com/manifest.nodejs)
* [npm version manifest](http://heroku-buildpack-nodejs.s3.amazonaws.com/manifest.npm)

Heroku defaults to their oldest version of Node 0.4, so it's probably a good idea to specify the latest 0.6 version.

Read more here: [Specifying a version of Node.js / npm](http://devcenter.heroku.com/articles/nodejs-versions)

###nios

![Node iOS](/images/posts/node-ios.png)

[nios](https://github.com/seppo0010/nios) by Sebastian Waisbrot is a Node port for iOS.  The objective is to allow Node projects to run on an iOS device with minimal modifications.  It uses [WebViewJavascriptBridge](https://github.com/marcuswestin/WebViewJavascriptBridge) to run Node's libraries.

The example that comes with the project runs a Node HTTP server within a native iOS app.
