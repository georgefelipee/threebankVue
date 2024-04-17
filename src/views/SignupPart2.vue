<script lang="ts">
import {defineComponent} from 'vue'
import InputField from "@/components/inputField.vue";
import Button from "primevue/button";
import type {IBank} from "@/interfaces/IBank";
import {obtainAgencyByBank, obtainBanks} from "@/http";
import type {IAgency} from "@/interfaces/IAgency";
import SelectTypesContainer from "@/components/SelectTypesContainer.vue";
import SelectTypesInfo from "@/components/SelectTypesInfo.vue";

export default defineComponent({
  name: "SignupPart2",
  components: {SelectTypesInfo, SelectTypesContainer, InputField, Button},
  data() {
      return {
        banks: [] as IBank[],
        agencies: [] as IAgency[],
        bankSelected: '',
        agencySelected: '',
        typeAccountSelected: '',

      }
  },
  async created(){
    this.banks = await obtainBanks();
    },
  methods: {
   async selectedBank(bank: string){
     this.agencySelected = ''
      this.bankSelected = bank

      const bankSelected = this.banks.find((bank: IBank) => bank.nameBank === this.bankSelected)
      if(bankSelected){
        await this.fetchBankAgencies(bankSelected.id)
     }
   },
   async fetchBankAgencies(bankId: number){
     try {
       this.agencies = await obtainAgencyByBank(bankId)
       console.log(this.agencies)
      } catch (e) {
        console.error(e)
     }
   },
    selectedAgency(agency: string){
      this.agencySelected = agency
    },
    selectedType(typeAccount: string){
      this.typeAccountSelected = typeAccount
    }
  }
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
                    v-model="bankSelected"
                    :items="banks.map((bank: IBank) => bank.nameBank)"
                    variant="solo"
                    @update:modelValue="selectedBank"
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
                    :items="agencies.map((agency: IAgency) => agency.nameAgency)"
                    variant="solo"
                    :model-value="agencySelected"
                    :disabled="!bankSelected"
                    @update:modelValue="selectedAgency"
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
                    :items="['Normal Account','Special Account','Premium Account']"
                    variant="solo"
                    :model-value="typeAccountSelected"
                    @update:modelValue="selectedType"
                    :disabled="!bankSelected"
                ></v-select>
              </div>
            </div>
          </div>

        </div>

        <SelectTypesContainer v-if="typeAccountSelected" :type-account-selected="typeAccountSelected" />
        <SelectTypesInfo v-else/>

      </div>
        <div class="proceed-button">
          <button type="submit">Create Account</button>
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
  flex-direction:column;

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
.proceed-button{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.proceed-button button{
  background-color: #6AF5B7;
  width: 280px;
  color: black;
  border: none;
  border-radius: 28px;
  padding: 18px 40px ;
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


</style>