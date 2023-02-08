const path = require("path");

module.exports = {
  root: true,
  ignorePatterns: [
    ".eslintrc.js",
    "react-app-env.d.ts",
    "config-overrides.js",
    "public/**/*",
    "node_modules/**/*",
    "capacitor.config.ts",
    "create-component.js",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "@typescript-eslint/eslint-plugin", "header"],
  rules: {
    "prettier/prettier": ["error"],
    "header/header": [2, path.resolve(__dirname, "./config/header.js")],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
        custom: {
          regex: "^T[A-Z]*",
          match: true,
        },
      },
    ],
  },
};
