const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const projectRoot = path.resolve(__dirname, './');

module.exports = {

  entry: {
    portfolio: './src/app/app.js'
  },

  output: {
    path: path.resolve(projectRoot, './dist'),
    filename: '[name].bundle.[hash].js'
  },

  resolve: {
    extensions: ['.js'],
    modules: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$|\.sass$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {test: /\.(woff|eot|ttf|woff2|svg)$/, loader: 'file?name=assets/fonts/[name].[hash].[ext]'},
      {test: /\.(png|jpg)$/, loader: 'url?limit=10000'}
    ]
  },

  plugins: [
    new ExtractTextPlugin('assets/styles/[name].[hash].css'),
    new HtmlWebpackPlugin({
      template: path.resolve(projectRoot, 'src', 'index.html'),
      chunksSortMode: 'dependency'
    }),
  ],

  devServer: {
    contentBase: 'src',
    stats: {
      assets: true,
      colors: true,
      version: true,
      hash: true,
      timings: true,
      chunks: false,
      chunkModules: false
    },
    proxy: {
      '/api/*': {
        target: 'http://localhost:8080',
        secure: false
      }
    }
  }


};
