---
layout: post
title: "JavaScript and Semicolons"
author: Rod Vagg
categories: 
- language
- ECMAScript
- ASI
---

_Or: Semicolons, ASI, and You_

## Introduction

In syntax terms, JavaScript is in the broad C-family of languages. The C-family is diverse and includes languages such as C (obviously), C++, Objective-C, Perl, Java, C# and the newer Go from Google and Rust from Mozilla. Common themes in these languages include:

* The use of curly braces to surround blocks.
* The general insignificance of white space (spaces, tabs, new lines) except in very limited cases. Indentation is optional and is therefore a matter of style and preference, plus programs can be written on as few or as many lines as you want.
* The use of semicolons to end statements, expressions and other constructs. Semicolons become the delimiter that the new line character is in white-space-significant languages.

JavaScript's rules for curly braces, white space and semicolons are consistent with the C-family and its formal specification, known as the ECMAScript Language Specification makes this clear:

> Certain ECMAScript statements (empty statement, variable statement, expression statement, do-while statement, continue statement, break statement, return statement, and throw statement) must be terminated with semicolons.

But it doesn't end there--JavaScript introduces what's known as **Automatic Semicolon Insertion (ASI)**. The specification continues:

> Such semicolons may always appear explicitly in the source text. For convenience, however, such semicolons may be omitted from the source text in certain situations. These situations are described by saying that semicolons are automatically inserted into the source code token stream in those situations.

The general C-family rules for semicolons can be found in most teaching material for JavaScript and has been advocated by most of the prominent JavaScript personalities since 1995. In a [recent post](https://brendaneich.com/2012/04/the-infernal-semicolon/), JavaScript's inventor, Brendan Eich, described ASI as "a syntactic error correction procedure", (as in ["parsing error"](https://brendaneich.com/2012/04/the-infernal-semicolon/#comment-12268), rather than "user error").

## Recent Developments

There has been a growing trend in the last few years toward the omission semicolons, in some cases totally avoiding them. Perhaps largely inspired by the likes of CoffeeScript and Ruby where semicolons are used only if you want to chain multiple statements on a single line. This view of semicolons could perhaps be summarised as: the semicolon character is optional in most situations and therefore introduces unnecessary syntactic noise--unnecessary syntax can (and maybe *should*) be avoided.

Unfortunately the division between the semicolon and semicolon-free crowd has become very pronounced and is leading to some angry exchanges. A recent lightning rod for semicolon-related [controversy](https://news.ycombinator.com/item?id=3584635) is the most watched project on GitHub, [Twitter's Bootstrap](https://github.com/twitter/bootstrap) and the author of its JavaScript code, [Jacob Thornton](https://twitter.com/fat) who is a [convert](http://wordsbyf.at/2011/10/31/i-dont-write-javascript/) to the semicolon-free camp.

A [short exchange](https://github.com/twitter/bootstrap/issues/3057) this weekend on GitHub between Thornton and a cranky Douglas Crockford (author of perhaps the most-read JavaScript book, [JavaScript: The Good Parts](http://shop.oreilly.com/product/9780596517748.do)) erupted, on GitHub, Twitter and across the Internet.

The initial issue was a request for the addition of a semicolon in order to assist Crockford's JavaScript minifier tool, [JSMin](http://www.crockford.com/javascript/jsmin.html), to properly compress the code. Like Crockford's other popular JavaScript tool, [JSLint](http://www.jslint.com/), JSMin follows his rigid view of what the best parts of JavaScript are and reject the other, bad, parts, including treating semicolons as optional.

Crockford, after reviewing the code in question stated:

> That is insanely stupid code. I am not going to dumb down JSMin for this case.
...
> Learn to use semicolons properly. ! is not intended to be a statement separator. ; is.

To which Thornton replied:

> i have learned to use them, that's why there isn't one present.

Rather than continue the debate, perhaps it's best to review the rules surrounding semicolons in JavaScript so we can make informed decisions about our own coding style preference and we can learn to contend with code produced by programmers who have other preferences.

*As an aside, it should be noted that both [Bootstrap](https://github.com/twitter/bootstrap/blob/2.0.3-wip/js/bootstrap-dropdown.js#L63) and [JSMin](https://github.com/douglascrockford/JSMin/commit/5ca277ea452beae1c25db3bc0ef5c81309a3daf4#jsmin.c) have been patched to resolve the relevant issues in both.*

## Rules of ASI

The ECMAScript Language Specification deals with ASI in section 7.8 of editions [1 (PDF)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf) and [2 (PDF)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%202nd%20edition,%20August%201998.pdf) and section 7.9 of editions [3 (PDF)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf), [5 (PDF)](http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262%205th%20edition%20December%202009.pdf) and the current drafts of [edition 6](http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts). The text has stayed roughly the same through the different editions except for the inclusion of `continue`, `break` and `throw` statements in special cases that previously just applied to `return`. More on this below.

Simply put, the first basic rule of ASI is:

* **If the parser encounters a new line or curly brace, and it is used to break up tokens that otherwise don't belong together, then it will insert a semicolon.**

The new line character is the one most commonly used in taking advantage of ASI so we'll restrict ourselves mainly to this case. The most common situation where you'll see curly brace ASI occurring is in code such as: `if (foo) { bar++ }`. It should be noted, however, that you *could* surround all your statements, expressions, etc. in curly braces if you wanted to avoid semicolons, i.e. place everything in its own *block*; although this offers limited help in achieving the kinds of goals that the semicolon-free crowd advocate.

So, as a beginning example, the code:

{% highlight javascript %}
a = b + c
foo()
{% endhighlight %}

has ASI applied because stringing the tokens together without the new line doesn't help.  Otherwise, it would be interpreted as `c foo()` which isn't correct. The parser makes it look like this internally:

{% highlight javascript %}
a = b + c;
foo()

// or

a = b + c; foo()
{% endhighlight %}

But here we find the most important alleged problems with taking advantage of ASI in your coding style. The important part of the first rule of ASI is that it will **only apply if the parser needs to do so in order to make sense of the code in question**. Consider the following code:

{% highlight javascript %}
// example 1
a = b + c
[1].push(a)

// example 2
a = b + c
(options || {}).foo ? bar() : baz()
{% endhighlight %}

In both of these cases, the parser doesn't need to apply ASI in order to have properly formed code. In the first example, it can ignore the new line and treat the `[` as applying to `c`, likewise in the second example, the `(` can apply to `c`. So we would end up running something quite different than we might be trying to achieve:

{% highlight javascript %}
// example 1
a = b + c[1].push(a)
// i.e. fetch the first element of 'c' and execute the 'push' function on what it finds

// example 2
a = b + c(options || {}).foo ? bar() : baz()
// i.e. execute 'c' as a function and check for the existence of the property 'foo' on the returned object
{% endhighlight %}

Moving on in the language specification, there are a few of special cases:

* **ASI is never performed if it would result in an "empty statement".**

Empty statements ordinarily look like this (note the semicolons, there's a statement there, it's just "empty"):

{% highlight javascript %}
for (counter = 0; counter < something(); counter++);
// or
if (condition);
else {
  doSomething();
}
{% endhighlight %}

This is perfectly legal JavaScript and may even be useful in certain situations. However, ASI will never help you achieve this so if you have constructs that would lead to empty statements (if there were semicolons) then you'll simply get an error:

{% highlight javascript %}
if (condition)
else {
  doSomething();
}
{% endhighlight %}

* **ASI is not performed within the head of a `for` loop, where semicolons are an integral part of the construct.**

So no ASI is applied in cases such as:

{% highlight javascript %}
for (var i = 0;
  i < a.length
  ;i++
  )
...
// may as well be written as:
for (var i = 0; i < a.length; i++) ...
{% endhighlight %}

* **ASI is performed if the parser reaches the end of a file and a semicolon will help the code make sense. In other words, even if you don't have a new line at the end of your file, it will perform ASI in the same way as if there was one.**

There is one final rule in the language specification regarding ASI. This rule overrides the first rule in some special cases, called "restricted productions". I'll split this rule into two to separate out an uncommon case with a much more common case.

* **ASI is *always* performed on code where a new line character comes *before* a `--` or a `++`, even where removing the new line character would still make a valid construct.**

This rule is arguably not so important to understand or remember because it doesn't affect code that the majority of programmers would write. Consider the following program where each section contains identical sequence of 'tokens' except for the semicolons and white space characters.  Try to predict the output for yourself:

{% highlight javascript %}
var a, b, c;

// 1) plain
a = b = c = 1; a++; b--; c; console.log('1)', a, b, c)

// 2) extra spaces
a = b = c = 1; a ++ ; b -- ; c; console.log('2)', a, b, c)

// 3) new lines v1
a = b = c = 1
a ++
b --
c
console.log('3)', a, b, c)

// 4) new lines v2
a = b = c = 1
a
++ b
-- c
console.log('4)', a, b, c)

// 5) new lines v3
a = b = c = 1
a
++
b
--
c
console.log('5)', a, b, c)
{% endhighlight %}

As per our ASI rule, even though the new line character doesn't interrupt a valid code construct (`a ++` would be the same as `a\n++` in most C-family languages), the parser will always insert a semicolon when it encounters a `++` or `--` after a new line character. So instead of being *postfix* operators as in `a++` and `b--`, they become *prefix* operators on the next variables in the token stream: `++b` and `--c`.

The output from the above program is:

{% highlight text %}
1) 2 0 1
2) 2 0 1
3) 2 0 1
4) 1 2 0
5) 1 2 0
{% endhighlight %}

The simple moral here is to follow standard C-family coding practice and keep your *postfix* and *prefix* operators attached to the variables they are applied to.

The second part of the final rule is more relevant as it can conflict with what you might encounter in standard C-family programs:

* **ASI is *always* performed where new line characters follow directly after any of the following statements: `continue`, `break`, `return` and `throw`.**

While not common, both `continue` and `break` can be followed by a *label*, indicating where to jump to (labels with these two statements are the less 'evil' cousins of the much maligned `goto` found in many other languages). If you intend for the program to jump to a label then you **must not** separate the label from the `continue` or `break` by a new line character:

{% highlight javascript %}
continue
foo
// not the same as:
continue foo;
// actually interpreted as:
continue;
foo;

break
baz
// not the same as:
break foo;
// actually interpreted as:
break;
baz;
{% endhighlight %}

The `return` and `throw` rules are much more interesting because, like the first rule of ASI, it can lead to non-obvious problems in common code. Generally, a stand-alone `throw` statement will lead to parse errors, so you should find out fairly quickly that this code is no good because you'll get some kind of parse error:

{% highlight javascript %}
throw
  new Error('Aieee!')
// interpreted as:
throw;
new Error('Aieee!');
{% endhighlight %}

If you have a long line of code containing a `throw` statement and you wanted to improve readability by using new line characters. You **cannot** insert the new line straight after the `throw` or you'll end up with invalid code, i.e. a `throw` that doesn't have anything to *throw*. You'll have to rewrite your code or find a different place to introduce the new line character that fits your coding style. For example:

{% highlight javascript %}
throw new Error(
  'Aieee!'
)
{% endhighlight %}

The most commonly used of the four statements we are considering is `return`. It is quite common to try and append a complex series of tokens to a `return` statement or even use `return` as an 'early return' from a function, sometimes leading to long lines that we may be tempted to break up with new lines. Consider:

{% highlight javascript %}
// a common Node construct, an 'early return' after a callback upon receiving an error:
if (err) {
 return
   callback('Error while processing something that takes a lot of words to describe: ' + err)
}
somethingElseHere()
{% endhighlight %}

As per the ASI rule, the new line character directly following the `return` leads to the insertion of a semicolon so we actually end up with our 'early return' being a bit too early and our function call becomes dead code. The above code is interpreted as something that is clearly not intended:

{% highlight javascript %}
if (err) {
 return;
 callback('Error while processing something that takes a lot of words to describe: ' + err);
}
somethingElseHere();
{% endhighlight %}

The impact of ASI on this type of code is particularly sinister because it can be difficult to pick up. We were not intending to use `return` to actually return a value, but to halt execution of the current block. We're not going to be *needing* or perhaps even *using* a return value from the containing function--discovering the error will need `somethingElseHere()` to have obvious side-effects, which is not always the case.

The same ASI procedure occurs when we try to fit too much into our return value and are tempted to break it up with new lines:

{% highlight javascript %}
if (foo) {
  return
    (something + complex()) - (enough[1] / to) << tempt + us(to - linebreak)
}
{% endhighlight %}

It's clear here that we're intending to return a value calculated by the long code string and we've attempted to improve readability by breaking it up with new line characters, or perhaps you have a vertical line in your editor that tempts you to do this kind of breaking.

We end up with an empty return and some dead code:

{% highlight javascript %}
if (foo) {
  return;
  (something + complex()) - (enough[1] / to) << tempt + us(to - linebreak);
}
{% endhighlight %}

It's important to remember that if you need to have long lines of code beginning with a `return` then you can't start with a new line straight after the `return`, you're going to have to find somewhere else to break if you really must break--or even better, avoid long `return` lines completely.

## Gentle Advice

It should be clear, particularly from the last rule outlined above, that **we don't need to be following a semicolon-free coding style to fall foul of JavaScript's ASI feature**. Perfectly innocent line breaking can lead to semicolons being inserted into our token stream without our permissions so it's important to be aware of the kinds of situations where this can happen. Much of the recent debate about semicolons misses this point. Additionally, love or hate ASI, it's with us and is not going away so perhaps it would be more productive to embrace it as a feature and use it where it suits us and work around it where it doesn't.

Regardless of your preference, ASI and other obscure rules in non-trivial languages such as JavaScript mean that our build tools should involve some kind of syntax checking mechanism. Strongly-typed languages such as Java have sophisticated editors that can understand the intent of your code and provide real-time feedback as you type. It's a little more complex in JavaScript but we do have *excellent* tools that can analyse our code and point out potential problems or code style that may lead to common hazards.

[JSLint](http://www.jslint.com/) by Douglas Crockford is perhaps the best known syntax checking tool available for JavaScript. It will encourage you to follow Crockford's personal coding style, which he believes leads to fewer syntax-related errors.

[JSHint](http://www.jshint.com/) was developed as a much-less-opinionated alternative to JSLint. It has many options that let you tailor it to your personal preferences while still steering you away from potential errors, ASI-related and other.

These tools can be run across source files at build time (via a Makefile or as part of your test runner for example), or embedded directly in the text editors most commonly used by JavaScript programmers. Vim, TextMate and SublimeText all have ways of running JSLint or JSHint as you edit, providing quick feedback on any potential code problems. Even the most experienced JavaScript developers can bump into occasional ASI-related problems, having build tools that can point us in the right direction is just common sense.

### Semicolon-free Best Practice

If you lean towards a semicolon-free style, there are some well-established conventions that can help produce less error-prone code. One of the largest JavaScript projects following a semicolon-free style is [npm](http://npmjs.org/) by Isaac Schlueter who is now lead developer of the NodeJS project. npm is Node's package manager and the code has a very particular [coding style](http://npmjs.org/doc/coding-style.html) that is followed by many who advocate semicolon-free. Aside from minimal use of semicolons, this style is also characterised by *comma-first*, putting the emphasis on putting necessary syntax at the beginning  of lines rather than at the end, where they can be easily overlooked.

To alleviate problems caused by ASI, Isaac advocates inserting a *leading semicolon* on lines that begin with syntax that could be interpreted as following on from the previous line. In particular the `[` and `(` characters. Our examples above involving these two characters can be rewritten as:

{% highlight javascript %}
// example 1
a = b + c
;[1].push(a)

// example 2
a = b + c
;(options || {}).foo ? bar() : baz()
{% endhighlight %}

By placing semicolons and commas at the beginning of the line, we elevate their importance in the token stream and potentially assist our own brains in identifying problems. Isaac has a [great post](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding) dealing with this and other ASI issues.

Lastly, let's try and keep things in perspective. The JavaScript community has generated a lot of heat over a single, humble, character. There are bigger mountains to climb and we would be better off expending all that energy on building awesome things!
