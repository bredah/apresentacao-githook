module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es2021: true,
  },
  env: {
    jest: true,
  },
  extends: "standard",
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    semi: [2, "always"],
    "space-before-function-paren": [2, "never"],
    "comma-dangle": ["error", "never"],
    quotes: ["error", "single"],
  },
};
