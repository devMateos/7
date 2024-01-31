<script setup>
import Modal from '@/components/Modal/Index.vue'

import { ref, reactive } from 'vue'

let openCurtains = ref(false);


let openModal = reactive({
  plane: false,
  pin: false,
});

/* const emit = defineEmits(['change-scenery']);
const changeScenery = () => {
  emit('change-scenery', 'circus');
} */
</script>

<template>
  <div class="scenery__container px-L py-M">
    <div class="curtains">
      <div :class="{ 'curtain1': true, 'curtain--movement': openCurtains === false }"></div>
      <div :class="{ 'curtain2': true, 'curtain--movement': openCurtains === false }"></div>

      <div :class="{'curtains__modal': true, 'p-L': true, 'd-none': openCurtains === true }">
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
        <div>
          <img src="/assets/icons/beach-next.png" class="open-curtains__btn click-this custom-cursor" alt="" @click="openCurtains = true">
        </div>
      </div>

    </div>

    <div class="scenery__content">
      <h2 class="text-light">🤡 Pero sobre todo por todos estos:</h2>
      <div class="scenery__imgs-container">
        <img src="/assets/img/circus/photo1.webp" alt="">
        <img src="/assets/img/circus/photo2.webp" alt="">
        <img src="/assets/img/circus/photo3.webp" alt="">
      </div>
      <div class="scenery__items"></div>
    </div>
  </div>
</template>

<style scoped>
/* CURTAINS */
.curtains {
  display: flex;
  height: 100vh;
  left: 0;
  overflow: hidden;
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
  overflow: hidden;
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
.open-curtains__btn {
  height: 4.5vh;
  margin: 0 auto;
}
@keyframes carousel {
  100% {
    transform: translateX(-200vw);
  }
}

/* SCENERY */
.scenery__container {
  background-color: var(--color-darker);
  background-image: url("/assets/img/circus-background.webp");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
}
.scenery__content {
  align-items: center;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
}
.scenery__imgs-container {
  align-items: end;
  display: grid;
  gap: var(--spacing-M);
  grid-template-columns: 3fr 5fr 3fr;
  max-height: 50%;
  width: 70%;
}
.scenery__imgs-container img {
  border: var(--border-standard);
  border-radius: var(--border-radius-standard);
  max-height: 100%;
  max-width: 100%;
}
.scenery__items {
  height: 20%;
}
.d-none {
  display: none;
}


</style>