---
layout: post
title: "Krasota.js, Drink, Limit.js"
author: Alex Young
categories: 
- libraries
- cli
- node
---

###Krasota.js

[Krasota.js](http://veged.github.com/krasota.js/) (GitHub: [veged / krasota.js](https://github.com/veged/krasota.js), npm: [krasota](http://search.npmjs.org/#/krasota)) by Sergey Berezhnoy is a modular source beautifier that uses grammars written with a [fork of OMeta](https://github.com/veged/ometa-js/).  It can force semicolons, join or split `var` statements, or even remove trailing whitespace.

It can be used as a Node module, or as a command-line utility:

{% highlight text %}
$ krasota -i tests/join-vars.js -b krasota/lib/beautifiers/trailing-whitespaces -b krasota/lib/beautifiers/join-vars
{% endhighlight %}

Custom beautifiers can also be called from the command-line by using the `-b` switch with a file name.

###Drink

[Drink](http://nijikokun.github.com/drink/) (GitHub: [Nijikokun / drink](https://github.com/Nijikokun/drink), License: _AOL/MIT_, npm: [drink](http://search.npmjs.org/#/drink)) by Nijiko Yonskai is a wrapper around `process` that helps write periodic console utilities.  The API is themed around "coffee" -- not CoffeeScript, but the brewed bean beverage, which is confusing because the author's examples are written in CoffeeScript.

A session is started and potentially kept alive by passing `drink` a `process` object.  Calling `sip` will pass data to `stir` without line breaks.  Listeners for single character input can be added by calling `onTap`.  The author suggests this could be used to keep any kind of session from dying, so it could be used with something like an IRC client.

###Limit.js

[Limit.js](http://limit.gotsomething.com/) (GitHub: [m-gagne / limit.js](https://github.com/m-gagne/limit.js), License: _MIT_) by Marc Gagne is a reusable event debouncer.  I've written similar code myself to sensibly handle certain client-side UI elements, and events like window resizing.

Marc's implementation works by extending `Function.prototype`.  There's an example on jsFiddle that illustrates the usage: [Limit.js demo](http://jsfiddle.net/zR5jV/1/).

{% highlight javascript %}
$(document).bind('mousemove', function(e) {
    $("#debounce").children().last().text(debounceCalls++);
}.debounce(150)); // debounce with a 150 millisecond limit

$(document).bind('mousemove', function(e) {
    $("#throttle").children().last().text(throttleCalls++);
}.throttle(150)); // throttle with a 150 millisecond limit
{% endhighlight %}
