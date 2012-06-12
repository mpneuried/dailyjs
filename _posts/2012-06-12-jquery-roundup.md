---
layout: post
title: "jQuery Roundup: Joconut, jQuery Table Sort, jQuery.pushevent"
author: Alex Young
categories: 
- jquery
- plugins
- html5
- history
- pjax
- tables
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Joconut

[Joconut](https://github.com/vdemedes/joconut) (License: _MIT_) by Vadim Demedes is an alternative implementation of Chris Wanstrath's [pjax](https://github.com/defunkt/jquery-pjax) plugin.  Joconut is about 1K smaller (I compared them both gzipped and minified myself), and it also loads JavaScript and CSS automatically.

Adding Joconut to a page will cause requests to the current host to load using `$.ajax`.  To maintain history, it uses `history.pushState`, and degrades to `onhashchange`.  Several internal events can be bound to, which is useful for things like error handling:

{% highlight javascript %}
$.joconut.on('error', function() {
  alert('Error while loading new page!');
});
{% endhighlight %}

###Stupid jQuery Table Sort

[Stupid jQuery Table Sort](http://joequery.github.com/Stupid-Table-Plugin/) (GitHub: [joequery / Stupid-Table-Plugin](https://github.com/joequery/Stupid-Table-Plugin), License: _MIT_) by Joseph McCullough is a simple table sorting plugin based around `Array.prototype.sort`:

> As long as you understand basic JavaScript sorting, you can make this plugin do as much or as little as you want.

Callbacks can be supplied for custom sorting based on type.  In Joseph's example, he's set a `th` class of `type-date`, then passed in a `date` callback:

{% highlight javascript %}
$('#complexTable').stupidtable({
  'date': function(a,b) {
{% endhighlight %}

###jQuery.pushevent

[jQuery.pushevent](https://github.com/yeikos/jquery.pushevent) (License: _GPL_) by "yeikos" helps manage the order events will be fired.  This example causes the order of the events to be swapped:

{% highlight javascript %}
$('button').on('click.first', function() {
  alert('1');
}).on('click.second', function() {
  alert(2);
}).pushEvent('click.second');
{% endhighlight %}

The author also sent in two more plugins:

* [jQuery.placeholder](https://github.com/yeikos/jquery.placeholder) -- A `placeholder` attribute implementation
* [jQuery.unparam](https://github.com/yeikos/jquery.unparam) -- Uses `decodeURIComponent` to convert URL param strings into objects
