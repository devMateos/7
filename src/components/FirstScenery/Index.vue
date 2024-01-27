<script setup>
import { ref } from 'vue'

let beerClicked = ref(false);

</script>

<template>
  <div class="first-scenery__container bg-action-secondary p-L">
    <div class="first-scenery__content">
      <img :class="{ 'beer-can':true, 'click-this': beerClicked === false }" src="@/assets/icons/beer-can.svg" alt="" @click="beerClicked = true">
      <img :class="{ 'pizza':true, 'click-this': beerClicked === true }" src="@/assets/icons/pizza.svg" alt="">
    </div>
  </div>
</template>

<style scoped>
.first-scenery__container {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
}
.first-scenery__content {
  aspect-ratio: 1.78 / 1;
  background-image: url("@/assets/img/beach-background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: var(--border-radius-standard);
  box-shadow: 0px 0px 15px var(--color-light);
  height: 100%;
  position: relative;
}
.beer-can {
  height: 20%;
  left: 22%;
  position: absolute;
  top: 25%;
}
.pizza {
  height: 30%;
  left: 30%;
  position: absolute;
  top: 45%;
}
</style>