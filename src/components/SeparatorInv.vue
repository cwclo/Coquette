<template>
  <div class="relative bg-[#d7d0b4] overflow-hidden">
    <!-- Motif déco art déco inversé -->
    <div
      class="absolute inset-0 flex justify-center items-center pointer-events-none opacity-10 rotate-180"
    >
      <svg class="w-1/2 h-24" viewBox="0 0 100 100" fill="none">
        <g stroke="#f9f6ec" stroke-width="0.5">
          <path d="M50 0 L50 100" />
          <path d="M0 100 Q50 0 100 100" />
          <path d="M10 100 Q50 20 90 100" />
          <path d="M20 100 Q50 40 80 100" />
          <path d="M30 100 Q50 60 70 100" />
        </g>
      </svg>
    </div>

    <!-- Vague inversée (vers le haut) -->
    <svg
      class="w-full h-16 md:h-24 text-[#f9f6ec] rotate-180"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      fill="currentColor"
    >
      <path d="M0,224 C480,160 960,288 1440,224 L1440,320 L0,320 Z" />
    </svg>
  </div>
</template>

<script setup>
// Aucun script requis
</script>

<style scoped>
svg path {
  transition: transform 0.5s ease-in-out;
}

svg:hover path {
  transform: scaleY(1.03);
}
</style>
