#!/usr/bin/env node
require('../server.babel');
var path = require('path');
var rootDir = path.resolve(__dirname, '..');

/**
 * Isomorphic global variables
 */
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';
global.__DEVTOOLS__ = false;

if(__DEVELOPMENT__) {
  if(!require('piping')({
    hook: true,
    ignore: /(\/\.|~$|\.json|\.scss$)/i
  })) {
    return;
  }
}

var WebpackIsomorphicTools = require('webpack-isomorphic-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack/isomorphic-tools'))
  // .development()
  .server(rootDir, function server() {
    require('../src/server');
  });
