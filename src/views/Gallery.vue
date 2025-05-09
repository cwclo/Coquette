<template>
  <section id="gallery" class="px-6 pt-8 pb-20 md:px-12">
    <h2
      class="text-3xl md:text-5xl font-bold text-white text-center mb-12 section-scroll-offset"
    >
      GALERIE
    </h2>

    <!-- Grille Masonry -->
    <div class="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
      <FadeInSection v-for="(img, index) in visibleImages" :key="index">
        <div class="relative group overflow-hidden rounded-xl shadow-md">
          <img
            :src="img"
            alt="Photo du restaurant"
            class="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>
      </FadeInSection>
    </div>

    <!-- Bouton Voir plus -->
    <div class="text-center mt-10">
      <button
        v-if="visibleCount < imagePaths.length && !loading"
        @click="loadMore"
        class="px-6 py-2 rounded-full border border-[#d18181] text-[#d18181] font-title uppercase tracking-wide hover:bg-[#d18181]/10 transition duration-300"
      >
        Voir plus
      </button>

      <div
        v-if="loading"
        class="text-sm italic text-[#d18181] mt-4 animate-pulse"
      >
        Chargement...
      </div>

      <div
        v-else-if="visibleCount >= imagePaths.length"
        class="text-sm italic text-[#d18181] mt-4"
      >
        Toutes les images sont affichées.
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import FadeInSection from "@/components/FadeInSection.vue";

// Chargement auto des images
const images = import.meta.glob("@/assets/gallery/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});
const imagePaths = Object.values(images);

// Pagination locale
const visibleCount = ref(12);
const loading = ref(false);

const visibleImages = computed(() => imagePaths.slice(0, visibleCount.value));

function loadMore() {
  loading.value = true;
  setTimeout(() => {
    visibleCount.value += 12;
    loading.value = false;
  }, 500);
}
</script>

<style scoped>
/* Pour éviter que les colonnes brisent trop tôt */
img {
  break-inside: avoid;
}
</style>
