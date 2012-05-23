---
layout: post
title: "Node Roundup: Uptime, mmmagic, nodeflix, opt"
author: "Alex Young"
categories: 
- node
- modules
- apps
- cli
- express
- unix
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Uptime

![Uptime screenshot](/images/posts/node-uptime.png)

[Uptime](http://fzaninotto.github.com/uptime/) (GitHub: [fzaninotto / uptime](https://github.com/fzaninotto/uptime), License: _MIT_, npm: [node-uptime](http://search.npmjs.org/#/node-uptime)) by Francois Zaninotto is an Express app for remote server monitoring.  It's built with [Mongoose](http://mongoosejs.com/), [Bootstrap](http://twitter.github.com/bootstrap/), [ejs](https://github.com/visionmedia/ejs), [Socket.IO](http://socket.io/), and jQuery.

To use the app, a YAML configuration file must be created for the sites you want to monitor.  It seems like JSON would have been a more natural choice, but it's pretty easy to get started and there are examples in the documentation.

I'm always looking for open source Express applications, so keep them coming!

###mmmagic

[mmmagic](https://github.com/mscdex/mmmagic) (License: _MIT_, npm: [mmmagic](http://search.npmjs.org/#/mmmagic)) by Brian White is a Node addon for libmagic, as used by the [file](http://en.wikipedia.org/wiki/File_(command)) command.  It's asynchronous, and can provide the MIME type for a file (as well as other metadata):

{% highlight javascript %}
var mmm = require('mmmagic')
  , Magic = mmm.Magic;

var magic = new Magic(mmm.MAGIC_MIME_TYPE);
magic.detectFile('/usr/bin/env', function(err, result) {
  if (err) throw err;
  console.log(result);
});
{% endhighlight %}

It's currently built with node-waf (rather than gyp), but the author has included a Windows binary.

###Nodeflix

[Nodeflix](https://github.com/iamleppert/nodeflix) (License: _MIT_, npm: [nodeflix](http://search.npmjs.org/#/nodeflix)) by Johnathan Leppert is a [Netflix API](http://developer.netflix.com/) client:

{% highlight javascript %}
n.get('/catalog/people', { term: 'DeNiro' }, function(data) {
    console.log(data);
});
{% endhighlight %}

I've noticed quite a few Node media-related modules cropping up, and with the continually improving Windows support it seems like Node is becoming a strong platform for home theatre-related application development.  Is there a Node XBMC alternative yet?

###opt

[opt](https://github.com/rsdoiel/opt) (License: _New BSD License_, npm: [opt](http://search.npmjs.org/#/opt)) by R. S. Doiel is an options parser that can also load configuration files.  It can generate usage based on the supplied parameters, but has a slightly different API to the other option parsing modules I've looked at -- callbacks are tied to each option instead of working with a parsed set of options:

{% highlight javascript %}
#!/usr/bin/env node
var opt = require('opt')
  , args;

function test(param) {
  if (param) {
    console.log('--test parameter:', param);
  } else {
    console.log('No parameter supplied to --test');
  }
}

opt.setup('Simple test script.');
opt.set(['-h', '--help'], opt.usage, 'Show help');
opt.set(['-t', '--test'], test, 'Run test');

opt.parse(process.argv);
{% endhighlight %}

This is quite different to how [Commander.js](https://github.com/visionmedia/commander.js) works, for example.
