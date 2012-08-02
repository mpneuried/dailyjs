---
layout: post
title: "TiddlyWiki5, Backbone.Notifier, MVC Jungle"
author: Alex Young
categories: 
- apps
- mvc
- backbone.js
- libraries
---

###TiddlyWiki5

[TiddlyWiki5](http://five.tiddlywiki.com/) (GitHub: [Jermolene / TiddlyWiki5](https://github.com/Jermolene/TiddlyWiki5), npm: [tiddlywikigithub](http://npmjs.org/package/tiddlywiki)) by Jeremy Ruston is a reboot of the venerable [TiddlyWiki](http://tiddlywiki.com/).  As reboots go I'd say this was more along the lines of _Batman Begins_ than _The Amazing Spider-Man_.  It can run entirely in a browser, or as a Node application.

> TiddlyWiki is designed to fit around your brain, giving you a better way of managing data compared to traditional documents and emails. The fundamental idea is that information is more useful and reusable if we cut it up into the smallest semantically meaningful chunks.

The project is currently tentatively released as an alpha, and you can keep track of future updates on the [TiddlyWikiDev Google Group](http://groups.google.com/group/TiddlyWikiDev) and [@TiddlyWiki](http://twitter.com/TiddlyWiki) on Twitter.

###Backbone.Notifier

[Backbone.Notifier](http://backbone-notifier.e-w.co.il/) (License: _MIT_, GitHub: [ewebdev / backbone.notifier](https://github.com/ewebdev/backbone.notifier/)) by Eyal Weiss is a notification library designed to work with Backbone.js.  Features include dialogs, modal display, and CSS3-based effects.

The `Backbone.Notifier` class works like the other Backbone classes:

{% highlight javascript %}
var notifier = new Backbone.Notifier(options);
nofitier.notity('What did one snowman say to the other snowman?');
{% endhighlight %}

Instances of `Backbone.Notifier` can be chained, and the class is event-based, which means it's quite easy to create wizards by chaining together multiple dialogs.

###Journey Through The JavaScript MVC Jungle

[Journey Through The JavaScript MVC Jungle](http://coding.smashingmagazine.com/2012/07/27/journey-through-the-javascript-mvc-jungle/) is a detailed article by Addy Osmani that introduces MVC frameworks and his TodoMVC collection of demos.  There are also some handy descriptions of when to use each framework:

> Use KnockoutJS: I want something that will help me build simple Web applications and websites. I don't expect there to be a great deal of code involved and so code organisation won't be much of a concern.
