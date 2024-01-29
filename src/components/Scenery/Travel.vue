<script setup>
import Modal from '@/components/Modal/Index.vue'

import { ref, reactive } from 'vue'

/* let beerClicked = ref(false);
let pizzaClicked = ref(false); */

let openModal = reactive({
/*   beer: false,
  pizza: false, */
});

const emit = defineEmits(['change-scenery']);
const changeScenery = () => {
  emit('change-scenery', /* 'travel' */);
}
</script>

<template>
  <div class="scenery__container bg-action-primary p-L">
    <div class="scenery__content">
      <img :class="{ 'pin':true, 'pin1':true, 'custom-cursor':true, 'click-this': firstPinClicked === false }" src="/assets/icons/pin.svg" alt="" @click="beerClicked = true; openModal.beer = true;">
      <img :class="{ 'pin':true, 'pin2':true, 'custom-cursor':true, 'click-this': firstPinClicked === false }" src="/assets/icons/pin.svg" alt="" @click="beerClicked = true; openModal.beer = true;">
      <!-- 
      <img :class="{ 'pizza':true, 'custom-cursor':true, 'click-this': beerClicked === true && pizzaClicked === false }" src="/assets/icons/pizza.svg" alt="" @click="pizzaClicked = true; openModal.pizza = true;"> -->
      <img v-show="beerClicked === true && pizzaClicked === true" :class="{ 'beach__next-btn':true, 'custom-cursor':true, 'click-this': true }" src="/assets/icons/beach-next.png" alt="" @click="changeScenery">
    </div>
  </div>
  <Modal
    :class="{ 'd-none': true }"
    :img="'beer-photo.webp'"
    :heading="'Por todos esos momentos...'"
    :body="'Esto es un pequeño homenaje a un año repleto de momentos muy especiales juntos. Por esos días de playa y cervezas, por esos ratos bailando en la arena y por todas las comidas escuchando las olas de fondo'"
    @closeModal="openModal.beer = false"
  />
  <Modal
    :class="{ 'd-none': true }"
    :video="'beach-video.mp4'"
    :heading="'...y por los que quedan'"
    :body="'Pero también es un homenaje a todos los momentos que nos quedan por vivir. Por eso quiero volver a tener la cita perfecta contigo: yo pongo las pizzas, tú la cerveza y vámonos a la playa cuando haga buen tiempo 😎'"
    @closeModal="openModal.pizza = false"
  />
</template>

<style scoped>
.scenery__container {
  background-color: #825209;
}
.scenery__content {
  background-image: url("/assets/img/travel-background.webp");
  box-shadow: none;
}
.d-none {
  display: none;
}

.pin {
  height: 5%;
  position: absolute;
}
.pin1 {
  left: 67.5%;
  top: 50%;
}
.pin2 {
  left: 46.5%;
  top: 36.2%;
}
</style>