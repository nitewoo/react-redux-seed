if (__PRODUCTION__) {
  module.exports = require('./constant.prod');
} else {
  module.exports = require('./constant.dev');
}
