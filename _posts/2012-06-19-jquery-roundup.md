---
layout: post
title: "jQuery Roundup: Bootstrap Extensions, IndexedDB Polyfill, Backbone UI"
author: Alex Young
categories: 
- jquery
- plugins
- backbone.js
- bootstrap
- databases
- indexeddb
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

###Nijiko's Bootstrap Extensions

Nijiko Yonskai sent us two new Bootstrap extensions: [Notifications](http://nijikokun.github.com/bootstrap-notify/) (GitHub: [Nijikokun / bootstrap-notify](https://github.com/Nijikokun/bootstrap-notify), License: _Apache 2.0_) and [Toggle Switches](http://nijikokun.github.com/bootstrap-toggle/) (GitHub: [Nijikokun / bootstrap-toggle](https://github.com/Nijikokun/bootstrap-toggle), License: _Apache 2.0_).

The Notifications extension uses the same look and feel as Bootstrap's built-in alerts, but displays them as popups instead.  It works like a typical jQuery plugin:

{% highlight javascript %}
$('.notifications').notify({
  message: { text: 'Here is a simple message' },
  type: 'success'
}).show(); // for the ones that aren't closable and don't fade out there is a .close() function.
{% endhighlight %}

The Toggle Switches extension turns checkboxes into a larger more graphical switch that looks a bit like the iOS `UISwitch`.  The author has included the required CSS as well.

###IndexedDB Polyfill

The current state of client-side databases is confusing, mainly because there are major browsers that [still don't support IndexedDB](http://caniuse.com/indexeddb).  However, the IndexedDB Polyfill (GitHub: [axemclion / IndexedDBShim](https://github.com/axemclion/IndexedDBShim), License: _GPL2/BSD_) by Parashuram Narasimhan allows browsers that still support Web SQL Database to use Indexed Database API instead.  It also works with the author's [JQuery IndexedDB Plugin](http://nparashuram.com/jquery-indexeddb/).

Including this polyfill on a page allows applications to use `window.indexedDB` as a single point into the IndexedDB API.  The author has written some additional material about the plugin on his blog:

* [IndexedDB polyfill](http://blog.nparashuram.com/2012/06/indexeddb-polyfill.html)
* [IndexedDB Polyfill - Under the covers](http://blog.nparashuram.com/2012/06/indexeddb-polyfill-under-covers.html)

###Backbone UI

[Backbone UI](http://perka.github.com/backbone-ui/) (GitHub: [perka / backbone-ui](https://github.com/perka/backbone-ui), License: _MIT_) by Joe Stelmach allows Backbone models and collections to be displayed as UI components.  By using data binding, the UI is kept up-to-date, and it's pretty easy to change the components using CSS.

The authors have attempted to make it work more closely with the DOM rather than using HTML templates.  This is possible in part due to Joe's [Laconic](http://joestelmach.github.com/laconic/) library.  The focus is on JavaScript-heavy client-side applications rather than traditional server-side generated templates.

The documentation includes a sample to-do list application, and the source is surprisingly easy to follow and concise.
