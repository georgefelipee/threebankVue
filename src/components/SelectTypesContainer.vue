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
      <div class="benefits-container">
        <div class="d-flex align-center ga-16 ">
          <label class="select-text" for="benefit1">Benefit 1</label>
          <div class="d-flex align-center mt-4">
            <v-switch
                :model-value="false"
                label="on"
                color="success"
                inset
            ></v-switch>
          </div>
        </div>
        <div class="d-flex align-center  ga-16  ">
          <label class="select-text" for="benefit1">Benefit 1</label>
          <div class="d-flex align-center mt-4  ">
            <v-switch color="success" :model-value="false"  inset></v-switch>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.select-type-container{
  width:90%;
  height:90%;
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