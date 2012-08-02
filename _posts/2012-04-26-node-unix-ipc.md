---
layout: post
title: "Unix and Node: IPC"
author: Alex Young
categories: 
- node
- tutorials
- unix
- ipc
---

This tutorial explores the world of inter-process communication (IPC) in Unix, and solutions for Node developers.  IPC actually covers a broad swathe of methods, including POSIX signals and pipes, which we've already covered in this series.  Here I'm only going to cover IPC methods that are based on sockets or Unix domain sockets.

###IPC

IPC enables structured data to be shared between processes.  In terms of architecture, scaling software by creating smaller programs that communicate with each other using simple data formats fits in with the [Unix philosophies mentioned previously in this series](http://dailyjs.com/2012/02/09/unix-node/).  Additionally, it may be desirable to use established Unix-based IPC systems from within Node.

Beyond modularity and performance, IPC can also be used to restrict privileged access to certain resources.  For example, a Node web application could run on a _registered port_ (above 1023) which is generally accessible by ordinary user accounts.  Then another program with additional privileges to access port 80 could proxy requests to it, thereby limiting access and potentially improving security.

It's likely that contemporary developers that don't come from a Unix background will already use IPC and RPC.  Message queues in particular are very popular now -- [ZeroMQ](http://www.zeromq.org/) can be configured to communicate locally using its [IPC transport](http://api.zeromq.org/2-1:zmq-ipc) that's based on Unix domain sockets

###D-Bus

[D-Bus](http://www.freedesktop.org/wiki/Software/dbus) supports many POSIX operating systems.  It's most closely associated with KDE, but can be installed on Mac OS, and there's even a Windows port.  It can use Unix or IP sockets.

D-Bus generally runs as a system-level daemon, and also as a session daemon:

> A GNOME environment normally runs two kinds of buses: a single system bus for miscellaneous system-wide communication, e.g. notifications when a new piece of hardware is hooked up; and a session bus used by a single user's ongoing GNOME session.

The two most popular Node implementations are [node-dbus](https://github.com/Shouqun/node-dbus) (License: _MIT_, npm: [dbus](http://npmjs.org/package/dbus)) by Shouqun Liu, and [node-dbus](https://github.com/Motorola-Mobility/node-dbus) (License: _BSD_, npm: [node-dbus](http://npmjs.org/package/node-dbus)) from Motorola Mobility.  They're both built using C++ extensions that wrap around the [libdbus](http://dbus.freedesktop.org/doc/api/html/index.html) APIs.

It's unlikely that D-Bus is (or will be) a popular solution for IPC with Node developers, but it does allow us to integrate more tightly with desktop environments.  For example, if I use a GNOME music player that exposes services through D-Bus, I could write Node scripts that monitor what I'm listening to and post the data to Last.fm.  Linux Journal has a general article on this topic that serves as a basic introduction: [Control Your Linux Desktop with D-Bus](http://www.linuxjournal.com/article/10455?page=0,0).

###Homegrown IPC and RPC

There are dozens of modules that provide IPC and RPC solutions that are aimed at Node developers without integrating with existing high-level Unix daemons.

[DNode](https://github.com/substack/dnode) by James Halliday is one such example that works with Unix domain sockets, TCP streams, or WebSocket.  It's an RPC implementation that uses a newline-terminated JSON protocol which is documented in the [dnode-protocol module](https://github.com/substack/dnode-protocol).

There's also [thintalk](https://github.com/AndreasMadsen/thintalk) (License: _MIT_, npm: [thintalk](http://npmjs.org/package/thintalk)) by Andreas Madsen that implements a lightweight RPC layer.  It's aimed at pure Node environments, unlike DNode which can be called from different programming languages and browsers.

[Easy IPC](https://github.com/oleics/node-easy-ipc) (License: _MIT_, npm: [easy-ipc](http://npmjs.org/package/easy-ipc)) by Oliver Leics is an event-based IPC implementation.  It supports newline-terminated JSON streams, but can work with plain text as well.

###Message Queuing

The [ØMQ](http://www.zeromq.org/) messaging library is lightweight, high-performance, and asynchronous.  The [zmq](https://github.com/JustinTulloss/zeromq.node) (License: _MIT_, npm: [zmq](http://npmjs.org/package/zmq)) module by Justin Tulloss is a popular solution, with an idiomatic Node API.

ØMQ runs on Linux, Windows, and Mac OS, and specifically targets fast performance.  In contemporary discussions on IPC, it's often cited as a suitable alternative to legacy message brokers.

###Conclusion

IPC is an incredibly broad term that covers using files for communication, signals, sockets, message queues, pipes, shared memory, and pretty much everything else.  I'm still searching for a quantum-entanglement IPC solution for Unix.

It's therefore difficult to keep this discussion focused on Unix, particularly as modern systems like ØMQ will run just about anywhere.  However, I hope that by mentioning D-Bus, Node hackers who run desktop systems like KDE or GNOME might be inspired to rewire their desktops in all kinds of creative ways.
