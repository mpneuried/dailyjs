---
layout: post
title: "Using SilkJS ORM and ExtJS Grids Together"
author: "Mike Schwartz"
categories:
- extjs
- sencha
- v8
- tutorials
---

<div class="box">
Mike Schwartz is a regular writer for <a href="http://www.jsmag.com/">JSMag</a> and the creator of SilkJS.
</div>

[SilkJS](http://silkjs.org) is a very fast JavaScript based HTTP server that was designed to work with ExtJS. All code for the server is written in JavaScript, including almost the entirety of the server itself. You can check out the server's GitHub repository at [mschwartz / SilkJS](http://github.com/mschwartz/SilkJS) and the repository for this demo at [mschwartz / SilkJS-ext](http://github.com/mschwartz/SilkJS-ext).

The SilkJS `Install.js` script creates a `/usr/share/SilkJS` directory with the HTTP server, library files, and default `documentRoot`. It also installs the main HTTP server in `/usr/local/bin/httpd-silk.js`.

Let's examine the SilkJS-ext repository first.  This is `config.js`:

{% highlight javascript %}
Config.mysql = {
  host: 'localhost',
  user: 'mschwartz',
  passwd: '',
  db: 'ext3'
};
Config.documentRoot = 'docroot';
{% endhighlight %}

This file overrides the default `Config` object, specifying MySQL connection information, and a `documentRoot` for this example.

The actual Server-Side JavaScript code is implemented in under 60 lines of code, in `Server.js`:

{% highlight javascript %}
SQL = new MySQL();
SQL.connect();

Schema.add({
  name: 'Users',
  fields: [
    { name: 'userId', type: 'int', autoIncrement: true, defaultValue: 0 },
    { name: 'username', type: 'varchar', size: 64, header: 'User Name', width: 128, autoExpand: true, editable: true },
    { name: 'password', type: 'varchar', size: 64, header: 'Password', serverOnly: true, editable: true },
    { name: 'email', type: 'varchar', size: 128, header: 'E-Mail Address', width: 128, editable: true },
    { name: 'created', type: 'int', defaultValue: function() { return parseInt(new Date().getTime() / 1000, 10); }, header: 'Created', width: 150, format: 'DateTime', editable: false }
  ],
  primaryKey: 'userId',
  indexes: [
    'username',
    'email'
  ]
});


function main_action() {
  res.write([
    '<!doctype html>',
    '<html>',
    ' <head>',
    '   <title>Schema / ExtJS Demo</title>',
    '   <link rel="stylesheet" type="text/css" href="/ext-3.4.0/resources/css/ext-all.css" />',
    ' </head>',
    ' <body>',
    ' <script type="text/javascript" src="/ext-3.4.0/adapter/ext/ext-base.js"></script>',
    ' <script type="text/javascript" src="/ext-3.4.0/ext-all-debug.js"></script>',
    ' <script type="text/javascript" src="/client/Ext.ux.SchemaGrid.js"></script>',
    ' <script type="text/javascript" src="/client/ViewPort.js"></script>',
    ' <script type="text/javascript">',
    '   Schemas = ' + Json.encode(Schema.getSchemaExtJs()) + ';',
    ' </script>',
    ' </body>',
    '</html>'
  ].join('\n'));
  res.stop();
}
function Server_action() {
  switch (req.data.method) {
    case 'listUsers':
      Json.success(Schema.list('Users', {}, function(o) {
        o = Schema.clean(o);
      }));
    case 'editUser':
      var example = Json.decode(req.data.example);
      example.userId = example.userId || 0;
      Schema.putOne('Users', example);
      Json.success();
    case 'deleteUsers':
      var examples = Json.decode(req.data.examples);
      forEach(examples, function(example) {
        Schema.remove('Users',example);
      });
      Json.success();
  }
}
{% endhighlight %}

The first thing it does is create a global MySQL object, named `SQL`. This `SQL` object is used by the ORM to generate queries. With the ORM, you rarely have to generate any queries yourself, and even then, the ORM does most of the work.

The `Schema.add()` method is called to install a "Schema" in the ORM. The `Schema` is defined as a JavaScript object. The definition above shows only a part of what's possible. The `name` member is the name of the table in the database. The `fields` array is an array of field definitions. The `primaryKey` member is the primary key of the table, and the `indexes` array is an array of additional indexes to be created for the table.

For the `fields` array, each item is an object with a few required members and some optional ones. The required ones are `name`, and `type`. If type is `'varchar'`, then size is also required. Only one of the fields may be `autoIncrement: true`, and is typically the `primaryKey` of the table as well. This `autoIncrement` field is also typically the ID field of ExtJS DataStores on the client-side. 

The `defaultValue` member may be an expression or a function. The `defaultValue` member is used to set a default value for the field when creating a new entry in the database. As you can see in the example above, we have a 'created' field of type `'int'` (a Unix-style timestamp) that has a `defaultValue` of a function that creates a Unix timestamp for the current time.

One additional members may be specified. Note the `password` field is marked `serverOnly: true` -- this is to specify that the value of this field should not be sent to the client (we'll see this later). 

Currently, *every other member of a field definition is ignored by the ORM*, and can be used for your application for whatever purposes you like. In this case, I specify information that will help us generate ExtJS Grid columns, and form fields for editing records. For example, `username` is `autoExpand: true`, and fields with `header: 'some string'` will show in the grids.

The SilkJS HTTP server will call `main_action()` (if it is defined) if `/` is the specified URL. Here we simply write a typical HTML document to the browser. The output HTML looks like this:

{% highlight html %}
<!doctype html>
<html>
  <head>
    <title>Schema / ExtJS Demo</title>
    <link rel="stylesheet" type="text/css" href="/ext-3.4.0/resources/css/ext-all.css" />
  </head>
  <body>
    <script type="text/javascript" src="/ext-3.4.0/adapter/ext/ext-base.js"></script>
    <script type="text/javascript" src="/ext-3.4.0/ext-all-debug.js"></script>
    <script type="text/javascript" src="/client/Ext.ux.SchemaGrid.js"></script>
    <script type="text/javascript" src="/client/ViewPort.js"></script>
    <script type="text/javascript">
    Schemas = {"Users":{"name":"Users","fields":[{"name":"userId","type":"int","autoIncrement":true,"defaultValue":0},{"name":"username","size":64,"header":"User Name","width":128,"autoExpand":true,"editable":true},{"name":"password","size":64,"header":"Password","serverOnly":true,"editable":true},{"name":"email","size":128,"header":"E-Mail Address","width":128,"editable":true},{"name":"created","type":"int","header":"Created","width":150,"format":"DateTime","editable":false}],"primaryKey":"userId"}};
    </script>
  </body>
</html>
{% endhighlight %}

All records in SilkJS and ExtJS are effectively just JavaScript objects; each member is a column/value pair from the database. But not every field from the database must exist in these objects! A partial record of this form is what I call an "example." If you call `Schema.find(example)`, it will do a `SELECT` query based upon the fields you do specify in the example. For example, `Schema.find({ username: '%msch%' })` will return an array of records from the database that have a username with 'msch' somewhere in it. `Schema.putOne({ username: 'mschwartz' })` will store a new record in the database with `defaultValues` for the other fields and `username` set to 'mschwartz'. The only way I can explain examples is with examples!

So `editUser` expects the client to build an example and send it over. If editing an existing record, the example will have a `userId`, and the record will be updated by `Schema.putOne()`. If adding a new record, the example will have no `userId` or a `userId` set to 0. 

The `deleteUsers` method expects an array of examples. It calls `Schema.remove(example)` on each element of the array, which deletes the specified rows from the database. `Schema.remove()` can be dangerous if you're not careful about the examples you give it. In this case, the array of examples would be some multiple selections on the grid on the client side.

The client-side ExtJS code is in `docroot/client` and accessed via `/client/whatever` paths in the HTML. In this case, we have just two files, `Viewport.js` and `Ext.ux.SchemaGrid.js`. 

`ViewPort.js` is rather simple:

{% highlight javascript %}
Ext.onReady(function() {
  var items = [];
  for (var i in Schemas) {
    var schema = Schemas[i];
    items.push({
      xtype: 'ext-ux-schemagrid',
      title: i,
      schema: schema,
      method: 'list'+i
    });
  }


  new Ext.Viewport({
    layout: 'fit',
    items: [
      {
        xtype: 'tabpanel',
        activeTab: 0,
        items: items
      }
    ]
  })
});
{% endhighlight %}


It loops through the global Schemas and creates an items array of `Panel` configs, one Schema Grid per panel. The `Ext.ViewPort` is simply an `Ext.TabPanel` with one tab per panel.

The real work on the client is done by [Ext.ux.SchemaGrid.js](https://gist.github.com/1493804).

I don't want to go into great detail about how this custom component works, but I will explain some of the things it does. Basic ExtJS knowledge is assumed here.

`SchemaGrid` extends `Ext.grid.GridPanel` and takes as additional configuration options a `Schema`, and a method. Those are set in the `ViewPort.js` code.

In the `initComponent` method, the URL of the `JsonStore` is set to `/Server` (so `Server_action()` is called on the SilkJS side), and `baseParams` method is set to the `SchemaGrid`'s `config.method`, `listUsers` in our case. The `JsonStore`'s fields are directly used from the Schema's `fields` array (no muss, no fuss).

After setting up the SelectionModel, the code loops through the Schema's fields and generates column definitions for the grid. Those fields that have a header member and are not `serverOnly` will have columns displayed. The renderer for each column is a single method in the SchemaGrid class. The default action for our renderer is to render the created/timestamp in human readable format. An autoExpand column may be specified in the Schema definition, and it is handled automatically by this code.

When the `JsonStore` is loaded or the user clicks on items in the grid, the `updateToolbar()` method is called to conditionally enable and disable the edit and delete buttons. Basically, you can only edit if *one* row is selected, and you can't delete unless at least one row is selected.

The `editRecord()` method dynamically creates a form in a modal dialog window. If a record is passed in, the dialog title says "Edit record" otherwise "Add record." The dialog/form can be used to add new records (click the add button) or edit existing records (select a record, click edit button).

When the OK button is clicked on the dialog, the record `(EXAMPLE)` is updated with the form fields' values and the `Ext.Ajax.request()` made to call editUser to update the database.

The `deleteRecords()` method is called to delete one or more selected records in the grid. It creates the array of examples and calls `Ext.Ajax.request()` to invoke `deleteUsers` on the server side.

So let's see it in action!

### Screenshots

This is the application when it first starts:

![SilkJS/ExtJS application starts](http://dailyjs.com/images/posts/silkjs-extjs-1.png)

Now the _add_ button has been clicked:

![SilkJS/ExtJS button click](http://dailyjs.com/images/posts/silkjs-extjs-2.png)

Here I've added a few records:

![SilkJS/ExtJS records added](http://dailyjs.com/images/posts/silkjs-extjs-3.png)

This is what happens when a record is opened for editing:

![SilkJS/ExtJS editing record](http://dailyjs.com/images/posts/silkjs-extjs-1.png)

### Advantages

So, what's neat about this?

If you edit the Schema definition at the top of `Server.js`, those changes will immediately be reflected in the database when you either restart the server or the browser makes a new request (reload the browser, click the reload button in the paging toolbar).

What do I mean? If you change the size of password field to 128, the ORM will submit the appropriate `ALTER TABLE` statements to MySQL to change the size of the field. If you add a field to the `fields` array, it will be added to the table in the database as well. If you delete a field, it will be deleted in the database. If you rename a field, it will be renamed in the database.

If you add a second Schema definition at the top of `Server.js`, the table will be created next access. If you reload your browser, you will see *two* tabs, one for each table, and the CRUD operations apply to both.

Outside of the Schema definitions, which are compact in their own right, and the `main_action()` method that spews out the HTML for the app, the entire CRUD operations on the server side consist of under 20 lines of code.

The entire demo took me under 1 hour to create, all but 2-3 minutes was spent writing the client-side code.

