var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    'babel-polyfill',
    './src/assets/styles/main.scss',
    './src/app/app.js'
  ],

  output: {
    path: "./dist",
    filename: "bundle.js"
  },

  resolve: {
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      },
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', '!css!sass')},
      {test: /\.(woff|eot|ttf|woff2|svg)$/, loader: 'file?name=assets/fonts/[name].[hash].[ext]'},
      {test: /\.(png|jpg)$/, loader: 'url?limit=10000'}
    ]
  },

  plugins: [
    new ExtractTextPlugin("assets/styles/main.css")
  ],

  // our webpack dev server config
  devServer: {
    contentBase: 'src',
    proxy: {
      '/api/*': {
        target: 'http://localhost:8080',
        secure: false
      }
    }
  }


};
