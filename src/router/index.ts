import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from "vue-router"

// 路由懒加载
const ViewLogin = () => import("@/views/login/Login.vue")
const ViewHome = () => import("@/views/home/Home.vue")
const ViewAbout = () => import("@/views/about/About.vue")

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: ViewLogin
  },
  {
    path: "/home",
    component: ViewHome
  },
  {
    path: "/about",
    component: ViewAbout
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
