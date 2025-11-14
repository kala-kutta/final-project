import { URL, fileURLToPath } from "node:url";

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    tailwindcss(),
  ],
  base: "/final-project",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
  },
});
