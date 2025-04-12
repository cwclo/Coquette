<template>
  <section class="px-6 py-20 md:px-12" id="gallery">
    <h2
      class="text-3xl md:text-4xl font-bold text-white text-center mb-12 section-scroll-offset"
    >
      GALERIE
    </h2>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <FadeInSection v-for="(img, index) in imagePaths" :key="index">
        <img
          :src="img"
          alt="Photo du restaurant"
          class="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover"
        />
      </FadeInSection>
    </div>
  </section>
</template>

<script setup>
import FadeInSection from "@/components/FadeInSection.vue";

// Auto-import all images in /src/assets/gallery
const images = import.meta.glob("@/assets/gallery/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

const imagePaths = Object.values(images);
</script>
