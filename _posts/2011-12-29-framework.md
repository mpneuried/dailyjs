---
layout: post
title: "Retrofitting AMD"
author: Alex Young
categories: 
- frameworks
- tutorials
- lmaf
- amd
---

<div class="intro">
  <p><em>Let's Make a Framework</em> is an ongoing series about building a JavaScript framework from the ground up.</p>
  <p>These articles are tagged with <a href="http://dailyjs.com/tags.html#lmaf">lmaf</a>.  The project we're creating is called <a href="http://github.com/alexyoung/turing.js">Turing</a>.  Documentation is available at <a href="http://turingjs.com/">turingjs.com</a>.</p>
</div>

[Last week](/2011/12/22/framework) I looked at how AMD (Asynchronous Module Definition) works and how projects use it.  This week I'm going to show how to retrofit it to an existing project, in this case our Turing framework, and hopefully you'll be able to apply this to your own reusable client-side JavaScript.

### Redefining Modules

Turing's modules were structured around Immediately-Invoked Function Expressions (IIFEs), with CommonJS module loading support.  AMD supports CommonJS modules, and Node can work with AMD too.

The core Turing module can be defined as an AMD module like this:

{% highlight javascript %}
define('turing.core', [], function() {
  var turing = function() {};

  // Core functionality added here

  return turing;
});
{% endhighlight %}

A module loader is now needed to use this code in a browser.  [RequireJS](http://requirejs.org/) works like this:

{% highlight javascript %}
require(['turing.core'], function(turing) {
});
{% endhighlight %}

The methods in `turing.core.js` will be available once RequireJS has loaded the script.

### Dependencies

A good reason for using AMD is dependencies can be specified and resolved by loaders.  In Turing, every module depends on `turing.core`.  That means the DOM module would have to be updated to look like this:

{% highlight javascript %}
define('turing.dom', ['turing.core'], function(turing) {
  var dom = {};
  // DOM module defined here
  return dom;
});
{% endhighlight %}

Previously, expressing dependencies between modules wasn't possible outside of code comments.  Dependencies make it easier to break down functionality into smaller reusable chunks and loaded when required.

### Loading the Entire Framework at Once

When using frameworks like jQuery, many projects need a broad selection of functionality and therefore load the entire library rather than parts of it.  Rather than forcing users to use `require` or `define` invocations with a large amount of dependencies, it's possible to offer a broad selection in one file.

I've created a `turing.js` file that contains the following:

{% highlight javascript %}
define('turing', ['turing.core', 'turing.dom', 'turing.anim'], function(core, dom, anim) {
  core.dom = dom;
  core.anim = anim;
  return core;
});
{% endhighlight %}

These are the modules that I've ported to work with AMD so far, but I'll add all of them under `turing.js` once I've finished.

### Building

What about building a monolithic, minified version of Turing?  RequireJS addresses this by including the [RequireJS Optimizer](http://requirejs.org/docs/optimization.html).  This basically boils down to:

{% highlight sh %}
> npm install requirejs
> r.js -o app.build.js
{% endhighlight %}

### Conclusion

I've started adapting Turing to work with AMD, and my early tests work with RequireJS.  However, I'm finding it difficult to get builds to generate with [r.js](https://github.com/jrburke/r.js/issues) (it seems like the current release has bugs).

Although using AMD's well-defined module pattern and dependencies solves certain problems when developing reusable code, it makes it difficult to satisfy users who simply want to include a library using a script tag without a module loader like RequireJS.  I've been experimenting with creating a small `define` function that is used when a module loader isn't available, and I'll cover that in next week's tutorial.

