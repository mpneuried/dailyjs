---
layout: post
title: "Node Roundup: Blade, HighKick, Spellcheck"
author: "Alex Young"
categories: 
- node
- modules
- addons
- templating
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Blade

[Blade](https://github.com/bminer/node-blade) ([License](https://raw.github.com/bminer/node-blade/master/LICENSE.txt), npm: [blade](http://npmjs.org/package/blade)) by Blake Miner is a Jade-inspired template compiler:

> In Blade, there are no "mixins" or partial templates. There are only functions, and they work just like regular JavaScript functions that you've come to know and love. 

It's based on [PEG.js](http://pegjs.majda.cz/) and [UglifyJS](https://github.com/mishoo/UglifyJS).  I think it's extremely interesting to see a Jade-like PEG (parsing expression grammar), which is in [blade-grammer.pegjs](https://github.com/bminer/node-blade/blob/master/lib/parser/blade-grammer.pegjs).

The functions that Blade produces take a callback that gets an error and HTML, so in that sense the API feels idiomatic:

{% highlight javascript %}
tmpl({
    'nav': {
        'Home': '/',
        'About Us': '/about',
        'Contact': '/contact'
    }
}, function(err, html) {
    if(err) throw err;
    console.log(html);
});
{% endhighlight %}

The author has also included Express middleware, client-side support, and there are some simple unit tests as well.

###HighKick

[HighKick](https://github.com/azer/highkick) (npm: [highkick](http://npmjs.org/package/highkick)) by Azer Koculu is a lightweight test runner.  It'll take a module and execute any method that starts with `test`, which is more similar to the CommonJS Unit Testing specification than most of the popular Node test frameworks.

Functions can be run before and after each test, or the entire module.  There's also an asynchronous mode for running tests asynchronously.

Azer has been using it to test his own modules, so you can check out some of his examples on GitHub.

###Spellcheck

[Spellcheck](https://github.com/mscdex/spellcheck) (License: _MIT_, npm: [spellcheck](http://npmjs.org/package/spellcheck)) by Brian White is an asynchronous [Hunspell](http://hunspell.sourceforge.net/) addon.  This is the same library that OpenOffice uses, as well as Chrome.

You'll need dictionaries and affix files to get it to work, and the author has provided a link to these at the [OpenOffice Wiki, under Dictionaries](http://wiki.services.openoffice.org/wiki/Dictionaries).
