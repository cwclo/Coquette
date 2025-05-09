<template>
  <div
    class="relative overflow-hidden"
    :class="inverse ? 'mask-top' : 'mask-bottom'"
    :style="{ backgroundColor: bgColor }"
  >
    <!-- Motif déco art déco centré -->
    <div
      class="absolute inset-0 flex justify-center items-center pointer-events-none opacity-10"
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

    <!-- Vague animée horizontalement -->
    <div class="overflow-hidden h-24 relative">
      <svg
        class="w-[200%] h-full animated-wave opacity-30"
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
        :class="inverse ? 'rotate-180' : ''"
        :style="{
          color: waveColor,
          animationDuration: waveSpeed + 's',
          '--amplitude': '-' + waveAmplitude + '%',
        }"
        fill="currentColor"
      >
        <path d="M0,160 C720,80 2160,240 2880,160 L2880,320 L0,320 Z" />
      </svg>
    </div>
  </div>
</template>

<script setup>
defineProps({
  inverse: { type: Boolean, default: false },
  bgColor: { type: String, default: "#f9f6ec" },
  waveColor: { type: String, default: "#d18181" },
  strokeColor: { type: String, default: "#2c2c2c" },
  waveSpeed: { type: Number, default: 12 },
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

/* Masques doux */
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
