<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HeaderBank"
})
</script>

<template>
 <header>
   <div class="container-informations">
     <div class="informations">
       <img src="@/assets/images/logo-three.png" alt="logo ">

       <div class="utils-link">
         <span class="paragrafo">Home</span>
         <span class="paragrafo">Home</span>
         <span class="paragrafo">Home</span>
       </div>

       <div class="login-information">
         <span> Sign up</span>
         <span> Login</span>
       </div>

     </div>
   </div>
 </header>
</template>

<style scoped>
.container-informations{
  display: flex;
  justify-content: center;
}
.informations{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  border: 2px var(--verde-medio) solid;
  border-radius: 100px;
  padding: 1rem;
  padding-inline: 2rem;
  padding-top: 1.5rem;
}
.utils-link{
  display: flex;
  flex-direction: row;
  gap: 4rem;
}
header{
  width: 100%;
  margin-top: 2.5rem;
}

span{
  color: black;
}
</style>