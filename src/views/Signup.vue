<script lang="ts">
import {defineComponent} from 'vue'
import ButtonFIeld from "@/components/ButtonFIeld.vue";
import InputField from "@/components/inputField.vue"
import Password from 'primevue/password';
import SignupPart2 from "@/views/SignupPart2.vue";
import {toast} from 'vue3-toastify';
import {signUp} from "@/http";
import type {IUserData} from "@/interfaces/IUserData";
import HeaderBank from '@/components/HeaderBank.vue';

export default defineComponent({
  name: "Sign up",
  components: {SignupPart2, InputField, ButtonFIeld, Password,HeaderBank},
  data() {
      return {
        showSignUpPart2Page: true,
        userData: {
          firtsName: "",
          lastName: "",
          username: "",
          email: "",
          password: "",
        },
        confirmPassword: ""
    }
  },
  methods: {
    async signUpPart2() {
      if (this.userData.password !== this.confirmPassword) {
        toast("The passwords do not match", {
          type: 'error',
          position: 'top-right',
          autoClose: 5000
        });
        return;
      } else {
        const isStrongPassword = this.isStrongPassword(this.userData.password);
        if (!isStrongPassword) {
          toast("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character", {
            type: 'error',
            position: 'top-right',
            autoClose: 5000
          });
          return;
        }
        const userData: IUserData = {
          name: this.userData.firtsName + " " + this.userData.lastName,
          username: this.userData.username,
          email: this.userData.email,
          password: this.userData.password
        };
          const res = await signUp(userData);
          const resJson = await res.json();
          console.log(resJson);
          if (res.status === 201) {
            toast("Account created successfully", {
              type: 'success',
              position: 'top-right',
              autoClose: 5000
            });
            localStorage.setItem('userData', JSON.stringify(resJson));
            this.showSignUpPart2Page = !this.showSignUpPart2Page;

          }
          if(res.status === 400) {
            const errorMsg = resJson.msg;
            toast("Error creating account: " + errorMsg, {
              type: 'error',
              position: 'top-right',
              autoClose: 5000
            });
          }
      }
    }
    ,
   backToSignUpPart1(){
     this.showSignUpPart2Page = !this.showSignUpPart2Page;
   },
    isStrongPassword(password:string) : boolean {
         return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(password);
    },
}
})
</script>

<template>
  <HeaderBank/>
  <main>
    <div class="background-img">

      <div v-if="!showSignUpPart2Page" class="signup-container">
        <h1 class="login"> Create account </h1>
        <KeepAlive>
          <form @submit.prevent  @submit="signUpPart2" class="signup-form">
            <p class="paragrafo-lg">Already have account ?
              <router-link class="router-link" to="/"><span class="paragrafo login-text">Login</span></router-link>
            </p>

            <div class="inputs-container">

              <div class="input-container">
                <div class="label-with-input">
                  <p class="label-input">First Name</p>
                  <div class="icon-input">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <input required  v-model="userData.firtsName" placeholder="First Name" type="text">
                  </div>
                </div>

                <div class="label-with-input">
                  <p class="second-label-input">Last Name</p>
                  <input required v-model="userData.lastName" placeholder="Last Name" type="text">
                </div>
              </div>

              <div class="input-container">

                <div class="label-with-input">
                  <p class="label-input">Username</p>
                  <div class="icon-input">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <input required v-model="userData.username" placeholder="Username" type="text">
                  </div>
                </div>

                <div class="label-with-input">
                  <p class="second-label-input">Email</p>
                  <input required v-model="userData.email" placeholder="Email" type="email">
                </div>

              </div>
              <div class="input-container">

                <div class="label-with-input">
                  <p class="label-input">Password</p>
                  <div class="icon-input">
                    <i class="fa fa-lock" aria-hidden="true"></i>
                    <input required v-model="userData.password" placeholder="Password" type="password">
                  </div>
                </div>

                <div class="label-with-input">
                  <p class="second-label-input">Confirm Password</p>
                  <input required v-model="confirmPassword" placeholder="Confirm Password" type="password">
                </div>

              </div>
            </div>

            <div class="proceed-button">
              <button>Proceed</button>
            </div>

          </form>

        </KeepAlive>

      </div>
      <SignupPart2 @switchToSignUpPart1="backToSignUpPart1" showSignUpPart2Page v-else></SignupPart2>

    </div>
  </main>
</template>

<style scoped>
.background-img {
  background-image: url('../../public/background.png');
  background-size: cover; /* para ajustar a imagem ao tamanho do elemento */
  background-position: center; /* para centralizar a imagem */
  width: 75vw; /* largura total da janela de visualização */
  display: flex;
  margin-bottom: 3rem;
  border-radius: 30px;
  outline: none; /* Adicione essa linha para remover qualquer borda padrão */
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  width: 100%;
}

.login {
  font-size: 46px;
  margin-top: 4rem;
}

.signup-container {
  display: flex;
  width: 40%;
  margin-inline: 120px;
  flex-direction: column;
  gap: 0.6rem;
}

.signup-form {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  margin-bottom: 2rem;
}

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

.icon-input {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  width: 100%
}

.inputs-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
}

.router-link {
  text-decoration: none;
}

.login-text {
  color: #ffffff;
  font-weight: bold;
}

.input-container{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 1rem;

}

.label-with-input{
  display:flex;
  flex-direction: column;
  width:100%;
  gap:0.8rem;
}

.label-input{
  margin-inline:2rem;
  font-size: 1.2rem;
  font-weight: bold;
}
.second-label-input{
  margin-inline:0.2rem;
  font-size: 1.2rem;
  font-weight: bold;
}
.proceed-button{
  display:flex;
  justify-content:flex-end;
  margin-top:2rem;

}
.proceed-button button{
  background-color: #6AF5B7;
  width: 200px;
  color: black;
  border: none;
  border-radius: 28px;
  padding: 12px 25px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.proceed-button button:hover {
  background-color: #59d9a5; /* Cor de fundo quando o botão é destacado */
}
</style>