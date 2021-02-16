module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },

  extends: ["plugin:vue/essential", "plugin:prettier/recommended"],

  parser: "vue-eslint-parser",

  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 11,
    sourceType: "module"
  },

  plugins: ["vue", "prettier"],

  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": ["error", { vars: "all", args: "none" }]
  }
}
