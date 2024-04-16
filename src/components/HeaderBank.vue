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
         <router-link class="router-link" to="/signup"><span class="paragrafo signup"> Sign Up</span></router-link>


         <div class="login">
           <router-link class="router-link" to="/"><span class="paragrafo login-link"> Login </span></router-link>
         </div>
       </div>

     </div>
   </div>
 </header>
</template>

<style scoped>
.router-link {
  text-decoration: none; /* Remove o sublinhado dos links */
}
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
  font-weight: bold;
}
.signup{
  cursor: pointer;
  color: var(--verde-medio);
  transition: 0.3s ease;
}

.signup:hover{
  border: var(--verde-medio) 1px solid;
  border-radius: 100px;
  padding: 15px 20px;
}

.login-information{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  font-weight: bold;
}
.login {
  cursor: pointer;
  background-color: var(--verde-medio);
  border-radius: 100px;
  padding: 15px 20px;
  transition: background-color 0.3s ease; /* Transição suave de 0.3 segundos */
}
.login-link {
  color: #FFFFFF; /* Cor do texto branco */
}

.login:hover {
  background-color: #FFFFFF; /* Mudando para branco quando hover */
  border: var(--verde-medio) 1px solid; /* Adicionando uma borda verde */
}
.login:hover .login-link {
  color: var(--verde-medio); /* Mudando a cor do texto para verde quando hover */
}
header{
  width: 100%;
  margin-top: 2.5rem;
}

span{
  color: black;
}
</style>