<template>
  <div class="portrait bg-brand p-XXL text-light">
    <img src="@/assets/animations/rotate-phone.webp" alt="Gira tu teléfono o amplía la ventana">
    <span class="h2">Gira tu teléfono o amplía la ventana</span>
  </div>

  <div class="landscape bg-brand p-XXL text-light">
    <form>
      <label class="h2">Introduce la contraseña</label>
      <div class="password-container">
        <input type="text" class="form__input-item">
        <button class="button button--primary" @click.prevent="checkAccess">Entrar</button>
      </div>
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
    max-width: 350px;
  }
  .landscape form * {
    width: 100%;
  }
  .password-container {
    display: flex;
  }
  .password-container button {
    width: 100px;
  }
}

</style>