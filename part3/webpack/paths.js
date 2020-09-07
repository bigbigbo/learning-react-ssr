const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const paths = {
  appHtml: resolveApp('webpack/index.html'),
  clientEntry: resolveApp('src/client/index.js'),
  serverEntry: resolveApp('src/server/index.js'),
  clientBuild: resolveApp('build/client'),
  serverBuild: resolveApp('build/server'),
  src: resolveApp('src'),
  srcClient: resolveApp('src/client'),
  srcServer: resolveApp('src/server'),
  srcShared: resolveApp('src/shared'),
  publicPath: '/static/',
};

paths.resolveModules = [paths.srcClient, paths.srcServer, paths.srcShared, paths.src, 'node_modules'];

module.exports = paths;
