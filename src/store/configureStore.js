if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
  console.log('prod')
} else {
  module.exports = require('./configureStore.dev');
}
