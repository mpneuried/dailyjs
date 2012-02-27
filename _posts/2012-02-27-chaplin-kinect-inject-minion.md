---
layout: post
title: "Chaplin, KinectJS, Inject, Minion"
author: Alex Young
categories: 
- kinect
- backbone.js
- oo
- modules
- commonjs
---

### Chaplin

[Chaplin](https://github.com/moviepilot/chaplin) (License: _MIT_) from [Moviepilot](http://moviepilot.com/) and [9elements](http://nine2011.9elements.com/) is an example architecture using [Backbone.js](http://documentcloud.github.com/backbone/).  It features lazy loading through RequireJS, module inter-communication using the mediator and publish/subscribe patterns, controllers for managing UI views, Rails-style routes, and strict memory management and object disposal.

> While developing web applications like moviepilot.com and salon.io, we felt the need for conventions
> on how to structure Backbone applications. While Backbone is fine \[...\], it's not a framework for
> single-page applications.

All Chaplin needs is a web server to serve the client-side code.  The example app, "Facebook Likes Browser", even includes client-side OAuth 2.0, thereby demonstrating client-side authentication.

### KinectJS

[KinectJS](http://kinect.childnodes.com/) (License: _MIT_) aims to bring Kinect controls to HTML5.  The author has created some [KinectJS demos](http://kinect.childnodes.com/demo/) and [KinectJS YouTube videos](http://www.youtube.com/user/OfAwesomeWin/videos), so with the required hardware it should be possible to try it out.

The client-side JavaScript is only one part of the implementation -- the other is an Adobe AIR application that provides the bridge to the Kinect drivers.  The AIR application isn't currently open source, but the JavaScript code is MIT licensed.

### Inject

[Inject](http://engineering.linkedin.com/open-source/introducing-inject-open-source-javascript-dependency-management-library-browser) (License: _Apache 2.0_, GitHub: [linkedin / inject](https://github.com/linkedin/inject)) from LinkedIn is a library agnostic dependency manager.  It adds CommonJS support to the browser, and the authors have created a [Inject/CommonJS compatibility](https://github.com/linkedin/inject/wiki/CommonJS-Support) document to show what exactly is supported.  Resources can be loaded cross-domain, and the AMD API is also supported.  Inject also has a lot of unit tests, written with [QUnit](http://docs.jquery.com/QUnit).

Once Inject is loaded, it'll find and load dependencies automatically:

{% highlight html %}
<script type="text/javascript" src="/js/inject.js"></script>
<script type="text/javascript">
  require.setModuleRoot('http://example.com/js/modules');
  require.run('program');
</script>
{% endhighlight %}

Now if `program.js` looked liked this:

{% highlight javascript %}
var hello = require('hello').hello;
alert(hello());
{% endhighlight %}

Then Inject will load the `hello` module.

> Inject finds the dependencies automatically and loads them asynchronously. If a developer changes some downstream 
> dependency - for example, changes `hello.js` to depend on `new-name-module.js` instead of `name.js` - your code will
> keep working because Inject will automatically find and download the new dependencies on the next page load.

### MinionJS

[MinionJS](https://github.com/gigafied/minion) (License: _MIT/X11_, npm: _minion_) by Taka Kojima is a small library that provides classical inheritance for Node and browsers:

{% highlight javascript %}
minion.require('example.Example', function(Example) {
  var instance = new Example();
      instance.doSomething();
});
{% endhighlight %}

Minion also includes a publish/subscribe implementation.  All classes have `subscribe` and `publish` methods which can be used to bind callbacks to notifications.

Finally, Minion has a build script that can be used to package classes for client-side deployment.

