---
layout: post
title: "UIKit, Expect-dom, Patio"
author: Alex Young
categories: 
- node
- testing
- jquery
---

### UIKit

![UIKit banner](/images/posts/uikit.png)

TJ Holowaychuk's latest project is [UIKit](http://visionmedia.github.com/uikit/) (License: _MIT_, GitHub: [visionmedia / uikit](https://github.com/visionmedia/uikit), npm: _uikit_).  It's a small library of decoupled components for creating web interfaces.  Simple, structural markup and modular JavaScript is used to create widgets like a "card" that uses 3D transforms, dialogs, notification messages, and more.

UIKit reminded me of [Nib](https://github.com/visionmedia/nib), TJ's library of Stylus mixins, utilities, and components.  TJ stresses that UIKit isn't a CSS framework like Bootstrap, but neither is it written with Stylus and Jade.  Instead it functions as a loosely-knit set of components that can be built on.

### Expect-dom

[Expect-dom](https://github.com/kevindente/expect-dom) (License: _MIT_) by Kevin Dente is a set of DOM-related assertions for [expect.js](https://github.com/LearnBoost/expect.js).  Various assertions can be made, including `attr`, `id`, and `html`:

{% highlight javascript %}
expect($('<div title="some title"></div>')).to.have.attr("title");
expect($(theEl)).to.have.html("<span>content</span>");
{% endhighlight %}

The author has adapted code from [jasmine-jquery](https://github.com/velesin/jasmine-jquery) to create this library.

### Patio

[Patio](http://pollenware.github.com/patio/index.html) (License: _MIT_, GitHub: [Pollenware / patio](https://github.com/pollenware/patio), npm: _patio_) from Pollenware is an SQL library inspired by [Sequel](http://sequel.rubyforge.org/).  It supports schema creation, migrations, queries, models, and associations.  It even includes handy flow control related methods like `then`, removing the need to heavily nest certain asynchronous operations:

{% highlight javascript %}
User.findById(1).then(function(user) {
  // SELECT * FROM user WHERE id = 1 
});
{% endhighlight %}

Patio also has some handy JavaScript-friendly utility methods:

{% highlight javascript %}
User.toHash('id', 'name').then(function(nameIdMap) {
  // SELECT * FROM user 
  //{"1":"Bob Yukon"}
});
{% endhighlight %}

Full API documentation is also available: [Patio API documentation](http://pollenware.github.com/patio/api/index.html).

The project still only has 11 GitHub followers, but it's got an incredible amount of functionality already -- check it out and give the authors some feedback!
