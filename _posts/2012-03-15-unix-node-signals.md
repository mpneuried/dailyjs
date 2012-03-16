---
layout: post
title: "Unix and Node: Signals"
author: Alex Young
categories: 
- node
- tutorials
- unix
- daemons
---

Signals represent a limited form of inter-process communication.  When a signal is issued to a process, it will be interrupted and a signal handler will be executed.  If there is no signal handler, the default handler will be called instead.  This sounds a lot like asynchronous events in Node, and that's exactly how signals are implemented; using `process.on`:

{% highlight javascript %}
process.on('SIGINT', function() {
  console.log('Interrupted');
});
{% endhighlight %}

Typing `man sigaction` in a terminal will display some background on signals, including a useful list of signal names and their descriptions.

### Using Signals

Create a file called `signals.js` that contains the following, and `chmod +x` it:

{% highlight javascript %}
#!/usr/bin/env node

process.on('SIGINT', function() {
  console.log('Got a SIGINT');
  process.exit(1);
});

process.on('SIGHUP', function() {
  console.log('Got a SIGHUP');
});

setInterval(function() {
    console.log('Daemon running');
}, 10000);

console.log('PID:', process.pid);
{% endhighlight %}

Now `chmod +x signals.js` and run it with `./signals.js`.  It'll print out its PID -- this can be used with the `kill` command to issue signals:

{% highlight text %}
➜ ./signals.js &
PID: 12626
➜ kill -s SIGHUP 12626
Got a SIGHUP
{% endhighlight %}

Running the command with `&` to put it in the background will actually display the PID in most shells, but I put `process.pid` in there just to demonstrate how to get the PID in Node.  Once you've sent a few signals to it, issuing a `SIGINT` will end the process.

### Usage in Node

A common use of signal events in Node is to perform some kind of cleanup when a process is terminated.  Where signals really come in handy is for communicating with daemons.  Many daemons accept `SIGHUP` to reload configuration files -- I followed the same convention when I built an IRC daemon in Node.  Another convention is to listen for `SIGTERM` to perform a graceful shutdown.  This could be used to close down sockets, database connections, or remote any temporary files.

I believe Node is a great solution for writing Unix daemons.  It's a good idea to follow established conventions, so add listeners for `SIGHUP` and `SIGTERM`.
