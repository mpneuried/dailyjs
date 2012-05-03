---
layout: post
title: "Windows and Node: Getting Started"
author: Alex Young
categories: 
- node
- tutorials
- windows
---

I enjoyed writing the [Unix and Node](http://dailyjs.com/tags.html#unix) tutorials over the past few months, and I hope they got people thinking about creating Node programs that behave like first-class Unix citizens.

Since last June, when [Microsoft partnered with Joyent to port Node to Windows](http://blog.nodejs.org/2011/06/23/porting-node-to-windows-with-microsoft%E2%80%99s-help/), Node has gone from strength to strength on Microsoft's ubiquitous OS.  I thought it was only fair to give Windows the same treatment.

In _Windows and Node_, we'll take a look at Windows-centric Node development.  In the first part, we'll install Node (which now includes npm), take a look at the basics, then make a little [Express](http://expressjs.com/) web application to prove it's generally portable with existing Node modules.

###Installation

[![My Windows desktop](/images/posts/win1/thumbs/win_1_stock_windows_thumb.png)](/images/posts/win1/win_1_stock_windows.png)

I'm running a pretty standard installation of Windows 7 Home Professional.  I've got a few things I like installed (Steam, Putty, Chrome, Vim, Dropbox), but nothing specifically related to development.  That means there's no compilers, Cygwin, or Visual Studio.

[![Downloading Node's Windows installer](/images/posts/win1/thumbs/win_2_node_download_thumb.png)](/images/posts/win1/win_2_node_download.png)

To download Node, go to [nodejs.org](http://nodejs.org/), click "Download", and click "Windows Installer".  This will give you a Windows Installer (MSI) file that will install Node and npm.

[![Running the Node Windows installer](/images/posts/win1/thumbs/win_3_node_installer_thumb.png)](/images/posts/win1/win_3_node_installer.png)

Running the Windows installer will show a wizard, it's pretty easy to follow.  It's just like installing any other Windows program -- the Node binaries will end up in `C:\Program Files (x86)\nodejs\`, and will be accessible from `cmd.exe`.

[![Running Node](/images/posts/win1/thumbs/win_4_cmd_thumb.png)](/images/posts/win1/win_4_cmd.png)

###Running Node and npm

To run Node, open a Command Prompt and type `node`.  This will load the standard Node REPL where JavaScript can be evaluated.  Here I've opened my `win.ini` using Node's `fs` module:

[![Evaluating JavaScript](/images/posts/win1/thumbs/win_5_cmd_node_readfile_thumb.png)](/images/posts/win1/win_5_cmd_node_readfile.png)

If you want to exit the REPL, I noticed that `ctrl-d` works (just like Unix!)

Similarly, `npm` can be run.  The first time I used it to search for something, it took a few minutes to download the index first:

[![Using npm](/images/posts/win1/thumbs/win_6_cmd_node_npm_thumb.png)](/images/posts/win1/win_6_cmd_node_npm.png)

###Getting Help

When I'm working in Unix, I often find myself reading npm's `man` pages.  Windows doesn't have `man`, so instead npm will open a browser and display HTML versions of its standard help files.

[![Getting help](/images/posts/win1/thumbs/win_7_cmd_node_npm_help_json_thumb.png)](/images/posts/win1/win_7_cmd_node_npm_help_json.png)

The first time I tried this an error was displayed.  However, there's a [bug report](https://github.com/isaacs/npm/issues/2405) where fixes for the problem are discussed, and Isaac Schlueter stated that the problem will be fixed in Node 0.6.17.

###Hello World from Express

Now that we've got Node and npm working it shouldn't take too much work to get a little project started.  Make a new directory somewhere and open your favourite editor.  I'm using Vim, but you can use [one of the many freely available editors for Windows](http://notepad-plus-plus.org/).

Create a file called `package.json`:

{% highlight javascript %}
{
  "name": "hello"
, "version": "0.0.1"
, "dependencies": {
    "express": "latest"
  }
}
{% endhighlight %}

Then change directory to the location of your project in Command Prompt, and run `npm install` to install Express:

{% highlight text %}
cd Documents\Code\hello
npm install
{% endhighlight %}

[![Installing packages with npm](/images/posts/win1/thumbs/win_8_cmd_node_npm_install_thumb.png)](/images/posts/win1/win_8_cmd_node_npm_install.png)

Make a file that contains a simple Express app, I called mine `index.js`:

{% highlight javascript %}
var express = require('express')
  , app = express.createServer();

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(3000)
{% endhighlight %}

Then run it with `node index.js` and visit `http://localhost:3000/` in a browser.

I got a firewall warning when I did this, but it was fairly self-explanatory:

[![Windows Security Alert](/images/posts/win1/thumbs/win_9_cmd_node_firewall_warning_thumb.png)](/images/posts/win1/win_9_cmd_node_firewall_warning.png)

###Conclusion

On a standard consumer-grade version of Windows 7, Node can be installed and programs can be written without installing anything else.  Building modules that require C/C++ compilation is a little bit more work, but community-favourite Express can be installed without any hassle.

In the coming weeks I hope to look at more detailed Windows-related issues, and working with Node and Microsoft technologies like [Windows Azure](www.windowsazure.com).  I bought a Windows 7 license specifically to write this series, so I'm going to get my money's worth!
