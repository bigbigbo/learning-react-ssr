const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../client/index.js'),
  },
};
