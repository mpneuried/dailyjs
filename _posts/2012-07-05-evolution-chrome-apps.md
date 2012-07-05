---
layout: post
title: "Chrome Apps: JavaScript Desktop Development"
author: Alex Young
categories: 
- google
- chrome
- talks
- videos
---

![Evolution of Chrome Apps](/images/posts/evolution-chrome-apps.png)

June was a month of tech conferences, but it was Google I/O that really stole the thunder of E3 and Apple's WWDC.  People are understandably excited about the Nexus 7, Jelly Bean, and Chrome for iOS, but what was there for us JavaScript hackers?  All of the [Google I/O sessions are available for viewing](https://developers.google.com/events/io/sessions), and one that caught my eye was [The Next Evolution of Chrome Apps](https://developers.google.com/events/io/sessions/gooio2012/200/).

I saw this video [referenced on Twitter by TJ Holowaychuk](https://twitter.com/tjholowaychuk/status/220753005593632768), and given that his JavaScript aesthetics align with mine I wanted to know why he was talking about it.  It turns out there's a lot to like about the future direction of Chrome apps and Chromebooks from a JavaScript developer's perspective.  Offline is now being taken extremely seriously -- partly because existing APIs are being adapted to cope with intermittent connections, but also because Chrome apps will be integrated with the OS (whether it's Google Chrome OS, Mac OS, Linux, or Windows).  This addresses a key usability problem people have with offline web apps: how are they launched?  Rather than digging around in bookmarks or Chrome's Apps page, we'll now be able to launch them from the OS.

After seeing this talk, here's my hyperbolic claim: Google is going to revolutionise desktop development.  Watch the talk to see if you agree.

The part of the talk that stole the show was the Arduino demo.  The new APIs allow applications to access OS-level features: networking, bluetooth, and even serial IO.  Mihai Parparita (Chrome Apps Tech Lead, Google Reader) demonstrated an Arduino board that controlled a motor with a potentiometer, and a Chromebook (on the latest Canary build) was able to read and write data to it.

I've summarised the talk below, but if you're desperate to see sample code then take a look at the [GoogleChrome GitHub account](https://github.com/GoogleChrome) and [developer.chrome.com/apps](http://developer.chrome.com/trunk/apps/about_apps.html).

###Breaking out of the Browser

In [Breaking out of the Browser](http://www.youtube.com/watch?feature=player_detailpage&v=j8oFAr1YR-0#t=379s), system-level integration is discussed:

* Launch apps from outside the browser
* First-class OS windows -- rather than just using the DOM, windows can be created that work with native controls and shortcuts (including cmd/alt-tab)
* Full window frame without browser chrome
* Links open in browsers, not the app

The [Bizarro World Window Demo](http://www.youtube.com/watch?feature=player_detailpage&v=j8oFAr1YR-0#t=482s) demonstrates this.  This is all done with JavaScript.

###Offline by Default

The [Offline by Default](http://www.youtube.com/watch?feature=player_detailpage&v=j8oFAr1YR-0#t=521s) section deals with how new packaged apps are better able to cope with offline mode or intermittent connectivity.

* The interface and application logic are entirely local
* There's an enforced separation of data and UI to help prevent apps from getting into a broken state
* An application should work without ever having connected to the network
* Older APIs have been updated to perform better during poor connectivity
* The fact apps launch from outside the browser helps people realise they work outside the browser and will function offline

There's a demo of [a diff tool](http://www.youtube.com/watch?feature=player_detailpage&v=j8oFAr1YR-0#t=743s) that works differently offline.  When the connection is lost, it immediately displays an offline notice and only allows local files to be opened.  When it's offline remote files can be opened instead.

###New APIs

The [new APIs](http://www.youtube.com/watch?feature=player_detailpage&v=j8oFAr1YR-0#t=871s) are mainly concerned with OS-level integration.

* System APIs: interacting with the hardware (USB/bluetooth) or OS (TCP)
* Shared data APIs: interoperating with other apps (photos/contacts/calendar) accessed safely from multiple apps
* (Google) Web service APIs that run well under poor network conditions: analytics, ads
* Raw sockets, which Google employees have been using to create things like IRC clients

There's a [demo showing an Arduino board interacting with a Chromebook](http://www.youtube.com/watch?feature=player_detailpage&v=j8oFAr1YR-0#t=949s).

###Programming Model

Of course, to facilitate all of these changes the [programming model](http://www.youtube.com/watch?feature=player_detailpage&v=j8oFAr1YR-0#t=1027s) has changed somewhat:

* Applications use a "background page" with a main event
* The application life cycle is event-based
* System-level signals are accessible through an event-based API
* The APIs have bindings to more languages -- Dart is mentioned, but I'm not sure what else they'll ship with
* Background applications can be created
* Apps should be single page with no navigation -- basically designed like desktop applications instead of web applications

There's a bigger emphasis on the difference between _extensions_ and _apps_.  Extensions are now seen as something that modifies the browser itself, while apps are more like desktop applications.  Some apps on the Chrome Web Store currently use extension-level functionality, but these will have to be changed to become extensions instead.  I'm not sure if a package app can be distributed with an extension, because I'm sure there are some cases where the boundary is blurred -- how does 1Password or LastPass fit into this model?

###Security Model

The [Security Model](http://www.youtube.com/watch?feature=player_detailpage&v=j8oFAr1YR-0#t=1331s) reviews Chrome's existing sandbox approach, but also details some new features:

* Storage isolation ensures applications can't modify data they shouldn't have access to
* Applications can be restricted using a new permission system
* There's a new `<browser>` element that allows apps to render a page in a similar way to an iframe, but without the security issues

###Systems Applications Working Group

It certainly seems like these changes will open up new possibilities for developers interested in targeting Chrome and Chromebooks, but doesn't this mean we're investing in vendor-specific technology that we can't use elsewhere?  Well, Erik and Mihai addressed this by announcing that Google is working with Mozilla, Samsung, and Intel on the [System Applications Working Group](http://www.w3.org/2012/05/sysapps-wg-charter.html):

> The mission of the System Applications Working Group is to define an runtime environment, security model, and associated APIs for building Web applications that integrate with a host operating system.

They're also in the early stages of looking at adapting this technology for mobile platforms.
