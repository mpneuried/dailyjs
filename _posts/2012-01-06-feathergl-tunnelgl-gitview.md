---
layout: post
title: "FeatherGL, TunnelGL, Gitview"
author: Alex Young
categories: 
- git
- webgl
---

### FeatherGL

[FeatherGL](http://www.brandonnason.com/software/feathergl/) (GitHub: [bnason / FeatherGL](https://github.com/bnason/FeatherGL), License: _MIT_) by Brandon Nason is a new lightweight WebGL library.  It includes support for camera manipulation, lights, meshes, textures, scenes, and even shaders.  There's an online example of an [animated teapot with FeatherGL](http://bnason.github.com/FeatherGL/Examples/Teapot/) which covers some of the basic features.

Like many other WebGL libraries, the API is based around namespaced objects:

{% highlight javascript %}
var view = new Feather.View(new Feather.WebGL(canvas[0]));

// Create the Vertex Array
var vertices = 
    [
        [0, 0, 0], 
        [1, 0, 0],
        [-Math.cos(Math.PI*2/3), Math.sin(Math.PI*2/3), 0],
    ];
// Create the Vertex Index Array
var vertexIndexArray = [ 0, 1, 2 ];

// Create the Normals Array
var normals =
    [
        [0, 0, -1],
        [0, 0, -1],
        [0, 0, -1],
    ];

// Construct an RGBA color
var colors =
    [
        [1.0, 0.0, 0.0, 1.0],
        [0.0, 1.0, 0.0, 1.0],
        [0.0, 0.0, 1.0, 1.0],
    ];
var triangle = new Feather.Mesh(vertices, vertexIndexArray, normals, colors, Feather.MESH_TRIANGLE_STRIP);
{% endhighlight %}

### TunnelGL

![TunnelGL](/images/posts/tunnelgl.png)

[TunnelGL](http://jeromeetienne.github.com/tunnelgl/) (GitHub: [jeromeetienne / tunnelgl](https://github.com/jeromeetienne/tunnelgl)) by Jerome Etienne is a small WebGL demo that looks like a demoscene tunnel effect straight out of the 90s.  I suspect it's going to form a tutorial on the author's blog, [Learning Three.js](http://learningthreejs.com/), but I'm including it here purely because I love tunnel effects.

Actually, it's a good example of a project that uses [Boilerplate for three.js](https://github.com/jeromeetienne/threejsboilerplate), another one of Jerome's projects.

### Gitview

A reader sent in [Gitview](http://gitview.logicalcognition.com/) (GitHub: [bouchon / Gitview](https://github.com/bouchon/Gitview), License: _WTFPL_) by Paul Bouchon is a widget that displays GitHub repository information.  It can be used as a jQuery plugin, but is also framework agnostic:

{% highlight javascript %}
var view = new Gitview({ 
  user    : 'bouchon',      // any github username
  domNode : document.body,  // domNode to attach to
  count   : 2,              // (optional) number of repos per widget page
  width   : '450px',        // (optional) width of widget
  compact : false,          // (optional) compact mode or full mode?
  noFrame : false,          // (optional) no fancy widget frame, just repositories
});
{% endhighlight %}

All that's required to use Gitview on a page is the addition of the `Gitview.js`, which the author has hosted at `http://logicalcognition.com/Projects/Gitview/Gitview.js`.
