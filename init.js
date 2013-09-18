'use strict';

var fs;

try {
  fs = require('fs');
} catch (e) {}

var go = module.exports = function () {
  var md = fs.readFileSync(__dirname + '/README.md');
  console.log(md);
};
