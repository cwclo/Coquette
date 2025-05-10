<template>
  <section
    id="menu"
    class="relative px-6 py-24 md:px-12 text-center bg-black/80 text-[#f5f0d7]"
  >
    <a
      href="/menu.pdf"
      download
      class="group block max-w-5xl mx-auto cursor-pointer select-none transition duration-300 rounded-lg p-4 border border-[#d18181] bg-[#d18181]/5 hover:bg-[#d18181]/10 active:bg-[#d18181]/20 md:border-transparent md:bg-transparent text-center"
    >
      <h2
        class="font-title tracking-wide text-4xl md:text-6xl leading-tight mb-8"
      >
        <span class="block relative">
          <span class="text-outline absolute inset-0">Découvrez notre</span>
          <span class="text-fill relative">Découvrez notre</span>
        </span>
        <span class="block relative mt-2">
          <span class="text-outline absolute inset-0">&nbsp;Menu</span>
          <span class="text-fill relative">&nbsp;Menu</span>
        </span>
      </h2>

      <div
        class="flex items-center justify-center gap-6 text-sm uppercase tracking-widest font-title"
      >
        <div
          class="w-16 h-px bg-[#d18181] group-hover:w-20 transition-all duration-300"
        ></div>
        <span class="text-[#d18181] whitespace-nowrap">Format PDF</span>
        <div
          class="w-16 h-px bg-[#d18181] group-hover:w-20 transition-all duration-300"
        ></div>
      </div>
    </a>

    <!-- Aperçu de l’image du menu -->
    <div
      class="max-w-4xl mx-auto rounded-xl overflow-hidden border border-[#d18181] shadow-md mt-12"
    >
      <img
        src="/images/menu_preview.jpg"
        alt="Menu Coquette"
        class="w-full object-contain"
      />
    </div>
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
