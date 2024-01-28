<script setup>
import InitialView from '@/views/InitialView.vue';
import HomeView from './views/HomeView.vue';

import { ref } from 'vue'

const password = "sunflower";
let accessGranted = ref(false);
</script>

<template>
  <div class="portrait bg-brand p-XXL text-light">
    <img src="/assets/animations/rotate-phone.webp" alt="Gira tu teléfono o amplía la ventana">
    <span class="h2">Gira tu teléfono o amplía la ventana</span>
  </div>

  <div class="landscape">
    <InitialView
      :password="password"
      v-if="accessGranted === false"
      @grantAccess="accessGranted = true"
    />
    <HomeView
      v-if="accessGranted === true"
    />
  </div>
</template>

<style>
@media (orientation: portrait) {
  .portrait {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    text-align: center;
    width: 100vw;  
  }
  .portrait * {
    max-width: 80%;
  }

  .landscape {
    display: none;
  }
}

@media (orientation: landscape) {
  .portrait {
    display: none;
  }
}
</style>