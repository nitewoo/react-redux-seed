var path = require('path')
var webpack = require('webpack')

var relativeAssetsPath = '../static/assets'
var assetsPath = path.join(__dirname, relativeAssetsPath)

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./isomorphic-tools.config'))


var serverConfig = require('../server/config')

var host = serverConfig.host
var port = serverConfig.webpackDevServerPort

var basicConfig = require('./basic.config')
var config = Object.assign({}, basicConfig, {
  devtool: 'eval',
  devServer: {
    host: host,
    port: port,
    contentBase: "./static",
    historyApiFallback: true
  }
})

// at this directory our bundle file will be available
config.output.publicPath = 'http://' + host + ':' + port + '/assets/'

config.entry.main = config.entry.main.concat([
  'eventsource-polyfill',
  'webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr'
])

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    __SERVER_ADDRESS__: JSON.stringify('http://' + host + ':' + serverConfig.devPort),
    __PRODUCTION__: false,
    __DEVELOPMENT__: true,
    __DEVTOOLS__: true
  }),
  new webpack.IgnorePlugin(/webpack-stats\.json$/),
  webpackIsomorphicToolsPlugin.development()
])

module.exports = config
