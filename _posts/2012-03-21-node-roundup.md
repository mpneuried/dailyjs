---
layout: post
title: "Node Roundup: 0.6.13, 0.7.6, ShareJS, Route66"
author: Alex Young
categories: 
- node
- modules
- connect
- middleware
- apps
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Node 0.6.13 and 0.7.6

[Node 0.6.13 (stable)](http://blog.nodejs.org/2012/03/15/version-0-6-13-stable/) and [0.7.6 (unstable)](http://blog.nodejs.org/2012/03/13/version-0-7-6-unstable/) have been released.  These releases also update npm, and I noticed npm can now take OS and CPU properties in package.json.  This is documented in the man page, so to read more type `man npm-json` or view the online version here: [npmjs.org/doc/json.html](http://npmjs.org/doc/json.html).

Architectures and operating systems can even be blacklisted, so if you're sure your module runs fine everywhere except Windows, then this can be represented with `"os" : [ "!win32" ]`.

###ShareJS

[ShareJS](http://sharejs.org/) (GitHub: [josephg / ShareJS](https://github.com/josephg/ShareJS), License: _MIT_, npm: _share_) by Joseph Gentle is an application that can be used to add concurrent editing to any web application.  The server is Node, and the client is expected to use [Ace](http://ace.ajax.org/) for editing.

The author has already put together a [ShareJS wiki](https://github.com/josephg/ShareJS/wiki) with extra documentation (although the readme is pretty good too).  Also of note is the decision to use Operational Transformations:

> Most wikis have a 'save' button and do locking. OT is a class of algorithms that do multi-site realtime concurrency. OT is like realtime git. It works with any amount of lag (from zero to an extended holiday). It lets users make live, concurrent edits with low bandwidth.

According to the project's documentation, Joseph is an ex-Google Wave engineer (his LinkedIn profile mentions "Engineering Intern at Google").  Also, ShareJS has a 1:1 code to test LoC ratio.

###Route66

[Route66](http://vdemedes.github.com/route66/) (GitHub: [vdemedes / route66](https://github.com/vdemedes/route66), License: _MIT_, npm: _route66_) by Vadim Demedes is a middleware for routing in Connect 2.0.  Vadim missed the `connect.router` middleware that was removed from Connect, so he created a replacement.

The decision behind removing the router was discussed at length in the [Remove router](https://github.com/senchalabs/connect/issues/262) ticket in Connect's GitHub issues.
