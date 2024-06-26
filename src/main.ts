import './assets/main.css'

import "primeflex/primeflex.css";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primeicons/primeicons.css";

import '@fortawesome/fontawesome-free/css/all.css'
import {createApp, markRaw} from 'vue'
import App from './App.vue'
import router from './router'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import PrimeVue from "primevue/config";
import Password from 'primevue/password';

import 'vue3-toastify/dist/index.css';
import Button from "primevue/button";
import {createPinia} from "pinia";
import {useAuthStore} from '@/store/auth.ts'

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)
const pinia = createPinia()

pinia.use((store) => {store.router = markRaw(router)})

app.use(pinia)

app.use(PrimeVue, {ripple: true})
app.component('Button', Button);
app.component('Password', Password);

app.use(router)

app.use(vuetify)
app.use(Vue3Toasity, {
        autoClose: 3000,
    } as ToastContainerOptions,)
if(localStorage.getItem('token')){
    (async () => {
        const auth = useAuthStore()
        try {
            auth.setIsAuth(true)
          const user =  await auth.checkToken()
            auth.setUser(user)
            console.log(user)
        } catch (error) {
            console.log(error)
            auth.setIsAuth(false)
        }

    })()
}
app.mount('#app')
