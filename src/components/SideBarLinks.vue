<script lang="ts">
import {computed, defineComponent} from 'vue'
import {useRoute} from "vue-router";
import { collapsed } from "@/store/sideBarStore";

export default defineComponent({
  name: "SideBarLinks",
  props:{
    to: { type: String, required: true },
    icon: { type: String, required: true },

  },
  setup(props, ctx) {
      const route = useRoute();
      const isActive = computed(() => route.path === props.to)
      return { isActive, collapsed }
  },
})
</script>

<template>
<router-link :to="to" class="link" :class="{active: isActive}">
  <i class="icon" :class="icon"></i>
  <transition name="fade">
    <span v-if="!collapsed">
      <slot/>
    </span>
  </transition>
</router-link>
</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity:0;
}

.link{
  display: flex;
  align-items: center;

  cursor:pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.1rem 0;
  padding: 0.4rem;
  border-radius: 0.25rem;
  height: 1.5rem;
  color: #A6B1C2;
  text-decoration: none;

  transition: color 0.3s ease;
}
.link:hover{
  color: var(--verde-medio);
}
.link.active{
  color: var(--verde-medio);
}

.link .icon{
  flex-shrink: 0;
  font-size: 1.5rem;
  margin-right: 10px
}

</style>