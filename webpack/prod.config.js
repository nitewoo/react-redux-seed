var path = require('path')
var webpack = require('webpack')

var relativeAssetsPath = '../static/assets'
var assetsPath = path.join(__dirname, relativeAssetsPath)

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./isomorphic-tools.config'))

var serverConfig = require('../server/config')

var host = serverConfig.host
var port = serverConfig.prodPort

var basicConfig = require('./basic.config')
var config = Object.assign({}, basicConfig)

// at this directory our bundle file will be available
config.output.publicPath = 'http://' + host + ':' + port + '/assets/'

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    __SERVER_ADDRESS__: JSON.stringify('http://' + host + ':' + port),
    __PRODUCTION__: true,
    __DEVELOPMENT__: false,
    __DEVTOOLS__: false
  }),
  // ignore dev config
  new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

  // optimizations
  // new webpack.optimize.DedupePlugin(),
  // new webpack.optimize.OccurenceOrderPlugin(),
  // new webpack.optimize.UglifyJsPlugin({
  //   compress: {
  //       warnings: false
  //     }
  // }),

  webpackIsomorphicToolsPlugin
])

module.exports = config
