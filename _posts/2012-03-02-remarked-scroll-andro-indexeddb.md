---
layout: post
title: "reMarked.js, Scroll.js, Andro.js, IndexedDB Examples"
author: Alex Young
categories: 
- libraries
- browser
- indexeddb
- ui
- databases
---

### reMarked.js

[reMarked.js](http://leeoniya.github.com/reMarked.js/) (GitHub: [leeoniya / reMarked.js](https://github.com/leeoniya/reMarked.js), License: _MIT_) by Leon Sorokin converts a client-side DOM fragment into Markdown.  The [reMarked.js homepage](http://leeoniya.github.com/reMarked.js/) has several links to GitHub READMEs on the left-hand side, and pressing the 'reMark it!' button will convert their HTML into Markdown.

The author's ultimate goal is to use this in a WYSIWYG editor.  It seems like a difficult project, so it features tests as well.

### Scroll.js

[Scroll.js](https://github.com/dbabaioff/scroll.js) (License: _MIT_) by David Babaioff is a cross-browser library for managing the `scroll` event:

{% highlight javascript %}
Scroll.bind('scroll_1', function() {
    // Your event handler code goes here.
}).bind({
    'scroll_2': function() {
        // Your event handler code goes here.
    },
    'scroll_3': function() {
        // Your event handler code goes here.
    }
});
{% endhighlight %}

It doesn't have any dependencies, so it may be useful in cases where you don't want to use a larger library like jQuery.

### Andro.js

[Andro.js](http://androjs.maryrosecook.com/) (GitHub: [maryrosecook / androjs](https://github.com/maryrosecook/androjs), License: _MIT_) by Mary Rose Cook combines the idea of reusable behaviour with events:

> Behaviour mixins are good for writing video games. They help with the concoction of game object logic: no more nightmarish inheritance hierarchies or weird bundles of functions that invent cryptic interfaces for the objects upon which they operate.

The author's example is a cube that gets augmented with behaviours to provide logic based around events:

{% highlight javascript %}
var Andro = require('andro').Andro
  , andro = new Andro()
  , soundBehaviour
  , cube;

function Cube() {
  this.touch = function(contact) {
    andro.eventer(this).emit('touch', contact);
  };
}

soundBehaviour = {
  setup: function(owner, eventer) {
    eventer.bind(this, 'touch', function() {
      console.log('SFX: Leo_the_Lion.wav');
    });
  }
};

cube = new Cube();
andro.setup(cube);
andro.augment(cube, firstTouchBehaviour);
cube.touch('added');
{% endhighlight %}

Here I've paraphrased the original example at [androjs.maryrosecook.com/](http://androjs.maryrosecook.com/) just to give an idea of the syntax.  I agree with the author that this library provides some useful tools for representing game logic, and the documentation also provides examples of situations where this might not work so well.

### IndexedDB Examples

These [IndexedDB examples](http://nparashuram.com/IndexedDB/trialtool/index.html) by Parashuram Narasimhan show what works in Chrome, Firefox, and Internet Explorer 8+.  The standards are still changing, but Parashuram has been working hard to track the current state of API changes in both [his blog](http://blog.nparashuram.com/search/label/indexeddb) and the [jquery-indexeddb](https://github.com/axemclion/jquery-indexeddb) plugin.

For more on IndexedDB, see the usual suspects: [W3C: Indexed Database API](http://www.w3.org/TR/IndexedDB/), [MDN: IndexedDB](https://developer.mozilla.org/en/IndexedDB).
