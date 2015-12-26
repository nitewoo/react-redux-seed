var path = require('path');
var webpack = require('webpack');

var relativeAssetsPath = '../static/assets';
var assetsPath = path.join(__dirname, relativeAssetsPath);

var CleanPlugin = require('clean-webpack-plugin');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./isomorphic-tools.config'));

var host = 'localhost';
var port = 6060;

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: {
    main: [
      'bootstrap-sass!./src/theme/bootstrap.config.js',
      './src/index.js'
    ]
  },
  output: {
    path: assetsPath,
    filename: 'bundle.js', //this is the default name, so you can skip it
    // at this directory our bundle file will be available
    publicPath: 'http://' + host + ':' + port + '/assets/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
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
    new CleanPlugin([relativeAssetsPath]),

    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false
    }),
    // ignore dev config
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),
    // set global vars
    new webpack.DefinePlugin({
      'process.env': {
        // Useful to reduce the size of client-side libraries, e.g. react
        NODE_ENV: JSON.stringify('production')
      }
    }),

    // optimizations
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //       warnings: false
    //     }
    // }),

    webpackIsomorphicToolsPlugin
  ],
  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    // 'react': 'React'
  }
}