---
layout: post
title: "tQuery Web Audio, JavaScript Motion Tracking, Reified, Thing.js"
author: Alex Young
categories: 
- ECMAScript
- ES5
- audio
- binary
- node
---

###tQuery Web Audio

Jerome Etienne has added support for the [Web Audio API](https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html) to the development branch of his tQuery project.  [tQuery.WebAudio](http://jeromeetienne.github.com/tquery/docs/symbols/tQuery.WebAudio.html) shows off the API, and he's also written a tutorial with a screencast: [tQuery WebAudio for More Realistic 3D](http://learningthreejs.com/blog/2012/03/20/sounds-for-more-realistic-3d/).

###JavaScript Motion Tracking

Romuald Quantin sent in an article on [JavaScript Motion Tracking](http://www.soundstep.com/blog/2012/03/19/javascript-motion-tracking/) which has a demo and some explanation behind the Canvas-based effect.

###Reified

[Reified](https://github.com/Benvie/reified) (License: _MIT_, npm: _reified_) by Brandon Benvie is a binary library for Node and browsers.  Each supported binary type is implemented using buffers:

{% highlight javascript %}
var reified = require('reified')
  , int32 = new reified('Uint32', 10000000)
  , int16 = new reified('Uint16', int32)
  , int8 = new reified('Uint8', int16);

int8.write(100);
// Uint8 100

int8.write('test');
// Exception: TypeError: Invalid value for Uint8: undefined
{% endhighlight %}

There are also constructors for arrays, structs, and bitfields:

{% highlight javascript %}
var DescriptorFlags = reified('DescriptorFlags', {
  ENUMERABLE   : 1,
  CONFIGURABLE : 2,
  READONLY     : 3,
  WRITABLE     : 4,
  FROZEN       : 5,
  HIDDEN       : 6,
  NOTPRIVATE   : 7,
}, 1);

var desc = new DescriptorFlags;
desc.HIDDEN = true;

// { ‹DescriptorFlags›
//   ENUMERABLE:   false,
//   CONFIGURABLE: true,
//   READONLY:     true,
//   WRITABLE:     true,
//   FROZEN:       true,
//   HIDDEN:       true,
//   NOTPRIVATE:   true }
{% endhighlight %}

###Thing.js

[Thing.js](http://code.matthewphillips.info/thingjs/) (GitHub: [matthewp / thingjs](https://github.com/matthewp/thingjs), License: _MPL 2.0_, npm: _thingjs_) by Matthew Phillips is a small library that wraps around the ES5 `Object.create` method to provide mixins and object initialisation:

{% highlight javascript %}
var Thing = require('thingjs')
  , A = { name_a: 'a' }
  , B = { name_b: 'b' }
  , C;

C = Thing.create([A, B], {
  init: function() {
    console.log(this.name_a);
    console.log(this.name_b);
  }
});

// Returns an instance of C
Thing.create(C, true);
{% endhighlight %}

