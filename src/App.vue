<script setup>
/* import InitialView from '@/views/InitialView.vue'; */
import SplashScreen from './views/SplashScreen.vue';

import { defineAsyncComponent } from 'vue'

const InitialView = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./views/InitialView.vue"));
    }, 4000);
  })
})


const password = "sunflower";
</script>

<template>
  <Suspense>
    <template #default>
      <InitialView
        :password="password"
      />
    </template>
    <template #fallback>
      <SplashScreen/>
    </template>
  </Suspense>
</template>

<style>

</style>