<script setup>
import Modal from '@/components/Modal/Index.vue'

import { ref, reactive } from 'vue'

let planeClicked = ref(false);
let pinClicked = ref(false);

let openModal = reactive({
  plane: false,
  pin: false,
});

const emit = defineEmits(['change-scenery']);
const changeScenery = () => {
  emit('change-scenery', 'circus');
}
</script>

<template>
  <div class="scenery__container bg-action-primary px-L py-M">
    <img :class="{ 'plane':true, 'custom-cursor':true }" src="/assets/icons/plane.svg" alt="" @click="planeClicked = true; openModal.plane = true;">
    <div class="scenery__content">
      <img :class="{ 'pin':true, 'custom-cursor':true, 'click-this': planeClicked === true && pinClicked === false }" src="/assets/icons/pin.svg" alt="" @click="pinClicked = true; openModal.pin = true;">
      <img v-show="planeClicked === true && pinClicked === true" :class="{ 'next-btn':true, 'custom-cursor':true, 'click-this': true }" src="/assets/icons/beach-next.png" alt="" @click="changeScenery">
    </div>
  </div>
  <Modal
    :class="{ 'd-none': openModal.plane === false }"
    :img="'granada-photo.webp'"
    :heading="'Por todos los viajes que nos quedan por hacer'"
    :body="'Por todos esos sitios que descubriremos cuando tengamos la oportunidad y por todos aquellos en los que repetiremos. Por Granada, Asturias, Tailandia y París'"
    @closeModal="openModal.plane = false"
  />
  <Modal
    :class="{ 'd-none': openModal.pin === false }"
    :img="'murcia-photo.webp'"
    :heading="'Mientras tanto...'"
    :body="'Siempre podremos volver a aquellos lugares donde ya hemos sido felices 🍋'"
    @closeModal="openModal.pin = false"
  />
</template>

<style scoped>
.scenery__container {
  background-color: #825209;
  overflow: hidden;
}
.scenery__content {
  background-image: url("/assets/img/travel-background.webp");
  box-shadow: none;
}
.d-none {
  display: none;
}
.pin {
  height: 8.5%;
  left: 46.1%;
  position: absolute;
  top: 33.2%;
}
.plane {
  animation: plane-movement 30s linear infinite;
  height: 12%;
  left: -6%;
  position: absolute;
  top: -10%;
  z-index: 2;
}
.plane:hover {
  transform: scale(1.2);
}
@keyframes plane-movement {
  100%{
    transform: translate(110vw, 110vh);
  }
}
.next-btn {
  min-height: 5%;
  right: 9%;
  position: absolute;
  bottom: 10%;
}
</style>