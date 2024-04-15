import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login
    }
  ]
})

export default router
