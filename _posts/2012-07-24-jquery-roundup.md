---
layout: post
title: "jQuery Roundup: noty, jquery.tocify.js, Routie"
author: Alex Young
categories: 
- jquery
- plugins
- routing
- ui
- navigation
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###noty

![noty](/images/posts/noty.png)

[noty](http://needim.github.com/noty/) (GitHub: [needim / noty](https://github.com/needim/noty/), License: _MIT_) by Nedim Arabacı is a plugin for displaying notifications.  It supports alerts with the usual set of levels, and also allows a prompt to be displayed.  A "noty" can be created using a function that accepts an options object:

{% highlight javascript %}
var noty = noty({ text: 'noty - a jquery notification library!' });
{% endhighlight %}

An existing container can be populated using the familiar jQuery syntax:

{% highlight javascript %}
$('.custom_container').noty({ text: 'noty - a jquery notification library!' });
{% endhighlight %}

Notifications can be queued, allowing a large amount of alerts to be handled sensibly.  This plugin also supports themes through CSS or a JavaScript file.

###jquery.tocify.js

[jquery.tocify.js](http://gregfranko.com/jquery.tocify.js/) (GitHub: [gfranko / jquery.tocify.js](https://github.com/gfranko/jquery.tocify.js), License: _MIT_) by Greg Franko is a table of contents plugin that works with [jQuery UI's ThemeRoller](http://jqueryui.com/themeroller/) and jQuery's animation effects.  It also supports `history.pushState`, so pressing the back button will work as expected.

Given a suitable container `div`, running `$('#toc').tocify();` will generate a table of contents based on the headers on the page.

###Routie

[Routie](http://projects.jga.me/routie/) (GitHub: [jgallen23 / routie](https://github.com/jgallen23/routie), License: _MIT_) by Greg Allen is a lightweight hash routing library.  It's not specifically dependent on jQuery, and the author has packaged it nicely with a makefile and build instructions.  Routes can be defined as follows:

{% highlight javascript %}
routie('users', function() {
  //this gets called when hash == #users
});

routie({
  'users': function() {
  },
  'about': function() {
  }
});
{% endhighlight %}

It also works with regular expressions to allow parameters to be accessed.  Notice how parameters are mapped to the function arguments:

{% highlight javascript %}
routie('users/:name', function(name) {
});
{% endhighlight %}

The project includes tests written with Mocha and Chai.
