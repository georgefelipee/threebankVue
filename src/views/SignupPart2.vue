<script lang="ts">
import {defineComponent, type PropType} from 'vue'
import InputField from "@/components/inputField.vue";
import Button from "primevue/button";
import type {IBank} from "@/interfaces/IBank";
import {createBankAccount, obtainAgencyByBank, obtainBanks} from "@/http";
import type {IAgency} from "@/interfaces/IAgency";
import SelectTypesContainer from "@/components/SelectTypesContainer.vue";
import SelectTypesInfo from "@/components/SelectTypesInfo.vue";
import { toast} from 'vue3-toastify';
import type {IUserData} from "@/interfaces/IUserData";
import type {ICreateAccount} from "@/interfaces/ICreateAccount";

export default defineComponent({
  name: "SignupPart2",
  components: {SelectTypesInfo, SelectTypesContainer, InputField, Button},
  data() {
      return {
        banks: [] as IBank[],
        agencies: [] as IAgency[],
        bankSelected: '' ,
        agencySelected: '',
        typeAccountSelected: '',
        hasLis: false,
        hasCreditCard: false,
      }
  },
  async created(){
    this.banks = await obtainBanks();
    },
  methods: {
   async selectedBank(bank: string){
     this.agencySelected = ''
      this.bankSelected = bank

      const bankSelectedFind = this.banks.find((bank: IBank) => bank.nameBank === this.bankSelected)
      if(bankSelectedFind){
        await this.fetchBankAgencies(bankSelectedFind.id)
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
      this.hasCreditCard = false

      if(this.typeAccountSelected === 'Normal Account'){
        this.notifyNormalAccount()
      }
    },
    notifyNormalAccount(){
      toast("The normal account already has its benefits integrated",{
        type: 'success',
        position: 'top-right',
        autoClose: 5000
      })
    },
    onSwitchCreditCard(){
      this.hasCreditCard = !this.hasCreditCard
      console.log('hasCreditCard', this.hasCreditCard)
    },
    onSwitchLIS(){
      this.hasLis = !this.hasLis
      console.log('hasLis', this.hasLis)
    },
    verifyFiels(){
      console.log('entrou')
       if(!this.bankSelected){
         toast("Select a bank", {
           type: 'error',
           position: 'top-right',
           autoClose: 5000
         });
         return false
       } else if(!this.agencySelected){
         toast("Select an agency", {
           type: 'error',
           position: 'top-right',
           autoClose: 5000
         });
         return false
       } else if(!this.typeAccountSelected){
         toast("Select a type account", {
           type: 'error',
           position: 'top-right',
           autoClose: 5000
         });
         return false
       }
    },
   async onSubmitForm(){
      console.log('Form submitted')
      const bankSelectedFind = this.banks.find((bank: IBank) => bank.nameBank === this.bankSelected)

      const agencySelectedFind = this.agencies.find((agency: IAgency) => agency.nameAgency === this.agencySelected)
       const user: IUserData = JSON.parse(await localStorage.getItem('userData') || '{}')
      this.verifyFiels()

      if(agencySelectedFind){
        let typeAccount = undefined
        if(this.typeAccountSelected== 'Normal Account'){
            typeAccount = 0
        } else if(this.typeAccountSelected== 'Special Account'){
            typeAccount = 1
        } else if (this.typeAccountSelected == 'Premium Account') {
            typeAccount = 2
        }

        const account: ICreateAccount = {
          user_id: user.id,
          agency_id: agencySelectedFind.id,
          accountType: typeAccount,
          hasLis: this.hasLis,
          hasCreditCard: this.hasCreditCard
        }
        console.log('account', account)
         const createAccountRes = await createBankAccount(account)
         const createAccountResJson = await createAccountRes.json()
        console.log(createAccountResJson)
        if(createAccountRes.status === 201){
          toast("Account created successfully", {
            type: 'success',
            position: 'top-right',
            autoClose: 5000
          });
        } else {
          toast("Error creating account", {
            type: 'error',
            position: 'top-right',
            autoClose: 5000
          });
        }
      }
    }

  },
  emits: ["switchToSignUpPart1"],
})
</script>

<template>
  <div class="signup-container-2">
    <h1 class="login"> Bank Information </h1>
    <form @submit.prevent @submit="onSubmitForm" class="signup-form">
      <div class="input-and-select-container">
        <div class="inputs-container">

          <div class="input-container">
            <div class="label-with-input">
              <p class="label-input">Bank</p>
              <div class="icon-input">
                <i class="fa fa-university" aria-hidden="true"></i>
                <v-select
                    aria-required="true"
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
                    aria-required="true"
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

        <SelectTypesContainer :has-l-i-s="hasLis" :has-credit-card="hasCreditCard" @switchCreditCard="onSwitchCreditCard" @switchLIS="onSwitchLIS" v-if="typeAccountSelected" :type-account-selected="typeAccountSelected" />
        <SelectTypesInfo v-else/>

      </div>
        <div class="proceed-button">
          <button @click="$emit('switchToSignUpPart1')"  class="back-button" type="button">Back</button>
          <button class="create-button" type="submit">Create Account</button>
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
  width: 100%;
  margin-inline: 120px;
  flex-direction: column;
  gap: 1.5rem;
}

.signup-form {
  display: flex;
  gap: 2rem;
  width: 100%;
  flex-direction:column;
  justify-content:space-around;
  height: 100%;
  margin-bottom: 2.5rem;
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
  gap: 1rem;
  width: 40%;
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
  justify-content: space-between;
  margin-top: 2rem;
}
.back-button{
    background-color: #2A2B2A;
  width: 220px;
    color: #FFF;
    border: none;
    border-radius: 28px;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.proceed-button .create-button{
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
.proceed-button .create-button:hover {
  background-color: #59d9a5; /* Cor de fundo quando o botão é destacado */
}
.input-and-select-container{
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
}
@media (max-width: 1100px) {
  .background-img{
    width:90vw;
  }

  .signup-container-2{
    margin-inline: 49px;

  }
}


</style>