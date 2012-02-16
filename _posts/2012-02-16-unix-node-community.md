---
layout: post
title: "Unix and Node: Manual Pages"
author: Alex Young
categories: 
- node
- tutorials
- essay
- unix
- documentation
---

If you're familiar with npm's documentation you'll have noticed that it comes with a lot of manual pages.  I don't think I could have published an npm module without reading `man npm-json` several times first.  To this day I still bring it up to search for the correct properties for the more obscure features.

Let's look at npm to see how Isaac did this, then generalise it a little bit so you can publish your own manual pages.

### Background

![npm man page](/images/posts/npmman.png)

The now ubiquitous [npm](http://npmjs.org/) makes use of `man` pages for its documentation.  This isn't the only way to view these files, but it's my preferred way to read them.  The way npm generates documentation is clever -- Isaac has chosen to write files in Markdown, which has a positive side-effect of allowing GitHub to render them.  These files are then converted to a markup language that `man` will understand.

This markup language is derived from early typesetting tools, known as the roff system.  If you're interested in writing manual pages by hand, take a look at `man groff`.  To learn about the history of these tools, `man roff` is an interesting read.

Converting a Markdown document to something roff-like was solved rather well by [ronn](https://github.com/rtomayko/ronn) by Ryan Tomayko.  Ronn is a Ruby program, so Isaac has used his own fork of [ronnjs](https://github.com/isaacs/ronnjs) to generate his manual pages for npm.

To make this work, npm's makefile will run `scripts/doc-build.sh`:

{% highlight make %}
man/man1/%.1: doc/cli/%.md scripts/doc-build.sh package.json
  @[ -d man/man1 ] || mkdir -p man/man1
  scripts/doc-build.sh $< $@
{% endhighlight %}

The `doc-build.sh` script uses bash, sed, and perl to replace values in the Markdown files:

{% highlight sh %}
./node_modules/.bin/ronn --roff $src \
| sed "s|@VERSION@|$version|g" \
| perl -pi -e 's/npm\\-([^\(]*)\(1\)/npm help \1/g' \
| perl -pi -e 's/npm\\-([^\(]*)\(3\)/npm apihelp \1/g' \
| perl -pi -e 's/npm\(1\)/npm help npm/g' \
| perl -pi -e 's/npm\(3\)/npm apihelp npm/g' \
> $dest
{% endhighlight %}

Another option for manual page generation is the [mantastic web service](http://mantastic.herokuapp.com/), mentioned by TJ Holowaychuk in the comments on [HelsinkiJS February, Todo, Testing Backbone.js](http://dailyjs.com/2012/01/30/helsinki-todo-testing-backbone/#comment-424874814).

Therefore, a general pattern for generating manual pages in Node apps is as follows:

* Create files for documentation using your preferred markup language
* Use a suitable tool to generate something similar to the groff language
* The resulting manual pages can be distributed when publishing to npm, (Node includes [node.1](https://github.com/joyent/node/blob/master/doc/node.1) in its source)

An alternative would just be to write the manual pages using the groff language to begin with.  It's surprisingly easy to pick up, although it's not as friendly as Markdown and doesn't have the advantage of being easily read without formatting.

### Installing Manual Pages

When a module is installed with npm, it'll actually copy man pages to `{prefix}/share/man` if they're available.  To do this, tell npm where the man pages are in the `directories` property:

{% highlight javascript %}
"directories": {
  "man": "./doc/man"
}
{% endhighlight %}

If this module is installed as a global module, then npm will copy the manual pages from `./doc/man` to `{prefix}/share/man`.

### Conclusion

When writing a general purpose tool with Node, consider writing a manual page using `groff`, or converting your Markdown documentation.  The command-line jockeys amongst us will appreciate it, and it'll bring your application a little bit closer to feeling like a true part of a Unix system.
