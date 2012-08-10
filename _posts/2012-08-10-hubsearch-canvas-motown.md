---
layout: post
title: "HubSearch, canvas-charts, Motown"
author: Alex Young
categories: 
- libraries
- browser
- ui
- windows
- apps
- metro
---

###HubSearch

![HubSearch](/images/posts/hubsearch.png)

[HubSearch](http://projects.jga.me/hubsearch/) (GitHub: [jgallen23 / hubsearch](https://github.com/jgallen23/hubsearch)) by Greg Allen is a GitHub search interface built with Bootstrap, Underscore, and his own [Fidel](https://github.com/jgallen23/fidel) library for Backbone-style controllers.

I spend a lot of time searching GitHub to find projects to write about, so it's good to see a tool that tries to improve on GitHub's inadequate search interface.

###canvas-charts

[canvas-charts](https://github.com/praneetloke/canvas-charts) (License: _MIT_) by Praneet Loke is a graph library that only relies on the HTML5 Canvas API.  The library includes a method to check if the Canvas element is supported, and it accepts an object containing options:

{% highlight javascript %}
var chartingCanvas = new CanvasCharts();
if (chartingCanvas.isCanvasSupported()) {
  chartingCanvas.configure{
    gradientColor1: '#cd9603'
  , gradientColor2: '#f1de3f' // etc.
  });

  chartingCanvas.createCanvas($('graph'), width, height);
  // Given suitable arrays of labels for the x and y axes
  chartingCanvas.drawChart(xaxis, 90, yaxis, 35, [10, 20, 30 20, 10]);
}
{% endhighlight %}

###Motown

[Motown](http://labs.vectorform.com/2012/07/motown-easy-javascript-apps-for-metro-part-1/) (GitHub: [mtilchen / motown](https://github.com/mtilchen/motown), License: _LGPL v3_) by Matthew P. Tilchen is a library for creating Metro-style Windows 8 applications using HTML, CSS, and JavaScript.  Matthew sent this in before Microsoft decided to change the Metro name, but at this point everyone interested in this project should understand the name's origin.

> The WinJS libraries and bindings to WinRT provide a solid foundation for building applications but I feel that a significant gap remains. Microsoft \[...\] intentionally left \[...\] this for the development community to fill. I created the Motown JavaScript library \[...\] to fill the gap.

This library is based on Microsoft's JavaScript Windows API, and is built according to Microsoft's recommendations:

> Microsoft recommends that developers use a "single-page" style of navigation instead of a "multi-page" style in their applications.

Motown also supports navigation transition animations, application life cycle methods, and a declarative approach to binding HTML views to JavaScript.  The project includes a Visual Studio 2012 plugin for creating new Motown apps.
