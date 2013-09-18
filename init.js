'use strict';

var fs;

try {
  fs = require('fs');
} catch (e) {}

var go = module.exports = function () {
  var md = fs.readFileSync(__dirname + '/README.md');
  var editor = document.getElementsByClassName('edit')[0]
  editor.value = md;
};
