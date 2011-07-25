---
layout: post
title: "Code Pollution"
author: Alex Kessinger
categories: 
- opinion
- guests
- essays
---

<div class="intro">
Alex Kessinger is a programmer who lives in the bay area. He is always trying to make websites, cook, and write a little bit better then he did yesterday. You can find more from Alex at his <a href="http://alexkessinger.net/">blog</a>, on <a href="http://twitter.com/voidfiles">Twitter</a>, and <a href="https://plus.google.com/108319722006237870403/posts">Google+</a>.
</div>

You are possibly the maker of an open source project. You might even have a few repositories on GitHub, and one or two ready to be committed. If that describes you, then I have a bone to pick with you. First off, stop making that new JavaScript library. Don't `git init .` anything just yet. Instead, take a moment to read this.

Like you, I want to be a better programmer. It's not only my job to do so, it's something I have a deep desire to do. There are many ways to get better at programming, but the best way is to understand a new idea. This can be as simple as finding new code and fully understanding it. This small act can impart a new point of view.

When this happens to me I don't always recognize it on first use, because it can be a struggle to think from a new point of view.  However, eventually I undergo a personal [paradigm shift](http://en.wikipedia.org/wiki/Paradigm_shift); and I will understand it. My brain will click with the machine-like inevitability of clockwork, and I will feel like I did something good. Experts call this [flow](http://en.wikipedia.org/wiki/Flow_\(psychology\)) -- learning something new puts me in that state, and the upward spiral repeats itself.

An example of this is the [self-executing anonymous function](http://stackoverflow.com/questions/3783007/is-there-a-difference-between-function-and-function).  This is a pattern; it's an isolated chunk that can be learned. And, despite that fact that it's such an elegantly simple idea, there are a couple of ways to do it.

This simple pattern has many variations.  Should we learn them all?  Most people will learn one method, add it to their mental toolbox, and move on.  This is good, and it should apply everywhere, not just to simple patterns like self-executing anonymous functions.

In contrast, here's what is _not_ fine: 19 unit test frameworks for Node. 6 JavaScript HTML `<select>` replacements. Even the best of us attempt to re-invent the wheel from time to time.

There is a lot of code duplication here. Sometimes it's work done without actually making the original much better. So, why are many of us compelled to do this?  It's the same reason we have all done it -- the common illusion that we can make things better. We will always be able to write a better implementation of _that_ framework, or _this_ library;  it's hard to stop listening to those urges.

Another reason we create is that learning someone else's code is almost universally distasteful. My [first manager](http://twitter.com/glenc) at Yahoo explained it best: "The reason all programmers hate other programmers' work is because you aren't those other programmers."

Here is the urge that you need to fight. You need to work with someone else's code a little, and begin to learn their way. Then, maybe, you might find yourself with a new point of view, and we all would have less, but higher quality JavaScript libraries. Yes, it sounds reductively simple, but good ideas should be so. Challenge yourself to figure out why a person wrote code a certain way, and you'll either know why it was a bad idea, or why it's a good idea. Both are a win for you.

Before you tell me my position is too hardline: here is the caveat. You can't forget about innocent discovery. I can see someone screaming that a good way to get better at programing is to tackle hard problems, and even if you fail, you will learn something. It's hard to argue with that point, but what I'm talking about is every half-launched project on GitHub that purports to be the fix for every problem people in that domain are having.  Registering unfinished projects with package managers eats away at all the meaningful package names.

Now, I know there will always be a reason to create.  The hard route is to figure out how to use someone else's code. Try it the next time you decide to use a new library or framework.  The best documentation is the source code itself.

