<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  password: {
    type: String,
  }
});

const today = new Date;
const februarySeventh = new Date("02-07-2024");

let passwordEntered = ref();
let access = ref();
const checkAccess = ref(() => {
  if (today < februarySeventh) {
    access.value = "too soon";
  } else {
    if (passwordEntered.value !== props.password){
      access.value = "wrong password";
    } else if (passwordEntered.value === props.password) {
      access.value = "right password";
    }
  }
});

const emit = defineEmits(['grantAccess']);
watch(access, (newValue, oldValue) => {
  if (newValue === 'right password') {
    emit('grantAccess');
  }
});

</script>

<template>
  <div class="initial-view bg-brand p-XXL text-light">
    <form>
      <label class="h2">Introduce la contraseña:</label>
      <div class="password-container">
        <input type="password" class="form__input-item" v-model="passwordEntered">
        <button class="button button--primary" @click.prevent="checkAccess">Entrar</button>
      </div>
      <p v-show="access === 'wrong password'">Contraseña equivocada</p>
      <p v-show="access === 'too soon'">Aún es pronto. Espera hasta el 7 de febrero 😉</p>
    </form>
  </div>
</template>

<style scoped>
.initial-view {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
}
.initial-view form {
  display: flex;
  gap: var(--spacing-L);
  flex-direction: column;
  max-width: 500px;
  position: relative;
}
.initial-view form * {
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

</style>