<script setup>
import Beach from "@/components/Scenery/Beach.vue"
import Travel from "./Scenery/Travel.vue";
import Circus from "./Scenery/Circus.vue";

import { ref } from 'vue'
import SecretScenery from "./Scenery/SecretScenery.vue";
let sceneryActive = ref('');
sceneryActive.value = 'beach'
const changeScenery = (i) => {
  sceneryActive.value = i;
}

/* CHEAT CODE */
let cheatCode = "contigo";
let writtenLetter = [];
let writtenWord;

window.addEventListener('keydown', (pressedKey) => {
  const index = writtenLetter.length;
  
  if (cheatCode[index] === pressedKey.key) {
    writtenLetter.push(pressedKey.key);
    writtenWord = writtenLetter.join("");
  } else {
    writtenLetter = [];
    writtenWord = "";
  }

  if (writtenWord === cheatCode) {
    secretFunction();
  }
})

function secretFunction() {
  sceneryActive.value = "secret scenery";
  console.log("secreto");
}
</script>

<template>
  <div>
    <Beach
      v-if="sceneryActive === 'beach'"
      @changeScenery="changeScenery"
    />
    <Travel
      v-if="sceneryActive === 'travel'"      
      @changeScenery="changeScenery"
    />
    <Circus
      v-if="sceneryActive === 'circus'"      
      @changeScenery="changeScenery"
    />
    <SecretScenery
      v-if="sceneryActive === 'secret scenery'"
    />
  </div>
    <!-- <NavMenu/> -->
</template>

<style>
.scenery__container {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
}
.scenery__content {
  aspect-ratio: 1.78 / 1;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: var(--border-radius-standard);
  box-shadow: 0px 0px 15px var(--color-light);
  height: 100%;
  max-width: 100%;
  position: relative;
}
</style>