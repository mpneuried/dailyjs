---
layout: post
title: "Jed, messageformat.js, Blossom"
author: Alex Young
categories: 
- node
- modules
- translation
- sproutcore
---

### Jed

[Jed](http://slexaxton.github.com/Jed/) (GitHub: [SlexAxton / Jed](https://github.com/SlexAxton/Jed), License: _WTFPL/Dojo CLA_, npm: _jed_) by Alex Sexton is a JavaScript implementation of [gettext](http://www.gnu.org/software/gettext/).  Plural forms are parsed using a Jison grammar (in [plurals.jison](https://github.com/SlexAxton/Jed/blob/master/plurals.jison))), and it has a chainable API:

{% highlight javascript %}
var n = 5;

i18n
  .translate("%d key doesn't exist")
  .ifPlural(n, "%d keys don't exist")
  .fetch();
{% endhighlight %}

This can be used in both browsers and Node, and the author also demonstrates using it in the AMD style.  As a bonus, Jed includes a useful `sprintf` implementation.

### messageformat.js

[messageformat.js](https://github.com/SlexAxton/messageformat.js) (License: _WTFPL/Dojo CLA_, npm: _messageformat_) also by Alex Sexton handles both pluralization and gender in translations.  Despite sounding similar to Jed, this is a different approach to gettext:

> Gettext can generally go only one level deep without hitting some serious roadblocks. For example, two plural elements in a sentence, or the combination of gender and plurals.

Basic interpolation looks like this:

{% highlight javascript %}
var mf = new MessageFormat('en')
  , message = mf.compile('His name is {NAME}.');

message({ 'NAME' : 'Jed' });
// "His name is Jed."
{% endhighlight %}

More complex replacements can use `SelectFormat` and `PluralFormat`:

{% highlight javascript %}
var message = mf.compile('{GENDER, select, male{He} female{She} other{They}} liked this.');
message({ 'GENDER' : 'male' });
// "He liked this."

message({ 'GENDER' : 'female' });
// "She liked this."
{% endhighlight %}

### Blossom

[Blossom](https://gist.github.com/83ac249f80f3fbc12855) (GitHub: [fohr / blossom](https://github.com/fohr/blossom), License: _GPLv3_, npm: _blossom_) is an early beta of what Erich Ocean hopes represents the future of SproutCore:

> Blossom is a serious attempt to advance SproutCore 1.x forward after the failure of SproutCore 2. I put forward the rational behind Blossom in early December, 2011 and also demo'd early work I had done on Blossom at the SproutCore User Group in Washington D.C. late January, 2012. \[...\] Blossom is designed to become the future of SproutCore, but it also stands on its own.

Blossom has a Node-based build system, and it can be installed with `npm install blossom`.  It includes the latest datastore and statechart code from SproutCore 1.8, and Node-based unit tests for foundation and datastore.

Currently, the SproutCore documentation should suffice for working with parts of Blossom.  The Blossom developers are currently working towards their first release candidate on April 1st.  The current code on GitHub is 1.0.0-beta.1.

Despite its SproutCore heritage, it's important to understand where Blossom is different:

> instead of simulating a web browser, Blossom's native runtime has high-performance, platform-native implementations of the various Blossom and SproutCore classes, such as SC.Request (for networking), SC.Layer (for animation), as well as the various JavaScript runtime objects such as CanvasRenderingContext2D, Float32Array and ArrayBuffer that are exposed to Blossom developers.
