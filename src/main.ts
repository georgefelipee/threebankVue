import './assets/main.css'

import "primeflex/primeflex.css";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primeicons/primeicons.css";

import '@fortawesome/fontawesome-free/css/all.css'
import { createApp } from 'vue'
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

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.use(PrimeVue, {ripple: true})
app.component('Button', Button);
app.component('Password', Password);

app.use(router)
app.use(vuetify)
app.use(Vue3Toasity, {
        autoClose: 3000,
    } as ToastContainerOptions,)

app.mount('#app')
