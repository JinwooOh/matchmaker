const webpack = require('webpack');
const path = require('path');
const config = {
  //entry
  entry: path.resolve('src/index.js'),
  //where output?
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  //load multiple loaders
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react", "stage-2"]
        }
      },{
        test: /\.css$/,
        loader: 'style-loader'
      },{
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, ""),
    compress: true,
    port: 9000
  }


};

module.exports = config;
