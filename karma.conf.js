var webpack = require('webpack');
var webpackBasicConfig = require('./webpack/basic.config')
var serverConfig = require('./server/config')

var karmaConfig = {

  browsers: ['PhantomJS'],
  // browsers: ['Chrome'],

  singleRun: !!process.env.CONTINUOUS_INTEGRATION,

  frameworks: [ 'mocha' ],

  files: [
    './node_modules/phantomjs-polyfill/bind-polyfill.js', // a polyfill for function.prototype.bind which is missing from PhantomJS.
    'tests-index.js'
  ],

  preprocessors: {
    // 'tests-index.js': [ 'webpack', 'sourcemap', 'coverage' ]
    'tests-index.js': [ 'webpack', 'coverage' ]
  },

  reporters: [ 'mocha' , 'coverage' ],

  plugins: [
    require("karma-webpack"),
    require("karma-coverage"),
    require("karma-mocha"),
    require("karma-mocha-reporter"),
    require("karma-phantomjs-launcher"),
    // require("karma-chrome-launcher"),
    require("karma-sourcemap-loader")
  ],

  // optionally, configure the reporter
  coverageReporter: {
    type: 'html',
    dir: 'report/coverage/'
  },

  phantomjsLauncher: {
    // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
    exitOnResourceError: true
  },

  webpack: {
    devtool: 'inline-source-map',
    module: webpackBasicConfig.module,
    resolve: webpackBasicConfig.resolve,
    plugins: [
      new webpack.IgnorePlugin(/\.json$/),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        __SERVER_ADDRESS__: JSON.stringify('http://' + serverConfig.host + ':' + serverConfig.devPort),
        __TESTING__: true,
        __DEVELOPMENT__: true,
        __PRODUCTION__: false,
        __DEVTOOLS__: false  // disable redux-devtools
      })
    ]
  },

  webpackServer: {
    noInfo: true
  }

}

module.exports = function (config) {
  config.set(karmaConfig)
}
