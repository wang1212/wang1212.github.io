// see docs: https://eslint.org/docs/user-guide/configuring

module.exports = {
  ignorePatterns: ['node_modules', 'build/', 'notes-html/', 'src/vendors/'],
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: false,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },
  extends: ['@wang1212/eslint-config'],
  plugins: [],
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-underscore-dangle': ['warn'],
    camelcase: ['off'],
  },
  globals: {},
};
