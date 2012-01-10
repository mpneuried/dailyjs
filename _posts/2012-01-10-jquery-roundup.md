---
layout: post
title: "jQuery Roundup: TextExt, Tesselate, Promptumenu, Stellar.js, session.js"
author: Alex Young
categories: 
- jquery
- plugins
- animation
- forms
- sessions
- menus
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

### TextExt

[TextExt](http://textextjs.com/) (GitHub: [alexgorbatchev / jquery-textext](https://github.com/alexgorbatchev/jquery-textext), License: _MIT_) by Alex Gorbatchev is a modular library for enhancing text inputs.  It supports features seen before in similar plugins, like a "tag" style UI, auto-completion, and Ajax, but the difference here is the modular design.

The TextExt plugin itself ships with a set of plugins, like `Ajax` and `Autocomplete`, that provide the functionality similar plugins keep in their 'core' code:

{% highlight javascript %}
$('textarea').textext({
    plugins: 'autocomplete',
    autocomplete: {
        dropdownPosition: 'above'
    }
});
{% endhighlight %}

Notice that the API design means the plugin only adds a single entry to jQuery's namespace.  All of these plugins are documented in the very thorough [TextExt manual](http://textextjs.com/manual/).

### Nethnic Tesselate

![Tesselate](/images/posts/nethnic.png)

[Nethnic Tesselate](http://www.nethnic.com/pages/projects/tesselate) (License: _LGPL_) is provides some extremely slick grid-based transition effects.  Lots of effects are possible, but I like the one shown in [Tesselate Demo 1](http://www.nethnic.com/pages/projects/tesselate/demo1).

### Promptumenu

[Promptumenu](http://natrixnatrix89.github.com/promptu-menu/) (GitHub: [natrixnatrix89 / promptu-menu](https://github.com/natrixnatrix89/promptu-menu), License: _MIT_ and _GPL_) by Janis Zarzeckis displays a grid of icons that can be swiped, like the iOS or Android home screens.  The author's examples include grids of various sizes and page indicators.

Usage is pretty simple.  Given an unordered list with suitably juicy icons, run `promptumenu`:

{% highlight javascript %}
$('ul').promptumenu({
  width: 500,
  height: 500,
  rows: 4,
  columns: 4,
  direction: 'horizontal',
  pages: true
});
{% endhighlight %}

### Stellar.js

[Stellar.js](http://markdalgleish.com/projects/stellar.js/) (GitHub: [markdalgleish / stellar.js](https://github.com/markdalgleish/stellar.js), License: _MIT_) by Mark Dalgleish adds a parallax scrolling effect to an element as it's scrolled.  Try dragging the scroll bar on [http://markdalgleish.com/projects/stellar.js](http://markdalgleish.com/projects/stellar.js/) to see how this works.  It's almost like a 16-bit video game!

The basic usage is simply `$.stellar()`.  Effect options can be supplied by using `data` attributes, like `data-stellar-ratio` and `data-stellar-background-ratio`.

### session.js

This isn't technically a jQuery plugin, but is a useful bit of client-side scripting nonetheless.  [session.js](https://github.com/codejoust/session.js) (License: _MIT_) by Iain Nash collects information about the current session, like the screen resolution, geographical location, referrers, cookies, and more.  This example by the author shows it being used to conditionally display an `alert` if the visitor came from Facebook:

{% highlight html %}
<script type='text/javascript'>
  window.session = {
  options: { gapi_location: true },
  start: function(session){ // can also use window.session global.
    if (session.first_session.visits > 1){
      alert('Hi again from ' + session.location.address.city);
    } else {
      if (session.current_session.referrer_info.host.contains('facebook')){
        alert('Hi there from '+ session.location.address.city +'. How about liking us on facebook?');
      } else if (session.current_session.search.engine){
        alert('Did you find what you were looking for from ' + session.current_session.search.engine + '?');
      }
    }
  }
}
</script>
<script type='text/javascript' src="http://codejoust.github.com/session.js/session-0.4.js"></script>
{% endhighlight %}

It sounds like something that could be used to collect interesting statistics on site visitors, but in the past I've used a similar library of my own creation to enhance bug reports.  When people filled out a bug report about my web apps I collected their user agent string, screen size and type, and other information that helped me track down rendering issues.  So this library could find a lot of uses with a bit of creativity.

