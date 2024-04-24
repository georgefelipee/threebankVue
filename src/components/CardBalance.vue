<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CardBalance",
  data() {
    return {
      balance: Number
    }
  },
  async created(){
    this.balance = await obterBalance();
  }
})
</script>

<template>
  <v-card
      elevation="3"
      rounded="xl"
      max-width="425"
      width="425"
  >
    <v-card-item>
      <v-card-title>
        <p class="balance-title"> Balance available</p>
      </v-card-title>

      <v-card-subtitle class="pt-5">
        <p class="font-medium balance-subtitle"> Balance </p>
      </v-card-subtitle>

      <v-card-title>
        <p class="balance-money ">R$ 100,00</p>
      </v-card-title>
    </v-card-item>
    <v-card-item>
      <v-btn-group class="ga-3">
        <v-btn
            color="#26CE83"
            class="text-none"
            rounded="lg"
        >
          <p class="trasnference-button">Make transferency</p>
        </v-btn>

        <button class="history-button">
          <p class="history-button-title">History</p>
        </button>

      </v-btn-group>
    </v-card-item>
  </v-card>
</template>
<style scoped>
.balance-title{
  font-size: 22px;
  font-weight:bold;
}
.balance-subtitle{
  font-size: 16px;
}
.balance-money{
  font-family: "Lato", sans-serif;
  font-size: 36px;
  font-weight: bold;
}
.trasnference-button{
  color:#ffffff;
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  font-weight: bold;
}
.history-button{
  color: #26CE83;
  border: 1px solid #26CE83; /* Adiciona uma borda */
  border-radius: 8px; /* Arredonda as bordas */
  padding: 10px 20px; /* Ajusta o preenchimento */
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  font-weight: bold;
}
.history-button:hover{
  background-color: #26CE83;
  color: #FFFAF3;
  border-color: #26CE83;
}
</style>