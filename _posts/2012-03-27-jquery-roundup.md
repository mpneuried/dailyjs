---
layout: post
title: "jQuery Roundup: 1.7.2, Filtrify, JsBehaviour, Rest Test Test"
author: Alex Young
categories: 
- jquery
- plugins
- tags
- rest
- libraries
- debugging
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###jQuery 1.7.2

[jQuery 1.7.2](http://blog.jquery.com/2012/03/21/jquery-1-7-2-released/) has been released.  This release mainly includes fixes, but there are also tweaks that improves API consistency.  There's an important note for jQuery Mobile users on which jQuery version to use:

> If you're using jQuery Mobile, please use jQuery 1.7.2 only with jQuery Mobile 1.1. For previous versions of jQuery Mobile, stay with jQuery core 1.7.1 or earlier.

###Filtrify

![Filtrify screenshot](/images/posts/filtrify.png)

[Filtrify](http://luis-almeida.github.com/filtrify/) (GitHub: [luis-almeida / filtrify](https://github.com/luis-almeida/filtrify), License: _MIT_) by Luís Almeida is a Chosen-inspired tag filtering plugin.  It allows multiple tags to be selected and searched, and multiple Filtrify instances can be used on a single page.

The markup is based on data attributes:

{% highlight html %}
<div id="placeHolder"></div>

<ul id="container">
  <li data-genre="pop, rock, british, classic rock"> The Beatles </li>
  <li data-genre="rock, british, blues, classic rock"> The Rolling Stones </li>
  <li data-genre="alternative, electronic, female vocalists"> Björk </li>
  <li data-genre="rock, alternative, grunge"> Foo Fighters </li>
  <li data-genre="rock, classic rock"> Bruce Springsteen </li>
</ul>
{% endhighlight %}

Now calling `$.filtrify('container', 'placeHolder')` will add the selector to the page.

The plugin accepts lots of options, including a property for supplying a callback that fires when tags are added or removed.

###JsBehaviour

[JsBehaviour](https://github.com/DracoBlue/js-behaviour) (License: _MIT_) by DracoBlue is similar to [Declarative](https://github.com/alexlawrence/declarative) that we featured last week -- both are essentially tools for associating complex behaviour with markup as unobtrusively as possible.

Handlers must be registered with jsb:

{% highlight javascript %}
jsb.registerHandler('example', function(el, options) {
  element.textContent = 'I am loaded with name: ' + options.name;
});
{% endhighlight %}

Then parameters can be supplied to JsBehaviour like this:

{% highlight html %}
<span><input class="jsb_ jsb_example" type="hidden" value="{&quot;name&quot;:&quot;Jan&quot;}" />Are you loaded?</span>
{% endhighlight %}

Running this example would produce `I am loaded with name: Jan`.

JsBehaviour expects "enhanced" elements to include a `jsb_` class.  The author has written more about this library with examples on the [JsBehaviour blog](http://dracoblue.net/c/js-behaviour/).

###Rest Test Test

[Rest Test Test](http://resttesttest.com/) (GitHub: [jeroenooms / resttesttest](https://github.com/jeroenooms/resttesttest)) by Jeroen Ooms is a jQuery and Bootstrap-based HTTP testing tool.  It allows various HTTP methods to be issued, along with parameters.  The results are displayed with the associated HTTP headers.

The author recommends using this with Firebug for testing REST services and Cross Origin Resource Sharing (CORS).
