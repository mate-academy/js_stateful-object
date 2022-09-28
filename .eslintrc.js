module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  rules: {
    'no-proto': 0,
    'no-param-reassign': 0
  },
  plugins: ['jest']
};
