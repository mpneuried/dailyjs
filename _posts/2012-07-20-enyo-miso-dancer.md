---
layout: post
title: "Enyo, Miso, Dancer.sj"
author: Alex Young
categories: 
- libraries
- frameworks
- webgl
- audio
---

###Enyo 2.0

[Enyo 2](http://enyojs.com/) (GitHub: [enyojs](https://github.com/enyojs), License: _Apache 2.0_) from HP was released this week.  There's a post all about the release on the [Enyo blog](http://blog.enyojs.com/post/27492225747/enyo-2-exits-beta):

> Enyo 2 boasts an amazing community of developers, a broad set of cross-platform UI widgets, and a powerful layout library for building apps that work across all form factors from phones to desktops.

They're also promising more updates, with some great hyperbole about the future of web apps:

> We see a web-centric future in which there aren't iOS apps, Android apps, Mac apps and Windows apps - there are just apps: apps that let you access your content and get stuff done, wherever you happen to be, on whatever device is handy.

###Miso Dataset

![Miso Dataset Example](/images/posts/projectmiso.png)

[Miso Dataset](http://misoproject.com/dataset/) (GitHub: [misoproject / dataset](https://github.com/misoproject/dataset), License: _MIT/GPL_, npm: [miso.dataset](http://npmjs.org/package/miso.dataset)) is a client-side library for managing data.  There's an example called [Exploring government spending](http://misoproject.com/dataset/examples/cabinet-office.html) that uses D3 and Backbone.js alongside Miso Dataset to generate an interactive chart that reminds me of the images [David McCandless](http://www.davidmccandless.com/) creates.

Dataset provides tools for working with data in a web-friendly, event-based manner.  Data can be loaded using techniques like jsonp, and then manipulated in a similar way to Backbone's models (Dataset also has an event-based syncing system).  It comes with extensible classes for parsing and displaying data, and it also plays well with Node.

There are [Dataset tutorials](http://misoproject.com/dataset/tutorials.html), and a [Quick Start](http://misoproject.com/dataset/tutorials/quickstart) guide for the perplexed.

Dataset is actually part of a wider project called [Miso](http://misoproject.com/) by the [Guardian Interactive team](http://www.guardian.co.uk/profile/guardian-interactive-department) and [Bocoup](http://www.bocoup.com/).

Thanks to [@flywheeltech](https://twitter.com/flywheeltech) for sending this in.

###dancer.js

[dancer.js](http://jsantell.github.com/dancer.js/) (GitHub: [jsantell / dancer.js](https://github.com/jsantell/dancer.js), License: _MIT_) by Jordan Santell is an audio API designed for making visualisations.  It can work with the HTML5 Audio or use a Flash fallback.  It actually includes stuff like an FFT class from DSP.js, so it allows interesting effects to be created while working at a relatively high level.
