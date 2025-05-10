<template>
  <transition name="fade-slide">
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="fixed bottom-4 right-4 z-50 px-3 py-2 rounded-lg border border-[#d18181] text-[#d18181] text-sm font-title tracking-wide uppercase bg-black/60 backdrop-blur-md shadow-md transition-all duration-300 hover:bg-[#d18181] hover:text-black hover:border-white"
      aria-label="Retour en haut"
    >
      Haut ↑
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleScroll() {
  isVisible.value = window.scrollY > 300;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
