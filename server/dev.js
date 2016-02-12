#!/usr/bin/env node
console.info('dev-server starting...');
require('../server.babel'); // babel registration (runtime transpilation for node)
require('../webpack/webpack-dev-server'); // run webpack dev-server
require('./api/server')
require('./dev.server');
