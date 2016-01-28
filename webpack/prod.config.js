var path = require('path')
var webpack = require('webpack')

var relativeAssetsPath = '../static/assets'
var assetsPath = path.join(__dirname, relativeAssetsPath)

var CleanPlugin = require('clean-webpack-plugin')
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./isomorphic-tools.config'))

var host = 'localhost'
var port = 6060
var basicConfig = require('./basic.config')

var config = Object.assign({}, basicConfig, {
  output: {
    path: assetsPath,
    filename: 'bundle.js', //this is the default name, so you can skip it
    // at this directory our bundle file will be available
    publicPath: 'http://' + host + ':' + port + '/assets/'
  },
  plugins: [
    new CleanPlugin([relativeAssetsPath]),

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
  ]
})

module.exports = config
