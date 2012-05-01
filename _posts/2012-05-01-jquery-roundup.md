---
layout: post
title: "jQuery Roundup: jQuery UI 1.8.20, jq-quickvalidate, Fullscreen Plugin"
author: Alex Young
categories: 
- jquery
- jqueryui
- plugins
- validation
- fullscreen
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###jQuery UI 1.8.20

[jQuery UI 1.8.20](http://blog.jqueryui.com/2012/04/jquery-ui-1-8-20/) has been released.  This release marks the twentieth maintenance release, and includes bug fixes for Draggable, Sortable, and Datepicker.

###jq-quickvalidate

[jq-quickvalidate](https://github.com/elclanrs/jq-quickvalidate) (License: _GPLv2_, [Demo](http://jsfiddle.net/elclanrs/BMz9U/embedded/result/)) by [Cedric Ruiz](http://spacirdesigns.com/bio) is a form validation plugin.  The author has provided CSS and icons, so it's easy to drop into a site.

There are built-in validators, but custom ones can be added using a regular expression or function.  Basic usage looks like this:

{% highlight javascript %}
$('#my-form').quickValidate({
  inputs: {
    username: {
      filters: 'required username exclude',
      data: {
        exclude: ['Paul', 'Mike']
      }
    },
    'pass': {
      filters: 'required pass'
    }
  }
});
{% endhighlight %}

###Fullscreen Plugin

[jQuery Fullscreen Plugin](https://github.com/kayahr/jquery-fullscreen-plugin/) (License: _MIT_) by Klaus Reimer is a jQuery-friendly API for working with the fullscreen mode present in supporting browsers.  Vendor-specific versions are supported for WebKit and Firefox.

It can make an element or the entire document fullscreen:

{% highlight javascript %}
$(document).fullScreen(true);
$('#myVideo').fullScreen(true);
{% endhighlight %}

It can also exit fullscreen, or check if fullscreen is currently active.  A related plugin is [jquery.fullscreen.js](https://github.com/ruidlopes/jquery-fullscreen), which provides handling for various fullscreen-related events.
