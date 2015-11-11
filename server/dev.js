#!/usr/bin/env node
console.info('dev-server starting...');
require('../server.babel'); // babel registration (runtime transpilation for node)
require('../webpack/webpack-dev-server');
require('./dev.server');
