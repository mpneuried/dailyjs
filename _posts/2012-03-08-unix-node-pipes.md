---
layout: post
title: "Unix and Node: Pipes and Streams"
author: Alex Young
categories: 
- node
- tutorials
- unix
---

An anonymous pipe can be used to connect the standard streams of multiple processes.

{% highlight sh %}
tput setaf 48 ; whoami | figlet | tr _ … | tr \\ \` | tr \| ¡ | tr / √
{% endhighlight %}

This example prints out the result of `whoami` using [FIGlet](http://www.figlet.org/), and also uses `tput` to colourise the output.

![Unix pipe example](/images/posts/unixpipe.png)

Pipes are typically denoted with the vertical bar character.  Both the `|` notation and concept of pipes were created by Doug McIlroy, who was quoted in [part one of this series](http://dailyjs.com/2012/02/09/unix-node/) for his "Write programs that do one thing and do it well" quote.

### Streams

Node provides an abstract representation of a stream through the [Stream class](http://nodejs.org/docs/latest/api/all.html#all_stream).  It's actually widely used within Node, and represents the Unix text streams we've been discussing very neatly.  In fact, it even includes a `pipe` method:

{% highlight javascript %}
stream.pipe(destination, [options])
{% endhighlight %}

That means we can actually connect the standard input and output like this:

{% highlight javascript %}
#!/usr/bin/env node

process.stdin.resume();
process.stdin.pipe(process.stdout);
{% endhighlight %}

The `resume` method is called here because standard input is paused by default.

{% highlight text %}
➜ chmod 700 cat.js 
➜ echo 'Unix has a funny idea about what a cat is' | ./cat.js
Unix has a funny idea about what a cat is
{% endhighlight %}

The nice thing about streams in Node is they work like everything else: they're asynchronous and event-based:

{% highlight javascript %}
stream.on('data', function(data) {
  console.log('Received data:', data);
});
{% endhighlight %}

Whenever a stream is passed to a readable stream's pipe method, the `pipe` event will be emitted.

### Example

By combining what we've learned in the last few _Unix and Node_ articles, we can start to build command-line tools that resemble real Unix tools.  The following example uses [Commander.js](https://github.com/visionmedia/commander.js), which can be installed with `npm install commander`.

{% highlight javascript %}
#!/usr/bin/env node

var program = require('commander')
  , c = 90;

program
  .version('1.0.0')
  .option('-r, --red', 'Red text')
  .option('-g, --green', 'Green text')
  .option('-b, --blue', 'Blue text')
  .parse(process.argv);

function colour(c, str) {
  return '\033[' + c + 'm' + str + '\033[0m';
}

if (program.red) {
  c = 91;
} else if (program.green) {
  c = 92;
} else if (program.blue) {
  c = 94;
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
  process.stdout.write(colour(c, data));
});
{% endhighlight %}

Running `echo "Some text" | ./colour.js --red` will display red text.  The expected encoding is set with `process.stdin.setEncoding('utf8')`, else the `data` argument passed to the `data` event on the `stdin` stream would be a plain buffer.  The output is written to `stdout` using `stream.write(string, [encoding], [fd])`.

### Conclusion

By having such a simple asynchronous API for streams, building Node programs that can work well with pipelines in shell scripts is straightforward.  Other methods like `stream.pipe` are also useful.  Read [Node's Stream documentation](http://nodejs.org/docs/latest/api/all.html#all_stream) for more details and examples.
