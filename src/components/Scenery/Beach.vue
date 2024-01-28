<script setup>
import Modal from '@/components/Modal/Index.vue'

import { ref, reactive } from 'vue'

let beerClicked = ref(false);
let pizzaClicked = ref(false);

let openModal = reactive({
  beer: false,
  pizza: false,
});

</script>

<template>
  <div class="scenery__container bg-action-secondary p-L">
    <div class="scenery__content">
      <img :class="{ 'beer-can':true, 'click-this': beerClicked === false }" src="/assets/icons/beer-can.svg" alt="" @click="beerClicked = true; openModal.beer = true;">
      <img :class="{ 'pizza':true, 'click-this': beerClicked === true }" src="/assets/icons/pizza.svg" alt="" @click="pizzaClicked = true; openModal.pizza = true;">
    </div>
  </div>
  <Modal
    :class="{ 'd-none': openModal.beer === false }"
    :img="'beer-photo.webp'"
    :heading="'Título de ejemplo'"
    :body="'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At inventore similique iure dignissimos, accusamus adipisci maxime neque voluptatem dolor quibusdam cum corrupti unde vel numquam, tenetur magnam saepe autem consequuntur.'"
    @closeModal="openModal.beer = false"
  />
  <Modal
    :class="{ 'd-none': openModal.pizza === false }"
    :video="'beach-video.mp4'"
    :heading="'Título de ejemplo'"
    :body="'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At inventore similique iure dignissimos, accusamus adipisci maxime neque voluptatem dolor quibusdam cum corrupti unde vel numquam, tenetur magnam saepe autem consequuntur.'"
    @closeModal="openModal.pizza = false"
  />
</template>

<style scoped>
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

.d-none {
  display: none;
}
</style>