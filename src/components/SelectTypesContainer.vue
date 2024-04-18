<script lang="ts">
import {defineComponent} from 'vue'


export default defineComponent({
  name: "SelectTypesContainer",
  props: {
    typeAccountSelected: {type: String, required: true}
  }
})
</script>

<template>
  <div class="select-type-container" v-if="typeAccountSelected">
    <div class="select-itens-container">

      <div class="text-container">
        <p class="type-text">{{ typeAccountSelected }}</p>
        <p class="select-text">Select your benefits</p>
      </div>

      <div v-if="typeAccountSelected=='Normal Account' " class="benefits-container">
        <div class="d-flex align-center justify-content-between w-100 ">
          <label class="select-text" for="benefit1">Free withdrawals</label>
          <div class="mt-4">
            <v-switch
                :model-value="true"
                label="on"
                color="success"
                base-color="success"
                v-model="ex11"
                inset
                hide-details
            ></v-switch>
          </div>
        </div>
        <div class="d-flex align-center justify-content-between w-100 ">
          <label class="select-text" for="benefit1">Free transfer</label>
          <div class="mt-4">
            <v-switch
                :model-value="true"
                label="on"
                color="success"
                base-color="success"
                inset
                v-model="ex11"
                hide-details
            ></v-switch>
          </div>
        </div>

      </div>
      <div v-if="typeAccountSelected=='Special Account' " class="benefits-container">
        <div class="d-flex align-center justify-content-between w-100 ">
          <label class="select-text" for="benefit1">Credit card</label>
          <div class="mt-4">
            <v-switch
                :model-value="false"
                label="on"
                color="success"
                inset
            ></v-switch>
          </div>
        </div>
      </div>

      <div v-if="typeAccountSelected=='Premium Account' " class="benefits-container">
        <div class="d-flex align-center justify-content-between w-100 ">
          <label class="select-text" for="benefit1">Credit card</label>
          <div class="mt-4">
            <v-switch
                :model-value="false"
                label="on"
                color="success"
                inset
            ></v-switch>
          </div>
        </div>

        <div class="d-flex align-center justify-content-between w-100 ">
          <label class="select-text" for="benefit1">LIS</label>
          <div class="mt-4">
            <v-switch
                :model-value="false"
                label="on"
                color="success"
                inset
            ></v-switch>
          </div>
        </div>

      </div>



    </div>

  </div>
</template>

<style scoped>

.select-type-container{
  width:40%;
  height: 400px;
  border-radius: 36px;
  background-color: #FFFAF3;
}

.select-itens-container{
  display:flex;
  flex-direction:column;
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
  gap:0.5rem;
  margin-inline: 30px;
}
.benefit{
  display:flex;
  flex-direction:row;
  gap:3rem;
  align-items:center;
  justify-content:space-between;
}
</style>