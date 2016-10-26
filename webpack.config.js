const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const projectRoot = path.resolve(__dirname, './');

module.exports = {

  entry: {
    app: './src/app/app.js'
  },

  output: {
    path: path.resolve(projectRoot, './dist'),
    filename: '[name].bundle.js'
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
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {test: /\.(woff|eot|ttf|woff2|svg)$/, loader: 'file?name=assets/fonts/[name].[hash].[ext]'},
      {test: /\.(png|jpg)$/, loader: 'url?limit=10000'}
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(projectRoot, 'src', 'index.html'),
      chunksSortMode: 'dependency'
    }),
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
