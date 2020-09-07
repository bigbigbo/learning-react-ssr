const paths = require('./paths');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    index: paths.serverEntry,
  },
  output: {
    path: paths.serverBuild,
    filename: 'server.bundle.js',
    publicPath: paths.publicPath,
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
