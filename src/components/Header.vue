<template>
  <header
    class="sticky top-0 left-0 w-full z-50 px-4 md:px-8 py-3 md:py-4 flex justify-between items-center bg-black backdrop-blur-lg shadow-md"
  >
    <!-- Logo -->
    <img
      src="/images/logos/coquette_logo_rose.png"
      alt="Logo Coquette"
      class="w-12 md:w-16 lg:w-20 xl:w-24 h-auto object-contain transition-all duration-300"
    />

    <!-- Desktop Nav -->
    <nav
      class="hidden md:flex items-center space-x-8 md:space-x-10 lg:space-x-14 xl:space-x-16 text-[#d18181] tracking-wide"
    >
      <!-- <NavLink
        href="#about"
        class="text-base md:text-lg lg:text-2xl xl:text-3xl"
      >
        À propos
      </NavLink> -->
      <NavLink
        href="#gallery"
        class="text-base md:text-lg lg:text-2xl xl:text-3xl"
      >
        Galerie
      </NavLink>
      <NavLink
        href="#reserve"
        class="text-base md:text-lg lg:text-2xl xl:text-3xl"
      >
        Réserver
      </NavLink>
      <NavLink
        href="#contact"
        class="text-base md:text-lg lg:text-2xl xl:text-3xl"
      >
        Nous joindre
      </NavLink>
      <NavLink href="#menu">Menu</NavLink>
    </nav>

    <!-- Hamburger -->
    <button v-if="!isOpen" @click="toggleMenu" class="md:hidden z-50 mr-2">
      <img src="/images/icon-hamburger.svg" alt="Menu" class="w-6 h-6" />
    </button>

    <!-- Overlay -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/40 z-40"
      @click="closeMenu"
    >
      <!-- Mobile Slide-In Menu -->
      <transition name="slide">
        <div
          v-if="isOpen"
          class="fixed top-0 right-0 h-screen w-[70%] bg-black/80 text-[#2c7566] flex flex-col items-center justify-center gap-8 font-semibold text-lg shadow-2xl z-[50] pt-20 px-6"
        >
          <!-- Close Button -->
          <button
            @click="closeMenu"
            class="absolute top-6 right-6 text-[#d18181] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Mobile NavLinks -->
          <!-- <NavLink href="#about" @click="closeMenu">À propos</NavLink> -->
          <NavLink href="#gallery" @click="closeMenu">Galerie</NavLink>
          <NavLink href="#reserve" @click="closeMenu">Réserver</NavLink>
          <NavLink href="#menu">Menu</NavLink>

          <a
            href="#contact"
            @click="closeMenu"
            class="bg-[#d18181] text-[#2c2c2c] px-6 py-2 rounded-full tracking-wide font-title text-sm shadow-md hover:bg-white transition duration-300"
          >
            NOUS JOINDRE
          </a>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import NavLink from "./NavLink.vue";

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}

function handleEscape(event) {
  if (event.key === "Escape") {
    closeMenu();
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleEscape);
});
onUnmounted(() => {
  window.removeEventListener("keydown", handleEscape);
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0%);
}
.slide-leave-from {
  transform: translateX(0%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
