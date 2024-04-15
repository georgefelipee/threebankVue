<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ButtonFIeld",
  props: {
    text: {type: String, required: true},
    colorText: {type: String, default: 'black'},
  }
})
</script>

<template>
  <button class="login-button">{{text}}</button>
</template>

<style scoped>
.login-button {
  background-color: #6AF5B7;
  width:80%;
  color: black;
  border: none;
  border-radius: 28px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
  margin: 0 auto; /* Para centralizar o botão horizontalmente */
}

.login-button:hover {
  background-color: #59d9a5; /* Cor de fundo quando o botão é destacado */
}
</style>
