---
layout: post
title: "Node Roundup: OneJS, node-pad, CouchPress, node-linq"
author: Alex Young
categories: 
- node
- modules
- databases
- couchdb
- games
- linq
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###OneJS

[OneJS](https://github.com/azer/onejs) (npm: [one](http://search.npmjs.org/#/one)) by Azer Koculu is a command-line utility for converting CommonJS-style packages to browser-friendly JavaScript.  It provides Node-compatible APIs, and the output can also be run with Node if required.

All it needs is a suitable `package.json` file:

{% highlight text %}
$ onejs build package.json bundle.js
{% endhighlight %}

Some of Node's standard library is technically supported by most browsers, and OneJS supports this by providing the `install` command:

{% highlight text %}
$ onejs install assert
{% endhighlight %}

This will create a module in `./node_modules/assert/` with a `package.json` and a OneJS version of Node's `assert` module.

Azer said he created this project for [Multiplayer Chess](http://multiplayerchess.com/), which is a web-based chess game that supports up to 25 players.

###node-pad

Do you like [video games](http://www.idlethumbs.net/), or at least the DualShock 3 controller?  [node-pad](https://github.com/andtan/node-pad) (npm: [node-pad](http://search.npmjs.org/#/node-pad)) by Andre Tangen is a game controller library that currently supports Sony's controller:

{% highlight javascript %}
controller.rthumb.on('move', function(event) {
  player.updateCameraDirection({
    x: event.x
  , y: event.y
  });
});
{% endhighlight %}

The author has included [Jasmine](http://pivotal.github.com/jasmine/) tests, and the project depends on Andre's [node-hid](https://github.com/andtan/node-hid) fork which is built using `node-waf`.

###CouchPress

[CouchPress](http://couchpress.nodester.com/) (GitHub: [koostudios / couchpress](https://github.com/koostudios/couchpress), License: _MIT_, npm: [couchpress](http://search.npmjs.org/#/couchpress)) by Alexander Yuen is a CouchDB and Express-based publishing platform.  It's currently very simple, but includes a minimal administration interface, a WYSIWYG editor, and the beginnings of a theming engine.

The author is planning on adding a Markdown editor, and support for plugins.  He's very open to suggestions, so if you're interested in supporting a Node-based CMS then try getting in touch with him.  Contact details are available in his 0.1 announcement post: [CouchPress: Announcing Version 0.1](http://couchpress.nodester.com/view/announcing-version-0.1).

###node-linq

[node-linq](https://github.com/wearefractal/node-linq) (License: _MIT_, npm: [node-linq](http://search.npmjs.org/#/node-linq)) from Fractal is a LINQ implementation for node:

{% highlight coffeescript %}
{LINQ} = require 'node-linq'
fs = require 'fs'
{extname} = require 'path'

files = ['test.txt', 'choni.txt', 'legacy.zip', 'secrets.txt', 'etc.rar']

arr = new LINQ(files)
.Where((file) -> extname(file) is 'txt')
.OrderBy((file) -> fs.lstatSync(file).mtime)
.ToArray()

# arr == [ 'choni.txt',  'text.txt', 'secrets.txt']
{% endhighlight %}

It also supports Asynchronous LINQ.  The readme has examples, and there are [Mocha](http://visionmedia.github.com/mocha/) tests.
