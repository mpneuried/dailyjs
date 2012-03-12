---
layout: post
title: "Nools, Procstreams, Kalendae"
author: Alex Young
categories: 
- node
- modules
- calendars
- unix
---

### Nools

[Nools](https://github.com/doug-martin/nools) (License: _MIT_, npm: _nools_) by Doug Martin is a rules engine.  Rules are contained in "flows", and instances of flows are known as "sessions" -- these are used to add or retract facts from the engine:

{% highlight javascript %}
var nools = require('nools')
  , session
  , message;

function Message(message) {
  this.message = message;
}

session = flow.getSession();
message = new Message('hello');

// Add the fact to the engine
session.assert(message);

// Change it
message.message = 'Bye';
session.modify(message);

// Remove it
session.retract(message);
{% endhighlight %}

For examples of how to define flows, have a look at the [Nools readme](https://github.com/doug-martin/nools/blob/master/readme.md).

### Procstreams

[Procstreams](https://github.com/polotek/procstreams) (License: _MIT_, npm: _procstreams_) by Marco Rogers is an attempt to create a more idiomatic JavaScript shell scripting API:

{% highlight javascript %}
var $p = require('procstreams');
$p('cat lines.txt').pipe('wc -l')
  .data(function(stdout, stderr) {
      console.log(stdout); // prints number of lines in the file lines.txt
  });

$p('mkdir foo')
  .and('cp file.txt foo/')
  .and('rm file.txt')
    .on('exit', function() {
      console.log('done');
    });
{% endhighlight %}

As we've seen many times on DailyJS, chainable APIs offer an elegant solution to reducing unnecessary callbacks in asynchronous APIs, so this module is definitely appealing on that level.

### Kalendae

![Kalendae example screenshot](/images/posts/kalendae.png)

[Kalendae](https://github.com/ChiperSoft/Kalendae) (License: _MIT_) by Jarvis Badgley provides a date picker without any dependencies.  There's a [demo of Kalendae](Kalendae) showing calendars instantiated with various options.

If jQuery is available, then a plugin will also be available through `$(selector).kalendae(options)`.

The author has also provided a makefile that can build the project, minimise it, and run it through Google Closure.

