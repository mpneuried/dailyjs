---
layout: post
title: "Unix and Node: Command-line Arguments"
author: Alex Young
categories: 
- node
- tutorials
- essay
- unix
- documentation
---

### Shebang Bootcamp

Writing an executable script with Node begins with the _shebang_: `#!`, followed by the path to a Node executable.  Not all Unix systems use the same file system layout, and not all users want to install Node in the same place.  Since the shebang must specify an absolute path, a common way around this is to introduce a level of indirection through `env`:

{% highlight sh %}
#!/usr/bin/env node
{% endhighlight %}

This can be seen in many popular Node modules, and in other scripting languages too.  If I try and run a script like this in my shell, I'll get an error:

{% highlight text %}
➜ ./echo.js
zsh: permission denied: ./echo.js
{% endhighlight %}

I have read permission on the file, but it isn't executable:

{% highlight text %}
➜ ls -l
-rw-r--r--  1 alex  wheel  21  1 Mar 17:24 echo.js
➜ chmod u+x ./echo.js 
➜ ls -l
total 8
-rwxr--r--  1 alex  wheel  21  1 Mar 17:24 echo.js
{% endhighlight %}

Here I've used `chmod` to set the executable flag for the user that owns the file.  Most people use the [octal notation](http://en.wikipedia.org/wiki/Filesystem_permissions#Octal_notation) for setting permissions, which looks complicated but isn't as hard as it seems.

### Argument Vector

Command-line arguments are available through the `process` global in an array called `argv`.  This term comes from "argument vector", influenced by C where it's conventional to name the argument count and argument vector this way:

{% highlight c %}
int main(int argc, char *argv[])
{% endhighlight %}

Technically these parameters could be named anything, but this is a *strongly* followed convention.

Compared to C, JavaScript's `array` is a handy type for representing arguments:

{% highlight javascript %}
#!/usr/bin/env node

console.log('Arguments:', process.argv.length);
console.log(process.argv);
{% endhighlight %}

Running this script with no arguments shows what the script was run with:

{% highlight text %}
Arguments: 2
[ 'node', '/private/tmp/unix-node/echo.js' ]
{% endhighlight %}

Conversely, passing in arguments looks like this:

{% highlight text %}
➜ ./echo.js --text JavaScript in the shell
Arguments: 7
[ 'node',
  '/private/tmp/unix-node/echo.js',
  '--text',
  'JavaScript',
  'in',
  'the',
  'shell' ]
{% endhighlight %}

Handling more complex arguments takes a little bit of work, so it's often preferable to offload the effort to a suitable module.  However, some scripts have simple requirements, so array manipulation of `process.argv` may suffice.  This example is from Node's `cluster.js` file:

{% highlight javascript %}
exports.start = function() {
  amMaster = true;

  if (process.argv.length < 1) {
    console.error('Usage: node cluster script.js');
    process.exit(1);
  }

  var args = process.argv.slice(2);
  var scriptFilename = args.shift();
{% endhighlight %}

The length of `process.argv` is validated to ensure the expected option has been supplied, and `process.exit(1)` is called if validation fails.  This is interesting because an argument has been supplied to `process.exit`.  Why 1?

### Exit Status

Unix and Unix-like systems use a convention that a non-zero exit status from a program is an error.  In C, `EXIT_FAILURE` is a macro that can be used to denote this, and on POSIX systems this value is 1.  Changing the previous example to return a non-zero exit code looks like this:

{% highlight javascript %}
#!/usr/bin/env node

console.log('Arguments:', process.argv.length);
console.log(process.argv);

if (process.argv.length < 3) {
  process.exit(1);
}
{% endhighlight %}

Running this script with no arguments should return 1.  However, look what happens:

{% highlight text %}
➜ ./echo.js 
Arguments: 2
[ 'node', '/private/tmp/unix-node/echo.js' ]
{% endhighlight %}

... nothing?  There's no error message or anything!  This is actually a good thing -- think back to the [philosophies behind Unix](http://dailyjs.com/2012/02/09/unix-node/), in particular Doug McIlroy's quote:

> Write programs to handle text streams, because that is a universal interface.

In a world based around text streams, we don't want default behaviour that's too noisy.  If someone built upon this script, they'd rather deal with a concrete error status.  This value can be obtained in most shells by reading `$?`:

{% highlight text %}
➜ echo $?
1
{% endhighlight %}

### Option Parsing Libraries

The two most popular option parsing libraries for Node are [Optimist](https://github.com/substack/node-optimist) (License: _MIT/X11_, npm: _optimist_) and [Commander.js](http://visionmedia.github.com/commander.js/) (GitHub: [visionmedia / commander.js](https://github.com/visionmedia/commander.js), License: _MIT_, npm: _commander_) by TJ Holowaychuk.  These are both well-maintained libraries by active members of the Node community.

Optimist has its own `argv` object that can deal with grouped, long, and short options, and can even display usage:

{% highlight javascript %}
#!/usr/bin/env node
var argv = require('optimist')
    .usage('Usage: $0 -x [num] -y [num]')
    .demand(['x','y'])
    .argv;

console.log(argv.x / argv.y);
{% endhighlight %}

Commander.js has a chainable API that's like a DSL for option processing:

{% highlight javascript %}
#!/usr/bin/env node

var program = require('commander');

program
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineappe');
if (program.bbq) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);
{% endhighlight %}

The program's usage is automatically generated.

### Conclusion

In Node, powerful option parsing is only an `npm install` away.  The built-in `process.argv` array is also convenient and easy to manage for simple situations.  Just remember to exit programs with conventional status codes, or angry shell scripters may fill up your GitHub issues before you know it!
