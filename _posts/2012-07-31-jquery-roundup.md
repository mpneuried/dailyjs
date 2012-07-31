---
layout: post
title: "jQuery Roundup: Flex, jquery-binddata, jquery.notification"
author: Alex Young
categories: 
- jquery
- plugins
- ui
- databinding
- notifications
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Flex

![jQuery Flex](/images/posts/jquery-flex.png)

[Flex](http://jsonenglish.com/projects/flex/) (GitHub: [jasonenglish / jquery-flex](https://github.com/jasonenglish/jquery-flex), License: _MIT_) by Jason English displays an animated grid with expanding panels.

The author has based the effect on a design originally implemented with Flash.  He was compelled to write the plugin after he found a discussion on Stack Overflow that suggested creating the effect with JavaScript would be impossible.

###jquery-binddata

[jquery-binddata](https://github.com/jdavidw13/jquery-binddata) is a new plugin created by "jdavidw13" that helps bind form fields to simple JavaScript data models.  If you're used to working with MVC frameworks and want to carry across some of the related data binding techniques to a smaller jQuery project, then this plugin might do the trick.

The basic usage is to provide the plugin with an object to bind and a form element:

{% highlight javascript %}
var data = { field: 'value' };
$('form').binddata(data);
{% endhighlight %}

QUnit tests have been included, and the plugin is currently only about 200 lines long.

###jquery.notification

[jquery.notification](https://github.com/azproduction/jquery.notification) (License: _MIT_) by Mikhail Davydov is a wrapper around the WebKit [Notifications API](http://www.chromium.org/developers/design-documents/desktop-notifications/api-specification).  I've seen quite a few of these plugins, but I don't think I've actually seen them used effectively in the wild.

If you're looking for such a thing, the plugin looks like this:

{% highlight javascript %}
var notification = $.notification(options, function(isNotificationsAllowed) {
  if (isNotificationsAllowed) {
    notification.show();
  }
});
{% endhighlight %}
