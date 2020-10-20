const path = require('path');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
  },
  plugins: [
    new WebpackBar(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      hash: true,
      minify: {
        removeAttributeQuotes: true
      }
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9090,
    host: '0.0.0.0',
    overlay: true,
    // compress: true,
  }
}