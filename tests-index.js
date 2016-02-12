// require all modules ending in ".spec.js" from the
// './src' directory and all subdirectories
var context = require.context('./src', true, /\.spec\.js$/)
context.keys().forEach(context)
