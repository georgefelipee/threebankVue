<script lang="ts">
import {defineComponent} from 'vue'
import SideBar from '../components/SideBar.vue'
import {sidebarWidth} from "@/store/sideBarStore";

export default defineComponent({
  name: "Dashboard",
  components: {SideBar},
  setup() {
    return {
      sidebarWidth
    }
  },
  data() {
    return {
      isDrawerOpen: false
    }
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen
    }
  }
})
</script>

<template>
  <div class="dashboard">
    <div>
      <SideBar></SideBar>
      <div :style="{ 'margin-left': sidebarWidth}" >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  /* Define a imagem de fundo */
  background-image: url('../../public/fundoDashboard.png');
  /* Define o tamanho e o comportamento da imagem */
  background-size: cover;
  /* Centraliza a imagem */
  background-position: center;
  /* Define o fundo como fixo, para que ele não role com a página */
  background-attachment: fixed;
  /* Define a altura como 100% para cobrir toda a tela */
  height: 100vh;
  width:100vw;
}
</style>