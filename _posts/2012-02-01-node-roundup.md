---
layout: post
title: "Node Roundup: Ryan Dahl Steps Down, Thimble, Mongo Model, Banking.js, Navcodec"
author: Alex Young
categories: 
- node
- modules
- banking
- frameworks
- mongo
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

### Ryan Dahl Steps Down

[Ryan Dahl announced that he's stepping down as "gatekeeper"](https://groups.google.com/d/msg/nodejs/hfajgpvGTLY/DioyFo3t3A4J) and Isaac Schlueter will now take the lead.  Many messages of gratitude were posted to the [nodejs](http://groups.google.com/group/nodejs) group in response.

> Our energy will now be largely focused over the next few months on improving the third party
> module system experience including a website for browsing modules, a
> new addon build system, and binary installations from npm.

The thing that's fascinated me most about Ryan and Node over the last three years is the creation and development of [libuv](https://github.com/joyent/libuv).  Ryan made a great [screencast about libuv](http://vimeo.com/24713213), and something about his attitude came across as relatively humble and reserved, which impressed me given the success of Node.

If you've followed [Isaac's blog](http://blog.izs.me/) you'll know he has a different personality -- I think it's fair to say he's got some strong opinions about software development, but argues them in a well-tempered manner.  Time will tell how these different personalities will impact on Node's overall development and community.

Meanwhile, [Node 0.6.9](http://blog.nodejs.org/2012/01/27/node-v0-6-9/) was released which brings back some missing dgram functionality, and includes bug fixes.

### Thimble

[Thimble](http://matthewmueller.github.com/thimble/) (License: _MIT_, GitHub: [MatthewMueller / thimble](https://github.com/MatthewMueller/thimble), npm: _thimble_) by Matthew Mueller is a new way of working with Express.  It inserts two middleware layers that manipulates requests and assets to provide a more integrated way of working with client-side code.  Thimble's functionality is provided through plugins, which include:

* _Flatten_: Introduces the `include` tag to HTML templates
* _Embed_: Allows `script` tags to compile templates into functions
* _Package_: Compiles an application

Matthew has created two examples of Thimble projects, available here: [thimble / examples](https://github.com/MatthewMueller/thimble/tree/master/examples).

### Mongo Model

[Mongo Model](http://alexeypetrushin.github.com/mongo-model/model.html) (GitHub: [alexeypetrushin / mongo-model](https://github.com/alexeypetrushin/mongo-model), License: _MIT_, npm: _mongo-model_) by Alexey Petrushin is a new MongoDB library that can optionally work with [fibers](https://github.com/laverdet/node-fibers).

I had trouble running the library without CoffeeScript, so I installed it and ran the examples with `coffee` and they seemed to work.  The [mongo-model documentation](http://alexeypetrushin.github.com/mongo-model/model.html) is all CoffeeScript as well, so you may struggle to use it if you want to use it with JavaScript.

### Banking.js

[Banking.js](http://euforic.co/banking.js/) (License: _MIT_, GitHub: [euforic / banking.js](https://github.com/euforic/banking.js), npm: _banking_) by Christian Sullivan is a unified API for North American banks.  Rather than logging into a clunky web interface `banking.getStatement` can be used to get statement details.

Imagine scripting some Arduino hardware with a suitable [Node Arduino package](https://github.com/ecto/duino) to disable your current debt in an amusing way!

### Node libavcodec bindings

These [Node libavcodec bindings](https://github.com/OptimalBits/navcodec) (License: _MIT_, npm: _navcodec_) developed by Optimal Bits offer a new way to work with [libavcodec](http://libav.org/) in Node.  The authors have aimed to create a new JavaScript API that works how JavaScript developers would expect:

{% highlight javascript %}
navcodec = require('navcodec');

navcodec.open('myinput.mov', function(err, media) {
  if (media){
    media.addOutput('myoutput.mp4', {
      width: 640,
      height: 480,
      audioBitrate: 128000,
      videoBitrate: 500000
    });

    media.transcode(function(err, progress, time) {
      console.log(progress);
      if (progress === 100){
        console.log('Total transcoding time:' + time);
      }
    }
  }
});
{% endhighlight %}

This seems like an incredibly useful library for those that work with media.  In particular, metadata extraction and thumbnail generation all become possible with _navcodec_.

