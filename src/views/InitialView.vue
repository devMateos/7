<script setup>
import { ref } from 'vue'

const props = defineProps({
  password: {
    type: String,
  }
});

const today = new Date;
const februarySeventh = new Date("01-07-2024");

let passwordEntered = ref();
let access = ref();
const checkAccess = ref(() => {
  console.log(passwordEntered.value);

  if (today < februarySeventh) {
    access.value = "too soon";
  } else {
    if (passwordEntered.value !== props.password){
      access.value = "wrong password";
    } else if (passwordEntered.value === props.password) {
      access.value = "right password";
    }
  }
  console.log(access.value);
});
console.log(today);
</script>

<template>
  <div class="portrait bg-brand p-XXL text-light">
    <img src="@/assets/animations/rotate-phone.webp" alt="Gira tu teléfono o amplía la ventana">
    <span class="h2">Gira tu teléfono o amplía la ventana</span>
  </div>

  <div class="landscape bg-brand p-XXL text-light">
    <form>
      <label class="h2">Introduce la contraseña:</label>
      <div class="password-container">
        <input type="password" class="form__input-item" v-model="passwordEntered">
        <button class="button button--primary" @click.prevent="checkAccess">Entrar</button>
      </div>
      <p v-show="access === 'wrong password'">Contraseña equivocada</p>
      <p v-show="access === 'too soon'">Aún es pronto. Espera hasta el 7 de febrero 😉</p>
      <p v-show="access === 'right password'">Contraseña correcta</p>
    </form>
  </div>
</template>

<style scoped>
@media (orientation: portrait) {
  .portrait {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    text-align: center;
    width: 100vw;  
  }
  .portrait * {
    max-width: 80%;
  }

  .landscape {
    display: none;
  }
}

@media (orientation: landscape) {
  .portrait {
    display: none;
  }
  .landscape {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
  }
  .landscape form {
    display: flex;
    gap: var(--spacing-L);
    flex-direction: column;
    max-width: 500px;
    position: relative;
  }
  .landscape form * {
    width: 100%;
  }
  .password-container {
    display: flex;
    gap: var(--spacing-S);
  }
  .password-container button {
    width: 100px;
  }
  form > p {
    top: 110%;
    position: absolute;
  }
}

</style>