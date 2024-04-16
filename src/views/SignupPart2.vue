<script lang="ts">
import {defineComponent} from 'vue'
import InputField from "@/components/inputField.vue";
import Button from "primevue/button";
export default defineComponent({
  name: "SignupPart2",
  components: {InputField, Button}
})
</script>

<template>
  <div class="signup-container-2">
    <h1 class="login"> Bank Information </h1>
    <form @submit.prevent class="signup-form">
      <div class="input-and-select-container">
        <div class="inputs-container">

          <div class="input-container">
            <div class="label-with-input">
              <p class="label-input">Bank</p>
              <div class="icon-input">
                <i class="fa fa-university" aria-hidden="true"></i>
                <v-select
                    label="Select Your Bank"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    variant="solo"
                ></v-select>
              </div>
            </div>
          </div>

          <div class="input-container">
            <div class="label-with-input">
              <p class="label-input">Agency</p>
              <div class="icon-input">
                <i class="fa fa-money-bill-1" aria-hidden="true"></i>
                <v-select
                    label="Select your Agency"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    variant="solo"
                ></v-select>
              </div>
            </div>

          </div>
          <div class="input-container">

            <div class="label-with-input">
              <p class="label-input">Type Account</p>
              <div class="icon-input">
                <i class="fa fa-credit-card" aria-hidden="true"></i>
                <v-select
                    label="Select your Type Account"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    variant="solo"
                ></v-select>
              </div>
            </div>
          </div>

        </div>
        <div class="select-type-container">
          <div class="select-itens-container">

            <div class="text-container">
              <p class="type-text">Premium Account</p>
              <p class="select-text">Select your benefits</p>
            </div>
            <div class="benefits-container">
              <div class="d-flex align-center  ">
                <label class="select-text" for="benefit1">Benefit 1</label>
                <div class="d-flex align-center  ">
                  <v-switch base-color="#04BB69" label="Switch" inset></v-switch>
                </div>
              </div>
              <div class="d-flex align-center  ">
                <label class="select-text" for="benefit1">Benefit 1</label>
                <div class="d-flex align-center  ">
                  <v-switch base-color="#04BB69" label="Switch" inset></v-switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </form>

  </div>

</template>

<style scoped>
.login {
  font-size: 46px;
  margin-top: 4rem;
}

.signup-container-2 {
  display: flex;
  width: 60%;
  margin-inline: 120px;
  flex-direction: column;
  gap: 1.5rem;
}

.signup-form {
  display: flex;
  gap: 2rem;
  width: 100%;

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
.input-and-select-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  width: 100%;
}
.select-type-container{
  width:90%;
  height:90%;
  border-radius: 36px;
  background-color: #FFFAF3;
}

.select-itens-container{
  display:flex;
  flex-direction:column;
  gap:1.5rem;
}
.type-text{
  color:var(--verde-medio);
  font-size: 1.8rem;
  font-weight: bold;

}
.text-container{
  display:flex;
  flex-direction:column;
  gap:1rem;
  margin-inline: 2rem;
  margin-block: 2rem;
}
.select-text{
  font-size: 1.4rem;
  font-weight: 600;
  color: #262626;
}

.benefits-container{
  display:flex;
  flex-direction:column;
  gap:2.5rem;
  margin:auto;
}
.benefit{
  display:flex;
  flex-direction:row;
  gap:3rem;
  align-items:center;
  justify-content:space-between;
}
</style>