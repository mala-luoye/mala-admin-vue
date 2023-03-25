import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import { vitePluginForArco } from "@arco-plugins/vite-vue"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  plugins: [vue(), vitePluginForArco()]
})
