'use strict';

var ace = require('brace');
require('brace/mode/markdown');
require('brace/theme/monokai');

var go = module.exports = function (md) {
  var editor = ace.edit('editor');
  editor.getSession().setMode('ace/mode/markdown');
  editor.setTheme('ace/theme/monokai');
  editor.setValue(md);
  editor.clearSelection();
  return editor;
};
