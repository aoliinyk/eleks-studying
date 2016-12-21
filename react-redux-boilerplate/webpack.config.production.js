const webpack = require('webpack');
const path = require('path');
const EncodingPlugin = require('webpack-encoding-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: path.resolve(__dirname, 'src/index'),
  target: 'web',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new EncodingPlugin('utf8'),
    new webpack.DefinePlugin(GLOBALS),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs'
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel', 'eslint']
      },
      {
        test: /(\.css)$/,
        loader: ExtractTextPlugin.extract('css?sourceMap')
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url?prefix=font/&limit=5000'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  }
};
