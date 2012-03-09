---
layout: post
title: "RPG, Luca, KSS"
author: Alex Young
categories: 
- node
- modules
- games
- backbone.js
---

### JavaScript Tile-Based RPG

![RPG screenshot](/images/posts/probedrpg.png)

[Probed / RPG](https://github.com/Probed/RPG) is a tile-based RPG written with server-side JavaScript.  It's built with Node, but the author has only deployed it to Windows so far.   There's a video of the game here:

<object width="500" height="254"><param name="movie" value="http://www.youtube.com/v/D1-w8bU1E4Y?version=3&amp;hl=en_US"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/D1-w8bU1E4Y?version=3&amp;hl=en_US" type="application/x-shockwave-flash" width="500" height="254" allowscriptaccess="always" allowfullscreen="true"></embed></object>

The goal of the project is to create a random game world with quests, a battle system, loot, equipment, and levelling.

### Luca

[Luca.JS](http://datapimp.github.com/luca/) (GitHub: [http://datapimp.github.com/luca/](https://github.com/datapimp/luca)) by Jonathan Soeder is a library for Backbone.js that provides augmented `View` and `Collection` classes:

> Luca \[includes\] best practices and optimizations that I have personally come up with developing some rather large Backbone.js apps.  It assumes a style of progamming very similar to ExtJS where you define almost all of your views and components as large nested JSON structures.

Luca is built on Twitter's Bootstrap CSS, and includes CoffeeScript examples.  It's initially distributed as a Ruby library for Rails projects.  The author is planning to add JavaScript examples and distribute an alternate version through npm in the future.

Regardless, it may provide some inspiration for those who want to further their Backbone.js knowledge.

### KSS

[KSS](http://hughsk.github.com/kss-node/) (GitHub: [hughsk / kss-node](https://github.com/hughsk/kss-node), npm: _kss_) by Hugh Kennedy is a Node implementation of [Knyle Style Sheets](https://github.com/kneath/kss) which is a methodology for writing maintainable CSS.  

> Specifically, KSS is a documentation specification and styleguide format. It is not a preprocessor, CSS framework, naming convention, or specificity guideline.

Installing the KSS module provides a `kss-node` command-line tool that will generate styleguide documentation based on your LESS or CSS stylesheets.

The project's site includes a demo -- take a look at the [KSS Modules documentation](http://hughsk.github.com/kss-node/section-1.html) for an example.

The module also includes an API, and it includes tests written with [Mocha](https://github.com/visionmedia/mocha).
