// eslint.config.mjs
import next from "eslint-config-next";

export default [
  {
    ignores: ["node_modules", ".next", "out", "public"],
  },
  ...next(),
  {
    rules: {
      "@next/next/no-img-element": "off",
      "@next/next/no-html-link-for-pages": "off",
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },
];
