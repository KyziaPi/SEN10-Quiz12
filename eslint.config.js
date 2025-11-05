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
      },
    },
    env: {
      jest: true,  // Add Jest environment to recognize test-related globals
    },
    rules: {
      semi: ["error", "always"],
      "no-unused-vars": ["warn"],
    },
  },
];
