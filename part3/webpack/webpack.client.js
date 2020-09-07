const path = require('path');
const paths = require('./paths');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    index: paths.clientEntry,
  },
  output: {
    path: path.join(paths.clientBuild, paths.publicPath),
    filename: 'client.bundle.js',
    publicPath: paths.publicPath,
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
