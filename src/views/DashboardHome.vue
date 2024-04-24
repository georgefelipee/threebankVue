<script lang="ts">
import {defineComponent} from 'vue'
import HeaderDashboard from "@/components/HeaderDashboard.vue";
import {useAuthStore} from "@/store/auth";
import CardBalance from "@/components/CardBalance.vue";

export default defineComponent({
  name: "DashboardHome",
  components: {CardBalance, HeaderDashboard},
  setup() {
    const authStore = useAuthStore()
    return {
      authStore
    }
  }
})
</script>

<template>
  <main class="mt-6">
    <section class="d-flex flex-row w-100">
        <div class="d-flex flex-column ga-3">
          <section class="d-flex flex-row ga-3">
            <div class="d-flex flex-column ga-3">
              <h1 class="welcome-text">Welcome ! {{authStore.user.name}}  </h1>
              <CardBalance />
            </div>
          </section>

        </div>
    </section>
  </main>

</template>

<style scoped>
.welcome-text{
  font-size: 22px;
  font-weight: bold;
  color: #1A1C1D
}
</style>