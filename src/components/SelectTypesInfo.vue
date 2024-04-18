<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SelectTypesInfo",

})
</script>

<template>
  <div class="select-type-container" >
    <div class="select-itens-container">

      <div class="text-container">
        <p class="type-text">Discover the benefits of our accounts</p>
        <v-carousel
            height="320"
            show-arrows="hover"
            cycle
            hide-delimiters
        >
          <template v-slot:prev="{ props }">
            <v-btn
                color="green-lighten-1"
                variant="outlined"
                @click="props.onClick"
            ><i class="fa-solid fa-arrow-left"></i></v-btn>
          </template>
          <template v-slot:next="{ props }">
            <v-btn
                color="green-lighten-1"
                variant="outlined"
                @click="props.onClick"
            ><i class="fa-solid fa-arrow-right"></i></v-btn>
          </template>
          <v-carousel-item
          >
            <div class="d-flex align-center flex-column ga-4">
              <div>
                <p class="select-text">Normal Account</p>
              </div>
              <div>
                  <ul class="d-flex align-center flex-column ga-3">
                    <li class="text-benefits">Free withdrawals</li>
                    <li class="text-benefits">Free transfer</li>
                  </ul>
                </div>
            </div>

          </v-carousel-item>
          <v-carousel-item
          >
            <div class="d-flex align-center flex-column ga-7">
              <div>
                <p class="select-text">Special Account</p>
              </div>
              <div>
                <ul class="d-flex align-center flex-column ga-3">
                  <li class="text-benefits">Credit card</li>
                  <li class="text-benefits">Credit card balance </li>
                </ul>
              </div>
            </div>

          </v-carousel-item>
          <v-carousel-item
          >
            <div class="d-flex align-center flex-column ga-7">
              <div>
                <p class="select-text">Premium Account</p>
              </div>
              <div>
                <ul class="d-flex align-center flex-column ga-3">
                  <li class="text-benefits">Have LIS</li>
                  <li class="text-benefits">LIS balance </li>
                </ul>
              </div>
            </div>

          </v-carousel-item>

        </v-carousel>

      </div>

    </div>
  </div>
</template>

<style scoped>

.select-type-container{
  width:40%;
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
.text-benefits{
  font-size: 1.4rem;
  font-weight: 500;
  color: #262626;
}


</style>