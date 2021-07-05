module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 12,
  }, 
  rules: {
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
      "printWidth": 80,
      "tabWidth": 2,
      "useTabs": false,
      "semi": true,
      "singleQuote": true,
      "trailingComma": "all",
      "bracketSpacing": true,
      "jsxBracketSameLine": true,
      "arrowParens": "avoid",
      "proseWrap": "always"
    }
  }
