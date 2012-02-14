---
layout: post
title: "Mystik Map Editor, Outcome.js, TypedJS"
author: Alex Young
categories: 
- games
- language
- errors
- jison
- parsing
---

### Mystik Map Editor

![Mystik Map Editor](/images/posts/mystikrpg.png)

So, you want to build the next Ultima in JavaScript?  As well as a game engine tools are required.  [Mystik Map Editor](http://mystikrpg.com/mapeditor/) (GitHub: [UrbanTwitch / Mystik-Map-Editor](https://github.com/UrbanTwitch/Mystik-Map-Editor)) is an open source tile map editor.  The client-side code is built with jQuery and jQuery UI.  It supports a few drawing operations, like "brush" tile placement and a line tool, and will display if a tile is walkable or not.

Pressing "Create Map" will output a JSON representation of the current map.  To see an example of a game built with this tile editor, visit [mystikrpg.com](http://mystikrpg.com/).  Technically, the tile editor could be forked, hacked, and used for anything, so if you do build the next Ultima with server-side JavaScript, get in touch!

### Outcome.js

[Outcome.js](https://github.com/crcn/outcome.js) (npm: _outcome_) by Craig Condon is a flow control library that focuses on error handling.  Any functions with the signature `.callback(err, result)` can be wrapped, allowing error-related code to be grouped together.

It's quite hard to visualise the library without looking at Craig's example in the [outcome.js README](https://github.com/crcn/outcome.js/blob/master/README.md).  Notice that rather than wrapping `if` statements around the errors returned in callbacks, `on.success(` is used to control execution.

### TypedJS

[TypedJS](http://typedjs.com/) (License: _MIT_, GitHub: [Proxino / TypedJS](https://github.com/Proxino/TypedJS)) by Ethan Fast allows functions to be annotated with type signatures.  The library will then output useful logging during execution, allowing any mismatched types to be detected and potentially fixed.

To do this, comments and tests are used.  Given a function with a suitable annotation:

{% highlight javascript %}
MyObj = {
  //+ MyObj.test_fun :: Number -> Number -> Number
  test_fun:function(num1, num2){
    return num1 + num2;
  }
}
{% endhighlight %}

Then the function can be tested using `TypedJS.run_tests()`.  If `TypedJS.run_tests(true)` is used, TypedJS will wrap functions to actually check for type violations.  This is currently aimed at client-side development and requires jQuery, but the author notes that it's early days for the library, so hopefully it'll be extended to run elsewhere.

Interestingly, this is built using [Jison](http://zaach.github.com/jison/).  For those interested in Jison grammars, check out [typedjs_parser.jison](https://github.com/Proxino/TypedJS/blob/master/typedjs_parser.jison).

