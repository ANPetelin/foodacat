const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, 
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },     
      {
        test: /\.(gif|png|jpg|jpeg|svg)?$/,
        loader: 'file-loader',
        options: {
          name: 'dist/assets/img/[name].[ext]',
        },
      }, 
    ]
  },
  //mode: 'production',
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({})
  ]
}; 