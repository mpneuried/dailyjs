---
layout: post
title: "Node Roundup: 0.6.14, Mocha 1.0, ncluster, ENVy"
author: Alex Young
categories: 
- node
- modules
- deployment
- mocha
- testing
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Node 0.6.14

[Node 0.6.14](http://blog.nodejs.org/2012/03/23/version-0-6-14-stable/) was released soon after 0.6.13.  This release includes bug fixes and updates npm to 1.1.12.

###Mocha 1.0

[Mocha 1.0](http://tjholowaychuk.com/post/19843730724/mocha-1-0) has been released.  There's now a GitHub-flavoured Markdown reporter, and JavaScript "compilers" are now supported with `mocha --compilers coffee:coffee-script`.

An API has also been added, so it's possible to programatically create tests:

{% highlight javascript %}
var mocha = new Mocha;
mocha.reporter('spec').ui('bdd');

mocha.addFile('test/suite.js');
mocha.addFile('test/runner.js');
mocha.addFile('test/runnable.js');
{% endhighlight %}

###ncluster

[ncluster](https://github.com/benmmurphy/ncluster) (npm: _ncluster_) by Ben Murphy is a zero-downtime clustering solution.  It'll reload the application when a `SIGHUP` is issued, and gracefully quit when `SIGQUIT` is sent.

Ben has designed it to be used with [Capistrano](http://capify.org).  He's also created a [Node/Ubuntu Vagrant deployment solution](https://github.com/benmmurphy/nodejs_vagrant) with instructions for deploying his demo app to a virtual machine ([nodejs_vagrant_helloworld](https://github.com/benmmurphy/nodejs_vagrant_helloworld)).

###ENVy

[ENVy](https://github.com/eliOcs/node-envy) (npm: _envy_) by Elio Capella Sánchez is a small module for managing JSON settings files.  It'll use `require` to load a file called `config.json` in the project's root directory.

It also uses a convention for automatically determining the environment and loading the appropriate properties.  Given a JSON file like this:

{% highlight javascript %}
{
  "environment": "development",

  "development": {
    "test": "Development property"
  },

  "production": {
    "test": "Production property"
  }
}
{% endhighlight %}

Then `require('envy').config` will load the `development` settings, so `config.test` will return "Development property".
