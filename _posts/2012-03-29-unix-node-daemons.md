---
layout: post
title: "Unix and Node: Daemons"
author: Alex Young
categories: 
- node
- tutorials
- unix
- daemons
---

As we've seen over the last few weeks, Node is a great platform for building portable Unix programs.  This makes it a useful tool for developing daemons.  I often find myself dealing with daemons, whether working as a web developer, sysadmin, or general Unix developer.

###Rationale

Why bother making a Node process behave like a daemon?  There are several reasons, but generally because it's a service that should be running at all times, in the background, and will automatically start after a reboot.

There are different ways to do this depending on the operating system.  Most Linux distributions use System V compatible init scripts with runlevels.  An alternative is [upstart](http://upstart.ubuntu.com/getting-started.html) which is installed by default on Ubuntu systems.

BSD's init behaves differently -- there are no run levels.  Solaris has the Service Management Facility which describes services using XML service manifests -- I often find myself writing a simple XML file that wraps around a start/stop init script.

Finally, Mac OS has `launchd` which is a system wide and user-oriented daemon manager.  It uses XML plist files, and the documentation for these can be found in `man launchd.plist`.

###Linux Standard Base

Guidance for writing init scripts can be found in the Linux Standard Base's section on [Init Script Actions](http://refspecs.linuxbase.org/LSB_3.1.0/LSB-Core-generic/LSB-Core-generic/iniscrptact.html).  This states that applications conforming to the standard should accept a single argument which should include one of the following:

* `start`
* `stop`
* `restart`
* `force-reload`
* `status`

The `status` action works by returning specific exit status codes:

* `0`: The service is running correctly
* `1`: The program is dead and a `/var/run` pid file exists
* `2`: The program is dead and a `/var/lock` lock file exists
* `3`: The program is not running
* `150` to `199` are reserved for your own requirements

Other actions are also expected to return specific status codes:

* `1`: Unspecified error
* `2`: Invalid arguments
* `3`: Unimplemented feature
* `4`: Insufficient privileges
* `5`: Program is not installed
* `6`: Program is not configured
* `7`: Program is not running
* `150` to `199` are reserved for your own requirements

Most daemons are distributed without implementing all of these actions and status codes, but it's a good idea to be aware of them.

###Node Examples

[StatsD](https://github.com/etsy/statsd) (License: _MIT_, npm: _statsd_) from Etsy is a network daemon for aggregating statistics.  It comes with the files for a Debian package, and includes an upstart script:

{% highlight text %}
description "statsd"
author      "rdio"

start on startup
stop on shutdown

script
    # We found $HOME is needed. Without it, we ran into problems
    export HOME="/root"

    exec sudo -u nobody /usr/share/statsd/scripts/start
end script
{% endhighlight %}

Part of the installation process sets up log files with the correct permissions, and installs a configuration file to `/etc/statsd`.  It's usually a good idea to support a system-wide configuration file that can be overridden for the purpose of distributing daemons.

The log file is created in `/var/log/statsd/`, which is standard as well.

This daemon loads the configuration file based on the command-line argument:

{% highlight javascript %}
config.configFile(process.argv[2], function(config, oldConfig) {
  // Process the configuration file
});
{% endhighlight %} 

Some daemons may opt to check for configuration files in default locations, loading them in order of preference:

* `/etc/mydaemon/config.js`
* `$HOME/.mydaemon/config.js`

###Init Module

Developing a Linux-friendly init script is made easy by the [Init Node module](https://github.com/frodwith/node-init) by Paul Driver.  He's actually implemented the correct status codes, and the [daemon](https://github.com/indexzero/daemon.node) module has been used, so you essentially get a real background daemon with very little code:

{% highlight javascript %}
var init = require('init');

init.simple({
  pidfile: '/var/run/myprog.pid',
  logfile: '/var/log/myprog.log',
  command: process.argv[3],
  run: function() {
    setInterval(function() {
      // Will be redirected to /var/log/myprog.log
      console.log('Running');
    }, 1000);
  }
});
{% endhighlight %}

Notice that console output will be redirected to a log file, so in this case "Running" will be printed to `/var/log/myprog.log`.

###Wrapper Scripts

The Init module turns a Node script into a daemon, but what if your daemon needs to accept various command-line parameters rather than just start/stop/restart?  In this case, most people either write a shell script to provide a System V init wrapper, or they might use an upstart script as we saw with StatsD.

Of course, other Unix systems have different init implementations, but a simple init script or init script-compatible Node module can usually be coerced into working with systems like Solaris' SMF.

You'll need basic shell scripting skills to write an init script, but there's an example of one in Fedora's packaging documentation: [SysVInitScript](http://fedoraproject.org/wiki/Packaging:SysVInitScript#Initscript_template).

###Packaging Guidelines

If you want to reach a wider audience, packing guidelines often have useful tips on how to distribute daemons as well:

* [Basics of the Debian package management system](http://www.debian.org/doc/manuals/debian-faq/ch-pkg_basics.en.html)
* [Ubuntu packaging guide](https://wiki.ubuntu.com/PackagingGuide)
* [Fedora RPM](http://fedoraproject.org/wiki/How_to_create_an_RPM_package)
* [Arch packaging](https://wiki.archlinux.org/index.php/Arch_Packaging_Standards)
* [Solaris pkgadd](http://www.sunfreeware.com/pkgadd.html)
