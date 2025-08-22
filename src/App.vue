<script setup lang="ts">
// import { ref } from "vue";
// import { invoke } from "@tauri-apps/api/core";

// const greetMsg = ref("");
// const name = ref("");

// async function greet() {
//   greetMsg.value = await invoke("greet", { name: name.value });
// }
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="slide-y" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<style>
:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  color: #0f0f0f;
  background-color: #f6f6f6;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

.slide-y-enter-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-y-enter-from,
.slide-y-leave-to {
  transform: translateY(15px);
  opacity: 0;
}
.slide-y-enter-to,
.slide-y-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>