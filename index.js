'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT;

app.get('/', function (req, res) {
  res.json(200, data);
});

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server is started at http://:%s:%s', host, port);
});
