import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";

export default defineConfigWithVueTs(
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  pluginVue.configs["flat/recommended"],
  vueTsConfigs.recommended,
  vueTsConfigs.recommendedTypeChecked,
  {
    name: "custom-style-overrides",
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      "indent": ["error", 2],
      "no-tabs": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "no-trailing-spaces": "error",
      "sort-imports": "error",
      "camelcase": "off",
      "@typescript-eslint/naming-convention": "off",
      "vue/multi-word-component-names": "off",
      "sort-imports": "off",
      "vue/no-mutating-props": "off"
    }
  }
);