---
layout: post
title: "Unix and Node: Syslog"
author: Alex Young
categories: 
- node
- tutorials
- unix
- cli
- logging
---

Syslog is a standardised logging system that's present in most BSD and Linux distributions.  There are various implementations; syslog-ng is a popular one that I usually find myself using.  The interesting thing about syslog is it can be configured to store messages anywhere -- logs can be written to files or remote daemons.

The main reason for using syslog in your Unix-oriented projects is to _separate the concerns_ between your application code and configuration.  The same application logging to a local syslog daemon could log to a remote daemon without any changes to the application itself.  In addition, syslog also has lots of useful features like log rotation, file compression, and interoperability with other applications that use syslog.

It's amazing to think that syslog was originally created by Eric Allman as part of Sendmail.  Over the years it's found uses far beyond its origins, and as a result there are now several standards that pertain to syslog --- [RFC 5424](http://tools.ietf.org/html/rfc5424) and [RFC 3164](http://www.ietf.org/rfc/rfc3164.txt) are probably the most important when it comes to looking for compliant implementations.

###Syslog Basics

Writing a message to syslog is as simple as running `logger` in a shell:

{% highlight text %}
$ logger Hello from DailyJS
{% endhighlight %}

On most systems this message should now be visible in `/var/log/syslog`, or `/var/log/system.log` on a Mac.

{% highlight text %}
$ tail -f /var/log/system.log
Apr 12 14:45:18 b alex[15070]: Hello from DailyJS
{% endhighlight %}

The priority level can also be included with the message.  Take a look at `man logger` to read more about priorities and facilities.

###Syslog in Node

Most programs write to syslog using the `openlog` and `syslog` standard C library functions.  That means it's not trivial to use pure JavaScript to call these functions -- a small binding is required.  To get around this, some Node modules require syslog to be configured to accept TCP connections.

The [node-posix](https://github.com/melor/node-posix) (License: _MIT_, npm: [posix](http://npmjs.org/package/posix)) module by Mika Eloranta is one option for writing to syslog using the `openlog` and `syslog` functions:

{% highlight javascript %}
var posix = require('posix');

posix.openlog('test-node-syslog', { cons: true, ndelay: true, pid: true }, 'local0');
posix.setlogmask({ info: 1, debug: 1 });
posix.setlogmask({ emerg: 1, alert: 1, crit: 1, err: 1, warning: 1, notice: 1, info: 1, debug: 1 });
posix.syslog('info', 'hello from node-posix (info)');
posix.closelog();
{% endhighlight %}

Note that if this is run on a Mac the result might be stored to `/var/log/appfirewall.log` because Apple's configuration routes `local0` messages here.  The easiest way to view log messages on a Mac is to open the Console application and select "All Messages".  When I tried this example in Linux the message was written to `/var/log/syslog`.

This module actually uses the same signatures as the C functions.  That means the last parameter for `posix.openlog` is 'facility' -- the available and recommended options are documented in the project's readme file.

An alternative is [node-syslog](https://github.com/cloudhead/node-syslog) (License: _MIT_, npm: [syslog](http://npmjs.org/package/syslog)) by Alexis Sellier.  This one uses TCP to communicate with syslog -- the author has provided some configuration examples for setting up syslog-ng to accept TCP connections.

The API for _node-syslog_ is very simple:

{% highlight javascript %}
var syslog = require('syslog')
  , logger = syslog.createClient(514, 'localhost');

logger.info('Hello from DailyJS');
{% endhighlight %}

If you already use [winston](https://github.com/flatiron/winston) for logging, then [winston-syslog](https://github.com/indexzero/winston-syslog) is a winston transport that can write messages to syslog over TCP.

### Conclusion

There are other modules out there, but most either use the standard C library functions or TCP streams like the ones I've mentioned.

Some modules attempt to communicate with the datagram log socket `/dev/log`, but support for Unix datagram sockets was removed from Node so this won't work anymore.  Support for Unix datagram sockets has been provided by the [node-unix-dgram](https://github.com/bnoordhuis/node-unix-dgram) module by Ben Noordhuis, but I haven't found a syslog module that uses it.
