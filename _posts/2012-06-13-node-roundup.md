---
layout: post
title: "Node Roundup: Broom, cmbn, archie, Templato"
author: "Alex Young"
categories: 
- node
- modules
- templating
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Broom

[Broom](https://github.com/bolgovr/broom) (License: _MIT_, npm: [broom](http://search.npmjs.org/#/broom)) by Bolgov Roman is an "application-level flow control library".  It's designed to help split applications into small modules that can be executed in parallel or in serial.  The intent is to help avoid using too many deeply nested callbacks, but to also make it easier to write tests.

The reason I think Broom is interesting is the author has combined flow control concepts with separation of concerns to address program design at a high level.  Although there are a lot of flow control libraries, I think we need more effort in application architecture.

###cmbn

[cmbn](https://github.com/gzip/node-cmbn) (License: _MIT_, npm: [cmbn](http://search.npmjs.org/#/cmbn)) by Gamaiel Zavala allows client-side assets to be served from a single URL.  It comes with middleware that will work with Express.  Rather than making requests to several CDNs, URLs can be generated that look like this:

{% highlight text %}
http://cmbn.us/~cj;require.js,1.0.8,require.min.js/~gg;jquery,1.7.2,jquery.min.js
{% endhighlight %}

The author suggests using this with [CloudFlare CDN](http://www.cloudflare.com/) to improve performance.

###archie

[archie](https://github.com/simplyianm/archie) (License: _Apache 2.0_, npm: [archie](http://search.npmjs.org/#/archie)) by Ian Macalinao is an "archetype system".  Given a folder, archie will replace values within each file, then output a new folder with these changes.  It can be used as a command-line tool like this:

{% highlight text %}
archie gen -a simple -n myproject
{% endhighlight %}

The author has based this module on Apache Maven, which [uses archetypes for project templating](http://maven.apache.org/guides/introduction/introduction-to-archetypes.html).

###Templato

[Templato](https://github.com/vdemedes/templato) (License: _MIT_, npm: [templato](http://search.npmjs.org/#/templato)) by Vadim Demedes is a unified API for several templating modules that also works in browsers.  It currently works with EJS, Eco, Jade, and Mustache.  

The author has included Mocha tests, and these will run in a browser as well.
