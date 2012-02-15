---
layout: post
title: "Node Roundup: Gumroad, Functools, Asyncblock, Geddy, Lemmy"
author: Alex Young
categories: 
- node
- modules
- async
- fibers
- frameworks
---

### Gumroad

![Gumroad logo](/images/posts/gumroad-logo.png)

[Gumroad](https://gumroad.com/) is a new payment service aimed at digital goods sales that works in over 190 countries.  As someone who builds small web applications with subscription fees, I can honestly say that receiving payments is the least fun part of development.  It's fun getting paid, but dealing with payment provider APIs can be stressful to say the least.  So I read with interest when Vadim Demedes sent us his Node Gumroad client (License: _MIT_, GitHub: [vdemedes / node-gumroad](https://github.com/vdemedes/node-gumroad), npm: _gumroad_).

The client is a class that is instantiated with a Gumroad username and password.  After calling an authentication method, item links can be created and managed.  For more about Gumroad's links, take a look at [How does Gumroad work?](https://gumroad.com/how-it-works)
### Functools

[Functools](https://github.com/azer/functools) (License: _WTFPL_, GitHub: [azer / functools](https://github.com/azer/functools), npm: _functools_) by E. Azer Koçulu has continued to evolve since we featured it last year.  Using languages like Clojure and Python for inspiration, Azer has created a small API of familiar flow control functionality.  A `compose` method can be used to call functions in sequence, and asynchronous functions are also supported.  There's also a `curry` method.

In [Avoiding Nested Callbacks in JavaScript](http://io.kodfabrik.com/2012/02/13/functools.html), the author discusses Functools, along with more detailed examples than supplied in the README.

### Asyncblock

Asyncblock (License: _MIT_, GitHub: [scriby / asyncblock](https://github.com/scriby/asyncblock), npm: _asyncblock_) is another flow control related library that we've previously featured on DailyJS.  Now version 2.0 has been released, which includes on-the-fly source transformation:

> Note that when V8 supports generators, which is currently planned, the source transformation functionality of asyncblock will
> be able to transform most of the asyncblock code to be based on generators instead of fibers with no change to the original
> source. This helps reduce risk as it provides a path forward for asyncblock even if support for fibers became impossible in the future.

The examples in the README show how using `asyncblock` with source transformation can result in very succinct code.

### GeddyJS

Meanwhile, Daniel Erickson let us know via Twitter that [GeddyJS](http://geddyjs.org) (License: _Apache 2_, GitHub: [mde / geddy](https://github.com/mde/geddy), npm: _geddy_) 0.3 is out.  This Node web framework now has a new Bootstrap website, compete with a [detailed tutorial](http://geddyjs.org/tutorial.html) and a list of [the major features](http://geddyjs.org/features.html).

If you're new to Geddy, it's a full stack framework.  Pretty much everything you need to build a web app is included.  If you've seen Geddy before, then version 0.3 seems to have changed a lot since the 0.1 days.  The only parts of the API that seem to have remained the same are models.

### Lemmy

[Lemmy](https://github.com/rock-n-code/lemmy) is an Express boilerplate generator inspired by Motörhead's Lemmy.  And why not?  There was an [Amiga Motörhead game](http://www.lemonamiga.com/games/details.php?id=765) in the early 90s, so why not an Express generator?  Anyway, it can be used to create a JavaScript or CoffeeScript application with Mocha tests.

Lemmy uses commands to generate lots of useful stubs, like middleware, routes, and models.  And the author writes a mean README.
