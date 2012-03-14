---
layout: post
title: "Node Roundup: Command-Option-Argument, Nodemailer, Node.js-Ultra-REPL"
author: Alex Young
categories: 
- node
- modules
- inspectors
- repl
- email
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Command-Option-Argument

[Command-Option-Argument](https://github.com/veged/coa) (npm: _coa_) by Sergey Berezhnoy is a command-line option parser that uses a chainable API:

{% highlight javascript %}
require('coa').Cmd() // main (top level) command declaration
  .name(process.argv[1]) // set top level command name from program name
  .title('My awesome command line util') // title for use in text messages
  .helpful() // make command "helpful", i.e. options -h --help with usage message
  .opt() // add an option
    .name('version') // name for use in API
    .title('Version') // title for use in text messages
    .short('v') // short key: -v
    .long('version') // long key: --version
    .flag() // for options without value
    .act(function(opts) { // add action for option
      // return message as result of action
      return JSON.parse(require('fs').readFileSync(__dirname + '/package.json'))
          .version;
    })
    .end() // end option chain and return to main command
{% endhighlight %}

The API's chainable design uses stack-like hierarchies, so when an option is declared with `opt()` subsequent method calls will apply to that option.  The author has included a makefile which runs tests with [Vows](http://vowsjs.org/).

### Nodemailer

[Nodemailer](https://github.com/andris9/Nodemailer) (License: _MIT_, npm: _nodemailer_) by Andris Reinman is a module for sending emails that supports Unicode, attachments, connection pools, and SSL/STARTTLS.  It's even designed to work with popular mail services like Gmail and Hotmail.

The API centres around SMTP transports:

{% highlight javascript %}
var nodemailer = require('nodemailer')
  , smtpTransport = nodemailer.createTransport('SMTP', {})
  , options = { from: 'alex@example.com', subject: 'Subject', text: 'Hello' };

smtpTransport.sendMail(options, function(err, response) {
});
{% endhighlight %}

Notice the use of the standard leading error argument in the callback.  This project includes a test suite written with [Nodeunit](https://github.com/caolan/nodeunit).

###Node.js-Ultra-REPL

![ultra-repl](/images/posts/ultrarepl.png)

[Node.js-Ultra-REPL](https://github.com/Benvie/Node.js-Ultra-REPL) (License: _MIT_, npm: _ultra-repl_) by Brandon Benvie is a REPL for Node that's intended to be used as a development environment.  It provides a command-line UI where JavaScript can be executed and explored.  Before using it, I strongly recommend pressing F1 to learn the basic commands.
The command prompt stays at the bottom of the screen, while the result of any code is displayed above.  Results can be read through by using page up and down.  New V8 contexts can be created using `control shift up`, then switched between using `control up` and `control down`.

