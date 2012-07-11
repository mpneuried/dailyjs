---
layout: post
title: "Node Roundup: 0.6.20, New npm Site, Raspberry/ARM, Engines Removal, nodist"
author: "Alex Young"
categories: 
- node
- modules
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Node 0.6.20

[Node 0.6.20](http://blog.nodejs.org/2012/07/10/node-v0-6-20-maintenance/) has been released.  The 0.6 series is now in "maintenance mode", so this release tidies a few things and updates npm, there isn't anything application-breaking as far as I can tell.

[Node 0.8.2](http://blog.nodejs.org/2012/07/09/node-v0-8-2-stable/) was also released.  There are bug fixes and incremental improvements, I've updated to it for all my development work and it seems fine so far.

###New npm Site

![new.npmjs.org](/images/posts/newnpm.png)

The new npm site is available at [new.npmjs.org](https://new.npmjs.org/).  The new design is based on [nodejs.org](http://nodejs.org/) -- the navigation, icons, and typography have been reused, which makes a welcome change from the old hacker-friendly monospaced font design.

Signing in to the new site allows account credentials to be edited, including social network handles.  Avatars are supported through Gravatar.  And... packages have their own pages, no more hash URLs!  Take a look at the [Express npm page](https://new.npmjs.org/package/express) to see what I mean.  It even displays documentation.

The source for the new site is open source and can be downloaded at [GitHub: isaacs / npm-www](https://github.com/isaacs/npm-www).  This is actually quite enlightening, because Isaac has written a readme with an extremely detailed design philosophy.

> Ridiculous speed: This site should be surprisingly fast. Towards that end, things are cached and served from memory whenever possible, and ETagged for browser-cacheablility.

> No lib folder: If you would put it in `lib/`, then it belongs in a separate module.

Considering who this comes from this could form the start of a guide to idiomatic Node web applications, which is something I feel is sorely lacking in the community.

There [aren't currently any tests](https://groups.google.com/d/msg/nodejs/FaKKqGCY6tQ/VxSu6jZvOS0J), outside of the project's dependencies.  However, even if you're a die-hard TDD advocate I still think there's a lot to be learned from taking a deeper look at this project.

###From the Groups: Raspberry Pi, Engines

Trying to build Node for a [Raspberry Pi](http://www.raspberrypi.org/)?  There's a discussion about [ARM support](https://groups.google.com/d/topic/nodejs-dev/55qwCfmCt0I/discussion) on nodejs-dev:

> Every time there's a new version of node I have to go in and modify config files specifically for ARM and it seems that nodejs just doesn't run very well on it.

Apparently building for ARM requires V8 to be compiled as a shared library:

> The current problem is with V8 + gyp. If you compile v8 from svn as a shared library, node should then compile alright.

-- AJ ONeal

I also noticed an interesting discussion about [removing "engines" from package.json](https://groups.google.com/d/topic/nodejs/_ZggTOJQ2Rk/discussion):

> Engines is advisory.  It prints a warning.  Set `engineStrict` in your package.json, or `--engine-strict` config, to make it strict.  (If the package.json field is abused, it will be removed eventually.  I don't suspect this is going to be an issue.) 

There's a commit related to this here: [Make 'engines' field advisory](https://github.com/isaacs/npm/commit/ee1d168d7a4798b67bb9a7667b5ec93a8be3d953).

###nodist

[nodist](https://github.com/marcelklehr/nodist) (License: _MIT_, npm: [nodist](http://search.npmjs.org/#/nodist)) by Marcel Klehr is a Node version manager for Windows.  Once Node has been installed with the standard Windows installer, other versions can be installed using nodist's command-line interface:

{% highlight text %}
nodist + v0.8.1
{% endhighlight %}

Typing `nodist --help` will display documentation for each command and examples.
