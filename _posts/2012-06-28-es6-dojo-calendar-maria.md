---
layout: post
title: "More ES6 Modules Reactions, Dojo 1.8 Calendar, Maria, Brackets"
author: Alex Young
categories: 
- libraries
- mvc
- ES6
- dojo
- apps
- editors
---

###More ES6 Modules Reactions

Yesterday I mentioned [Isaac Schlueter's post about ES6 modules](http://blog.izs.me/post/25906678790/on-es-6-modules), and now James Burke has responded with [Comments on Isaac's ES modules post](http://tagneto.blogspot.co.uk/2012/06/comments-on-isaacs-es-modules-post.html).  James' comments are interesting given his background with RequireJS, and it's easy to see how much his thoughts are influenced by [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD).

James has also written [ES Modules: suggestions for improvement](http://tagneto.blogspot.co.uk/2012/06/es-modules-suggestions-for-improvement.html), in which he states "I want AMD and RequireJS to go away":

> They solve a real problem, but ideally the language and runtime should have similar capabilities built in.

###New Dojo Components

![Dojo calendar](/images/posts/dojo-calendar.png)

The new Dojo calendar and gauges are explored in [Introducing new visualization components in Dojo 1.8](http://dojotoolkit.org/blog/new-visualization-dojo-1-8).  A lot of client-side developers have asked me about full-blown calendar libraries over the years, and this one looks extremely elaborate.

The [calendar documentation](http://livedocs.dojotoolkit.org/dojox/calendar) shows off how simple the API is:

{% highlight javascript %}
require(["dojo/parser", "dojo/ready", "dojox/calendar/Calendar"],
  function(parser, ready, Calendar){
    ready(function(){
      calendar = new Calendar({
                   dateInterval: "day",
                   style: 'position:relative;width:500px;height:500px'
                }, 'someId');
              }
          )}
  );
{% endhighlight %}

There's also a stunning amount of documentation, with examples, diagrams, and CSS styling details.

###Maria

I really love the [TodoMVC](http://addyosmani.github.com/todomvc/) project by Addy Osmani.  It showcases lots of client-side MVC frameworks.  However, seeing as most people seem to misinterpret what MVC means, Peter Michaux has created [Maria](https://github.com/petermichaux/maria) to set the record straight:

> An MVC framework for JavaScript applications. The real MVC. The Smalltalk MVC. [The Gang of Four](http://en.wikipedia.org/wiki/Design_Patterns) MVC.

In Maria, models are event targets that can be observed by any other objects (including views, controllers, and other models).  Views observe models and represent their current state.  Controllers determine what happens when users interact with views.

There's a [TodoMVC example for Maria](http://addyosmani.github.com/todomvc/labs/architecture-examples/maria/index.html) that breaks down like this:

* Models: [TodoModel](http://addyosmani.github.com/todomvc/labs/architecture-examples/maria/js/models/TodoModel.js), [TodosModel](http://addyosmani.github.com/todomvc/labs/architecture-examples/maria/js/models/TodosModel.js)
* Controllers: [TodosToolbarController](http://addyosmani.github.com/todomvc/labs/architecture-examples/maria/js/controllers/TodosToolbarController.js), [TodosInputController](http://addyosmani.github.com/todomvc/labs/architecture-examples/maria/js/controllers/TodosInputController.js), [TodoController](http://addyosmani.github.com/todomvc/labs/architecture-examples/maria/js/controllers/TodoController.js)
* Views: [TodoView](http://addyosmani.github.com/todomvc/labs/architecture-examples/maria/js/views/TodoView.js), [TodosInputView](http://addyosmani.github.com/todomvc/labs/architecture-examples/maria/js/views/TodosInputView.js), [TodosListView](http://addyosmani.github.com/todomvc/labs/architecture-examples/maria/js/views/TodosListView.js), [TodosToolbarView](http://addyosmani.github.com/todomvc/labs/architecture-examples/maria/js/views/TodosToolbarView.js), [TodosStatsView](http://addyosmani.github.com/todomvc/labs/architecture-examples/maria/js/views/TodosStatsView.js), [TodosAppView](http://addyosmani.github.com/todomvc/labs/architecture-examples/maria/js/views/TodosAppView.js)

The view files change elements based on models, but you won't see a fragment of HTML in them.  In Maria, the concept of a view is distinct from a template.  For example, [TodoTemplate.js](http://addyosmani.github.com/todomvc/labs/architecture-examples/maria/js/templates/TodoTemplate.js) contains the list element HTML fragment.

This stricter interpretation of MVC may be beneficial because views become easier to reuse, and the event-based design seems natural in JavaScript.

Now, you're probably not going to replace your Backbone.js projects with Maria anytime soon, but it's definitely worth trying out Peter's project to see how it can better inform development with your MVC-style library of choice.

###Brackets

![Brackets](/images/posts/brackets-adobe.png)

[Brackets](http://brackets.io/) (GitHub: [adobe / brackets](https://github.com/adobe/brackets), License: _MIT_) from Adobe is an open source editor aimed at web developers.  There's detailed blog post all about it here: [Building a Desktop-Quality App on Web Technologies](http://blog.brackets.io/2012/06/26/building-a-desktop-quality-app-on-web-technologies/).

Although it's built with web technology, it includes a native desktop application to make working with local files easier.  It seems like they'll be working to remove this dependency in the future, and there's always the possibility of using something like [Filepicker.io](https://www.filepicker.io/) for accessing files from services like Dropbox.

Coincidentally, [Cloud9 IDE](http://c9.io/) has been updated with [new collaboration features, compilation (gcc) and interpreter support (Ruby, Python) support, and offline editing](http://c9.io/site/blog/2012/06/cloud9ide-new-features/).
