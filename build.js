'use strict';
var browserify = require('browserify');

var go = module.exports = function () {
  return browserify({ debug: true })
    .require(require.resolve('./main'), { entry: true })
    .transform('brfs')
    .bundle();
};

// Test
if (!module.parent) {
  go().pipe(process.stdout);
}
