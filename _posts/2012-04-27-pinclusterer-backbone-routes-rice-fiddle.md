---
layout: post
title: "PinClusterer, Backbone.Routes, Rice, Fiddle.js"
author: Alex Young
categories: 
- node
- geo
- maps
- backbone.js
- databases
---

###PinClusterer

![PinClusterer](/images/posts/pinclusterer.png)

[PinClusterer](http://rtsinani.github.com/PinClusterer/) (GitHub: [rtsinani / PinClusterer](https://github.com/rtsinani/PinClusterer)) by Arti Sinani is a library for clustering pins on Bing maps.  Pins are grouped together based on a grid size setting:

{% highlight javascript %}
var pinClusterer = new PinClusterer(map, {
  gridSize: 40
});
pinCluster.cluster(data);

pinCluster.setOptions({ gridSize: 30 });
pinCluster.cluster();
{% endhighlight %}

The pin settings are all configured the same way as a standard `Microsoft.Maps.Pushpin`.  The author has included a stylesheet that will create circular icons with a shadow and gradient.

###Backbone.Routes

[Backbone.Routes](https://github.com/siong1987/backbone_routes) (License: _MIT_) by Teng Siong Ong is an alternative API for routing in Backbone.js.  It helps centralise routes, and can trigger multiple routes for a given URL.

It seems more like the way Rails routing works, and the author indicates he's been influenced by Rails in the project's source code.  Here's an example:

{% highlight coffeescript %}
Backbone.Routes.prefix = YourApp.Routers

Backbone.Routes.map
  '/':
    'NavbarRouter': 'index'
    'HomeRouter': 'index'

{% endhighlight %}

###Rice

[Rice](http://rice.jscraft.org/) (License: _MIT_) by Yuri Neves is a database library that uses the Web SQL Database API.  Although Firefox supports Indexed DB instead, this API can be used with [PhoneGap](http://phonegap.com/).

Usage looks like this:

{% highlight javascript %}
rice.use('myDb')
  .select({ from: 'People', where: { age: 21 } }, function(result) {
    result.each(function(row) {
      $('<li>').html(row.name).appendTo('#myList');
    });
  });
{% endhighlight %}

The source is available here: [rice.jscraft.org/src/rice.js](http://rice.jscraft.org/src/rice.js).

###Fiddle.js

[Fiddle.js](https://github.com/crcn/fiddle.js) (License: _MIT_, npm: [fiddle](http://search.npmjs.org/#/fiddle)) by Craig Condon is a MongoDB-inspired object manipulation library.  Operators like `$inc`, `$set`, `$unset`, and more are supported.

The `fiddle` method itself accepts a modifier object, and then filters and targets.  The targets represent the data to modify:

{% highlight javascript %}
// Increment age by one
var fiddled = fiddle({ $inc: { age:1 } }, null, { name: 'Craig', age: 21 });
{% endhighlight %}

The results returned by `fiddle` can be filtered and otherwise iterated over.
