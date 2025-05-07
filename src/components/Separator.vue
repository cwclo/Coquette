<template>
  <div
    class="relative overflow-hidden"
    :class="[inverse ? 'fade-mask-inverse' : 'fade-mask']"
    :style="{ backgroundColor: bgColor }"
  >
    <!-- Motif déco -->
    <div
      class="absolute inset-0 flex justify-center items-center pointer-events-none opacity-15"
      :class="inverse ? 'rotate-180' : ''"
    >
      <svg class="w-1/2 h-24" viewBox="0 0 100 100" fill="none">
        <g :stroke="strokeColor" stroke-width="0.5">
          <path d="M50 0 L50 100" />
          <path d="M0 100 Q50 0 100 100" />
          <path d="M10 100 Q50 20 90 100" />
          <path d="M20 100 Q50 40 80 100" />
          <path d="M30 100 Q50 60 70 100" />
        </g>
      </svg>
    </div>

    <!-- Vague -->
    <svg
      class="w-full h-16 md:h-24 opacity-30"
      :class="inverse ? 'rotate-180' : ''"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      fill="currentColor"
      :style="{ color: waveColor }"
    >
      <path d="M0,224 C480,160 960,288 1440,224 L1440,320 L0,320 Z" />
    </svg>
  </div>
</template>

<script setup>
defineProps({
  inverse: {
    type: Boolean,
    default: false,
  },
  bgColor: {
    type: String,
    default: "#f9f6ec",
  },
  waveColor: {
    type: String,
    default: "#d18181",
  },
  strokeColor: {
    type: String,
    default: "#2c2c2c",
  },
});
</script>

<style scoped>
svg path {
  transition: transform 0.5s ease-in-out;
}
svg:hover path {
  transform: scaleY(1.03);
}

/* Dégradés de fondu haut et bas */
.fade-mask {
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
}

.fade-mask-inverse {
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
}
</style>
