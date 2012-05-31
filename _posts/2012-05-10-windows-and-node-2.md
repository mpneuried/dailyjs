---
layout: post
title: "Windows and Node: Windows Performance Monitor"
author: Alex Young
categories: 
- node
- tutorials
- windows
- windows-and-node
---

It's time to take a look at a Windows-oriented Node module to see how it works.  Before getting messy with C, C++, and all that native module stuff, let's keep it simple by looking at something that communicates with Windows programs using Node's streams.

![Windows Performance Monitor](/images/posts/win2/win_performance_monitor.png)

[Windows Performance Monitor](http://technet.microsoft.com/en-us/library/cc749249.aspx) provides extremely detailed logging, featuring a wide array of counters, event trace data, and configuration information.  The command-line tool, [typeperf.exe](http://technet.microsoft.com/en-us/library/bb490960.aspx) can write some of this data to a command window.

For example, `typeperf "\Memory\Available bytes" "\processor(_total)\% processor time"` will display processor and memory counters.  The output looks like this on my computer:

![typeperf](/images/posts/win2/typeperf.png)

Why do I mention this?  Well, the Node [perfmon](https://github.com/markitondemand/node-perfmon) module is a wrapper around `typeperf` that provides a [ReadableStream](http://nodejs.org/docs/latest/api/streams.html#readable_Stream)-based API.  This is an idiomatic module that demonstrates one way of working with an existing program that comes bundled with Windows.

###The `perfmon` Module

To try it out, open a command window and make a directory:

{% highlight text %}
cd Documents\Code\
mkdir perf-example
cd perf-example
{% endhighlight %}

Then install `perfmon`:

{% highlight text %}
npm install perfmon
{% endhighlight %}

Once that's done, create a JavaScript file that uses the `perfmon` module to gather some data:

{% highlight javascript %}
var perfmon = require('perfmon');

perfmon('\\processor(_total)\\% processor time', function(err, data) {
  console.log(data);
});
{% endhighlight %}

Running it should display some logging.  Press `ctrl-c` to stop it.

###Child Processes

The author has written this by using `spawn` from the [child_process](http://nodejs.org/docs/latest/api/all.html#all_child_process) module.  In fact, we can execute any executable using this module.  Try the following script:

{% highlight javascript %}
var exec = require('child_process').exec;

exec('echo %PATH%', function(err, stdout, stderr) {
  console.log('PATH:', stdout);
});
{% endhighlight %}

The output should look similar to the following screenshot, but it may vary depending on what you've got installed:

![PATH](/images/posts/win2/path.png)

The `child_process` API is exactly the same in Unix, as we saw in the _Unix and Node_ posts.

###Portability

Does this mean Node programs are generally portable between Unix and Windows?  Well, as you can see in this example, Node's standard libraries look the same.  It's just the part that touches the operating system that may look different.  In this example, the part that reads `echo %PATH%` would be different in Unix.

We'll look at other portability issues as this series progresses.  For now, your homework is to find more Windows-oriented Node modules and see if you can understand the basic principles at work.  The [Node documentation](http://nodejs.org/docs/latest/api/all.html) will be indispensable for this!
