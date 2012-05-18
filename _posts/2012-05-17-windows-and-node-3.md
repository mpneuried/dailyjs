---
layout: post
title: "Windows and Node: Addons"
author: Alex Young
categories: 
- node
- tutorials
- windows
- addons
- gyp
---

In this article we're going to look at _addons_.  If you're a Node developer working in Windows then this article should give you enough background to at least understand the basic issues surrounding addons, and install them using npm.

Addons are something Unix-based Node developers generally have little trouble with.  However, the history of addon support in Windows has been a little bit turbulent.  We've seen various solutions come and go -- most notably _node-waf_ and Cygwin -- but the community has now settled on [node-gyp](https://github.com/TooTallNate/node-gyp) by Nathan Rajlich.

<div class="aside">
<strong>Hint:</strong> <a href="http://nodejs.org/docs/latest/api/all.html#all_addons">Addons</a> use C or C++ libraries.  Node modules may include both addons and JavaScript code.
</div>

Isaac Schlueter summarised it in [this comment](http://blog.nodejs.org/2012/01/23/node-v0-7-1/#comment-1916):

> Node-waf doesn't work on Windows.
> We're working on a solution that will make it easier to get a build toolchain in Windows based on node-gyp. Many packages will have to be updated to use this instead, so we're trying to make it as easy a transition as possible.

###Installing a Module with Native Code

The [fibers](https://github.com/laverdet/node-fibers) module uses node-gyp for building its native components.  However, the module's author, Marcel Laverdet, has packaged it in an extremely effective way.  Rather than force everybody to build the module, he's included binaries in the npm package.  These are not present in the GitHub repository, but are available through npm.  This includes both 32 and 64 bit versions.

![node-fibers installation in Windows](/images/posts/win3/1_fibers.png)

Therefore, simply running `npm install fibers` should result in a working module in Windows.  The compressed archive on npm actually includes Linux, Mac OS, and Windows binaries, for example: `bin/win32-ia32/fibers.node`.

###Building a Module in Windows

As an exercise, let's build the fibers module.  I picked this one because I already know it works -- although there are other modules built with node-gyp, they don't all build correctly in Windows yet.

Building the module requires a few dependencies:

* A global installation of node-gyp
* Python 2.7
* Microsoft Visual Studio ("Express" is free)

####Installing node-gyp

The node-gyp module is easy to install, but just make sure it's installed globally so it'll be in your `%PATH%`:

{% highlight text %}
npm install -g node-gyp
{% endhighlight %}

####Installing Python

GYP, or Generate Your Projects, is a build system that uses Python.  [GypUserDocumentation](http://code.google.com/p/gyp/wiki/GypUserDocumentation) covers the basics, but from our perspective we just need a working version of Python 2.7.x to use it.

I installed [Python 2.7.3](http://www.python.org/download/releases/2.7.3/) using the MSI installer.

####Installing Microsoft Visual Studio

Microsoft provides a free edition of Visual Studio called [Visual Studio 2010 Express](http://www.microsoft.com/visualstudio/en-us/products/2010-editions/express-iso).  I downloaded the ISO and extracted the ISO using [7-Zip](http://www.7-zip.org/).  It's 694 MB, so you might want to brew a suitable hot drink while it's downloading.

![Installing Visual C++](/images/posts/win3/4_visualcpp_install.png)

Fortunately, Microsoft provide this suite of tools and compilers for free with no user registration.

[![Running Microsoft's IDE](/images/posts/win3/5_visualcpp_installed_thumb.png)](/images/posts/win3/5_visualcpp_installed_large.png)

####Building the Module

I downloaded the latest zip of [node-fibers](https://github.com/laverdet/node-fibers) from GitHub, opened Command Prompt, changed directory to the path of the extracted zip, then ran the following:

{% highlight text %}
set PATH=%PATH%;C:\Python27
node-gyp configure
node-gyp build
{% endhighlight %}

![Building the fibers module](/images/posts/win3/6_installing_node_fibers_from_source.png)

Once that was done I ran `npm test`, and the tests all passed.  I found it quite satisfying to see Microsoft's compiler actually build something, and although it's not necessary to build the fibers module this way, there are other modules out there that don't include binaries in npm.

###Conclusion

Hopefully you now appreciate a little bit about how addons are built in Windows.  Although previously the situation was confusing, the community is starting to convert modules to build with node-gyp.

I suspect there will be cases where native code can't be shipped as binaries due to licensing constraints, but it would be encouraging to see more addons include binaries for Windows.
