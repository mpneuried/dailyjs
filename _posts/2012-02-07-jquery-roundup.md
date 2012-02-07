---
layout: post
title: "jQuery Roundup: 1.7.2, Super Labels, jquery.textntags"
author: Alex Young
categories: 
- jquery
- plugins
- forms
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

### jQuery 1.7.2

[jQuery 1.7.2 Beta 1](http://blog.jquery.com/2012/01/31/jquery-1-7-2-beta-1-released/) has been released.  There are a lot of bug fixes, and some interesting API tweaks:

* [#5571](http://bugs.jquery.com/ticket/5571): Allow chaining when passing undefined to any setter in jQuery
* [#8498](http://bugs.jquery.com/ticket/8498): Animate hooks
* [#11119](http://bugs.jquery.com/ticket/11119): The curCSS function needs only 2 arguments
* [#10931](http://bugs.jquery.com/ticket/10931): Unit tests shouldn't require Internet access

That last one is particularly useful if you need to run jQuery's unit tests.  Tests shouldn't need a connection!

### jQuery Super Labels

[jQuery Super Labels](https://github.com/remybach/jQuery.superLabels) (License: _MIT_) by Rémy Bach is a form field overlay plugin that hides labels when an `input` gains focus.  It'll work automatically with most text fields simply by calling `$('form').superLabels()`.  If the label needs to be displayed in a different location, suitable options can be provided with `labelLeft` and `labelTop`.

Super Labels has advanced options for controlling animation easing and duration.

Another interesting plugin by the same author is [jQuery Slash Search](https://github.com/remybach/jQuery.slashSearch) which will focus on a search field when `/` is typed.

### jquery.textntags

![textntags screenshot](/images/posts/danielzahariev.png)

[jquery.textntags](http://daniel-zahariev.github.com/jquery-textntags/) (License: _MIT_, GitHub: [daniel-zahariev / jquery-textntags](https://github.com/daniel-zahariev/jquery-textntags)) by Daniel Zahariev is another `@name` input enhancement tool.  A full example of it using Ajax to search looks like this:

{% highlight javascript %}
$('textarea.tagged_text_ex2').textntags({
  onDataRequest: function(mode, query, triggerChar, callback) {
    $.getJSON('assets/data.json', function(responseData) {
      query = query.toLowerCase();
      responseData = _.filter(responseData, function(item) { return item.name.toLowerCase().indexOf(query) > -1; });
      callback.call(this, responseData);
    });
  }
});
{% endhighlight %}

This is an early version of the library, so the author doesn't make any promises in terms of browser support.  However, the documentation is solid and it ships with CSS, so it's easy to drop into a project.
