---
layout: post
title: "StackHack, Ducks, Remote-Tilt, Simplify.js"
author: Alex Young
categories: 
- node
- webgl
- testing
- games
- mobile
---

### StackHack

![StackHack screenshot](/images/posts/stackhack.png)

[StackHack](http://stackhack.com/) by Philip Deschaine and from [PubNub](http://www.pubnub.com/) is a WebGL demo that uses PubNub to create a massively multiplayer interactive block stacking game.  The technical details are discussed in [StackHack: A Massively-Multiplayer Mashup of PubNub and Three.js](http://www.pubnub.com/blog/stackhack).

> Let's start with the server. I used Node.js with express to serve up our HTML, CSS, JavaScript.
> When a client connects, we generate a UUID, append some stuff and listen on that channel.
> Why do it this way? Why not just use a generic PubNub channel? Excellent question
> I wanted what's known as an authoritative server.

The article includes more details behind both the client-side and server-side code.

### Ducks, a WebGL Demo

![Ducks screenshot](/images/posts/ducks.png)

[Ducks](http://statico.github.com/webgl-demos/ducks/) (GitHub: [statico / webgl-demos / ducks](https://github.com/statico/webgl-demos/tree/master/ducks)) by Ian Langworth is a simple game demo that uses WebGL and sound, complete with animated models and reflections.  The [GLGE](http://www.glge.org/) WebGL framework has been used, along with models from the [COLLADA Basic Samples collection](https://collada.org/owl/browse.php?sess=0&parent=120&expand=1&order=name&curview=0&sortname=ASC).

The game logic, in [ducks / logic.js](https://github.com/statico/webgl-demos/blob/master/ducks/logic.js), is relatively clear and easy to follow, so it works as a great example of a small, manageable example of a WebGL game.

### Remote-Tilt

[Remote-Tilt](http://remote-tilt.com/) (License: _MIT_, GitHub: [remy / remote-tilt](https://github.com/remy/remote-tilt)) by Remy Sharp can help test motion events without fooling around with a mobile device:

> Testing motion events was never going to be easy task. You have two options, both of which suck.
> That's where Remote-Tilt comes in. By including a single line of JavaScript you can emulate device motion events in your test page which can either be a regular browser or even a mobile emulator.

By including the Remote-Tilt polyfill on a page a popup will appear that allows motion events to be simulated:

![Remote-Tilt motion emulator](/images/posts/motion-emulator.png)

### Simplify.js

![Simplify.js demo screenshot](/images/posts/simplifyjs.png)

[Simplify.js](http://mourner.github.com/simplify-js/) (License: _BSD_, GitHub: [mourner / simplify-js](https://github.com/mourner/simplify-js), npm: _simplify-js_) by Vladimir Agafonkin is a library for fast 2D/3D polyline simplification:

> It is very useful when you deal with lines consisting of many tens of thousands of points,
> e.g. when you need to quickly render a 50k-points line on the browser (for charts, map routes, etc.).

The demo on the Simplify.js homepage shows how impressive the performance is, easily throwing around 50,000 points like it's child's play!  The source for this project has been extracted from another of Vladimir's interesting libraries, [Leaflet](http://leaflet.cloudmade.com/), which is also worth checking out.
