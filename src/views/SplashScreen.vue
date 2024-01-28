<template>
  <div class="bg-light">
    <div class="loader">
      <img class="heart-icon" src="/public/assets/icons/heart-icon.svg" alt="">
      <img class="heart-icon" src="/public/assets/icons/heart-icon.svg" alt="">
      <img class="heart-icon" src="/public/assets/icons/heart-icon.svg" alt="">
    </div>
  </div>
</template>

<style scoped>
div {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
}
.loader {
  display: flex;
  gap: var(--spacing-L);
}
.heart-icon {
  height: 100px;
  width: 100px;
  animation: heart-animation 2s linear infinite;
}
.heart-icon:nth-of-type(1) {
  animation-delay: 0;
}
.heart-icon:nth-of-type(2) {
  animation-delay: .3s;
}
.heart-icon:nth-of-type(3) {
  animation-delay: .6s;
}

@keyframes heart-animation {
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(.2)
  }
  100% {
    transform: scale(1)
  }
}
</style>