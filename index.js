'use strict';

var http = require('http');
var fs = require('fs');
var path = require('path');

function serveIndex (res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res); 
}

function serveBundle (res) {
  res.writeHead(200, { 'Content-Type': 'application/javascript' });
  fs.createReadStream(path.join(__dirname, 'bundle.js')).pipe(res); 
}

var server = http.createServer(function (req, res) {
  console.log('%s %s', req.method, req.url);
  if (req.url === '/') return serveIndex(res);
  if (req.url === '/bundle.js') return serveBundle(res);
  res.writeHead(404);
  res.end();
});

server.on('listening', function (address) {
  var a = server.address();
  console.log('listening: http://%s:%d', a.address, a.port);  
});
server.listen(3000);
