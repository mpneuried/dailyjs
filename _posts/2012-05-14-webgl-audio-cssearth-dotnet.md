---
layout: post
title: "WebGL Audio, CSS 3D Earth, .Net Classes"
author: Alex Young
categories: 
- .net
- libraries
- webgl
- graphics
- audio
---

###WebGL Audio

![WebGL Audio with tquery](/images/posts/webglaudio-tquery.png)

WebGL experimenter Jerome Etienne has written a short tutorial entitled [Sound Visualisation: A Vuemeter in WebGL](http://learningthreejs.com/blog/2012/05/08/sound-visualisation-vuemeter-in-webgl/) that demonstrates an impressive, yet simple, WebGL VU meter using the Web Audio API.

To make this work, he's used his [webaudio.js](https://github.com/jeromeetienne/webaudio.js) library:

{% highlight javascript %}
var webaudio = new WebAudio()
  , sound = webaudio.createSound();

sound.load('sound.wav', function(sound) {
  sound.play();
});
{% endhighlight %}

This library can be used alongside [tquery](https://github.com/jeromeetienne/tquery).

###CSS 3D Earth

![CSS 3D Earth](/images/posts/css3dearth.png)

[CSS 3D Earth](http://www.edankwan.com/lab/css3dEarth) by Edan Kwan uses a JavaScript library called [PerspectiveTransform](https://github.com/edankwan/PerspectiveTransform.js) to display an interactive model of the Earth using shading and layers.

The original class is by [Israel Pastrana](http://www.is-real.net/), and the experiment is presented with a nice little [dat.GUI](http://code.google.com/p/dat-gui/) interface.

###.Net JavaScript Classes

Julius Friedman sent in a project he created called [Easy JavaScript Generic List Implementation](http://www.codeproject.com/Tips/379704/Easy-JavaScript-Generic-List-Implementation).  Since then he's expanded the scope and uploaded it to CodePlex: [.Net JavaScript Implementations](http://netjs.codeplex.com/).

The list implementation has an API that looks a lot like LINQ:

{% highlight javascript %}
function Car(make, model) {
  this.make = make;
  this.model = model;
}

var myList = new List();
myList.Add(new Car('Honda', 'Civic'));
myList.Add(new Car('Nissan', 'Sentra'));

var selList = myList.Where('make == 'Honda'').OrderByDescending('model').Distinct();
{% endhighlight %}

He's also working on a `Reflection` class as well as a pseudo type system.
