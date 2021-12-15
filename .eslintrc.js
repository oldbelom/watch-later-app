module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["jest", "@typescript-eslint", "react"],
  extends: [
    "airbnb-base",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ["**/dist/**"],
  rules: {
    "max-len": [
      "error",
      {
        ignoreComments: true,
        code: 100,
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
