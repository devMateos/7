<script setup>
const props = defineProps({
  img: {
    type: String,
  },
  heading: {
    type: String,
  },
  body: {
    type: String,
  },
  openModal: {
    type: Boolean,
  }
});


const emit = defineEmits(['closeModal']);
const closeModal = () => {
  emit("closeModal", false)
}
</script>

<template>
    <div class="modal p-L">
      <div class="modal__content py-M px-XL">
        <div class="modal__info">
          <img :src="`/public/assets/img/${props.img}`" alt="">
          <h3>{{ props.body }}</h3>
          <!-- <div class="modal__text">
            <h3 class="my-L">{{ props.heading }}</h3>
          </div> -->
        </div>
        <img class="modal__close-icon" src="/public/assets/icons/close-icon.svg" alt="cerrar" @click="closeModal">
      </div>
    </div>
</template>

<style scoped>
.modal {
  align-items: center;
  display: flex;
  height: 100vh;
  left: 0;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 10;
}
.modal > * {
  z-index: 1;
}
.modal::before {
  background-color: var(--color-light);
  content: '';
  height: 100%;
  left: 0;
  opacity: .8;
  top: 0;
  position: absolute;
  width: 100%;
}
.modal__content {
  aspect-ratio: 2 / 1;
  background-color: var(--color-light);
  border: var(--border-standard);
  border-radius: var(--border-radius-standard);
  display: flex;
  height: 100%;
  max-height: 750px;
  max-width: 100%;
  position: relative;
}
.modal__close-icon {
  right: var(--spacing-M);
  top: var(--spacing-M);
  position: absolute;
}
.modal__info {
  align-items: center;
  display: flex;
  gap: var(--spacing-XL);
  height: 100%;
  justify-content: space-evenly;
  width: 100%;
}
.modal__info > img {
  border-radius: var(--border-radius-standard);
  box-shadow: 0px 0px 8px var(--color-action-secondary);
  object-fit: fill;
  max-height: 100%;
  max-width: 100%;
}
.modal__info > h3 {
  max-width: 600px;
}
</style>