---
layout: post
title: "Windows and Node: Event Logs"
author: Alex Young
categories: 
- node
- tutorials
- windows
- logging
- windows-and-node
---

<div class="intro">
  To read previous posts in this series, view the <a href="/tags.html#windows-and-node">windows-and-node</a> tag.
</div>

Windows has event logs with three categories: System, Application, and Security.  These are known as "sources" in Windows terminology, and since NT 4.0 it's been possible to create custom sources as well.  Pretty much every version of Windows I've ever seen has included an Event Viewer utility, which can be used to view and manipulate logs.

Event logs are useful in Windows for the same reasons as syslog in Unix.  Logging messages from background services is one of the most obvious examples, particularly as Node seems like a promising platform for developing Windows services.

In Node this requires an addon, because native bindings are needed to communicate with the `eventlog` service.  [Windows Event Log Js](http://jfromaniello.github.com/windowseventlogjs/) (GitHub: [jfromaniello / windowseventlogjs](https://github.com/jfromaniello/windowseventlogjs), License: _MIT_, npm: [windows-eventlog](http://search.npmjs.org/#/windows-eventlog)) by José F. Romaniello is one such addon.

On a related note, José has also written a great tutorial on how to create Node addons for Windows using Visual Studio, it's got detailed instructions and screenshots with full sample code: [Writing your first native module for node.js on Windows](http://joseoncode.com/2012/04/10/writing-your-first-native-module-for-node-dot-js-on-windows/).

To use this module open `cmd.exe` and install the module:

{% highlight text %}
npm install windows-eventlog
{% endhighlight %}

Now create a simple script to write some test messages:

{% highlight javascript %}
var EventLog = require('windows-eventlog').EventLog
  , logger = new EventLog('dailyjs-logs');

logger.log('Hello from DailyJS');
{% endhighlight %}

This won't run yet, however.  Start another `cmd.exe`, but this time right-click the icon and select "Run as administrator":

![Run as administrator](/images/posts/win5/run_as_admin.png)

Now the example above should run correctly.  Open Event Viewer, then select "Windows Logs", "Application", and look for logs with the source `dailyjs-logs` (assuming you didn't change it).  You should see something like this:

[![Event Viewer](/images/posts/win5/writing-events-thumb.png)](/images/posts/win5/writing-events.png)

If portability with existing Unix software is required, then check out José's [transport for Winston](https://github.com/jfromaniello/winston-winlog) that uses this module.
