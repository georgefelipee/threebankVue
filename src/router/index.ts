import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login.vue";
import SignUp from "@/views/Signup.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Login',
      path: '/',
      component: Login
    },
    {
      name: 'Sign up',
      path: '/signup',
      component: SignUp
    }
  ]
})

export default router
