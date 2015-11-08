#!/usr/bin/env node
console.info('prod-server starting...');
require('../server.babel'); // babel registration (runtime transpilation for node)
require('./prod.server');