<script lang="ts">
import {defineComponent} from 'vue'
import {useAuthStore} from '@/store/auth'

export default defineComponent({
  name: "HeaderDashboard",
  data() {
    return {
      expand: false
    }
  },
  methods: {
    logoutClick(){
      const authStore = useAuthStore()
      authStore.clear()
    }
  }
})
</script>

<template>
<header class="header-container">
  <div class="image">
    <img src="@/assets/images/logo-three.png" alt="logo ">
  </div>

  <v-col class="d-flex justify-end ">

    <div class="avatar-container">
      <v-avatar class="cursor-pointer" @click="expand = !expand">
        <v-img
            cover
            src="https://thumbs.dreamstime.com/z/nerd-portrait-young-cheerful-businessman-smiling-36201399.jpg"></v-img>
      </v-avatar>
      <v-expand-transition>
        <v-card
            v-show="expand"
            class=" align-self-end mt-3"
            height="130"
            width="150"
        >
          <div class="button-container">
            <button class="profile-button">My Profile</button>
            <button @click="logoutClick" class="logout-button">Logout</button>
          </div>

        </v-card>
      </v-expand-transition>
    </div>

  </v-col>

</header>
</template>

<style scoped>
.header-container{
  display:flex;
  flex-direction:row;
  width:95%;
  justify-content:space-between;
  padding-top:1rem;
}
.avatar-container{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  z-index:2;
}
.profile-button,
.logout-button {
  width: 90%;
  padding: 0.5rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.profile-button {
  border: var(--verde-medio) 1px solid;
  color: var(--verde-medio);
}

.profile-button:hover {
  background-color: var(--verde-medio);
  color: white; /* Cor do texto invertida */
}

.logout-button:hover {
  background-color: #e14343;
  color: white; /* Cor do texto invertida */
}
.logout-button {
  border: #e14343 1px solid;
  color: #e14343;
}

.button-container{
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:1rem;
}

.avatar-info{
  cursor:pointer;

}
</style>