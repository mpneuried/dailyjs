---
layout: post
title: "Krisztian Toth's JavaScript Games, XRegExp, PlastronJS"
author: Alex Young
categories: 
- games
- closure-library
- regex
---

###Krisztian Toth's JavaScript Games

![JavaScript Boulder Dash](/images/posts/boulderdash-krissz.png)

[Krisztian Toth](http://krissz.hu) makes browser-based conversions of retro games.  [JavaScript Boulder Dash](http://boulderdash.krissz.hu/) is an extremely elaborate version of the classic Boulder Dash which includes a level creator.  Krisztian has made the source available (in non-minimised form) here:

* [jDash.js](http://boulderdash.krissz.hu/source/jDash.js): Animation handling, keyboard
* [jDashSound.js](http://boulderdash.krissz.hu/source/jDashSound.js): Krisztian's own sound library
* [jDashCkit.js](http://boulderdash.krissz.hu/source/jDashCkit.js): Level editor
* [jDashGame.js](http://boulderdash.krissz.hu/source/jDashGame.js): The actual game engine -- loading and drawing caves, timing, etc.
* [jDashObjects.js](http://boulderdash.krissz.hu/source/jDashObjects.js): The game's objects and their behaviour

This is built on jQuery 1.7.1, and provides some interesting insights for those looking for guidance with game engine architecture.

![Wizard of Wor](/images/posts/wizard-of-wor.png)

He's also ported the Commodore 64 version of [Wizard of Wor](http://wizardofwor.krissz.hu/), with source available in [jWoW.js](http://wizardofwor.krissz.hu/source/jWoW.js).

Krisztian builds these games with a manifesto of sorts, where he tries to create addictive gaming worlds by writing code that aims to make the illusion as solid as possible, without distracting the user with overly technical solutions.  I definitely enjoyed playing his version of Boulder Dash, even though I'm actually pretty bad at it (I blame my keyboard, I need a controller!)

###XRegExp

[XRegExp](http://xregexp.com/) (GitHub: [slevithan / XRegExp](https://github.com/slevithan/XRegExp), License: _MIT_, npm: _xregexp_) by Steven Levithan is an impressive regular expression library that works in Node and even Internet Explorer 5.5.  Regular expressions must be represented as strings to make Steven's extensions possible, but the examples are compelling:

{% highlight javascript %}
// Using named capture and flag x (free-spacing and line comments)
var date = XRegExp('(?<year>  [0-9]{4}) -?  # year  \n\
                    (?<month> [0-9]{2}) -?  # month \n\
                    (?<day>   [0-9]{2})     # day   ', 'x');

// XRegExp.exec gives you named backreferences on the match result
var match = XRegExp.exec('2012-02-22', date);
match.day; // -> '22'

// In fact, all XRegExps are RegExps and work perfectly with native methods
date.test('2012-02-22'); // -> true
{% endhighlight %}

Native prototypes can be extended to use XRegExp, if required, by calling `XRegExp.install('natives')`.

Optional Unicode libraries are included which can be used to add support for several useful expressions:

{% highlight javascript %}
XRegExp('^\\p{Hiragana}+$').test('ひらがな'); // -> true
{% endhighlight %}

XRegExp includes a whole load more, which is documented on both the project's website at [xregexp.com](http://xregexp.com/) and the [XRegExp readme](https://github.com/slevithan/XRegExp).

###PlastronJS

[PlastronJS](https://github.com/rhysbrettbowen/PlastronJS) (License: _MIT_) by Rhys Brett-Bowen is a new framework built on the [Google Closure](https://developers.google.com/closure/) Library for use with the Closure Compiler:

> PlastronJS though is not just an MVC framework, it's the start of an application framework. I've decided to include a mediator and a store with the package which will hopefully help in the construction of medium to large size applications.

Models can be created by inheriting from the `mvc.Model` class:

{% highlight javascript %}
goog.require('mvc.Model');

/**
 * @constructor
 * @inheritDoc
 */
var Person = function(firstName, lastName) {
    goog.base(this, {attr: {
        'firstName': firstName,
        'lastName': lastName
    }});
    this.meta('name', ['firstName','lastName'], function(firstName, lastName) {
        return lastName + ", " + firstName;
    });
};
goog.inherits(Person, mvc.Model);
{% endhighlight %}

Getters and setters are available using the `model.get` and `model.set` methods.  Exceptions are used to handle validation errors -- full details can be found in the project's readme.

Data can be saved by using `mvc.Sync` -- `mvc.AjaxSync` and `mvc.LocalSync` have been included, but other implementations could be created if required.  The [sync/ajax.js](https://github.com/rhysbrettbowen/PlastronJS/blob/master/sync/ajax.js) file currently shows how PlastronJS would effectively communicate with a server.

The [Google Closure Library](https://developers.google.com/closure/library/) itself is the base JavaScript used for most of Google's flagship projects.  For those who are missing Backbone-like MVC from Closure Library, then PlastronJS should work well.
