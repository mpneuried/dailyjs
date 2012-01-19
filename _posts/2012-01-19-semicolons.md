---
layout: post
title: "Semicolons, Objectively"
author: Alex Young
categories: 
- node
- style
- language
---

Last week in [Programming Styles in the Node Community](http://dailyjs.com/2012/01/12/style/) I discussed the styles of three prominent developers in the Node community.  The ensuing debate mainly focused on semicolons.  Rather than telling you my opinion on the topic, I'd like to explore it objectively so you can make your own decision on whether to use them or not.

Style and semantics aside: how are semicolons handled by minimizers?  Is it safe to write a client-side library without semicolons?

Let's look at the two most popular minimizers according to [JavaScript Developer Survey 2011 Results](http://dailyjs.com/2011/12/15/javascript-survey-results/).

### YUI Compressor

[YUI Compressor](http://developer.yahoo.com/yui/compressor/) can be downloaded as a zip file and includes a `jar` file in the `build/` directory that can be used like this:

{% highlight javascript %}
java -jar yuicompressor-x.y.z.jar myfile.js -o myfile-min.js --charset utf-8
{% endhighlight %}

This basic usage will insert semicolons.  If you write a file without semicolons, it'll remove newlines and insert them for you.  It'll also add semicolons to the end of a file, so concatenating multiple files is safe.

### Closure Compiler

[Closure Compiler](http://code.google.com/closure/) is also a Java application, and there's a web interface for it at [closure-compiler.appspot.com](http://closure-compiler.appspot.com/home).  By default semicolons are also inserted, and a semicolon will again be appended to the end of the file to aid concatenation.

In cases where usage is ambiguous, Closure Compiler will raise `JSC_SUSPICIOUS_SEMICOLON`.  Try this in the web interface:

{% highlight javascript %}
if (true);
else alert('no');
{% endhighlight %}

The [Closure Error and Warning Reference](http://code.google.com/closure/compiler/docs/error-ref.html) documentation explains this warning, which can be turned off:

> The compiler assumes that this is a mistake, and that you meant to have a statement between `if (true)` and the semi-colon.

Both of these libraries will also strip unnecessary semicolons.  For example, given this simple example:

{% highlight javascript %}
function hello(longName) {
  alert('Hello, ' + longName);
}
hello('New User');
{% endhighlight %}

The semicolon after `alert` will be removed.

### Standards

[Standard ECMA-262](http://www.ecma-international.org/publications/standards/Ecma-262.htm) and previous versions of ECMAScript include "Automatic Semicolon Insertion":

> Certain ECMAScript statements (empty statement, variable statement, expression statement, `do-while` statement, `continue` statement, `break` statement, `return` statement, and `throw` statement) must be terminated with semicolons. \[...\] For convenience, however, such semicolons may be omitted from the source text in certain situations.

Prior to this edition of ECMAScript, deprecating or removing this feature was discussed by Brendan Eich and Douglas Crockford in [es3.1:semicolon_insertion](http://wiki.ecmascript.org/doku.php?id=es3.1:semicolon_insertion).  Crockford said:

> Strong language in a spec is not likely to work. A carrot of better features that induce rewriting works better, but nothing is predictable.

This "carrot" approach comes up frequently in the discussion of ECMAScript's development, and it can be seen under the list of _Themes_ in the index to the Harmony namespace at the ECMAScript Wiki: [harmony:harmony](http://wiki.ecmascript.org/doku.php?id=harmony:harmony).

### Conclusion

When deciding on JavaScript style, the debate on whether to use semicolons will never end.  Objectively we can say that:

* The tools to write client-side code without semicolons exist and are widely used
* The specification explains how semicolon insertion works, and even includes concrete examples
* Semicolons are going to stay around for a while

Other languages have optional semicolons.  Take Ruby for example: the community at large embraced writing code without semicolons.  However, many JavaScript developers learned the language without the benefit of newer tools that help work safely without semicolons.  Others are working with server-side JavaScript, running code on one platform rather than multiple browsers and meddling HTTP proxies.  They're able to embrace styles that were previously deemed "unsafe".

The nature of the language is changing, so expect to see less semicolons in the future.

However, if you like the "machine"-like look of semicolons, and feel more comfortable expressing your intent by using them judiciously, then by all means use them!

Keep your style consistent, and enjoy writing JavaScript.
