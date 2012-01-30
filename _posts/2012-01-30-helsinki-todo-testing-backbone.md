---
layout: post
title: "HelsinkiJS February, Todo, Testing Backbone.js"
author: Alex Young
categories: 
- libraries
- testing
- node
- browser
- events
- backbone.js
---

### HelsinkiJS February

[HelsinkiJS February](http://lanyrd.com/2012/helsinkijs-february/) has been announced, and will take place on the 16th of February at [Codento](http://lanyrd.com/venues/helsinki/vpmh/).  Two speakers are attending so far: [Jarno Keskikangas](https://twitter.com/#!/pyykkis81) and [@polarblau](https://twitter.com/#!/polarblau).

If you want me to include your JavaScript event on DailyJS, just [@dailyjs](http://twitter.com/dailyjs) or [use our contact form](/contact.html) to get in touch!

### Todo

![Todo screenshot](/images/posts/todo.png)

[Todo](https://github.com/vesln/todo) (License: _MIT_, npm: _todo_) by Veselin Todorov is a small todo list application for the command-line interface, written with Node.  I like seeing clever Unix utilities and command-line applications made with Node, and this one seems cool with its coloured UI and UTF-8 characters.

The interesting thing about this tool is it's built using [Flatiron](http://flatironjs.org/).  Flatiron is designed to be adaptable, and although it's aimed at web development, anything can (and will) be built with it.

If you're a fellow command-line hacker and have mastered pretty colours and option parsing, then another useful thing is to include a man page.  This is supported by npm: check out `npm help json` and scroll down to the "man" section.

### Testing Backbone.js Best Practices

[Testing Backbone.js Best Practices](http://blog.involver.com/2012/01/26/testing-backbone-js-best-practices-2/) by Jonathan Eatherly includes some useful tips.  I've often felt like testing [Backbone.js](http://documentcloud.github.com/backbone/) is a little bit hard to visualise, but Jonathan makes a few confusing aspects much clearer:

> By default a Backbone view will create an in-memory jQuery object containing a single DIV
> element ... This means we don’t have to see the ugly injecting and removing of content
> on the page as the tests run, there is no need to clean up the DOM after each test
> iteration, and our test suite will run much faster.

His examples use the [Jasmine](http://pivotal.github.com/jasmine/) test framework, but much of this advice can be applied to any test framework.
