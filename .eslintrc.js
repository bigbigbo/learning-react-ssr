module.exports = {
  extends: ['alloy', 'alloy/react'],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    __CLIENT__: true,
    __SERVER__: true,
  },
  rules: {},
};
