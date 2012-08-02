---
layout: post
title: "Page, testr.js, screenfull.js"
author: Alex Young
categories: 
- testing
- fullscreen
- routing
---

###Page

If I had to place a bet on the most activity by one person on GitHub, I'd bet on TJ Holowaychuk.  His latest project is [Page.js](http://visionmedia.github.com/page.js/) (GitHub: [visionmedia / page.js](https://github.com/visionmedia/page.js), npm: [page](http://npmjs.org/package/page)), which is a client-side router.  The routing syntax works like Express, so variables are denoted by `:name`, and the `*` route can be used to catch 404s.  In this case, 404 is open to interpretation.

{% highlight javascript %}
page('/', index)
page('/user/:user', show)
page('/user/:user/edit', edit)
page('/user/:user/album', album)
page('/user/:user/album/sort', sort)
page('\*', notfound)
page()
{% endhighlight %}

It's actually a very lightweight project, based around `pushState`, but it includes detailed comments and Mocha tests.

###testr.js

[testr.js](https://github.com/mattfysh/testr.js) (License: _MIT_) by Matt Fysh is for unit testing [RequireJS](http://requirejs.org/) modules.  Use it with your favourite test framework to test both stubbed and script-loaded dependencies:

{% highlight javascript %}
testr('path/to/module', stubs);
testr('path/to/module', useExternal);
testr('path/to/module', stubs, useExternal);
{% endhighlight %}

The author has written some projects that use testr.js -- [asq](https://github.com/mattfysh/asq) and [after](https://github.com/mattfysh/after) both use it with Jasmine.

###screenfull.js

[screenfull.js](http://sindresorhus.com/screenfull.js/) (GitHub: [sindresorhus / screenfull.js](https://github.com/sindresorhus/screenfull.js), License: _MIT_) by Sindre Sorhus is another wrapper around the Fullscreen API.  The semantics are similar to the specification, but a lot simpler -- the README has a comparison with "vanilla" JavaScript which is several lines of code.  Using screenfull.js, only `screenfull.request()` is required to trigger fullscreen mode.

The library can do other things as well: a single element can be fullscreened, or events can be used to detect a change to fullscreen mode.
