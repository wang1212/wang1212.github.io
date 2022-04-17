// See https://babeljs.io/docs/en/configuration

module.exports = {
  assumptions: {
    privateFieldsAsProperties: true,
    setPublicClassFields: true,
  },
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-flow',
      {
        all: true,
      },
    ],
  ],
  plugins: [],
};
