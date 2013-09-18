'use strict';
var browserify = require('browserify');

var go = module.exports = function () {
  return browserify()
    .require(require.resolve('./main'), { entry: true })
    .bundle({ debug: true });
};

// Test
if (!module.parent) {
  go().pipe(process.stdout);
}
