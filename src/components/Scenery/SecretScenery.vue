<script setup>
const today = new Date();
const firstConversation = new Date("11-02-2022");
const firstDate = new Date("11-20-2022");
const officiallyCouple = new Date("02-07-2023");
const ImDoingThis = new Date("01-31-2024");

const calculateDays = (date) => {
  const milliseconds = today - date;
  const days = Math.ceil(milliseconds / (1000 * 60 * 60 * 24));
  return days;
}
</script>

<template>
  <div class="secret-scenery">
    <h2>Hoy hace <span class="text-brand">{{ calculateDays(firstConversation) }}</span> días desde que hablamos por primera vez</h2>
    <h2><span class="text-brand">{{ calculateDays(firstDate) }}</span> desde nuestra primera cita</h2>
    <h2>Oficialmente, ya hemos sido novios <span class="text-brand">{{ calculateDays(officiallyCouple) }}</span></h2>
    <h2>Y llevo <span class="text-brand">{{ calculateDays(ImDoingThis) }}</span> esperando para poder hacer esto</h2>
  </div>
</template>

<style>
.secret-scenery {
  align-items: center;
  background-color: var(--color-light);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
}
</style>