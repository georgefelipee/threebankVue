<script lang="ts">
import {defineComponent} from 'vue'
import ButtonFIeld from "@/components/ButtonFIeld.vue";
import InputField from "@/components/inputField.vue"
import Password from 'primevue/password';
import SignupPart2 from "@/views/SignupPart2.vue";


export default defineComponent({
  name: "Sign up",
  components: {SignupPart2, InputField, ButtonFIeld, Password},
  data() {
      return {
        showSignUpPart2Page: true,
    }
  },

  methods: {
    signUpPart2(){
      this.showSignUpPart2Page = true;
    }
  }
})
</script>

<template>
  <main>
    <div class="background-img">

      <div v-if="!showSignUpPart2Page" class="signup-container">
        <h1 class="login"> Create account </h1>

        <form @submit.prevent class="signup-form">
          <p class="paragrafo-lg">Already have account ?
            <router-link class="router-link" to="/"><span class="paragrafo login-text">Login</span></router-link>
          </p>

          <div class="inputs-container">

            <div class="input-container">
              <div class="label-with-input">
                <p class="label-input">First Name</p>
                <div class="icon-input">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <InputField placeholder="First Name" type="text"></InputField>
                </div>
              </div>

              <div class="label-with-input">
                <p class="second-label-input">Last Name</p>
                <InputField placeholder="Last Name" type="text"></InputField>
              </div>
            </div>

            <div class="input-container">

              <div class="label-with-input">
                <p class="label-input">Username</p>
                <div class="icon-input">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <InputField placeholder="Username" type="text"></InputField>
                </div>
              </div>

              <div class="label-with-input">
                <p class="second-label-input">Email</p>
                <InputField placeholder="Email" type="email"></InputField>
              </div>

            </div>
            <div class="input-container">

              <div class="label-with-input">
                <p class="label-input">Password</p>
                <div class="icon-input">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                  <InputField placeholder="Password" type="password"></InputField>
                </div>
              </div>

              <div class="label-with-input">
                <p class="second-label-input">Confirm Password</p>
                <InputField placeholder="Confirm Password" type="password"></InputField>
              </div>

            </div>
          </div>

          <div class="proceed-button">
            <button>Proceed</button>
          </div>

        </form>

      </div>
      <SignupPart2 v-else></SignupPart2>

    </div>
  </main>
</template>

<style scoped>
.background-img {
  background-image: url('../../public/background.png');
  background-size: cover; /* para ajustar a imagem ao tamanho do elemento */
  background-position: center; /* para centralizar a imagem */
  width: 75vw; /* largura total da janela de visualização */
  height: 100vh; /* altura total da janela de visualização */
  display: flex;
  justify-content: flex-start; /* centraliza o conteúdo horizontalmente */
  border-radius: 30px;
  margin-bottom:20px;
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
  gap: 1.5rem;
}

.signup-form {
  display: flex;
  gap: 2rem;
  flex-direction: column;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
  width: 100%
}

.signup-button {
  background-color: #2A2B2A;
  width: 80%;
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

.inputs-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 1rem;

}

.signup-button:hover {
  background-color: #525552;
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