---
layout: post
title: "Unix and Node: Processes"
author: Alex Young
categories: 
- node
- tutorials
- unix
---

Last week in [Unix and Node: Signals](http://dailyjs.com/2012/03/15/unix-node-signals/) I discussed how to interact with Node processes using POSIX signals.  We often also need to run multiple processes, but how exactly can we launch processes from Node, and how can we manage multiple processes programatically?

This depends on the architecture of your application.  If you've got a situation where _consumers_ take work from a queue -- perhaps from a messaging system like [RabbitMQ](http://www.rabbitmq.com/) or from a centralised database -- then multiple processes can be launched from the shell.  The standard Unix rules apply:

* Consider writing a PID file using [process.pid](http://nodejs.org/docs/latest/api/all.html#all_process_pid)
* If the processes are long-running, then listen for the appropriate signals
* Exit with a non-zero code using [process.exit](http://nodejs.org/docs/latest/api/all.html#all_process_exit_code) when an unrecoverable error occurs
* Use the right output streams -- log errors with `console.error` and messages with `console.log`, or consider using a library like [winston](https://github.com/flatiron/winston) to handle logging

If your Node programs adhere to these rules then it's fairly easy to manipulate them at the system level using shell scripts or makefiles.

### Spawning Processes

Running a child process using `child_process.spawn` has a familiar event-based API:

{% highlight javascript %}
var spawn = require('child_process').spawn
  , ls = spawn('ls', ['-latr']);

ls.stdout.on('data', function(data) {
  console.log(data.toString());
});

ls.on('exit', function(code) {
  console.log('Child process exited with code:', code);
});
{% endhighlight %}

The object returned by `spawn` has the standard streams, which also have event-based APIs.  It also makes grabbing the exit code pretty easy.

An alternative is `child_process.exec` which has a lighter syntax:

{% highlight javascript %}
var exec = require('child_process').exec;

exec('ls -latr', function(err, stdout, stderr) {
  console.log(stdout);
});
{% endhighlight %}

The interesting thing about `exec` is it takes a second argument that includes useful options like `timeout` and `env`.  If you're running something resource intensive but only want it to run for a few seconds, then `exec('command', { timeout: 1000 })` is extremely convenient.

There's another related method which is `execFile` -- this one doesn't run a subshell, so you'll want to use the full path to the command.

Node processes can be spawned using `child_process.fork` which allows messages to be passed to the child process.  There's a full example in the [Node documentation on fork](http://nodejs.org/docs/latest/api/all.html#all_child_process_fork_modulepath_args_options).  If you need to pass messages between processes then this is an easy way to do it without involving something more complex.

### Cluster

Node's [Cluster API](http://nodejs.org/docs/latest/api/all.html#all_cluster) offers a programmatic solution to process management.  This is particularly attractive when you need to take advantage of multiple cores or CPUs but don't want to use a full-blown messaging system.

Workers can be spawned using `cluster.fork`, and when they die a `death` event is fired.  This example is adapted from Node's documentation:

{% highlight javascript %}
var cluster = require('cluster')
  , http = require('http')
  , numCPUs = require('os').cpus().length
  , i
  , worker
  , numReqs = 0;

if (cluster.isMaster) {
  console.log('Master PID:', process.pid);

  // Start a set of workers based on the number of CPUs
  for (i = 0; i < numCPUs; i++) {
    var worker = cluster.fork();
    worker.on('message', function(msg) {
      if (msg.cmd && msg.cmd == 'notifyRequest') {
        numReqs++;
        console.log('Total requests:', numReqs);
      }
    });
  }

  // Log when the worker dies
  cluster.on('death', function(worker) {
    console.log('Worker died, with PID:', worker.pid);
  });
} else {
  console.log('Worker PID:', process.pid);

  http.Server(function(req, res) {
    res.writeHead(200);
    res.end('Hello from ' + process.env.NODE_WORKER_ID + '\n');

    process.send({ cmd: 'notifyRequest' });
  }).listen(8000);

  console.log('Listening on port 8000');
}
{% endhighlight %}

First, `cluster.isMaster` is used to determine if the current process is the master or a worker.  Next, `cluster.fork` is used to spawn a new worker -- this can only be called from the master process.  A listener is set up on the worker for a `message` event -- later on `process.send` is used to notify the master process of an event.  This is a useful form of message passing that allows JavaScript objects to be sent as messages.

If the process isn't the master then a HTTP server is started; each worker is now effectively sharing HTTP requests across CPU cores.  The interesting thing about `cluster.fork` is it allows TCP servers to be shared across workers, and notice that the message passing API used here is available with `child_process.fork` as well.

Running this demonstrates that the PID files work as expected:

{% highlight text %}
➜ node cluster.js
Master PID: 31839
Worker PID: 31840
Listening on port 8000
Worker PID: 31842
Listening on port 8000
Worker PID: 31844
Listening on port 8000
Worker PID: 31843
Listening on port 8000
Worker PID: 31841
Listening on port 8000
Worker PID: 31845
Listening on port 8000
Worker PID: 31846
Listening on port 8000
Worker PID: 31847
Listening on port 8000
{% endhighlight %}

Killing a worker behaves as expected, too:

{% highlight text %}
➜ kill 31845
Worker died, with PID: 31845
{% endhighlight %}

The servers will still be running, and Node won't try to access the dead worker no matter how hard you try.

### Killing Clusters

This all works fairly well and may reduce the amount of work it takes to run groups of Node processes, but [until recently](https://github.com/joyent/node/pull/2908) Node didn't automatically kill workers when the master is killed.  In the previous example, `kill 31839` (which was the master's PID) will leave the children hanging around.

There are many ways to deal with this -- Linux comes with `setsid` which can be used to run programs in sessions.  The master process would then be the session leader, and the signals would be sent to each worker.

It can also be handled manually by keeping an array of workers around:

{% highlight javascript %}
process.on('SIGTERM', function() {
  console.log('Master killed');

  workers.forEach(function(w) {
    w.kill();
  });

  process.exit(0);
});
{% endhighlight %}

Issuing `SIGINT` by pressing `ctrl c` seems to have the desired effect by default.
