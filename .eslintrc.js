const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    es6: true,
    browser: true,
    commonjs: true,
    jest: true,
  },
  extends: ['airbnb', 'eslint-config-prettier'],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};
