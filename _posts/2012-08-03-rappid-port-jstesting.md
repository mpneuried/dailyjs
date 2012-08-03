---
layout: post
title: "rAppid:js, Portastic, jstesting"
author: Alex Young
categories: 
- node
- browser
- libraries
- frameworks
- mvc
- testing
---

###rAppid:js

[rAppid:js](http://www.rappidjs.com) (GitHub: [it-ony / rAppid.js](https://github.com/it-ony/rAppid.js), License: _MIT_, npm: [rAppid.js](https://npmjs.org/package/rAppid.js)) by Tony Findeisen is a new client-side MVC framework that uses [XAML](http://www.rappidjs.com/#/wiki/XAML) for templates.  The way the templates work reminds me of [AngularJS](http://angularjs.org/), but rather than using custom attributes it uses XML documents.

Data can be [bound](http://www.rappidjs.com/#/wiki/Bindings) between models and views, and can be set up to work bidirectionally.  There's also a [Bindable](http://www.rappidjs.com/#/wiki/Bindable) class that can be used to allow any object to bind to views.  Code is kept modular by using AMD and RequireJS.  There's also a `Datasource` class for calling RESTful data services.

The framework itself is tested with Mocha, but I can't find anything that specifically addresses testing apps built with the framework.  Also, I'm unsure of the relationship between the Node server that can run rAppid.js apps and generating "optimised" builds.  The page that's meant to show help on _Node Rendering_ seems to redirect to the introduction to the project.

###Portastic

[Portastic](https://github.com/cranic/node-portastic) (License: _MIT_, npm: [portastic](https://npmjs.org/package/portastic)) by Alan Hoffmeister is a port scanner for Node.  It's actually very simple -- it uses the [async](https://npmjs.org/package/async) and built-in `net` modules to check for `listening` events for each port.  It's not exactly Nmap, so you won't be using it to perform UDP, NULL, or Xmas scans.  However, it is lightweight and includes tests written with Vows, so you could always see what else you can get it to do.

###jstesting

[jstesting](https://github.com/blittle/jstesting) by Bret Little is a project template for writing client-side tests.  It includes Jasmine, RequireJS, jsTestDriver, and PhatomJS, and allows test to be run from a static HTML file or as a server.

This also supports headless testing through PhantomJS, so if you're struggling to write tests for your latest client-side MVC project then this might help.
