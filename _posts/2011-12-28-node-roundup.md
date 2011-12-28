---
layout: post
title: "Node Roundup: Clarinet, Sandbox, actionHero"
author: Alex Young
categories: 
- node
- modules
- frameworks
- parsing
- json
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Clarinet

[Clarinet](http://writings.nunojob.com/2011/12/clarinet-sax-based-evented-streaming-json-parser-in-javascript-for-the-browser-and-nodejs.html) (GitHub: [dscape / clarinet](https://github.com/dscape/clarinet), License: _Apache 2.0/MIT_, npm: _clarinet_) by Nuno Job is a streaming JSON parser.  The parser is event-based, and since it's streaming it makes dealing with huge files possible.  The author still recommends using `JSON.parse` for most tasks, however.

The announcement blog post linked to above has detailed performance analysis and more background on the project.

###Sandbox

[Sandbox](http://gf3.github.com/sandbox/) (GitHub: [gf3 / sandbox](https://github.com/gf3/sandbox), npm: _sandbox_) by Gianni Chiappetta is a sandbox for Node.  That means untrusted code can be run in a relatively safe environment.  It comes with some useful features, including timeouts and error handling.

To execute code in a sandbox, the `run` method on a `Sandbox` instance must be used:

{% highlight javascript %}
var s = new Sandbox()
s.run( '1 + 1 + " apples"', function( output ) {
  // output.result == "2 apples"
})
{% endhighlight %}

###actionHero

[actionHero](https://github.com/evantahler/actionHero) (License: [license.txt](https://github.com/evantahler/actionHero/blob/master/license.txt), npm: _actionHero_) by Evan Tahler is a transactional API framework for sockets and HTTP clients.  Actions are defined for `GET` and `POST` requests, and they're constructed from simple objects decorated with metadata for documentation:

{% highlight javascript %}

var action = {};
action.name = "randomNumber";

action.description = "I am an API method which will generate a random number";
action.inputs = {
  "required" : [],
  "optional" : []
};
action.outputExample = {
  randomNumber: 123
}

action.run = function(api, connection, next){
  connection.response.randomNumber = Math.random();
  next(connection, true);
};

exports.action = action;
{% endhighlight %}

The framework comes with MySQL support,  Models are implemented using the [Sequelize](http://sequelizejs.com/) MySQL ORM library.

actionHero also supports "tasks", which are periodic actions performed by the server.  Other features and example code can be found in the project's repository.
