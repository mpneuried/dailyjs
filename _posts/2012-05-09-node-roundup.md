---
layout: post
title: "Node Roundup: Video Gallery, Restie, xml-literals, Revised Console"
author: "Alex Young"
categories: 
- node
- modules
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###App: Video Gallery

![Video Gallery screenshot](/images/posts/express-video-gallery.png)

[Video Gallery](http://bits.meloncholy.com/node-video-gallery/) (GitHub: [meloncholy / node-video-gallery](https://github.com/meloncholy/node-video-gallery), License: _MIT_) by Andrew Weeks is a Metro-inspired video gallery written with Express, Jade, and MySQL.

It's got JSON configuration files, separated routes, and lots of fancy front-end effects.  There's a blog post about it here: [Node.js Video Gallery](http://meloncholy.com/blog/node-js-video-gallery/).

###Restie

[Restie](https://github.com/vdemedes/restie) (License: _MIT_, npm: [restie](http://npmjs.org/package/restie)) by Vadim Demedes is an ORM that behaves the same in Node and browsers.  Models can be declared then manipulated with the familiar [CRUD](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete) methods, in a similar fashion to Backbone.js.

{% highlight javascript %}
var Post = Restie.define('Post');

Post.all(function(err, posts) {
  // GET /posts/
});

 
Post.find_by_id(1, function(err, post) {
  // DELETE /posts/1
  post.remove(function(err) {
    // Post removed
  });
});
{% endhighlight %}

The author has included tests that run in both browsers and Node.

###xml-literals

[xml-literals](https://github.com/laverdet/js-xml-literal) (npm: [xml-literals](http://npmjs.org/package/xml-literals)) by Marcel Laverdet adds Node support for [E4X](http://en.wikipedia.org/wiki/ECMAScript_for_XML)-style XML literals:

{% highlight text %}
var anchor = <a href={href}>Hello</a>;
{% endhighlight %}

To mix XML and JavaScript this way, the xml-literals module has to register a file extension first, then files that contain XML literals can be loaded.  The following example would make subsequent `require` calls able to load files that include XML literals:

{% highlight javascript %}
require('xml-literals').register('js');

// This file contains XML literals
require('my-xml-literal-example');
{% endhighlight %}

###Revised Console

[Revised Console](https://github.com/tblobaum/rconsole) (License: _MIT_, npm: [rconsole](http://npmjs.org/package/rconsole)) by Thomas Blobaum provides C bindings for syslog and makes the `console` methods log to syslog.  This would log to `/var/log/messages` (depending on the OS):

{% highlight javascript %}
require('rconsole')
console.log('hello world')
{% endhighlight %}

The author has included an example of using Express' `express.logger` to log to syslog, which strikes me as potentially useful for production web apps.
