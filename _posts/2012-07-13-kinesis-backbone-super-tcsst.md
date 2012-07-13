---
layout: post
title: "Kinesis, Lo-Dash, Backbone-Super"
author: "Alex Young"
categories: 
- kinect
- games
- windows
- css
- testing
- backbone.js
---

###Kinesis

![Kinesis](/images/posts/kinesis.png)

When I was growing up I knew a good microswitch when I saw one.  I ended up with a formidable collection of joysticks for gaming, but they're nothing compared to the extremes the arcade fighting stick mod community go to.  Why am I boring you with my knowledge of awesome buttons?  Well, the developers behind [Kinesis](http://kinesis.io/) want to bring Kinect hacking to a wider audience through their new JavaScript APIs.

Right now the SDK requires an invitation to download (really?), but there are some videos of [Kinesis demos](http://kinesis.io/demos) available now.

In the meantime I'll be standing in a corner with my Sanwa-modded Hori arcade stick playing some real video games.

###Lo-Dash

I saw [TJ Holowaychuk mention](https://twitter.com/tjholowaychuk/status/223428178708934657) [Lo-Dash](http://lodash.com/) (GitHub: [bestiejs / lodash](https://github.com/bestiejs/lodash), License: _MIT_) on Twitter:

> A drop-in replacement for Underscore.js, from the devs behind jsPerf.com, that delivers performance improvements, bug fixes, and additional features.

There are, of course, [benchmarks](http://lodash.com/benchmarks):

> Lo-Dash's performance is gained by avoiding slower native methods, instead opting for simplified non-ES5 compliant methods optimized for common usage, and by leveraging function compilation to reduce the number of overall function calls.

John-David Dalton has posted a video about the project to Vimeo: [Lo-Dash's origin and why it's a better utility belt](http://vimeo.com/44154600).

###Backbone-Super

[Backbone-Super](https://github.com/lukasolson/Backbone-Super) by Lukas Olson adds a `super` method to `Backbone.Model` using [John Resig's Inheritance script](http://ejohn.org/blog/simple-javascript-inheritance/).  Rather than using `Backbone.Model.prototype.set.call` as per the Backbone.js documentation, `_super` can be called instead:

{% highlight javascript %}
var Note = Backbone.Model.extend({
  set: function(attributes, options) {
    this._super(attributes, options);
  }
});
{% endhighlight %}
