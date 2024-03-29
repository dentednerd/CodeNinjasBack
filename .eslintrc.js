module.exports = {
  "extends": ["eslint:recommended"],
  "env": {
    "node": true,
    "mocha": true,
    "es6": true
  },
    "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "rules": {
    "no-console": 0,
    "space-before-blocks": 1,
    "arrow-spacing": 1,
    "keyword-spacing": 1,
    "space-infix-ops": 1,
    "space-in-parens": 1,
    "spaced-comment": 1,
    "semi": 1,
    "quotes": ["error", "single"],
    "no-multiple-empty-lines": 1
  }
}
