---
layout: post
title: "jQuery Roundup: jPages, youRhere, jquery.lazyLoader, Deferred and Promise in jQuery"
author: Alex Young
categories: 
- jquery
- plugins
- lazyloading
- pagination
- promises
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

### jPages

[jPages](http://luis-almeida.github.com/jPages/) (License: _MIT_, GitHub: [luis-almeida / jPages](https://github.com/luis-almeida/jPages)) by Luis Almeida is a client-side pagination plugin that can page through a set of elements in an unordered list.  Given some suitable HTML, perhaps containing a list of images:

{% highlight html %}
<!-- Future navigation panel -->
<div class="holder"></div>

<!-- Item container (doesn't need to be an UL) -->
<ul id="itemContainer">
    <!-- Items -->
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
{% endhighlight %}

Then to get pagination controls the only JavaScript we need to use is `$('div.holder').jPages({ containerID : 'itemContainer' });`.

The author has written lots of demos, applying the plugin to lazy loading images, or even using [titles as links](http://luis-almeida.github.com/jPages/titlelinks.html) to create sub-navigation for a page.

### youRhere

![You Are Here](/images/posts/youarehere.png)

[youRhere](http://yourhere.gandtblog.com/) (License: _MIT_ or _GPL_, GitHub: [fastrd / youRhere](https://github.com/fastrd/youRhere)) by Daniel Sternlicht transforms pages of text to allow the reader's progress to be saved.  The current mouse position is displayed with an arrow, and clicking on a line will highlight it.  This can persist by using `localStorage`.

Basic usage is just `$('#content').yourhere();`.

### jquery.lazyLoader

[jquery.lazyLoader](http://the-taylors.org/blog/2012/01/29/jquery-lazyloader-organic-responsive-images/) (License: _MIT_, GitHub: [davetayls / jquery.lazyLoader](https://github.com/davetayls/jquery.lazyLoader) by Dave Taylor aims to make image loading more responsive by loading images based on the browser viewport size.  With carefully named images it can work pretty much automatically:

{% highlight javascript %}
$('a').lazyLoader({
  img: function(url, windowWidth) {
    if (windowWidth >= 768){
      return url.replace(/.(jpg|gif|png)$/i, '-mega.$1'); 
    } else {
      return url;
    }
  }
});
{% endhighlight %}

*jQuery plugin authors take note!* Dave has raised the bar!  He's not only included tests, but he's also running them through a CI server ([davetayls/jquery.lazyLoader](http://travis-ci.org/davetayls/jquery.lazyLoader))!  I'm not saying he's the first person to do this, but given the amount of plugins we receive at DailyJS with no tests I found it a pleasant surprise.

### Deferred and Promise in jQuery

[Deferred and promise in jQuery](http://www.bitstorm.org/weblog/2012-1/Deferred_and_promise_in_jQuery.html) by Edwin Martin is an introduction to the tools jQuery provides for working with these functional concepts.

> So what is a deferred and what is the difference with a promise? As you have seen above, a promise is an object that is returned from an asynchronous function. You need a deferred when you write such a function yourself.

Edwin aims to explain how to use promises and `$.Deferred`, and also explain how they're different.
