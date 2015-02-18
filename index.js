'use strict';

var http       = require('http');
var fs         = require('fs');
var path       = require('path');
var renderMd   = require('./render-md');
var build      = require('./build');
var hyperwatch = require('hyperwatch');

console.error(process.pid);
process.on('SIGTERM', onSIGTERM);

function onSIGTERM() {
  console.error('Caught SIGTERM, exiting');
  server.close();
  process.exit(0);
}

function serveError (res, err) {
  console.error(err);
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end(err.toString());
}

function serveIndex (res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res); 
}

function serveBundle (res) {
  res.writeHead(200, { 'Content-Type': 'application/javascript' });
  build().pipe(res);
}

function serveCss (res) {
  res.writeHead(200, { 'Content-Type': 'text/css' });
  fs.createReadStream(path.join(__dirname, 'css', 'index.css')).pipe(res); 
}

var server = http.createServer(function (req, res) {
  console.error('%s %s', req.method, req.url);
  if (req.url === '/') return serveIndex(res);
  if (req.url === '/bundle.js') return serveBundle(res);
  if (req.url === '/css/index.css') return serveCss(res);

  res.writeHead(404);
  res.end();
});

server.on('listening', function (address) {
  var a = server.address();
  console.error('listening: http://%s:%d', a.address, a.port);  
});
server.listen(3000);

hyperwatch(server);

process.on('SIGTERM', function onsigterm() {
  // support cleanly exiting process in order to have all buffers flushed
  // this is important in situations when --perf-basic-prof is used to write symbol information
  server.close();
  process.exit(0);
})
