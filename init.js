'use strict';

var renderMd =  require('./render-md');

var fs;

try {
  fs = require('fs');
} catch (e) {}

var go = module.exports = function () {
  var md = fs.readFileSync(__dirname + '/README.md');
  var editor = document.getElementsByClassName('edit')[0];
  var rendered = document.getElementsByClassName('rendered')[0];

  editor.value = md;

  function renderEdits () {
    var md = editor.value;
    var html = renderMd(md);
    rendered.innerHTML = html;
  }

  renderEdits();

  editor.oninput = renderEdits;
};
