# browserify-markdown-editor

[![pic](https://github.com/thlorenz/browserify-markdown-editor/raw/master/assets/small-view.png)](http://thlorenz.github.io/browserify-markdown-editor/)

A demo showing how to build a markdown editor with browserify and marked.

You can play with [the finished product](http://thlorenz.github.io/browserify-markdown-editor/), it may even prove
useful ;)

```js
var a = 3;
console.log('Nice demo!');
```

## Installation

    npm install thlorenz/browserify-markdown-editor

## How to use this demo

I created a tag for every major step numbered in order, so you can checkout each tag and look at the code.

- review all tags and what changed from one to the next in the
  [Changelog](https://github.com/thlorenz/browserify-markdown-editor/blob/master/CHANGELOG.md)

- list all tags: `git tag -n`
- checking out a tag example: `git checkout 003-static-server`

Playing with the code:

- after checking out a new tag do `npm install` in order to update added dependencies
- up til tag `003-static-server`: 
  - `browserify main.js > bundle.js`
  - then `open index.html` in the browser
- then just `node index` and for the later part `npm start` will also work

Note that you can inspect each file separately as long as you enable source maps in your browser, find more information
about browserify sourcemaps [here](http://thlorenz.com/blog/browserify-sourcemaps)

## License

MIT
