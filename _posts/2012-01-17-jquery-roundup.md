---
layout: post
title: "jQuery Roundup: Jsonify, jquery-download, jqPagination"
author: Alex Young
categories: 
- jquery
- plugins
- json
- pagination
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

### Jsonify

[Jsonify](https://github.com/jorgenhorstink/jsonify) by Jorgen Horstink can serialize DOM elements into JSON through the use of HTML5 data attributes.  The two attributes, `data-jsonify-name` and `data-jsonify-getter`, are used to map and process values as they're serialized:

{% highlight javascript %}
$.jsonify({
  getters: {
    fruit: function () {
      return this.html().toLowerCase();
    }
  }
});
{% endhighlight %}

Then `$('form').jsonify()` can be used to process a form with fields like this:

{% highlight html %}
<span data-jsonify-name="food.fruit[0].name" data-jsonify-getter="fruit">Orange</span>:
<input type="checkbox" data-jsonify-name="food.fruit[0].value" value="yes"><br>

<span data-jsonify-name="food.fruit[1].name" data-jsonify-getter="fruit">Banana</span>:
<input type="checkbox" data-jsonify-name="food.fruit[1].value" value="yes"><br>

<span data-jsonify-name="food.fruit[2].name" data-jsonify-getter="fruit">Strawberry</span>:
<input type="checkbox" data-jsonify-name="food.fruit[2].value" value="yes"><br>
{% endhighlight %}

### jquery-download

![jquery-download demo](/images/posts/jquery-download.png)

[jquery-download](https://github.com/talos/jquery-download) (License: BSD, Demo: [jquery-download demo](http://talos.github.com/jquery-download/demo.html)) by John Krauss allows the DOM, or parts of it, to be downloaded through `data:` URIs.  The author's demo has some SVG, so this plugin could be used to extract and download SVG as it's edited.

The same author has a load of new stuff on GitHub at [github.com/talos](https://github.com/talos).

### jqPagination

![jqPagination screenshot](/images/posts/jqpagination.png)

[jqPagination](http://beneverard.github.com/jqPagination/) (GitHub: [beneverard / jqPagination](https://github.com/beneverard/jqPagination), License: _GPL v3_) by Ben Everard is a different interface for pagination: next and previous selectors are displayed, but if the current page text is clicked then a page number can be entered.  A callback gets the current page number when it's changed:

{% highlight javascript %}
$('.pagination').jqPagination({
  paged: function(page) {
    // do something with the page variable
  }
});
{% endhighlight %}

In the callback, anything could happen: the current location could be changed, or an Ajax method could load more content from a RESTful API.  The author has included CSS as part of the plugin's source.

