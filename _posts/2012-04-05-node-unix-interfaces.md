---
layout: post
title: "Unix and Node: Interfaces"
author: Alex Young
categories: 
- node
- tutorials
- unix
- cli
---

Earlier in this series I covered [command-line arguments](http://dailyjs.com/2012/03/01/unix-node-arguments/), which are well-supported in Node.  There are times when a more interactive interface is required, however.

Fortunately, various node modules give us the tools to create command-line Unix programs with many different console-based interfaces, from Read-Eval-Print-Loops to GUI-like terminal control libraries.

###REPL

Node's Read-Eval-Print-Loop (REPL) is available as a module, and can be used to create interactive JavaScript shells.  [Node's documentation](http://nodejs.org/docs/latest/api/all.html#all_repl) has a cool example that uses a TCP server, so clients can connect with `telnet`.

The documentation is currently slightly inaccurate with regard to `REPL.start` -- the callback method actually takes four arguments and won't work as advertised.  This example should work with the current version of Node 0.6:

{% highlight javascript %}
var repl = require('repl')
  , vm = require('vm');

repl.start('> ', process, function(code, context, file, callback) {
  var result
    , err;

  try {
    result = vm.runInThisContext(code, file);
  } catch (err) {
    console.error('Error:', err);
  }
  callback(err, result);
});
{% endhighlight %}

The `process` global is passed as the `stream` argument to make the REPL read and write to `stdin` and `stdout`.  The callback method can do anything that's required.  For example, you could allow access to your database objects and methods in a web application, or provide an interactive administration interface to a daemon.

###Readline

The `repl` module works well when a JavaScript shell is required, but what about a custom REPL?  Node actually includes a Readline module, which is perfect for this:

{% highlight javascript %}
var readline = require('readline')
  , rl;

rl = readline.createInterface(process.stdin, process.stdout, null);

rl.setPrompt('➜');

rl.on('line', function(cmd) {
  if (cmd === 'quit') {
    rl.question('Are you sure? (y/n) ', function(answer) {
      if (answer === 'y') {
        rl.close();
      } else {
        rl.prompt();
      }
    });
  } else {
    console.log('You typed:', cmd);
    console.log('Type "quit" to exit');
  }

  rl.prompt();
});

rl.on('close', function() {
  console.log('Bye');
  process.exit();
});

rl.prompt();
{% endhighlight %}

Here I've used the `readline` module to create an interface, then listen for `line` events which denote a line of text was typed.  The `question` method will display a prompt and invoke the callback with the response.

By using simple string matching, a completely customised command-line interface can be created.  The `readline` module also has some useful built-in features like command history.

###ncurses

The [ncurses](https://github.com/mscdex/node-ncurses) module by Brian White provides bindings to the ncurses library.  This is a popular method for creating text-based user interfaces.  If your application needs things like windows, menus, and more elaborate widgets such as a calendar, then ncurses is a good solution.

These bindings require a level of familiarisation with the original ncurses API.  One freely available resource for learning ncurses is the [NCURSES Programming HOWTO](http://tldp.org/HOWTO/NCURSES-Programming-HOWTO/) -- combined with the [ncurses-node README](https://github.com/mscdex/node-ncurses) it's possible to work out how to apply these techniques to a Node project.

Brian has also written some reusable widgets that come with the node-ncurses module:

{% highlight javascript %}
var ncurses = require('ncurses')
  , widgets = require('ncurses/lib/widgets')
  , win = new ncurses.Window();

widgets.InputBox('Enter your name:', {
    pos: 'center',
    style: {
      colors: {
        bg: 'blue',
        input: {
          fg: 'red',
          bg: 'black'
        }
      }
    }
  }, function(input) {
    if (!input) {
      input = 'nothing';
    }
    win.centertext(0, 'You entered: ' + input);
    win.refresh();
    setTimeout(function() { win.close(); }, 1000);
});
{% endhighlight %}

I've adapted this example from Brian's code -- it should work if you install the relevant module with `npm install ncurses`.  The result looks like this:

![node-ncurses screenshot](/images/posts/node-ncurses.png)

###Alternatives

There are simpler alternatives to ncurses.  Libraries we've covered before, like [Commander.js](http://visionmedia.github.com/commander.js/) have prompts and dialogs.  Then there's [ansi.js](https://github.com/TooTallNate/ansi.js) (License: _MIT_, npm: _ansi_) which makes working with 256 ANSI colours relatively painless, particularly for web developers who are familiar with hex colours:

{% highlight javascript %}
cursor.hex('#660000').bold().underline();
{% endhighlight %}

[TermUI](https://github.com/jocafa/node-term-ui) (npm: _node-term-ui_) by Josh Faul has a chainable event-based API that can move the cursor around and output text with various colours:

{% highlight javascript %}
TermUI
  .pos(10,20)
  .fg(TermUI.C.w)
  .bg(TermUI.C.w)
  .out('Hello, world!');
{% endhighlight %}

There's even a tab completion module: [complete](https://github.com/hij1nx/complete) (License: _MIT_, npm: _complete_) by hij1nx.  It's actually designed to work with bash completion, and will write to `.bashrc` or `.bash_profile`:

{% highlight sh %}
# Node Completion - Auto-generated, do not touch.
shopt -s progcomp
for f in $(command ls ~/.node-completion); do
  f="$HOME/.node-completion/$f"
  test -f "$f" && . "$f"
done
{% endhighlight %}

There are dozens more interesting command-line UI libraries out there.  If you've written something that you'd like us to feature in a Node Roundup post, then please [get in touch](/contact.html)!
