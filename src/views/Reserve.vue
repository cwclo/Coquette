<template>
  <section
    id="reserve"
    class="relative px-6 py-24 md:px-12 text-center bg-black/80 text-[#d7d0b4]"
  >
    <a
      href="https://www.opentable.ca/"
      target="_blank"
      rel="noopener"
      class="group block max-w-5xl mx-auto cursor-pointer select-none transition duration-300 rounded-lg p-4 border border-[#d18181] bg-[#d18181]/5 hover:bg-[#d18181]/10 active:bg-[#d18181]/20 md:border-transparent md:bg-transparent"
    >
      <!-- Titre Réservez avec effet de remplissage -->
      <h2
        class="relative inline-block text-5xl md:text-7xl font-title tracking-wide mb-8 leading-tight"
      >
        <span class="text-outline absolute inset-0">Réservez</span>
        <span class="text-fill relative">Réservez</span>
      </h2>

      <!-- Sous-texte stylisé -->
      <div
        class="flex items-center justify-center gap-6 text-sm uppercase tracking-widest font-title relative"
      >
        <div
          class="w-16 h-px bg-[#d18181] group-hover:w-20 transition-all duration-300"
        ></div>
        <span class="text-[#d18181] whitespace-nowrap">Votre table</span>
        <div
          class="flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
        >
          <div
            class="w-16 h-px bg-[#d18181] group-hover:w-20 transition-all duration-300"
          ></div>
          <svg
            class="w-4 h-4 text-[#d18181] group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </a>
    <p class="text-gray-500 text-lg mb-10 mt-10">
      Viens vivre l'expérience Coquette 🍷<br />
      Réserve ta table en ligne en quelques clics.
    </p>
  </section>
</template>

<style scoped>
.text-outline {
  color: transparent;
  -webkit-text-stroke: 1px #d18181;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  z-index: 1;
  pointer-events: none;
}

.text-fill {
  color: #d18181;
  clip-path: inset(100% 0 0 0 round 0);
  transition: clip-path 1.2s ease-in-out;
  z-index: 2;
}

.group:hover .text-fill {
  clip-path: inset(0 0 0 0 round 0);
}

@media (hover: none) {
  .text-fill {
    clip-path: inset(0 0 0 0 round 0);
  }
}
</style>
