var webpack = require('webpack');

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
      {test: /\.scss$/, loader: 'style!css!sass'},
      {test: /\.(woff|eot|ttf|woff2)$/, loader: 'url?limit=10000'},
      {test: /\.(png|jpg|svg)$/, loader: 'url?limit=10000'}
    ]
  },


  // our webpack dev server config
  devServer: {
    contentBase: 'src'
  }


};
