<template>
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
              <button @click="notifyLoginError" class="signup-button">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    </main>
</template>
<script lang="ts">
import InputField from "@/components/inputField.vue";
import ButtonFIeld from "@/components/ButtonFIeld.vue";
import { toast, type ToastOptions } from 'vue3-toastify';
import axios from '@/http/axios.ts'

export default {
  components: {ButtonFIeld, InputField},

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
      try {
        const {data} = await axios.post('users/login', loginData)
        console.log(data)
      } catch (error) {
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
  background-size: cover; /* para ajustar a imagem ao tamanho do elemento */
  background-position: center; /* para centralizar a imagem */
  width: 75vw; /* largura total da janela de visualização */
  height: 80vh; /* altura total da janela de visualização */
  display: flex;
  justify-content: center; /* centraliza o conteúdo horizontalmente */
  border-radius: 30px;
  outline: none; /* Adicione essa linha para remover qualquer borda padrão */
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
</style>