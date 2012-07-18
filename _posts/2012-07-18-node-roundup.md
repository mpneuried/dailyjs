---
layout: post
title: "Node Roundup: Markdox, node-authenticate, node-codein"
author: "Alex Young"
categories: 
- node
- modules
- debugging
- markdown
- documentation
- authentication
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Markdox

[Markdox](https://github.com/cbou/markdox) (License: _MIT_, npm: [markdox](http://search.npmjs.org/#/markdox)) by Charles Bourasseau is a documentation generator based on [Dox](https://github.com/visionmedia/dox) (which TJ changed to output JSON only) that produces Markdown.  It can be used in the shell, or programatically.

This is a straightforward way of generating API documentation that works with services that support Markdown, like GitHub.

###authenticate-pam

[authenticate-pam]() (License: _MIT_, npm: [authenticate-pam](http://search.npmjs.org/#/authenticate-pam)) by Damian Kaczmarek is an asynchronous [PAM](http://en.wikipedia.org/wiki/Pluggable_authentication_module) authentication addon.  It uses libpam to authenticate users with a simple, idiomatic Node API:

{% highlight javascript %}
var pam = require('authenticate-pam');
pam.authenticate('myusername', 'mysecretpassword', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Authenticated!');
  }
});
{% endhighlight %}

###node-codein

[node-codein](https://github.com/ketamynx/node-codein) (License: _MIT_, npm: [node-codein](http://search.npmjs.org/#/node-codein)) by "ketamynx" is a Windows-friendly Node interface based on WebKit Inspector.  It can display objects graphically as trees, and can also execute code.

Although it looks like a debugger interface, it seems like the author intends for it to be used as a friendly alternative to the REPL.
