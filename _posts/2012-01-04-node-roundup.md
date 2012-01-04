---
layout: post
title: "Node Roundup: i18next, Sift.js, Comb"
author: Alex Young
categories: 
- node
- modules
- translation
---

<div class="intro">
You can send in your Node projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###i18next

[i18next](http://jamuhl.github.com/i18next-node/) (GitHub: [jamuhl / i18next-node](https://github.com/jamuhl/i18next-node), License: _MIT_, npm: _i18next_) by Jan Mühlemann is a library for supporting multiple languages in Node applications.  I previously [posted about i18next](http://dailyjs.com/2011/12/20/jquery-roundup/) in the jQuery Roundup.

i18next supports the expected set of translation tools, like pluralized strings, variables, and nesting.  This Node port adds much-welcomed features like Express middleware and template support.

To add the required helpers to an Express app, call `i18next.registerAppHelper(app)`, then use a familiar `t()` function to access translations in templates.  The author provides a Jade example, so fans of the authentic TJ Holowaychuk Express/Jade/Stylus stack should be happy.

###Sift.js

[sift.js](https://github.com/crcn/sift.js) (npm: _sift_) by Craig Condon is a MongoDB-inspired array filtering library. It's a bit like an alternative to Underscore for people who love MongoDB.  Sift.js supports operators like `$in` and `$gt`, but can also filter arrays based on functions and even works with deeply-nested objects in arrays.

Craig has provided a few examples that should look familiar to Mongo users:

{% highlight javascript %}
var sift = require('sift');

sift({ $in: ['hello','world'] }, ['hello','sifted','array!']);
// ['hello']
{% endhighlight %}

Full documentation is included, covering all of the supported operators and deep searching.

###Comb

[Comb](https://github.com/Pollenware/comb) (License: _MIT_, npm: _comb_) by Doug Martin is a framework for Node that includes "frequently needed utilities", like logging tools, string and date formatting, flow control, and various collection algorithm implementations such as [BinaryTree](http://pollenware.github.com/comb/symbols/comb.collections.BinaryTree.html) and [PriorityQueue](http://pollenware.github.com/comb/symbols/comb.collections.PriorityQueue.html).

Every class provided by Comb has documentation at [pollenware.github.com/comb](http://pollenware.github.com/comb/).  One of the interesting things I noticed about this project is the author claims 99% test coverage, so that fellow who filled out our [JavaScript survey](http://dailyjs.com/2011/12/15/javascript-survey-results/) with "I code everything perfect on the first try" might want to check out the source.
