---
layout: post
title: "Fluent, Backbone.xmpp, leFunc, Frisby"
author: Alex Young
categories: 
- conferences
- events
- xmpp
- backbone.js
---

###Fluent Conference

![Fluent](/images/posts/fluent.png)

[Fluent](http://fluentconf.com/fluent2012) will be held on May 29-31, in San Francisco.  It features several tracks -- one covers [language issues](http://fluentconf.com/fluent2012/public/schedule/topic/830) and includes a session with Brendan Eich.  The [browser track](http://fluentconf.com/fluent2012/public/schedule/topic/831) has talks from employees of social networking favourites Twitter, Facebook, and Twitter, and even Microsoft!  There's also a track for [Node sessions](http://fluentconf.com/fluent2012/public/schedule/topic/832), which has speakers from Joyent, Twitter, Groupon, and lots more interesting companies.

"Early price" tickets are on sale until May 15th, and there are several tiers available:

* All-Access Pass: $1695 (standard price: $1895)
* Conference Plus Tuesday Workshops: $1295 (standard price: $1495)
* Conference: $995 (standard price: $1195)
* Tuesday Workshops: $695 (standard price: $895)

There are discounts for previous O'Reilly conference attendees, company teams, academic staff, non-profits, and students.

###Backbone.xmpp

[Backbone XMPP Pub-Sub Storage](https://github.com/ggozad/Backbone.xmpp) (License: _MIT_) by Yiorgis Gozadinos is an alternative storage layer for [Backbone.js](http://documentcloud.github.com/backbone/) that uses [XMPP publish-subscribe](http://xmpp.org/extensions/xep-0060.html).

To use it, set a collection's `sync` property to `Backbone.xmppSync`, and assign an instance of `PubSubStorage` to the collection's `node` property:

{% highlight javascript %}
var MyCollection = Backbone.Collection.extend({
    sync: Backbone.xmppSync
  , model: MyModel
});

var mycollection = new MyCollection();
mycollection.node = new PubSubStorage('mymodels', connection);
{% endhighlight %}

The README has links to full documentation in the form of annotated source.

###leFunc

[leFunc](https://github.com/jrf0110/leFunc) (License: _MIT_, npm: [leFunc](http://search.npmjs.org/#/leFunc)) by John Fawcett is a library that uses type checking to support function overloading in pure JavaScript:

{% highlight javascript %}
var getItems = leFunc({
  'string'; function(id) {
    // Do something
  },

  'string,object': function(id, options) {
    // Do something else
  },

  'string,object,function': function(id, options, callback) {
    // Do something different
    callback();
  }
});

getItems('123abc'); // Calls the first function
getItems('123abc', { awesome: true }); // Calls the second function
getItems('123abc', { awesome: true }, function(){}); // Calls the third function
{% endhighlight %}

At the moment it'll work with any function signatures that are relatively easy to type check.  That means [primitive values and objects](http://dailyjs.com/2012/05/07/js101-object/) will work as expected.

###Frisby

If you're testing a lot of REST-based APIs, then [Frisby](http://frisbyjs.com/) (GitHub: [vlucas / frisby](https://github.com/vlucas/frisby), License: _BSD_, npm: [frisby](http://search.npmjs.org/#/frisby)) by Vance Lucas might be what you're looking for.  It's a REST API testing framework built using [Jasmine](http://pivotal.github.com/jasmine/).

It has a nice and friendly chainable API:

{% highlight javascript %}
var frisby = require('frisby');

frisby.create('Get Brightbit Twitter feed')
  .get('https://api.twitter.com/1/statuses/user_timeline.json?screen_name=brightbit')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON('0', {
    place: function(val) { expect(val).toMatchOrBeNull("Oklahoma City, OK"); }, // Custom matcher callback
    user: {
      verified: false,
      location: "Oklahoma City, OK",
      url: "http://brightb.it"
    }
  });
{% endhighlight %}

The project itself is also fully tested, and comes with [API documentation](http://frisbyjs.com/docs/api/).
