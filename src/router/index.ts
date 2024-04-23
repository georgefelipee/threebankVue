import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login.vue";
import SignUp from "@/views/Signup.vue";
import Dashboard from '@/views/Dashboard.vue';
import { useAuthStore } from '@/store/auth';

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
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.meta?.requiresAuth) {
    const auth = useAuthStore();

    (auth.isAuth) ? next() : next({ name: 'Login' });

  } else {
    next()
  }
})

export default router
