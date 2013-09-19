'use strict';
var marked = require('marked');
var peacock = require('peacock');

marked.setOptions({ 
    gfm       :  true
  , pedantic  :  false
  , sanitize  :  true
  , highlight :  function (code, lang) {
      if (!lang) return code;
      try {
        return peacock.highlight(code);
      } catch (e) {
        return code;
      }
    }
})

var go = module.exports = function (md) {
  return marked(md);
};
