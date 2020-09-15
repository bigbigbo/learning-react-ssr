const paths = require('./paths');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    main: paths.clientEntry,
  },
  output: {
    path: paths.clientBuild,
    filename: 'client.bundle.js',
    publicPath: paths.publicPath,
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: 'false',
      __CLIENT__: 'true',
    }),
    new ManifestPlugin(),
    new CleanWebpackPlugin(),
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
