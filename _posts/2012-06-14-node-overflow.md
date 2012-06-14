---
layout: post
title: "Node Overflow: Countly, Prelude, fibonacci-async"
author: "Alex Young"
categories: 
- node
- modules
- express
- apps
- addons
- functional
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Countly

![Countly](/images/posts/countly.png)

[Countly](http://count.ly/) (GitHub: [Countly / countly-server](https://github.com/Countly/countly-server), License: [Countly Community Edition License](https://github.com/Countly/countly-server/blob/master/LICENCE)) from the Countly team based in Turkey is a mobile analytics server that has SDKs for iOS and Android.  The web interface and API are separated into two applications -- the front-end is built with Express, and the API is a lightweight server.  MongoDB is used to store data and sessions.  The Express application is a fairly straightforward monolithic implementation.

In terms of client-side code, the Express app uses ejs for templates, and jQuery UI.

The authors have included an installation script, `bin/countly.install.sh`, which helps get the server-side component up and running.  If you want to try it out without installing it, there's a demo on [count.ly](http://count.ly/dashboard).

###Prelude.ls

[Prelude.ls](http://gkz.github.com/prelude-ls/) (GitHub: [gkz / prelude-ls](https://github.com/gkz/prelude-ls), License: _MIT_, npm: [prelude-ls](http://search.npmjs.org/#/prelude-ls)) by George Zahariev is a functional programming library written with [LiveScript](http://gkz.github.com/LiveScript/), which is a bit like a more functional CoffeeScript.

The author has provided examples of every single function the library provides in both JavaScript and LiveScript.  All functions are curried, so supplying an incomplete list of arguments will return a partially applied function:

{% highlight javascript %}
var takeFour = take(4);
takeFour('hello there'); //=> 'hell'
{% endhighlight %}

The API feels quite lightweight in places because certain functions accept objects where a function might be used in similar libraries:

{% highlight javascript %}
reject([false, true], {a: 0, b: 1, c: 0});
//=> {a: 0, c: 0}
{% endhighlight %}

The author has included tests written with LiveScript.

###fibonacci-async

[fibonacci-async](https://github.com/Gottox/fibonacci-async) (License: _MIT_, npm: [fibonacci-async](http://search.npmjs.org/#/fibonacci-async)) by Enno Boland is a response to certain well-known blog posts berating Node's performance at potentially unfair benchmarks.  It's an asynchronous C++ Fibonacci series generator, which strikes me as something potentially useful as an educational example for those interested in writing Node addons.
