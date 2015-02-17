'use strict';

var http = require('http');
var service = require('./lib/servus');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(service));
}).listen(9001);
