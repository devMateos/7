<script setup>
import Beach from "@/components/Scenery/Beach.vue"
/* import NavMenu from "@/components/NavMenu.vue" */
</script>

<template>
  <div>
    <Beach/>
  </div>
    <!-- <NavMenu/> -->
</template>

<style>
.scenery__container {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
}
.scenery__content {
  aspect-ratio: 1.78 / 1;
  background-image: url("@/assets/img/beach-background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: var(--border-radius-standard);
  box-shadow: 0px 0px 15px var(--color-light);
  height: 100%;
  max-width: 100%;
  position: relative;
}
</style>