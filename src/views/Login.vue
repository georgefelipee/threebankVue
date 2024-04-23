<template>
  <HeaderBank/>
    <main>
      <div class="background-img">
        <div class="login-container" >
          <h1 class="login"> Login </h1>
          <form @submit.prevent @submit="login" class="login-form">
            <p class="paragrafo boas-vindas">Welcome back! Please log in to access your account.</p>

            <div class="icon-input">
              <i class="fa fa-user" aria-hidden="true"></i>
              <input v-model="emailOrUsername" required  placeholder="Email or Username" type="text">
            </div>
            <div class="icon-input">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input v-model="password" required placeholder="Your Password" type="password">
            </div>
            <div class="buttons-container">
              <div style="display:flex; justify-content:center">
                <ButtonFIeld type="submit" colorText="black" text="Login"></ButtonFIeld>
              </div>
            </div>
          </form>
          <router-link class="signup-button" to="/signup">
            <button>Sign up</button>
          </router-link>
        </div>
      </div>
    </main>
</template>
<script lang="ts">
import InputField from "@/components/inputField.vue";
import ButtonFIeld from "@/components/ButtonFIeld.vue";
import { toast, type ToastOptions } from 'vue3-toastify';
import axios from '@/http/axios'
import {useAuthStore} from '@/store/auth.ts'
import HeaderBank from "@/components/HeaderBank.vue";

export default {
  components: {HeaderBank, ButtonFIeld, InputField},
  name: 'Login',
  data() {
      return {
          emailOrUsername: '',
          password: ''
      }
  },
  methods:{
      notifyLoginError(){
        toast("User credentials invalid!",{
          type: 'error',
          position: 'top-right',
          autoClose: 2000
        })
      },
      emailOrUsernameTratament() : Object{
        if(this.emailOrUsername.includes('@')){
          return {
            email: this.emailOrUsername,
            password: this.password
          }
        }
        return{
          username: this.emailOrUsername,
          password: this.password
        }
      },
    async login(){
      const loginData = this.emailOrUsernameTratament()
      const authStore = useAuthStore()
      try {
        const {data} = await axios.post('users/login', loginData)
        console.log(data)
        authStore.setToken(data.token)
        authStore.setIsAuth(true)
        this.$router.push('/dashboard')
      } catch (error) {
        console.log(error)
        const errorMsg = error?.response?.data?.msg
        toast(errorMsg || 'An error occurred',{
          type: 'error',
          position: 'bottom-center',
          autoClose: 4000
        })
      }
    }
  }
}
</script>
<style scoped>
input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 18px;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #007bff; /* Cor da borda quando o campo está em foco */
}
.background-img{
  background-image: url('../../public/background.png');
  background-size: cover;
  background-position: center;
  width: 80%;
  display: flex;
  height: 85%;
  margin-bottom: 3rem;
  justify-content: center;
  border-radius: 30px;
  outline: none;
  padding-bottom: 2.2rem;
}
main{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  width: 100%;
}
.login{
  font-size: 46px;
  margin-top: 4rem;
}
.boas-vindas{
  font-size:18px;
}
.login-container{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}
.login-form{
  align-items: center;
  display: flex;
  gap: 2rem;
  flex-direction: column;
}

.buttons-container{
  display: flex;
  flex-direction:column;
  gap:2rem;
  margin-top:3rem;
  width:100%;
  margin-inline:auto;
}
.signup-button{
  background-color: #2A2B2A;
  width:80%;
  color: #FFF;
  border: none;
  border-radius: 28px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
  margin: 0 auto; /* Para centralizar o botão horizontalmente */
  margin-top:0.6rem;
  text-align:center;
}
.icon-input{
  display:flex;
  flex-direction:row;
  gap:1rem;
  align-items:center;
  width:100%
}
.signup-button:hover {
  background-color: #525552;
}
@media (max-width: 580px) {
  .boas-vindas{
    font-size: 14px; /* Altere o tamanho da fonte conforme desejado */
  }
}
@media (max-width: 480px) {
  .background-img{
    width: 90%;
  }
}


</style>