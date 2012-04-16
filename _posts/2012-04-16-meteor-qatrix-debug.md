---
layout: post
title: "Meteor, Qatrix, WebKit Remote Debugging 1.0"
author: Alex Young
categories: 
- frameworks
- node
- animation
- debugging
---

###Meteor

[Meteor](http://www.meteor.com/) (License: _GPL v2_, GitHub: [meteor / meteor](https://github.com/meteor/meteor)) is a web framework that provides the same APIs for both the client and the server.  It has similar goals to other projects we've featured on DailyJS before, such as [Derby](http://derbyjs.com/), and already includes some [great documentation](http://docs.meteor.com/).

Applications run using Node, but the authors have provided an installation script rather than distributing it with npm.  Instead of using Node's asynchronous API style, fibers have been used.  Code that's only suitable for the server is kept inside `server/` directories.  Rendering is performed client-side -- server-side templates are generally lightweight.

An important aspect of Meteor application structure is the use of a client/server model.  A MongoDB database is used, and data is distributed between the server and clients.  Clients subscribe to messages that they're interested in.  Templates are data-driven, and this is modelled using the [reactive programming paradigm](http://en.wikipedia.org/wiki/Reactive_programming).

Meteor comes with scripts to bundle and deploy applications, and applications can be deployed to Meteor's servers for free:

{% highlight text %}
$ meteor deploy myapp.meteor.com
{% endhighlight %}

This can be used on a trial basis:

> We provide this as a free service so you can try Meteor. It is also helpful for quickly putting up internal betas, demos, and so on.

For all the excitement around Meteor, and the [famous developers who founded the project](http://www.meteor.com/about/people), there are a few glaringly obvious problems with it.  For example, Google can't see Meteor's website at all (search for `site:www.meteor.com`).  This may not be a problem for applications, but I'd consider developing the public pages with something else or as a static site.  It also includes its own packaging system, which is confusing to me as a Node developer.  Finally, authentication is not addressed, but the developers are working on it.

###Qatrix

[Qatrix](http://qatrix.com/) (GitHub: [qatrix / Qatrix](https://github.com/qatrix/Qatrix), License: _MIT_) by Angel Lai is a client-side framework with some bold claims.  There are [four Qatrix benchmarks](http://qatrix.com/benchmark) which will compare performance to jQuery 1.7.1, and it's meant to support IE6-10, but there aren't yet any unit tests so I'm not sure how solid these claims are right now.

The developers have written some pretty good [documentation for Qatrix](http://qatrix.com/api/animate) already, and after reviewing the code on GitHub I realised what their angle is: it's jQuery without the friendly chainable API in order to boost performance.

Consider this jQuery example:

{% highlight javascript %}
$('.box_wrap span')
  .text('I found this span!')
  .attr('title', 'this is title')
  .css({
    'color': '#C15547',
    'font-size': '18px'
  });
{% endhighlight %}

This is the equivalent in Qatrix:

{% highlight javascript %}
$select('.box_wrap span', function(item) {
  $text(item, 'I found this span!');
  $attr.set(item, 'title', 'this is title');
  $css.set(item, {
    'color': '#C15547',
    'font-size': '18px'
  });
});
{% endhighlight %}

It's not a world apart from the jQuery example, and someone could build a chainable API wrapper around Qatrix if they really wanted to.  The GitHub history only goes back to March 17th, so it's a very young framework -- I expect the authors would appreciate contributions from fellow client-side hackers. 

###WebKit Remote Debugger

Version 1.0 of the WebKit remote debugging protocol has been announced: [Announcing Remote Debugging Protocol v1.0](http://www.webkit.org/blog/1875/announcing-remote-debugging-protocol-v1-0/).  Remote debugging can be enabled in Chrome, and WebSockets are used for communication with the debugger.

It's even possible to connect one WebKit browser to another, because Chrome includes a small HTTP server -- Web Inspector can be used as a remote debugging client.

[Driving Google Chrome via WebSocket API](http://www.igvita.com/2012/04/09/driving-google-chrome-via-websocket-api/) is a tutorial by Ilya Grigorik that shows how to write a remote debugging client.  His example is in Ruby, but it's just HTTP requests and JSON:

> The example above illustrates a very simple interaction with the Network API, but the protocol exposes much more. You can drive the JS debugger, control the V8 VM, modify and inspect the DOM, and track Timeline events amongst half a dozen other capabilities.

