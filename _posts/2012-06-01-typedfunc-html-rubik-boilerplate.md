---
layout: post
title: "TypedFunc, HTML5 Rubik's Cube, Backbone-Require-Boilerplate"
author: Alex Young
categories: 
- backbone.js
- html5
- games
- libraries
---

###TypedFunc

[TypedFunc](https://github.com/christopherdebeer/TypedFunc) (License: _MIT_, npm: [TypedFunc](http://search.npmjs.org/#/TypedFunc)) by Christopher de Beer is an interesting library for creating typed functions in JavaScript.  By using a chainable API, functions can be created that will validate their inputs automatically:

{% highlight javascript %}
var TypedFunc = require('TypedFunc');

var setName = (new TypedFunc()).throws('string', {}, function(name) {
  console.log('Setting name:', name);
  return name;
});

setName('alex');
setName(1);
{% endhighlight %}

The last call, `setName(1)`, will raise an exception like this:

{% highlight text %}
Error: Invalid Function type. Should return string but returned number.
{% endhighlight %}

TypedFunc can also support Node's `function(err, value)` style of callbacks, rather than throwing an exception.

###HTML5 Rubik's Cube

![Rubik's Cube screenshot](/images/posts/rubik5.png)

This [HTML5 Rubik's Cube](http://html5rubik.com/) by Diego Ferreiro Val uses YUI and CSS transformations to create a 3D Rubik's Cube.  It can also solve itself, and the arrow buttons will undo or redo the last move.

The author has written a detailed tutorial about how he developed it here: [Tutorial: Rubik's cube with HTML5 (CSS3 + JavaScript)](http://html5rubik.com/tutorial/).

###Backbone-Require-Boilerplate

I know there's a lot of boilerplates out there, but Greg Franko has put a lot of effort into [Backbone-Require-Boilerplate](https://github.com/gfranko/Backbone-Require-Boilerplate) (License: _MIT_).

It's designed to encourage sharing code between desktop and mobile sites, and includes a recent version of RequireJS that supports loading non-AMD libraries.
