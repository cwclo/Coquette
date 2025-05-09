<template>
  <section id="contact" class="px-6 py-24 md:px-12 bg-[#2c2c2c] text-[#f9f6ec]">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
      <!-- Colonne gauche -->
      <div
        ref="leftCol"
        :class="[
          'transition-all duration-700',
          showLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10',
        ]"
      >
        <h2 class="text-4xl font-bold mb-6 font-title tracking-wide">
          Nous joindre
        </h2>

        <p class="text-[#d7d0b4] mb-6 leading-relaxed">
          Tu veux réserver une table, organiser un événement ou simplement nous
          dire bonjour&nbsp;?
          <br />
          <span class="text-[#d18181] font-semibold"
            >Écris-nous ou passe nous voir&nbsp;!</span
          >
        </p>

        <div class="space-y-3 text-sm leading-relaxed text-[#d7d0b4]">
          <h3
            class="text-xl font-semibold text-[#f9f6ec] uppercase tracking-wider"
          >
            Restaurant Coquette
          </h3>
          <p>
            10041 Ave Royale<br />
            Sainte-Anne-de-Beaupré, QC G0A 3C0
          </p>
          <p class="flex items-center gap-2 mt-2">
            📞
            <a href="tel:4181234567" class="hover:text-[#d18181]"
              >(418) 123-4567</a
            >
          </p>
          <p class="flex items-center gap-2">
            ✉️
            <a
              href="mailto:Coquette.resto@gmail.com"
              class="hover:text-[#d18181]"
              >Coquette.resto@gmail.com</a
            >
          </p>
          <p class="italic text-[#bbb] mt-2">
            Ouvert du mardi au dimanche —
            <span class="font-medium">17h à 23h</span>
          </p>
        </div>

        <img
          src="/images/contact.jpg"
          alt="Ambiance restaurant"
          class="rounded-xl shadow-xl w-full h-48 object-cover mt-6 hidden md:block"
        />
      </div>

      <!-- Colonne droite -->
      <div
        ref="rightCol"
        :class="[
          'transition-all duration-700 delay-150',
          showRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10',
        ]"
      >
        <iframe
          class="w-full h-[400px] rounded-xl shadow-lg border border-[#d7d0b4]/20"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.340148124057!2d-70.9329642!3d47.023874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8c9f3e9f30dbd%3A0x81f3b54528e6bf7a!2s10041%20Av.%20Royale%2C%20Sainte-Anne-de-Beaupr%C3%A9%2C%20QC%20G0A%203C0!5e0!3m2!1sfr!2sca!4v1715378500000!5m2!1sfr!2sca"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from "@/composables/useScrollReveal";

const { el: leftCol, isVisible: showLeft } = useScrollReveal();
const { el: rightCol, isVisible: showRight } = useScrollReveal();
</script>
