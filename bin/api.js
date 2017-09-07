#!/usr/bin/env node

global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

if(__DEVELOPMENT__) {
  if(!require('piping')({
    hook: true,
    ignore: /(\/\.|~$|\.json$)/i
  })) {
    return;
  }
}

require('../server.babel');
require('../api/api');
