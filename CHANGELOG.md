### 011-finished-product

- checking in `bundle.js` to allow running this in github pages
- removing hyperwatch
- removing line numbers from rendered code
- minor fixes to make the app work statically

### 010-finished-dev-version

- replacing `textarea` with `brace` editor and adjusting styles

### 009-improved-styling

- editing `index.css` and adding `npm start` script in `package.json`

### 008-updating-on-edit-in-realtime

- updating rendered markdown when user edits textarea (`init.js` **lines: 13-21**)
- removed `require('fs')` workaround that had been there due to a bug in `browser-builtins` -- not important

### 007-rendering-md-client-side

- removing `{MARKDOWN}` placeholder and simply serving `index.html` as-is server side
- adding `init.js` which uses `fs.readFileSync` to load the `README.md` on the client side 
- installing `brfs` and adding the transform to inline `README.md` text
- it then inserts the rendered markdown into the `div.render` and the original text into `textarea.edit`
- **`render-md.js` didn't have to change at all** to move the render step client side!

- installing `hyperwatch` to get serverside message feedback in the browser
- initializing hyperwatch client side (`main.js` **lines: 5**) and server side (`index.js` **lines: 46**)

- removed test code from `render-md.js`

### 006-dynamic-bundle

- installed local `browserify`
- added a `build.js` script that can be run via `node build` to see resulting bundle piped to `stdout`
- interesting to note that `.bundle()` returns a stream
- serving bundle now by calling `build` and piping the resulting stream into the response `index.js` **lines: 33-=35**
- added `textarea` in `index.html` for next step

### 005-styled

- added `css/index.css` which contains styling for the generated markdown
- added a route for it in `index.js` to serve it via `createReadStream` **lines: 37-40**

### 004-rendering-markdown-on-server

- updated readme
- installed `peacock` and `marked` and added `render-md.js` which takes a markdown string and returns rendered html
- inserted a `{MARKDOWN}` placeholder in `index.html`
- updated the server (`index.js`) to render our `README.md` and replace `{MARKDOWN}` with the resulting html before
  serving our `index.html` **lines: 13-30**
- we now launch our app via: `node index.js`

### 003-static-server

- created simple http server (`index.js`) that serves `index.html` and `bundle.js`
- interesting to note that both are piped from `createReadStream` **lines: 7-15**

### 002-main 

Good place to start following the steps

- removed scripts from package.json
- index.html file that references bundle.js that needs to get genereated from main.js via: `browserify main.js >
  bundle.js`

### 001-stat

-cleaned up package.json

### 000-nstarted

- ran nstart script to generate repo
