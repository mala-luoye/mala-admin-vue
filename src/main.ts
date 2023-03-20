import { createApp } from "vue"
import router from "@/router"
// 引入样式
import "reset.css"
import "@/assets/css/index.less"
import App from "./App.vue"

createApp(App).use(router).mount("#app")
