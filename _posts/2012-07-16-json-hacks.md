---
layout: post
title: "JSON Extensions"
author: Alex Young
categories: 
- json
- essays
---

JSON is typically used as a data interchange format.  We use it for communicating with services over HTTP, and for configuration files.  People are starting to take it beyond [Douglas Crockford's original definition](http://tools.ietf.org/html/rfc4627) to add more features.  Let's take a look at some of these extensions to JSON.

###JSON Schema

[JSON Schema](http://json-schema.org/) is a JSON-based format for defining the structure of JSON data.  Although [the JSON Schema specification](http://tools.ietf.org/html/draft-zyp-json-schema-03) has expired, it crops up now and then in the open source community in the form of data validation modules.  The idea of writing a portable JSON schema once, and then a module or framework automatically providing validation in a user interface is definitely attractive, although such projects aren't wildly popular so far.

###JSON5

[JSON5](http://json5.org/) (GitHub: [aseemk / json5](https://github.com/aseemk/json5), License: _MIT_, npm: [json5](http://npmjs.org/package/json5)) by Aseem Kishore brings ECMAScript 5-inspired enhancements to JSON.  The main changes are as follows:

* Keys don't need to be quoted and can be any valid identifier
* Strings can be single-quoted
* Multi-line strings are supported
* Objects and arrays can have trailing commas
* Inline and block comments are allowed
* Numbers can be hex or start with a decimal point

The author's implementation is available for Node, but it'll run in most browsers (including IE6), and it has a test suite as well.

###eson

Another tweaked version of JSON is TJ Holowaychuk's [eson](https://github.com/visionmedia/eson).  The main change here is TJ's parser allows functions to extend any JSON file's behaviour.  It's a little bit like middleware for JSON: a function can be run over each key and value, allowing data values to be transformed.

The example in the documentation is supporting `{ "interval": "15 minutes" }` instead of writing the millisecond value.

###Conclusion

Looking at these deviations in JSON illustrates what authors are trying to get out of the JSON standard.  Some want to relax the schema rules, others want more extensible parsers.  What surprised me most about JSON in the last few years is the failure of JSON Schema to catch on.  Perhaps it's lacking a killer app?
