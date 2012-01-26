---
layout: post
title: "Using Node Modules Effectively"
author: Alex Young
categories: 
- node
- modules
- translation
---

Node's module system is deceptively clever.  On the surface it seems like it provides just enough functionality to get by, but it can go a long way towards helping to structure an application elegantly.  [Node's official documentation](http://nodejs.org/docs/latest/api/all.html#modules) covers all of the major features, yet many modules sent in for review at DailyJS don't use these techniques where they could.

For this article I'll be using [Express](http://expressjs.com/) applications as an example, but these techniques can be applied to any Node application, whether it's a command-line tool or TCP service.

### Splitting up Large Files

Most Express tutorials and examples have a monolithic file that does everything, but Node's module system gives us some tools to split the file up without much effort.  Express routes are a good target for reorganisation.

Given a set of routes:

{% highlight javascript %}
app.get('/', function() {});

app.get('/users', function() {});
app.get('/users/:id', function() {});
{% endhighlight %}

Then we can reorganise them by creating a folder called `routes/`, and creating files with the following structure:

{% highlight text %}
routes/
├── index.js
├── main.js
└── users.js
{% endhighlight %}

Express developers often use `main.js` as the convention for things that aren't easily split into RESTful groups.  In this example I'd put the `'/'` route in there.  The extra file, `index.js` would look like this:

{% highlight javascript %}
require('./main');
require('./users');
{% endhighlight %}

Now our `app.js` file that loads Express and instantiates an `app` object can have all of the routes removed and replaced with `require('./routes');`.

Two things make this example work: Node will automatically look inside a folder for `index.js`, and `app` is a global.

In Node, defining `app` using `var` will restrict its scope to the current module.  By purposefully not defining `app` with `var` it's accessible inside the routes files.  Otherwise we'd have to pass it to each routes module somehow.  I see modules structured like this a lot:

{% highlight javascript %}
module.exports = function(app) {
  app.get('/thing', function() {});
};
{% endhighlight %}


Speaking of coupling, using globals can quickly lead to tightly coupled code that makes reuse harder.  Making `app` global in an Express application can help cut down a little bit of boilerplate.  I generally keep my routes lightweight so the core functionality is less coupled to Express.  In addition, I'll often create new modules for functionality that seems generic, so I can reuse it in other Express apps.

### Configurable Folders as Modules

Node can also be told where to look when loading modules by using a `package.json` file.  This allows the module's main file to have a different name:

{% highlight javascript %}
{ "name" : "sub-module"
, "main" : "./path/main.js" }
{% endhighlight %}

This seems to be used a lot less than the `index.js` convention, but it may help you fit it to your application's internal naming scheme.

### Tracking `require`

Node sets `require.main` to its `module` when run directly, but doesn't when loaded using `require`.  I've also used `module.parent` to achieve this in the past.

These values are often used to determine if an Express application should call `app.listen()` or not, because not all tests want the same behaviour so conditionally listening based on environment isn't always the best approach.

For example:

{% highlight javascript %}
if (!module.parent) {
  app.listen();
}
{% endhighlight %}

### Private Modules

Using `package.json` to manage dependencies and other metadata is great, even for private, closed source projects.  However, there's always the nagging feeling that someone could accidentally publish a package when working on commercially sensitive projects.  Fortunately, setting `"private": true` will prevent npm from publishing the package.

### AMD

If you're primarily a client-side developer and have been writing libraries using [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), using it in Node may appeal to you.  However, the [nodejs-dev](http://groups.google.com/group/nodejs-dev/) group has had several "mile-high threads" on the subject, and support has moved to userland.

[RequireJS](http://requirejs.org/docs/node.html) provides a Node implementation for AMD.  The [amdefine](https://github.com/jrburke/amdefine) module implements `define`.

I'd be tempted to load define as a global in a main module using `define = (require('amdefine'))(module);`.  This allows modules to be structured with a leading `define(` call, so they could be shared between the browser and server without any boilerplate.
