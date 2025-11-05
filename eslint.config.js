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
        setTimeout: "readonly", // Ensure setTimeout is also treated as a global
        test: "readonly",  // Add test as a global for Jest
        expect: "readonly",  // Add expect as a global for Jest
      },
    },
    rules: {
      semi: ["error", "always"],
      "no-unused-vars": ["warn"],
    },
  },
];
