'use strict';

var renderMd =  require('./render-md');
var fs = require('fs');
var initEditor = require('./init-brace');


var go = module.exports = function () {
  var md = fs.readFileSync(__dirname + '/README.md').toString();
  var rendered = document.getElementsByClassName('rendered')[0];

  var editor = initEditor(md);

  function renderEdits () {
    var md = editor.getValue();
    var html = renderMd(md);
    rendered.innerHTML = html;
  }

  renderEdits();

  editor.on('change', renderEdits);
};
