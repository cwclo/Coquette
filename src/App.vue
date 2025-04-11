<template>
  <div class="scroll-smooth bg-[#fff8f8] text-[#2c2c2c]">
    <Header />
    <main>
      <section id="about"><About /></section>
      <section id="gallery"><Gallery /></section>
      <section id="reserve"><Reserve /></section>
      <section id="contact"><Contact /></section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "./components/Footer.vue";
import About from "./views/About.vue";
import Gallery from "./views/Gallery.vue";
import Reserve from "./views/Reserve.vue";
import Contact from "./views/Contact.vue";
</script>
