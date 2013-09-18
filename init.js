'use strict';

var fs = require('fs');

var go = module.exports = function () {
  var md = fs.readFileSync(__dirname + '/README.md');
  console.log(md);
};
