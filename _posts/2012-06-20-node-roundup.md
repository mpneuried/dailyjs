---
layout: post
title: "Node Roundup: 0.7.12, nd, futoncli"
author: "Alex Young"
categories: 
- node
- modules
- couchdb
- databases
- documentation
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Node 0.7.12: Prepare for 0.8!

[Node 0.7.12](http://blog.nodejs.org/2012/06/19/version-0-7-12/) is here, and Isaac Schlueter said Node 0.8.0 will be released later this week:

> Please try out this release. There will be very virtually no changes between this and the v0.8.x release family. This is the last chance to comment before it is locked down for stability. The API is effectively frozen now.

That means it's crunch time!  Efforts have been made to preserve support for binary addons that use libeio and libev, but libev will be officially deprecated in 0.8 and gone in 0.9.

The 0.6 era feels like halcyon days -- a time when Node received a huge amount of attention from the mainstream technology press, and stronger than ever developer interest.  I'd like to wish the core team the best of luck with the 0.8 release.

###nd

Back in April, TJ Holowaychuk released [mad(1)](http://tjholowaychuk.com/post/21100445420/going-mad-1), an alternative manual page system based on Markdown.  Now Russ Frank has released [nd](https://github.com/russfrank/nd) (License: _MIT_, npm: [nd](http://npmjs.org/package/nd)), which is similar to mad but focused on displaying documentation for npm modules and is written in JavaScript.

Typing `nd module` will display the documentation associated with `module`.  The project's readme contains lots of tips for finding documentation within modules and displaying it, and it also points out that it supports Windows -- it'll run fine in the standard `cmd.exe` command interpreter.

###futoncli

![Futon](/images/posts/futon.png)

If you're working with CouchDB, then [futoncli](https://github.com/dscape/futoncli) (License: _Apache 2.0_, npm: [futon](http://npmjs.org/package/futon)) by Nuno Job may be useful.  It's a command-line tool for managing CouchDB, and is based on the author's [nano](https://github.com/dscape/nano) database driver.

Once installed, the `futon` binary will accept commands, and configuration can be persisted to the `~/.futoncliconf` file.  The author has made a [video of futoncli](http://codestre.am/4fd7fdf69582b28f1f01c7bf) to demonstrate the main features.
