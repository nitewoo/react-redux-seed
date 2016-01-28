var path = require('path')
var webpack = require('webpack')

var relativeAssetsPath = '../static/assets'
var assetsPath = path.join(__dirname, relativeAssetsPath)

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./isomorphic-tools.config'))


var host = 'localhost'
var port = parseInt(process.env.PORT) + 1 || 7071
var basicConfig = require('./basic.config')

var config = Object.assign({}, basicConfig, {
  devtool: 'eval',
  output: {
    path: assetsPath,
    filename: 'bundle.js', //this is the default name, so you can skip it
    //at this directory our bundle file will be available
    publicPath: 'http://' + host + ':' + port + '/assets/'
  },
  devServer: {
    host: host,
    port: port,
    contentBase: "./static",
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __SERVER_ADDRESS__: JSON.stringify('http://' + host + ':' + port),
      __PRODUCTION__: false,
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    }),
    new webpack.IgnorePlugin(/webpack-stats\.json$/),
    webpackIsomorphicToolsPlugin.development()
  ]
})

config.entry.main.push('eventsource-polyfill')
config.entry.main.push('webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr')

module.exports = config
