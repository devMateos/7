<script setup>
import SplashScreen from './SplashScreen.vue';
import FirstScenery from '@/components/FirstScenery/Index.vue';
import { defineAsyncComponent } from 'vue'

/* const HomeView = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./views/HomeView.vue"));
    }, 4000);
  })
}) */

</script>
<template>
  <Suspense>
    <template #default>
      <FirstScenery/>
    </template>
    <template #fallback>
      <SplashScreen/>
    </template>
  </Suspense>
</template>