---
layout: post
title: "jQuery Roundup: Auto-geocoder, Jade for jQuery, Swipe"
author: Alex Young
categories: 
- jquery
- plugins
- ui
- mobile
- geo
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

### jQuery Auto-geocoder

![jQuery Auto-geocoder](/images/posts/jquerygeocoder.png)

[jQuery Auto-geocoder](http://tristandunn.com/projects/jquery-auto-geocoder/) (GitHub: [tristandunn / jquery-auto-geocoder](https://github.com/tristandunn/jquery-auto-geocoder), License: _MIT_) by Tristan Dunn enables incremental search for Google Maps.  A text input is displayed, and the results of a location search on Google's geocoding API are displayed in the map view.

{% highlight javascript %}
$(function() {
  $('#location').autoGeocoder();
});
{% endhighlight %}

The `autoGeocoder` method also accepts options -- for example, `delay` can be used to control how often locations will be geocoded, and `initial` contains the options used to create the map.

One thing I wanted to do when testing this plugin was allowing the marker to be dragged.  As far as I can tell, there's no direct support for manipulating the resulting marker position.  However, it's possible to bind to the events used by the plugin, then the listener will be in the right context to access the marker:

{% highlight javascript %}
$('#location').autoGeocoder({
  initial: {
    zoom: 1
  , center: [34, 0]
  , draggable: true
  , mapTypeId: google.maps.MapTypeId.ROADMAP
  , mapTypeControl: false
  }
}).bind('auto-geocoder.onGeocodeResult', function() {
  this.marker.draggable = true;
});
{% endhighlight %}

I had to write a similar interface widget once that allowed people to search for a location, then fine-tune the position.

### Jade for jQuery

[Jade for jQuery](https://github.com/jmar777/jquery.jade.js) (License: _MIT/GPL v2_) by Jeremy Martin is a lightweight jQuery wrapper for [Jade](http://jade-lang.com/).  Seeing as both of these technologies are all about CSS selectors, I've always felt like it makes sense to use them together.  In my own work, Jade has formed the server-side templates.  How does this look for a client-side template solution?

{% highlight html %}
<script id='my-template' type='text/x-jade'>
h1 Hello #{name}!
</script>

<script type="text/javascript">
$('#my-template').jade({ name: 'World' }).appendTo('body');
</script>
{% endhighlight %}

It's also possible to render string templates with `$.jade(template, data)`.

### Swipe

![Swipe screenshot](/images/posts/swipejs.png)

[Hirvesh](http://functionn.blogspot.com/) sent in [Swipe](http://swipejs.com/) (GitHub: [bradbirdsall / Swipe](https://github.com/bradbirdsall/Swipe), License: _MIT/GPL_) by Brad Birdsall:

> Swipe is a lightweight mobile slider with 1:1 touch movement, resistant bounds, scroll prevention, and completely library agnostic.

It works with a series of elements inside a container, and the author recommends using it with a feature detection library like Modernizr:

{% highlight javascript %}
if (Modernizr.csstransforms) {
  window.mySwipe = new Swipe(
    document.getElementById('slider')
  );
}
{% endhighlight %}

One of the nice features in Swipe is scroll prevention -- it'll detect if a swipe was intended to scroll the screen down, or slide content horizontally.
