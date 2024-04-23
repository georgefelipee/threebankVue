<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "HeaderDashboard"
})
</script>

<template>
<header class="header-container">
  <div class="image">
    <img src="@/assets/images/logo-three.png" alt="logo ">
  </div>

  <div class="avatar-info">
    <v-avatar>
      <v-img
          cover
          src="https://thumbs.dreamstime.com/z/nerd-portrait-young-cheerful-businessman-smiling-36201399.jpg"></v-img>
    </v-avatar>
  </div>

</header>
</template>

<style scoped>
.header-container{
  display:flex;
  width:95%;
  justify-content:space-between;
  padding-top:2rem;
}
</style>