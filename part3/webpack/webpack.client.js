const paths = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    index: paths.clientEntry,
  },
  output: {
    path: paths.clientBuild,
    filename: 'client.bundle.js',
    publicPath: paths.publicPath,
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: paths.appHtml,
      inject: true,
    }),
    new ScriptExtHtmlWebpackPlugin({
      inline: /runtime\..*\.js$/,
    }),
    new webpack.DefinePlugin({
      __SERVER__: 'false',
      __BROWSER__: 'true',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
