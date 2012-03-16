---
layout: post
title: "Augmented Reality in the Browser, Springbase, jQRange"
author: Alex Young
categories: 
- node
- webgl
- jquery
- ranges
---

### Augmented Reality in the Browser

In [Augmented Reality in the Browser](http://learningthreejs.com/blog/2012/03/12/augmented-reality-in-the-browser/), Jerome Etienne discusses [WebRTC](http://www.webrtc.org/running-the-demos) and how to combine WebGL with a live video feed -- all in a browser.

To simplify this process, Jerome has created [tquery.jsartoolkit](https://github.com/jeromeetienne/tquery.jsartoolkit), which uses his [tquery](https://github.com/jeromeetienne/tquery) library to wrap around [JSARToolKit](https://github.com/kig/JSARToolKit/).  JSARToolKit, by Ilmari Heikkinen, is the core of the augmented reality functionality.

### Springbase

[Springbase](http://www.springbase.com/node-driver/) (GitHub: [springbase / node-springbase](https://github.com/springbase/node-springbase), npm: _springbase_) have released a Node driver for their relational data store.  This is a hosted database solution that includes a web data browser and management interface, and even SQL support.

The API is event based:

{% highlight javascript %}
var springbase = require('springbase')
  , conn
  , query;

conn = new springbase.data.Connection({
  application: '1GmTdS2ayPts',
  username: '<email>',
  password: '<password>'
});

query = conn.getQuery('qryStoreInventoryByZipCode');
query.on('ready', function() {
  var reader = query.execute({ zipCode: 94611 });
  reader.on('row', function(row) {
    console.log('Found store:', row);
  });
});
{% endhighlight %}

They're currently offering a free account with 100 MB storage and 1 GB per month bandwidth (I get no remuneration for mentioning this).

### jQRange

[jQRange](http://s01.de/~tox/hgexport/jqrange/) (GitHub: [Gottox / jQRange](https://github.com/Gottox/jQRange)) by Enno Boland attempts to help deal with W3C and Internet Explorer ranges.  The current selection can be obtained with `$.range('^')`, and ranges can be spanned with `$(selector).range()`.

The plugin even supports regular expressions, so any range matching a given pattern can be spanned.  The author has included QUnit tests, and a lot more functionality is documented in the readme file.
