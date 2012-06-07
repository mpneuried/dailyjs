---
layout: post
title: "Preparing for Node 0.8"
author: Alex Young
categories: 
- node
---

Node 0.8 will be released soon:

> v0.8 is around the corner. There's only 1, maybe 2 more 0.7 releases, and then we're going stable. Test your stuff against master now!

-- [@nodejs](https://twitter.com/nodejs/status/210160851225821184)

The [API changes](https://github.com/joyent/node/wiki/API-changes-between-v0.6-and-v0.8) are relatively straightforward, as we've seen with previous Node releases.

If you've been following our [Windows and Node](http://dailyjs.com/tags.html#windows-and-node) posts, then of particular interest is the move to [node-gyp](https://github.com/TooTallNate/node-gyp) as the addon build system.  This makes building addons easier for Windows users, but at the same time more people are starting to bundle binaries.  I've found a few node-gyp modules that build successfully in Windows while researching articles for DailyJS, so hopefully the transition won't be too painful.

[Domains will be included in 0.8](http://nodejs.org/docs/v0.7.9/api/domain.html) -- notice how the documentation already refers to 0.8.  I remember reading about domains in Ryan Dahl's [Node v0.8 roadmap](https://groups.google.com/d/msg/nodejs/eVBOYiI_O_A/1ShfZZvb_4QJ):

> Domains provide a lightweight isolation mechanism for all i/o related to a particular network connection (e.g. an incoming http request). If an unhandled error is encountered, all i/o local to that particular domain is canceled and all handles are cleaned up.

Isaac Schlueter said [it's likely that 0.8 will include V8 v3.10 rather than 3.11](https://twitter.com/izs/status/210606795918548992).  The last time I checked, Node 0.6 was on V8 3.6.6.25, and since then V8 has seen performance improvements, bug fixes, and better ECMAScript 5 conformance.

###Preparations

* If you're a module author, now is a good time to migrate node-waf projects to node-gyp
* If possible, tag or branch the last working 0.6 version of your modules so people can still install a legacy version -- it's awkward to run multiple versions of Node in Windows
* Ensure your test suites pass, and follow the [API changes](https://github.com/joyent/node/wiki/API-changes-between-v0.6-and-v0.8) to convert legacy code
* Update your `package.json` files to refer to the correct version of Node under the `engines` property
