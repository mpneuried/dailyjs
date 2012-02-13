
---
layout: post
title: "Mote.js, Resizer, o_O, JLS"
author: Alex Young
categories: 
- libraries
- templates
- responsive
- frameworks
---

### Mote.js

[Mote.js](http://satchmorun.github.com/mote/) (License: _MIT_, GitHub: [satchmorun / mote](https://github.com/satchmorun/mote), npm: _mote_) by "satchmorun" is a [Mustache](http://mustache.github.com/) implementation with some [impressive benchmarks](http://satchmorun.github.com/mote/).  It runs in both Node and browsers, and usage should look familiar to users of existing Mustache engines:

{% highlight javascript %}
var normal = mote.compile('escaped: {{data}}')
  , triple = mote.compile('triple: {{{data}}}')
  , ampersand = mote.compile('ampersand: {{&data}}')
  , data = {data: '& " < >'};

normal(data);    //=> 'escaped: &amp; &quot; &lt; &gt;'
triple(data);    //=> 'triple: & " < >'
ampersand(data); //=> 'ampersand: & " < >'
{% endhighlight %}

Mote passes the [Mustache spec](https://github.com/mustache/spec), except for the optional lambda functionality:

{% highlight javascript %}
var keyFn = mote.compile('{{#lambda}}Hello, {{name}}.{{/lambda}}')
  , data = {
      name: 'Arthur Dent',
      lambda: function(fn) {
        return fn() + ' ' + fn().toUpperCase();
      }
    };

keyFn(data); //=> 'Hello, Arthur Dent. HELLO, ARTHUR DENT.'
{% endhighlight %}

### Resizer

![Resizer logo](/images/posts/resizer.png)

[Resizer](http://codebomber.com/jquery/resizer/) (GitHub: [egdelwonk / Resizer](https://github.com/egdelwonk/resizer)) by William Golden is a bookmarklet designed to aid responsive design.  Popular resolutions for mobile devices are included so it's easy to switch a page between a tablet view, desktop, and mobile.  The current page can also be reloaded or reset.

There's even a [Resizer Chrome Extension](https://chrome.google.com/webstore/detail/gekhbemhcekbaodnijabeajoeolfplbp?hl=en-US&gl=US), for those of us who prefer buttons to the extra screen real estate added by bookmark bars.

### o_O

[o_O](https://github.com/weepy/o_O) (License: _MIT_) by Jonah Fox is a new HTML binding library that draws on the simplicity of Backbone.js's collections, and the bindings of Ember and Knockout.  The main methods provided by the library are `property`, `bind`, and `collection`:

{% highlight javascript %}
var name = o_O.property('John');
o_O.bind(name, '#person');

// HTML text is now 'John'
name('Bob')

// HTML text is now 'Bob'
{% endhighlight %}

It ships with Mocha tests, and has been tested in  IE 7,8,9, Chrome 16, Firefox 4 and Safari 5.

### JLS Updates

[JLS](http://javalikescript.free.fr/) (License: _LGPL_) is a JavaScript platform that we've featured previously on DailyJS in [Gestures, Scopeleaks, Wink, JLS, JavaScript Blogs](http://dailyjs.com/2011/01/17/news/).  The authors have been working on it over the last year, and have recently released a whole load of new features:

* More Web Browser GUI support: button, edit, table, etc. 
* Native image manipulation: subsampling, convolution, EXIF support
* Simple XML Exchange (SXE) support for native, web browser and PHP
* SQL support since 0.4 (for MySQL)
* AMD is now used for defining and loading the framework's classes
