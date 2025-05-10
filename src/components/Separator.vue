<template>
  <div
    class="relative overflow-hidden"
    :class="inverse ? 'mask-top' : 'mask-bottom'"
    :style="{ backgroundColor: bgColor }"
  >
    <!-- Motif art déco -->
    <div
      class="absolute inset-0 flex justify-center items-center pointer-events-none opacity-25"
      :class="inverse ? 'rotate-180' : ''"
    >
      <svg class="w-1/3 h-24" viewBox="0 0 100 100" fill="none">
        <g :stroke="strokeColor" stroke-width="0.6">
          <path d="M0 100 Q50 0 100 100" />
          <path d="M10 100 Q50 20 90 100" />
          <path d="M20 100 Q50 40 80 100" />
        </g>
      </svg>
    </div>

    <!-- Vague animée -->
    <div class="overflow-hidden h-24 relative">
      <svg
        class="w-[200%] h-full animated-wave"
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
        :class="inverse ? 'rotate-180' : ''"
        :style="{
          color: waveColor,
          animationDuration: waveSpeed + 's',
          '--amplitude': '-' + waveAmplitude + '%',
          opacity: 0.8, // ou 1 si tu veux sa vraie couleur
        }"
        fill="currentColor"
      >
        <path
          d="M0,160 C480,0 960,320 1440,160 C1920,0 2400,320 2880,160 L2880,320 L0,320 Z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
defineProps({
  inverse: { type: Boolean, default: false },
  bgColor: { type: String, default: "#2c2c2c" },
  waveColor: { type: String, default: "#d18181" },
  strokeColor: { type: String, default: "#d7d0b4" },
  waveSpeed: { type: Number, default: 10 },
  waveAmplitude: { type: Number, default: 50 },
});
</script>

<style scoped>
@keyframes slideWave {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(var(--amplitude));
  }
}

.animated-wave {
  animation: slideWave linear infinite;
}

.mask-bottom {
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
}

.mask-top {
  mask-image: linear-gradient(
    to top,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to top,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 100%
  );
}
</style>
