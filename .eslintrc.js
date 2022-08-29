module.exports = {
  "extends": "eslint:recommended",
  "parser": "@babel/eslint-parser",
  "plugins": ["react"],
  "env": {
    "browser": true,
    "jest": true,
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "sourceType": "module",
  },
  "rules": {
    "react/destructuring-assignment": "off",
    "react/jsx-uses-react": "error",   
    "react/jsx-uses-vars": "error",
    "brace-style": "error",
    "comma-spacing": [
      "warn", {
        "before": false,
        "after": true
      }
    ],
    "curly": "error",
    "eqeqeq": ["error", "always"],
    "getter-return": ["error", { "allowImplicit": true }],
    "indent": ["warn", 2],
    "key-spacing": [
      "error", {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "keyword-spacing": [
      "error", {
        "before": true,
        "after": true
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "max-len": [
      "error",
      120
    ],
    "new-cap": [
      "error", {
        "newIsCap": true
      }
    ],
    "no-template-curly-in-string": "error",
    "object-shorthand": [
      "error",
      "always"
    ],
    "semi": ["error", "always"],
    "semi-spacing": [
      "error", {
        "before": false,
        "after": true
      }
    ],
    "space-before-blocks": [
      "error", {
        "functions": "always",
        "keywords": "always",
        "classes": "always"
      }
    ],
    "space-infix-ops": [
      "error", {
        "int32Hint": false
      }
    ]
  },
  "globals": {
    "expect": true
  }
};