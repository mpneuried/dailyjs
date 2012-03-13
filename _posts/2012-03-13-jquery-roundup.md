---
layout: post
title: "jQuery Roundup: 1.7.2 RC1, OEmbed All, Ignition, nextVal, jquery-ui-rails"
author: Alex Young
categories: 
- jquery
- plugins
- frameworks
- embedding
- validation
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

### jQuery 1.7.2 RC1

[jQuery 1.7.2 RC1](http://blog.jquery.com/2012/03/09/jquery-1-7-2-rc1-released/) has been released.  Several bugs have been fixed since the last beta release, which are fully documented in the announcement blog post.  The announcement also contains an interesting call for IE6 help:

> If you are particularly interested in IE6 support, please help us out. We are having sporadic trouble running the unit tests in IE6. It hasn’t been possible for us to determine the cause of these problems, but the problem doesn’t happen consistently and the sheer size of our test suite may just be overwhelming a browser that is more than a decade old.

### jQuery OEmbed

[jQuery OEmbed All](http://starfishmod.github.com/jquery-oembed-all/) (GitHub: [starfishmod / jquery-oembed-all](https://github.com/starfishmod/jquery-oembed-all), License: _MIT_) can embed content like YouTube videos simply by providing a URL to the item's page.  It was originally created by Richard Chamorro, but this version has been forked by Andrew Mee to rely less on the OEmbed API.

The plugin will attempt to use various third party services to embed the content, including JSONP oEmbed and YQL.  Services that require an API key are also supported:

{% highlight javascript %}
$('.oembed').oembed(null,{
  embedMethod: 'auto',
  apikeys: {
    etsy: '<your etsy key>'
  }
});
{% endhighlight %}

### Ignition

![Ignition logo](/images/posts/ignition-496x372.png)

[Ignition](http://www.daytona.se/ignition) (GitHub: [daytona / ignition](https://github.com/daytona/ignition), License: _MIT/GPL_) by Johan Sahlén of Daytona Communication AB is a jQuery MVC framework.  It was sent in by [Wade Stebbings](http://blog.wadestebbings.com/) who said he'd struggled to find information on it after it was recommended by a friend.  It's definitely an interesting framework, even though it seems to have stalled development in 2009.

It supports URL routing:

{% highlight javascript %}
var $i = new Ignition({ modules: ['UrlManager', 'HistoryDispatcher'] });

$i.addRoute('articles/(\d+)', function(article_id) {
  $i.c.Articles.show(article_id);
});
{% endhighlight %}

And models:

{% highlight javascript %}
$i.m('Article', {
  find_by_id: function(id, callback) {
    this.json($i.getUrl('article', { id: id }), { success: callback });
  }
});
{% endhighlight %}

Controllers and programmatic views are also included:

{% highlight javascript %}
$i.c('Articles', {
  show: function(id) {
    $i.m.Article.find_by_id(id, $i.v.Articles.show);
  }
});

$i.v('Articles', {
  show: function(data) {
    var list = $('<ul id="articles"></ul>');
    for (var i = 0; i < data.articles.length; i++) {
      var article = data.articles[i];
      var listItem = $('<li><a href="'+article.url+'">'+article.title+'</a></li>');
      list.append(listItem);
    }

    $('body').append(list);
  }
});
{% endhighlight %}

API documentation is available if you want to dig a little deeper into the framework: [Ignition API documentation](http://daytona.github.com/ignition/).

### nextVal

[nextVal](http://jukebox42.github.com/nextVal/) (GitHub: [jukebox42 / nextVal](https://github.com/jukebox42/nextVal), License: _MIT_) by John Norton is a form validation plugin.  It uses a `validate` attribute with options that work a little bit like a mini validation DSL:

{% highlight html %}
<input type="text" validate="email" placeholder="Please enter a proper email address" />
{% endhighlight %}

Then `$(selector).nextVal()` can be called on the form.  Custom validation rules can also be added:

{% highlight javascript %}
$(function() {
   $('form[name=FORMNAME]').nextVal({
      customRules:[
         ['matchpassword',function($o){return !($o.val() == $('#password').val());},''],
         ['xheader',function($o){return !$o.val().match(/^X-[a-zA-Z0-9_\-]+$/);},'Please enter a valid xheader. For example X-UserData1'],
      ]
   });
});
{% endhighlight %}

The only problem I have with this approach is the use of the `validate` attribute.  To my knowledge, there is no `validate` attribute, so this should probably use a data attribute instead.  Also, HTML5 already provides some validation attributes (`required`, `pattern`, `min` and `max`, `step`, and `maxlength`).

###jquery-ui-rails

[jquery-ui-rails](https://github.com/joliss/jquery-ui-rails) makes adding jQuery UI 1.8.18 and its associated assets easy to install in Rails projects.  It's configured to work with the Rails asset pipeline, so it's easy to require specific modules and get jQuery UI projects off the ground quickly.

