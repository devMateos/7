<script setup>
import InitialView from '@/views/InitialView.vue';
import HomeView from './views/HomeView.vue';

import { defineAsyncComponent } from 'vue'



const password = "sunflower";
</script>

<template>
  <!-- <InitialView
    :password="password"
  /> -->
  <HomeView/>
</template>

<style>

</style>