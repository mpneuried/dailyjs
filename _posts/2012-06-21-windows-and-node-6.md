---
layout: post
title: "Windows and Node: PowerShell"
author: Alex Young
categories: 
- node
- tutorials
- windows
- windows-and-node
---

<div class="intro">
  To read previous posts in this series, view the <a href="/tags.html#windows-and-node">windows-and-node</a> tag.
</div>

This article is aimed at Unix-oriented developers who are interested in learning a little bit about Windows scripting.  It also demonstrates an easy way of calling PowerShell from Node.

Windows PowerShell is comprised of three parts: a command-line shell, a scripting language, and an integration layer with the .NET Framework.  It supports both COM and WMI, so combined with the scripting facilities it's a perfect tool for administrative task automation.  There are quite a few Node modules that include shell scripts -- PowerShell is a Windows-friendly way of achieving similar goals.

Modules that include man pages for Unix systems can support Windows by including [Windows PowerShell Help](http://msdn.microsoft.com/en-us/library/windows/desktop/dd878343.aspx), which are essentially just XML files.  I'm not sure if it's sensible to use this to document a Node program because it seems focused on PowerShell modules themselves, but it seems worth mentioning.

If you're a Unix-based Node developer who's looking to support Windows users, then it's a good idea to familiarise yourself with the basics of PowerShell.  PowerShell can be used to execute programs, which will run as a separate process (just like a Unix shell).  .NET programs designed specifically for PowerShell are called _cmdlets_ -- these are considered "native" commands and execute within the current PowerShell process.  They can actually support input and output as objects, which means collections of objects like arrays can be read and written using pipes.

###Using PowerShell

![Loading PowerShell](/images/posts/win6/powershell1-loading.png)

The _Windows PowerShell_ binary itself can be found in the Start menu under *All Programs*, *Accessories*.  There's also Windows PowerShell ISE (Integrated Scripting Environment), which is an IDE for writing PowerShell scripts.

Once it's loaded, you can try issuing some commands.  The help pages I mentioned can be accessed with `get-help`, so try typing `get-help get-service`:

[![Loading PowerShell](/images/posts/win6/powershell2-commands-thumb.png)](/images/posts/win6/powershell2-commands.png)

Tab completion is supported, so typing `Get-` and pressing tab will cycle through each matching command.  Completion also works for parameters.

PowerShell also features aliases to Unix commands.  The `Get-ChildItem` cmdlet lists files and directories, much like `ls` in Unix.  Fortunately, `Get-ChildItem` is aliased to `ls`, which makes things a little bit easier for those versed in Unix shells.  There are lots of other aliases for DOS and Unix commands:

* `Get-Content`: `cat`
* `Get-Help`: `man`, `help`
* `Set-Location`: `cd`

###Using PowerShell with Node

What I've been building to here is how to take advantage of PowerShell's convenience and integration with Window-specific APIs and interfaces like COM from within Node programs.  This program will list the current directory using Node's `child_process` module:

{% highlight javascript %}
var exec = require('child_process').exec;

// List a directory
exec('powershell.exe -Command "Get-ChildItem"', function(err, stdout, stderr) {
  console.log(stdout);
})
.stdin.end();
{% endhighlight %}

The basic pattern is `powershell.exe -Command "..."`.  The result should look like this:

[![PowerShell from Node](/images/posts/win6/powershell3-exec-thumb.png)](/images/posts/win6/powershell3-exec.png)

Meanwhile, accessing objects using COM is also supported by PowerShell:

{% highlight javascript %}
var exec = require('child_process').exec
  , script;

// Use COM objects to get filesystem information
script = '$f = new-object -com "scripting.filesystemobject"; $f.drives | where {$_.drivetype -eq 2} | Select Path,AvailableSpace,FreeSpace,TotalSize';

exec('powershell.exe -Command "' + script + '"', function(err, stdout, stderr) {
  console.log(stdout);
})
.stdin.end();
{% endhighlight %}

Where might this come in useful?  Well, I have a feeling that certain modules that depend on Unix-specific binaries could be ported to Windows more easily by using PowerShell.  And Windows developers could use it to interface with native services without building native addons.

### Summary

* PowerShell is a command-line shell, scripting language, and integration layer with .NET
* It supports help files and is extensible
* Commands often work with objects rather than text, and objects can be pipelined
* Forking using the PowerShell binary is possible, which may help port modules that depend on Unix binaries
