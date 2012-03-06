---
layout: post
title: "jQuery Roundup: StyleDocco, noUiSlider, jecookie"
author: Alex Young
categories: 
- jquery
- plugins
- css
- cookies
---

<div class="intro">
Note: You can send your plugins and articles in for review through our <a href="/contact.html">contact form</a> or <a href="http://twitter.com/dailyjs">@dailyjs</a>.
</div>

### StyleDocco

    _______ __         __        _____
    |     __|  |_.--.--|  |-----.|     \-----.----.----.-----.
    |__     |   _|  |  |  |  -__||  --  | _  |  __|  __|  _  |
    |_______|____|___  |__|_____||_____/_____|____|____|_____|
                 |_____|

[http://jacobrask.github.com/styledocco/](http://jacobrask.github.com/styledocco/) (GitHub: [jacobrask / styledocco](https://github.com/jacobrask/styledocco), License: _MIT_, npm: _styledocco_) by Jacob Rask generates documentation and style guides from stylesheets.

It's distributed as a command-line tool, and can be installed using npm:

    npm install -g styledocco

Adding descriptive comments is enough for StyleDocco to generate its results.  For an example, see [StyleDocco 0.3.0 default styles](http://jacobrask.github.com/styledocco/resources/docs.html).

### noUiSlider

[noUiSlider](http://refreshless.com/nouislider/) (GitHub: [leongersen / noUiSlider](https://github.com/leongersen/noUiSlider), License: _MPL 1.1/2.0_) by Leon Gersen generates sliders.  The basic usage is `$('.sliderbar').noUiSlider()`, but it also supports a wide range of options and events.

The sliders can be conventional value sliders, or represent a range with two draggable controls.  The author has supplied CSS as well, so it can be used quite quickly out of the box.

### jecookie

[jecookie](https://github.com/ainformatico/jecookie) (License: _GPL_) by Alejandro El Informático is a friendly cookie library.  JSON is supported, and cookies can be marked as secure.

{% highlight javascript %}
var cookie = new jecookie('cookie_name', { secure: true, domain: '.example.org' });
cookie.data = { name : value, content : value };
{% endhighlight %}

It's been tested in IE 6+, Firefox 3+, Chrome 10+, and Opera 10+.
