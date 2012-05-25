---
layout: post
title: "Ender Roundup: tablesort.js, Moment.js, jwerty, SelectNav.js, ender-events, ender-assert, Categorizr.js, Arbiter"
author: Rod Vagg
categories:
- ender
- frameworks
- modules
- libraries
- time
- date
- keyboard
- responsive
- node
- history
---

<div class="intro">
You can send in your Ender-related projects for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
Be sure to also update the <a href="https://github.com/ender-js/Ender/wiki/Ender-package-list">Ender package list</a> page on the <a href="https://github.com/ender-js/Ender/wiki">Ender wiki</a>.
</div>

### tablesort.js

[tablesort.js](http://tristen.ca/tablesort/demo/) (GitHub: [tristen/tablesort](https://github.com/tristen/tablesort), npm / Ender: _tablesort_) by Tristen Brown is a dependency-free sorting library for HTML tables. tablesort.js can be invoked stand-alone via <code>new Tablesort(document.getElementById('table-id'))</code> or <code>$('#table-id').tablesort()</code> method from within Ender.

Olivier Vaillancourt has written a small [review](https://github.com/rvagg/bootstrap/issues/2#issuecomment-4335651) of tablesort.js for use in Ender on Twitter Bootstrap tables.

### Moment.js

[Moment.js](http://momentjs.com/) (GitHub: [timrwood/moment](https://github.com/timrwood/moment), npm / Ender: _moment_) by Tim Wood is small, yet very comprehensive date and time handling library.

![Moment.js](http://dailyjs.com/images/posts/momentjs.png)

Moment.js was mentioned [last year](http://dailyjs.com/2011/11/09/node-roundup/) on DailyJS but it now has a simple Ender bridge allowing you to pack it neatly into Ender builds for use via <code>$.ender()</code>. Plus, it's an absolutely fantastic library for anything date/time related so it's worth mentioning again. Be sure to scan the [docs](http://momentjs.com/docs/) to see just how much this library can do.

{% highlight javascript %}
$.moment().add('hours', 1).fromNow(); // "1 hour ago"

// manipulate
$.moment().add('days', 7).subtract('months', 1).year(2009).hours(0).minutes(0).seconds(0);

// parse dates in different formats
var day = $.moment("12-25-1995", "MM-DD-YYYY");

var a = $.moment([2010, 1, 14, 15, 25, 50, 125]);
a.format("dddd, MMMM Do YYYY, h:mm:ss a"); // "Sunday, February 14th 2010, 3:25:50 pm"
a.format("ddd, hA"); // "Sun, 3PM"

// operate on different 'moment' objects
var a = $.moment([2007, 0]);
var b = $.moment([2008, 5]);
a.diff(b, 'years'); // 1
a.diff(b, 'years', true); // 1.5
{% endhighlight %}

The project maintainers also follow a rigorous release methodology, making great use of git branches, something that is not often found on smaller open source libraries.

### jwerty

[jwerty](http://keithcirkel.co.uk/jwerty/) (GitHub: [keithamus/jwerty](https://github.com/keithamus/jwerty), Licence: _MIT_, npm / Ender: _jwerty_) by Keith Cirkel is a small keyboard event handling library which can bind, fire and assert key combination strings against elements and events.


{% highlight javascript %}
$.key('ctrl+shift+P', function () { [...] });
$.key('⌃+⇧+P', function () { [...] });

// specify optional keys
$.key('⌃+⇧+P/⌘+⇧+P', function () { [...] });

// key sequences
$.key('↑,↑,↓,↓,←,→,←,→,B,A,↩', function () { [...] });

// pass in a selector to bind a shortcut local to that element
$.key('⌃+⇧+P/⌘+⇧+P', function () { [...] }, 'input.email', '#myForm');

// use `$.event` as a decorator, to bind events your own way
$('#myinput').bind('keydown', $.keyEvent('⌃+⇧+P/⌘+⇧+P', function () { [...] }));

// use `$.isKey` to check a key combo against a keyboard event
function (event) {
    if ( $.isKey('⌃+⇧+P', event) ) { [...] }
}

// use `$.fireKey` to send keyboard events to other places
$.fireKey('enter', 'input:first-child', '#myForm');
{% endhighlight %}

### SelectNav.js

[SelectNav.js](http://lukaszfiszer.github.com/selectnav.js/) (GitHub: [lukaszfiszer/selectnav.js](https://github.com/lukaszfiszer/selectnav.js/), npm / Ender: _selectnav.js_) by Lukasz Fiszer is a small library that will convert your website's navigation into a <code>&lt;select&gt;</code> menu. Used together with media queries it helps you to create a space saving, responsive navigation for small screen devices. SelectNav.js is inspired by [TinyNav.js](http://tinynav.viljamis.com/) for jQuery.

### ender-events and ender-assert

[ender-events](https://github.com/amccollum/ender-events) (GitHub: [amccollum/ender-events](https://github.com/amccollum/ender-events), Licence: _MIT_, npm / Ender: _ender-events_) and [ender-assert](https://github.com/amccollum/ender-assert) (GitHub: [amccollum/ender-assert](https://github.com/amccollum/ender-assert), Licence: _MIT_, npm / Ender: _ender-assert_) are two packages by Andrew McCollum, previously bundled in his [node-compat](https://github.com/amccollum/node-compat) library. ender-events gives you an implementation of the NodeJS [EventEmitter](http://nodejs.org/docs/latest/api/events.html#events_class_events_eventemitter) class in your browser, while ender-assert gives you a browser version of the NodeJS [assert](http://nodejs.org/docs/latest/api/assert.html) module.

Andrew also has a tiny extension to Bonzo, the DOM utility included in Ender's starter pack (<em>The Jeesh</em>), named [ender-remove](https://github.com/amccollum/ender-remove) that simply triggers a _'remove'_ event when nodes are removed from the DOM. Which can be helpful for performing clean-up actions.

### Categorizr.js

[Categorizr.js](https://github.com/Skookum/categorizr.js) (GitHub: [Skookum/categorizr.js](https://github.com/Skookum/categorizr.js), Licence: _MIT_, npm / Ender: _categorizr_) by Dustan Kasten is a JavaScript port of the [Categorizr](http://www.brettjankord.com/2012/01/16/categorizr-a-modern-device-detection-script/) PHP script by Brett Jankord.

Categorizr gives you <code>$.isDesktop()</code> <code>$.isTablet()</code> <code>$.isTV()</code> <code>$.isMobile()</code> methods to determine the current device.

### Arbiter

[Arbiter](https://github.com/iamdustan/arbiter) (GitHub: [iamdustan/arbiter](https://github.com/iamdustan/arbiter), Licence: _MIT_, npm / Ender: _arbiter_) also by Dustan Kasten is a tiny library for managing the HTML5 history interface via <code>pushState()</code>, using AJAX requests to load new content upon request.
