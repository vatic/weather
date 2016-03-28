'use strict';

var webpack = require("webpack");
var path = require("path");

var ExtractTextPlugin = require("extract-text-webpack-plugin");



module.exports = {

  devtool: "#eval",

  entry: [
    'webpack/hot/dev-server',
    "./app/app.js"],



  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'weather.js'

  },
  module: {
    loaders: [
      {test: /\.json$/, loader: "file?name=[name].[ext]"},
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components|vendor)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "file?name=[name].[ext]" },

      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.gif$/, loader: "url-loader?mimetype=image/png" },

      // Extract css files
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx','.css', 'less']
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("weather.css", {
      allChunks: true
    }),
  ]


};
