module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint", "jsx-a11y", 'security'],
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "standard-with-typescript",
      "plugin:jsx-a11y/recommended",
      "plugin:security/recommended",
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
