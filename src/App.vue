<template>
  <div class="scroll-smooth bg-black/80 text-[#2c2c2c] overflow-x-hidden">
    <Header />
    <div class="hidden lg:block h-24"></div>
    <main>
      <section id="about" class="scroll-mt-24"><About /></section>
      <Separator
        :inverse="false"
        bgColor="black"
        waveColor="#d18181"
        strokeColor="#d7d0b4"
      />

      <section class="scroll-mt-20"><Gallery /></section>
      <Separator
        :inverse="false"
        bgColor="black"
        waveColor="#d18181"
        strokeColor="#d7d0b4"
      />

      <section id="reserve"><Reserve /></section>
      <Separator
        :inverse="false"
        bgColor="black"
        waveColor="#d18181"
        strokeColor="#d7d0b4"
      />

      <section id="contact"><Contact /></section>
    </main>
    <Footer />
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
