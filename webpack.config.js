var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var isProd = process.env.NODE_ENV === 'production';
var cssLoader = isProd
  ? ExtractTextPlugin.extract("style", "css!resolve-url!sass?sourceMap")
  : 'style!css?sourceMap!resolve-url!sass?sourceMap'


  // 'style-loader', 
  //     'css-loader?sourceMap', 
  //     'resolve-url-loader', 
  //     'sass-loader?sourceMap',

var path = require('path');
var https = require('https');
var ip = require('ip');
var port = 9998;
var url = 'http://'+ip.address()+':' + port + '/';

var config = {
  devtool: '#eval-source-map',
  entry: {
    app: './src/main.js',
  },
  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].[hash:7].js',
    publicPath: isProd ? '' : url,
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    })
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.(css|scss)$/,
      loader: cssLoader
    },
    {
      test: /\.(png|jpg|gif|ico|svg)$/,
      loader: 'url-loader?limit=5120&name=[name].[ext]'
    }]
  },

  devServer: {
    port: port,
    host: ip.address(),
    contentBase: "./src",
    historyApiFallback: true,
    compress: true,
    stats: 'minimal',
  }
};

if (isProd) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('app.[hash:8].css', {allChunks: true})
  );
}

module.exports = config;
