---
layout: post
title: "JavaScript Patterns, jQ.Mobi, Third-Party JavaScript"
author: Alex Young
categories: 
- third-party
- books
- patterns
- mobile
---

### JavaScript Patterns

The [JavaScript Pattern Collection](http://shichuan.github.com/javascript-patterns/) (GitHub: [shichuan / javascript-patterns](https://github.com/shichuan/javascript-patterns)) by Shi Chuan is a collection of JavaScript patterns and anti-patterns including jQuery, functions, object literals and constructors, and object-oriented design patterns.

The jQuery patterns and anti-patterns are pretty good reading for anyone who writes plugins.  The reasons for anti-pattern status are usually cited with a link to a post that covers why the technique is considered poor form.  For example: [universal-selector.html](https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/universal-selector.html) and [requery.html](https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/requery.html).

### jQ.Mobi

[jQ.Mobi](http://jqmobi.com/) (GitHub: [appMobi / jQ.Mobi](https://github.com/appMobi/jQ.Mobi), License: _MIT X11_) from appMobi is a framework aimed at HTML5 mobile browsers.  According to the documentation, `jQ.Mobi`, is the "query selector" library.  I thought this was confusing because surely a web framework that targets WebKit only has to wrap a small amount of functionality around `querySelectorAll`?  In reality, this library includes most of what jQuery does: `$.map`, `$.each`, `$.fn`, css and attribute getters and setters, event handling, and even Ajax methods.  There's also a user interface library, and plugin support.

Each part of the library is presented as a monolithic file, and it doesn't look like they're built from smaller files.  If this was my library, I'd split each of these files up into modules, with a build process that can output monolithic and minimised files.  I'd also consider using the [Asynchronous Module Definition](https://github.com/amdjs/amdjs-api/wiki/AMD) specification to structure the library.  It's also slightly difficult to find the source -- the homepage has a button that prompts for an email address, with a greyed out link to "No thanks, just get the code".

The jQ.Mobi site claims that this is a rewrite of jQuery that targets WebKit mobile browsers, but we've already seen this several years ago at this point with libraries like [Zepto](http://zeptojs.com/).  And there are also mobile interface libraries that are compatible with both jQuery and Zepto, like [jQTouch](http://jqtouch.com/), so I question the wisdom of coupling a jQuery clone with an interface library.

### Writing Third-Party JavaScript Tutorial

[Writing Quality Third-Party JS](http://blog.errorception.com/2012/01/writing-quality-third-party-js-part-1.html) by Rakesh Pai from {errorception} is a tutorial series about writing third-party JavaScript.  If you're looking to scripts that run on other sites, like Disqus or Google Analytics, then this is an interesting read that covers the basics.

[Third-party JavaScript The Book](http://thirdpartyjs.com/) by Ben Vinegar and Anton Kovalyov can also be bought as part of Manning's Early Access Program for $35.99.  It looks like it'll be the most thorough coverage of this topic once it's finished.
