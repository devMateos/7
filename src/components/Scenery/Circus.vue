<script setup>
import Modal from '@/components/Modal/Index.vue'

import { ref, reactive } from 'vue'

let openCurtains = ref(false);

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
    <div class="curtains">
      <div :class="{ 'curtain1': true, 'curtain--movement': openCurtains === false }"></div>
      <div :class="{ 'curtain2': true, 'curtain--movement': openCurtains === false }"></div>

      <div class="curtains__modal p-L">
        <h2 class="text-light">Por todos estos momentos</h2>
        <div class="curtains__carousel">
          <div class="carousel__item1">
            <img src="/assets/img/curtains/photo1.webp" alt="">
            <img src="/assets/img/curtains/photo2.webp" alt="">
            <img src="/assets/img/curtains/photo3.webp" alt="">
            <img src="/assets/img/curtains/photo4.webp" alt="">
            <img src="/assets/img/curtains/photo5.webp" alt="">
          </div>
          <div class="carousel__item2">
            <img src="/assets/img/curtains/photo1.webp" alt="">
            <img src="/assets/img/curtains/photo2.webp" alt="">
            <img src="/assets/img/curtains/photo3.webp" alt="">
            <img src="/assets/img/curtains/photo4.webp" alt="">
            <img src="/assets/img/curtains/photo5.webp" alt="">
          </div>
        </div>
        <div class="open-curtains__btn"></div>
      </div>

    </div>

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
  background-color: var(--color-darker);
  overflow: hidden;
}

.curtains {
  display: flex;
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 3;
}
.curtain1, .curtain2 {
  background-image: url("/assets/img/curtains.webp");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  transition: 2s ease-out;
  width: 50%;
}
.curtain1 {
  background-position: right;
  transform: translateX(-100%);
}
.curtain2 {
  background-position: left;
  transform: translateX(100%);
}
.curtain--movement {
  transform: translateX(0);
}

.curtains__modal {
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  justify-content: space-evenly;
  position: absolute;
  text-align: center;
  top: 0;
  width: 100vw;
  z-index: 10;
}
.curtains__modal > * {
  z-index: 1;
}
.curtains__modal::before {
  background-color: var(--color-darker);
  content: '';
  height: 100%;
  left: 0;
  opacity: .8;
  top: 0;
  position: absolute;
  width: 100%;
}
.curtains__carousel {
  display: flex;
  height: 50%;
  position: relative;
  width: 100vw;
}
.curtains__carousel > div {
  display: flex;
  height: 100%;
  justify-content: space-around;
  position: absolute;
  right: -100%;
  width: 100%;
}
.carousel__item1 {
  animation: carousel 30s linear infinite;
}
.carousel__item2 {
  animation: carousel 30s linear 15s infinite;
}
.curtains__carousel > div > img {
  border: var(--border-standard);
  border-radius: var(--border-radius-standard);
  width: 16.7%;
}

.scenery__content {
  background-image: url("/assets/img/travel-background.webp");
  box-shadow: none;
}
.d-none {
  display: none;
}

@keyframes carousel {
  100% {
    transform: translateX(-200vw);
  }
}
@keyframes carousel2 {
  100% {
    transform: translateX(-300vw);
  }
}
.next-btn {
  min-height: 5%;
  right: 9%;
  position: absolute;
  bottom: 10%;
}
</style>