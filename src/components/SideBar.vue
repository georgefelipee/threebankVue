<script lang="ts">
import {defineComponent} from 'vue'
import { collapsed, toggleSideBar, sidebarWidth} from "@/store/sideBarStore";
import SideBarLinks from "@/components/SideBarLinks.vue";

export default defineComponent({
  name: "SideBar",
  components: {SideBarLinks},
  setup() {
      return {
        collapsed, toggleSideBar, sidebarWidth
      }
  },
})
</script>

<template>
  <div class="sidebar" :style="{width: sidebarWidth}">

    <div class="links">
      <SideBarLinks to="/dashboard" icon="fas fa-home"></SideBarLinks>
      <SideBarLinks to="/analytics" icon="fas fa-chart-bar"></SideBarLinks>
      <SideBarLinks to="/friends" icon="fas fa-users"></SideBarLinks>
      <SideBarLinks to="/image" icon="fas fa-image"></SideBarLinks>
    </div>


  </div>
</template>

<style scoped>
.sidebar{
 background-color:transparent;

  float:left;
  position:fixed;
  z-index:1;
  top:0;
  left:0;
  bottom:0;
  padding: 0.5rem;

  transition: 0.3s ease;

  display: flex;
  justify-content:center;
  gap:2rem;
  flex-direction: column;
}

.collapse-icon{
  position:absolute;
  top:40px;
  left:0px;
  padding: 0.75rem;

  color: #d3bdbd;
  transition: 0.2s linear;
}

.rotate-180{
  transform: rotate(180deg);
  transition: 0.2s linear;
}
.links{
  display:flex;
  flex-direction:column;
  gap:4rem;
  align-items:center;
}
</style>