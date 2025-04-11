<template>
  <section class="bg-black px-6 py-20 md:px-12" id="gallery">
    <h2
      class="text-3xl md:text-4xl font-bold text-gray-400 text-center mb-12 text-[#2c2c2c]"
    >
      Galerie
    </h2>

    <div class="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
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
