var express = require('express');

var app = require('./server/server-config.js');

var port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/client/dist'));

app.listen(port);

console.log('listening on port: ' + port);