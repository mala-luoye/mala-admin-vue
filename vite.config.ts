import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
// import { createStyleImportPlugin } from "vite-plugin-style-import"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  plugins: [
    vue()
    // createStyleImportPlugin({
    //   libs: [
    //     {
    //       libraryName: "@arco-design/web-vue",
    //       esModule: true,
    //       resolveStyle: (name) => {
    //         // css
    //         return `@arco-design/web-vue/es/${name}/style/css.js`
    //         // less
    //         return `@arco-design/web-vue/es/${name}/style/index.js`
    //       }
    //     }
    //   ]
    // })
  ]
})
