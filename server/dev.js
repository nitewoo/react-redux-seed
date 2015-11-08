#!/usr/bin/env node
console.info('dev-server starting...');
require('../server.babel'); // babel registration (runtime transpilation for node)
require('./dev.server');
