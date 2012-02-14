---
layout: post
title: "jQuery Roundup: jQuery-Paging, Pomodoro Timer App, SAP HTML5 Toolkit"
author: Alex Young
categories: 
- jquery
- pagination
- apps
- productivity
---

### jQuery-Paging

We've seen a lot of pagination plugins on DailyJS recently, but diversity is good so I'll keep collecting them until somebody convinces me not to!  [jQuery-Paging](http://www.xarg.org/2011/09/jquery-pagination-revised/) (License: _MIT/GPL_, GitHub: [infusion / jQuery-Paging](https://github.com/infusion/jQuery-paging)) by Robert Eisele is another take on client-side pagination.  Usage centres around the number of items to paginate:

{% highlight javascript %}
$(selector).paging(itemCount, options);
{% endhighlight %}

The plugin will generate a list of links, and clicking a link will cause the `onSelect` method to fire, which is one of the plugin's many options.  Formatting is handled in a relatively unique way -- a format string and formatting callback are used:

{% highlight javascript %}
$('#pagination').paging(itemCount, {
  format: '[< ncnnn >]',

  onFormat: function(type) {
    switch (type) {
      case 'block': // n and c
        return '<a>' + this.value + '</a>';
      case 'next': // >
        return '<a>&gt;</a>';
      case 'prev': // <
        return '<a>&lt;</a>';
      case 'first': // [
        return '<a>first</a>';
      case 'last': // ]
        return '<a>last</a>';
    }
  }
});
{% endhighlight %}

This is an interesting solution to handling formatting in pagination plugins.

Robert has lots of other jQuery and HTML5 projects listed on his site, here: [xarg.org/projects/](http://www.xarg.org/projects/).

### Pomodoro Timer App

![Pomodoro Timer screenshot](/images/posts/pomotimer.png)

[Pomodoro Timer](http://pomodoro-app.heroku.com/) (GitHub: [oivoodoo / pomodoro-app](https://github.com/oivoodoo/pomodoro-app)) by Alexander Korsak is designed to manage time using the [Pomodoro Technique](http://www.pomodorotechnique.com/).  It's implemented using Backbone.js and jQuery Mobile.  It comes with a little wrapper that allows it to run on Heroku.

The Backbone.js code is carefully organised into collections, models, routers, and views.  It serves as a good example of a self-contained Backbone.js application, particularly in terms of code organisation.

### SAP's HTML5 UI Toolkit

That's right, you're seeing something made by SAP on DailyJS.  I was initially sceptical when I saw their new [HTML5 UI toolkit](http://www.sdn.sap.com/irj/sdn/index?rid=/webcontent/uuid/20a34ae7-762d-2f10-c994-db2e898d5f70), and the tutorials are PDFs, which didn't help.  However, when I saw the jQuery-style API I started to read more:

{% highlight javascript %}
$(document).ready(function() {
  $('#uiArea').sapui('Button', 'btn', {
     text: 'Hello World!',
     press: function() { $('#btn').fadeOut(); }
  });
});
{% endhighlight %}

DailyJS reader Stefan sent this in, and he had a few comments about it that I thought I'd share:

> Interesting side note: Their primary target for this is first tablets, then mobile then PCs and they will only support HTML5 (no fallbacks for older IEs).

From what I can gather, SAPUI5 uses jQuery, so it seems like the `sapui` method in the example is a plugin they've implemented for convenience.  Unfortunately, downloading the beta requires an account, and even with a hastily created free account I couldn't get it to download.  Regardless, I expect jQuery can now include SAP in their "who's using jQuery" list.
