<script setup>
import SplashScreen from './SplashScreen.vue';
import { defineAsyncComponent } from 'vue'

const Main = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("@/components/Main.vue"));
    }, 4000);
  })
})

</script>
<template>
  <Suspense>
    <template #default>
      <Main/>
    </template>
    <template #fallback>
      <SplashScreen/>
    </template>
  </Suspense>
</template>