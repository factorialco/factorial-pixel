module.exports = {
  parser: "@babel/eslint-parser",

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },

  extends: ['standard']
};
