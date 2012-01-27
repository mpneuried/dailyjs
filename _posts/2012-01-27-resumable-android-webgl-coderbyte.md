---
layout: post
title: "Resumable.js, Open Source Android WebGL Implementation, Coderbyte"
author: Alex Young
categories: 
- node
- modules
- webgl
- html5
---

### Resumable.js

[Resumable.js](http://www.23developer.com/opensource) (GitHub: [23 / resumable.js](https://github.com/23/resumable.js), License: _MIT_) from 23 is a library for managing concurrent and resumable uploads using the [HTML5 File API](http://dev.w3.org/2006/webapi/FileAPI/):

> The library is designed to introduce fault-tolerance into the upload of large files through HTTP.
> This is done by splitting each files into small chunks; whenever the upload of a chunk fails,
> uploading is retried until the procedure completes. This allows uploads to automatically
> resume uploading after a network connection is lost either locally or to the server.

Since the File API has limited support, the author's example should degrade:

{% highlight javascript %}
var r = new Resumable({
  target: '/api/photo/redeem-upload-token',
  query: { upload_token:'my_token' }
});
// Resumable.js isn't supported, fall back on a different method
if (!r.support) location.href = '/old-uploader';
{% endhighlight %}

Resumable.js's API is event based, and events include `fileAdded`, `fileSuccess`, and `fileError`.

To implement the server-side part of this, the state of uploaded chunks should be managed.  The documentation notes that on unstable networks the same chunk may be uploaded more than once, so appropriate HTTP status codes should be returned as chunks are received.

### Open Source Android WebGL Implementation

Sony Ericsson announced [WebGL support for Android 4.0](http://developer.sonyericsson.com/wp/2012/01/25/webgl-implementation-for-xperia-phones-released-as-open-source/) and published the source on GitHub at [sonyericssondev / WebGL](https://github.com/sonyericssondev/WebGL):

> It is based on ics-mr1, and requires that webkit is built with `USE_ACCELERATED_COMPOSITING`
> and that the browser application is built with `hardwareAccelerated=true`.

This is the code that will be used on forthcoming Xperia phones running Ice Cream Sandwich.

### Coderbyte

[Coderbyte](http://coderbyte.com/) is a service designed to "practice and perfect" programming skills.  At the moment it includes challenges for client-side JavaScript, and there are some guest challenges that you can try out here: [Coderbyte Coding Area](http://coderbyte.com/CodingArea/).

With the right community tools I think Coderbyte could be a little bit like Stack Overflow in reverse.

