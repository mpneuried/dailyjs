---
layout: post
title: "Supporting AMD and Script Tags"
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

[Last week](/2011/12/29/framework) I started retrofitting Turing with AMD (Asynchronous Module Definition) support.  This week I'll complete most of this conversion to AMD by demonstrating how to use AMD modules both with and without a script loader.

### Backwards Compatibility

James Burke, creator of [RequireJS](http://requirejs.org/), contributed to Dojo's script loader.  As we've seen previously in this series, Dojo ships with a resource loader that's capable of loading AMD modules, and is in fact built upon AMD.  In contrast, jQuery conditionally supports AMD if a `define` function exists.

I wanted to do something slightly different: use `define` to express module dependencies, but still allow people to include Turing modules on a page without using a script loader.  All modules are dependent on `turing.core`, and some are dependent on the `dom` and `events` modules.  Turing contains some useful [Underscore](http://documentcloud.github.com/underscore/)-like functionality in the `turing.enumerable` module, and I've always avoided reusing it in other modules because there wasn't a way of expressing the dependency.

Therefore, I want Turing to be structured using AMD and to support these use cases:

* Load modules with script tags
* Use a monolithic, optionally minimised, build of the entire framework
* Load Turing modules with a script loader

This means we need an alternative method to jQuery's conditional AMD support.  Dojo's built-in script loader is another solution, but it's actually a huge amount of work and people might not always want to use a script loader.

So, what do we do?  There are a few ways to approach this problem:

1. Make the build process change calls to `define` to work without a script loader
2. Force people to use a script loader
3. Patch `define` when not available

The first option seems like it would require too much maintenance -- people would have to choose an AMD Turing download or a non-AMD version.  The second option allows us to build Turing using AMD's nice, modular structure, but completely breaks backwards compatibility.  The third option has potential, and this is the one I spent some time exploring.

### Patching `define`

To support AMD's `define` method when an AMD-compatible script loader isn't available, I added a method to `turing.core`:

{% highlight javascript %}
// turing.core.js
(function(global) {
  var turing = {}, modules = {};

  // `turing.core`'s code goes here

  turing.define = function(module, dependencies, fn) {
    if (typeof define === 'function' && define.amd) {
      define(module, dependencies, fn);
    } else {
      if (dependencies && dependencies.length) {
        for (var i = 0; i < dependencies.length; i++) {
          dependencies[i] = modules[dependencies[i]];
        }
      }
      modules[module] = fn.apply(this, dependencies || []);
    }
  };

  // Export `define``
  if (typeof define === 'undefined') {
    global.define = turing.define;
  }
}(typeof window === 'undefined' ? this : window));

// turing.dom.js
define('turing.dom', ['turing.core'], function(turing) {
  // `turing.dom` source
});
{% endhighlight %}

By wrapping each module in a `define` statement, individual modules can now be loaded using RequireJS, and they'll automatically load `turing.core`:

{% highlight javascript %}
require(['turing.anim'], function(anim) {
  turing('#results').html('Turing has loaded with the DOM module.');
  turing.anim.chain(turing('#animate')[0]).move(1000, { x: '100px', y: '100px', easing: 'ease-in-out' });
});
{% endhighlight %}

The `turing` function here is the global `turing` method that will get exported to `window`.  The `turing.anim` module has `turing.core` as a dependency, so we get the familiar `turing` function as expected.

This snippet is used by a functional test that I wrote to ensure Turing modules can be loaded with RequireJS.  It's a small Express app that can be found in `test/functional/require.js`.

### Conclusion

jQuery is currently a monolithic framework (although the build process can be customised to remove unwanted libraries) which makes supporting AMD relatively easy.  Conversely, Dojo is highly modular -- it's built on AMD and includes its own module loader.

Here I've presented an alternative solution that uses a lightweight version of AMD's `define` method to support module loading through script tags, monolithic files, and AMD-compatible script loaders.  It's a potentially useful pattern for structuring large libraries and frameworks that have interdependent modules.

The code for this tutorial can be found in [commit 4361042](https://github.com/alexyoung/turing.js/commit/43610422cc1095c35b475d35d429679fbe36a0f9).
