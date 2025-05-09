<template>
  <div class="scroll-smooth bg-gray-300 text-[#2c2c2c] overflow-x-hidden">
    <Header />
    <div class="hidden lg:block h-24 bg-gray-300"></div>
    <main>
      <section id="about" class="scroll-mt-24"><About /></section>
      <Separator />
      <section id="gallery"><Gallery /></section>
      <Separator :inverse="true" />
      <section id="reserve"><Reserve /></section>
      <Separator />
      <section id="contact"><Contact /></section>
      <Separator
        :inverse="false"
        bgColor="#2c2c2c"
        waveColor="#f9f6ec"
        strokeColor="#d7d0b4"
      />
    </main>
    <Footer />

    <!-- Bouton retour en haut -->
    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Separator from "./components/Separator.vue";
import About from "./views/About.vue";
import Gallery from "./views/Gallery.vue";
import Reserve from "./views/Reserve.vue";
import Contact from "./views/Contact.vue";
import ScrollToTop from "./components/ScrollToTop.vue";

const showScrollTop = ref(false);

function handleScroll() {
  showScrollTop.value = window.scrollY > 300;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>
