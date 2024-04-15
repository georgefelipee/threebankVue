<script lang="ts">
import {defineComponent} from 'vue'
import ButtonFIeld from "@/components/ButtonFIeld.vue";
import InputField from "@/components/inputField.vue";

export default defineComponent({
  name: "Sign up",
  components: {InputField, ButtonFIeld}
})
</script>

<template>
  <main>
    <div class="background-img">
      <div class="signup-container">
        <h1 class="login"> Create account </h1>
        <form @submit.prevent class="signup-form">
          <p class="paragrafo-lg">Already have account ?
            <router-link class="router-link" to="/"><span class="paragrafo login-text">Login</span></router-link>
          </p>

          <div class="inputs-container">
            <div class="input-container">
              <p style="margin-inline: 2rem;">Fist Name</p>
              <div class="inputs-wrapper">
                <div class="icon-input">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <InputField placeholder="Email or Username" type="text"></InputField>
                </div>
                <div class="icon-input">
                  <InputField placeholder="Email or Username" type="text"></InputField>
                </div>
              </div>

            </div>

            <div class="inputs-wrapper">
              <div class="icon-input">
                <i class="fa fa-user" aria-hidden="true"></i>
                <InputField placeholder="Email or Username" type="text"></InputField>
              </div>
              <div class="icon-input">
                <InputField placeholder="Email or Username" type="text"></InputField>
              </div>
            </div>
            <div class="inputs-wrapper">
              <div class="icon-input">
                <i class="fa fa-user" aria-hidden="true"></i>
                <InputField placeholder="Email or Username" type="text"></InputField>
              </div>
              <div class="icon-input">
                <InputField placeholder="Email or Username" type="text"></InputField>
              </div>
            </div>


          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped>
.background-img {
  background-image: url('../../public/background.png');
  background-size: cover; /* para ajustar a imagem ao tamanho do elemento */
  background-position: center; /* para centralizar a imagem */
  width: 75vw; /* largura total da janela de visualização */
  height: 80vh; /* altura total da janela de visualização */
  display: flex;
  justify-content: flex-start; /* centraliza o conteúdo horizontalmente */
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
  flex-direction: column;
  gap: 0.8rem;
}
</style>