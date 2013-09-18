'use strict';

var http = require('http');
var fs = require('fs');
var path = require('path');
var renderMd = require('./render-md');

function serveError (res, err) {
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end(err.toString());
}

function serveIndex (res) {

  fs.readFile(path.join(__dirname, 'index.html'), 'utf8', function (err, html) {
    if (err) return serveError(err);
    renderNserve(html);    
  });

  function renderNserve(html) {
    fs.readFile(path.join(__dirname, 'README.md'), 'utf8', function (err, md) {
      if (err) return serveError(err);

      var rendered = renderMd(md);

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html.replace(/{MARKDOWN}/, rendered));
    });
  }
}

function serveBundle (res) {
  res.writeHead(200, { 'Content-Type': 'application/javascript' });
  fs.createReadStream(path.join(__dirname, 'bundle.js')).pipe(res); 
}

function serveCss (res) {
  res.writeHead(200, { 'Content-Type': 'text/css' });
  fs.createReadStream(path.join(__dirname, 'css', 'index.css')).pipe(res); 
}

var server = http.createServer(function (req, res) {
  console.log('%s %s', req.method, req.url);
  if (req.url === '/') return serveIndex(res);
  if (req.url === '/bundle.js') return serveBundle(res);
  if (req.url === '/css/index.css') return serveCss(res);
  res.writeHead(404);
  res.end();
});

server.on('listening', function (address) {
  var a = server.address();
  console.log('listening: http://%s:%d', a.address, a.port);  
});
server.listen(3000);
