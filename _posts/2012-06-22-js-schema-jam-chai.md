---
layout: post
title: "Jam, js-schema, Chai Plugins"
author: "Alex Young"
categories: 
- libraries
- modules
- package-managers
- testing
---

###Jam

![Jam](/images/posts/jam.png)

[Jam](http://groundcomputing.co.uk/code/jam) (GitHub: [caolan / jam](https://github.com/caolan/jam), npm: [jamjs](http://search.npmjs.org/#/jamjs)) by Caolan McMahon is a client-side package manager, with a focus on AMD.  It can be used to download client-side libraries, and compile them for deployment.  Packages will be installed to `./jam`.

Usage looks like this:

{% highlight text %}
$ npm install -g jamjs
$ jam install jquery
$ jam install backbone
$ ls jam
backbone          jquery            require.js
jam.json          require.config.js underscore
$ jam ls
* backbone 0.9.2
* jquery 1.7.2
  underscore 1.3.3-jam.1
{% endhighlight %}

Running `jam compile` will output a file containing selected modules and RequireJS.  RequireJS can be swapped for a lightweight replacement.  That means certain modules could be bundled separately so your application can load them when required, taking advantage of asynchronous resource.

Jam also supports version locking.  I kept looking for a manifest file or `package.json`, but it's done like this:

{% highlight text %}
$ jam lock jquery@1.7.2
$ jam ls
* backbone 0.9.2
* jquery 1.7.2 [locked 1.7.2]
  underscore 1.3.3-jam.1
{% endhighlight %}

###js-schema

[js-schema](https://github.com/molnarg/js-schema) (License: _MIT_, npm: [js-schema](http://search.npmjs.org/#/js-schema)) by Gábor Molnár allows schemas to be defined using simple JavaScript, and can work with the JSON Schema format.  It'll work in Node and browsers as well.  Schemas are defined in terms of nine rules, which includes things like matching regular expressions and objects.

This basic example from the readme demonstrates how it works:

{% highlight javascript %}
var schema = require('js-schema');
// or <script src="js-schema.min.js"></script> in the browser

var Duck = schema({          // A duck
  quack: Function,           //  - can quack
  feed: Function,            //  - can be fed
  age: Number.min(0).max(5), //  - is 0 to 5 years old
  color: ['yellow', 'brown'] //  - has either yellow or brown color
});
{% endhighlight %}

Notice that this adds methods to the built-in constructors, and the author hasn't yet included unit tests.  Purists may prefer to see `schema.Number`, as in other validation frameworks.

###Chai 1.0

[Chai 1.0](http://chaijs.com/) (GitHub: [chaijs / chai](https://github.com/chaijs/chai), License: _MIT_) was released recently.  There's been a lot of bug fixes and improvements since the 0.5.x releases, and the developers have improved the API so it's easier to extend Chai with plugins.

The [Chai Plugin Directory](http://chaijs.com/plugins) can be used to find plugins, and it even shows if the plugin is intended to work with Node or a browser.  Each plugin page includes documentation and installation details, for example: [chai-jquery](http://chaijs.com/plugins/chai-jquery).
