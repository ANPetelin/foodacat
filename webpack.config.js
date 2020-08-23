const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
              use: ['css-loader'],
              fallback: 'style-loader'
          })
      },
      {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
              use: ['css-loader', 'sass-loader' ],
              fallback: 'style-loader'
          })
      }
    ],
  },
  //mode: 'production',
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('./css/style.css')
]
};