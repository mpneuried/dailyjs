---
layout: post
title: "Windows and Node: Writing Portable Code"
author: Alex Young
categories: 
- node
- tutorials
- windows
---

I've been surveying popular Node modules and the [nodejs Google Group](https://groups.google.com/forum/?fromgroups#!forum/nodejs) to find common portability issues people have found when testing modules in Windows.

For the most part, Node code seems very portable -- there are only a few problem areas that seem to crop up frequently.  Let's take a look at these problems and the solutions so we can write code that runs everywhere.

###Platform-Specific Code

Despite Node code's inherent portability, there are times when platform-specific code is required.  This is dealt with in Node's core modules like this:

{% highlight javascript %}
var isWindows = process.platform === 'win32';

if (isWindows) {
  // Windows-specific code
}
{% endhighlight %}

This example is based on [path.js](https://github.com/joyent/node/blob/master/lib/path.js).

For more detailed information on the operating system, the [os](http://nodejs.org/docs/latest/api/all.html#all_os) module can come in handy.

![Node's OS module in Windows](/images/posts/win4/1_cmd_os.png)

###File System

Windows can actually accept backslashes or forward slashes as a path separator.  This means you don't need to change all of your `require` calls to use different slashes; most things should just work.  There are a few cases where we need to be careful, however, particularly if a path name is absolute or it's going to be displayed somewhere.

One common issue I've found is where the developer has made certain assumptions about the structure of absolute paths.  In a commit to Express, [Fixed absolute path checking on windows](https://github.com/visionmedia/express/commit/cbf330c3db48e2a3e93c34a2e1e32c56a31bea7a), we can see where the authors have adapted a method called `isAbsolute` to support Windows:

{% highlight javascript %}
exports.isAbsolute = function(path){
  if ('/' == path[0]) return true;
  if (':' == path[1] && '\\' == path[2]) return true;
};
{% endhighlight %}

Isaac Schlueter [recommends] [1] using [path.resolve](http://nodejs.org/docs/latest/api/all.html#all_path_resolve_from_to) to make relative paths absolute in a cross-platform way.

When dealing with fragments of paths, using `path.join` will automatically insert the correct slash based on platform.  For example, the [Windows version](https://github.com/joyent/node/blob/master/lib/path.js#L195) will insert backslashes:

{% highlight javascript %}
var joined = paths.join('\\');
{% endhighlight %}

Notice that JavaScript strings require two backslashes because one acts as an escape, so when working with Windows path names don't be surprised if there are lot of double slashes.

Another big source of Windows issues is [fs.watch](http://nodejs.org/docs/latest/api/all.html#all_fs_watch_filename_options_listener).  This module is routinely used by programs that watch for file system changes.  Node's documentation makes it clear that the API isn't portable, so the slower but more compatible [fs.watchFile](http://nodejs.org/docs/latest/api/all.html#all_fs_watchfile_filename_options_listener) can be used instead.

In [this patch for the Derby web framework](https://github.com/cjblomqvist/derby/commit/deeb28b68d02366844ef156d694dc95379f80258), we can see where the developers opted to branch based on `process.platform` to use `fs.watchFile` in Windows, but `fs.watch` elsewhere.

###Text Interfaces

Be aware that not everybody has a super-fancy UTF-8 terminal that supports colours.  Certain programs depend on text output, but people may have trouble seeing it correctly if your program relies on symbols their terminal or font doesn't support.

Mocha is a good example of such a program, and in the issue [Ability to configure passed/failed checkmarks for the spec reporter](https://github.com/visionmedia/mocha/issues/294), we can see where someone has struggled to read the output with `cmd.exe`.

###Environment

Assuming certain environmental variables will exist (or mean the same thing) on every platform is a good way to create portability headaches.

James Halliday's [Browserify](https://github.com/substack/node-browserify) had its fair share of Windows issues, which was problematic due to several other popular modules depending on it.

[This commit](https://github.com/bennage/node-browserify/commit/9dd2fae0f9647463b6e9bfef713c8741f3cdecff) to Browserify demonstrates a fix Christopher Bennage submitted that replaces calls to `process.env.HOME` with the following:

{% highlight javascript %}
var home = (process.env.HOME || process.env.USERPROFILE);
{% endhighlight %}

I tried this in Windows 7 and found `process.env.HOME` wasn't set, but `process.env.USERPROFILE` worked as expected.

###Sockets

Node's TCP sockets are portable, but Unix domain sockets are not.  However, Windows has [named pipes](http://en.wikipedia.org/wiki/Named_pipe).  The following code is almost exactly the same as the Unix equivalent, it just has a different path to the named pipe:

{% highlight javascript %}
var net = require('net');

net.createServer(function(socket) {
  console.log('Connected');
}).listen('\\\\.\\pipe\\named-pipe-test');
{% endhighlight %}

Notice the escaped backslashes -- forgetting to insert them here will raise a confusing `EACCESS` error.  In [node/test/common.js](https://github.com/joyent/node/blob/master/test/common.js), there's a branch based on platform to set the name of the pipe so it works in Windows and Unix:

{% highlight javascript %}
if (process.platform === 'win32') {
  exports.PIPE = '\\\\.\\pipe\\libuv-test';
} else {
  exports.PIPE = exports.tmpDir + '/test.sock';
}
{% endhighlight %}

###References

[1]: [Best practices for writing cross-platform node applications](https://groups.google.com/forum/#!msg/nodejs/weAWCujR45E/zVvJWHHZn4IJ)
[2]: [Node's documentation](http://nodejs.org/docs/latest/api/all.html)
[3]: [Node's source](https://github.com/joyent/node)
