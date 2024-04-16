<script  lang="ts">

export default {
  name: 'InputField',
  props: {
    placeholder: {type: String},
    type: {type: String, default: 'text'}
  }
}
</script>

<template>
<input required :placeholder="placeholder" :type="type">
</template>

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
</style>