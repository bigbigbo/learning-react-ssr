const paths = require('./paths');
const webpack = require('webpack');
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
  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: 'true',
      __BROWSER__: 'false',
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
};
