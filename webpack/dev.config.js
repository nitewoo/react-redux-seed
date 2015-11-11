var path = require('path');
var webpack = require('webpack');

var relativeAssetsPath = '../static/assets';
var assetsPath = path.join(__dirname, relativeAssetsPath);

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./isomorphic-tools.config'));


var host = 'localhost';
var port = parseInt(process.env.PORT) + 1 || 7071;

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: {
    main: [
      'webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr',
      'bootstrap-sass!./src/theme/bootstrap.config.js',
      './src/index.js'
    ]
  },
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
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: [
        'react-hot',
        'babel-loader'
      ]
      // loader: "babel-loader"
    }, {
      test: /\.css$/,
      loaders: [
        "style/useable",
        "css?modules&importLoaders=1&sourceMap&localIdentName=[local]___[hash:base64:5]",
        "autoprefixer?browsers=last 2 version"
      ]
    }, {
      test: /\.scss$/,
      loaders: [
        "style/useable",
        "css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]",
        "autoprefixer?browsers=last 2 version",
        "sass?outputStyle=expanded&sourceMap"
      ]
    }, {
      test: webpackIsomorphicToolsPlugin.regular_expression('images'),
      loader: 'url-loader?limit=10240'
    }, {
      test: /\.json$/, loader: 'json-loader'
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"
    }]
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    webpackIsomorphicToolsPlugin
  ],
  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    // 'react': 'React'
  }
}