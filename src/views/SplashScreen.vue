<template>
  <div class="splashscreen bg-light">
    <div class="loader">
      <img class="heart-icon" src="/assets/icons/heart-icon.svg" alt="">
      <img class="heart-icon" src="/assets/icons/heart-icon.svg" alt="">
      <img class="heart-icon" src="/assets/icons/heart-icon.svg" alt="">
    </div>
    <h2 class="splashscreen__text mt-M text-brand">Feliz aniversario 💕</h2>
  </div>
</template>

<style scoped>
.splashscreen {
  align-items: center;
  display: flex;
  flex-direction: column;
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
.splashscreen__text {
  animation: text-appears 1s linear 2s forwards;
  opacity: 0;
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

@keyframes text-appears {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>