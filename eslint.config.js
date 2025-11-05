import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        setTimeout: "readonly",  // Add setTimeout as a global
      },
    },
    rules: {
      semi: ["error", "always"],
      "no-unused-vars": ["warn"],
    },
  },
];
