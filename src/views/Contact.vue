<template>
  <section id="contact" class="bg-[#f9f6ec] px-6 py-24 md:px-12">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
      <!-- Colonne gauche -->
      <div
        ref="leftCol"
        :class="[
          'transition-all duration-700',
          showLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10',
        ]"
      >
        <h2 class="text-4xl font-bold text-[#2c2c2c] mb-4">Nous joindre</h2>
        <p class="text-gray-600 mb-6">
          Tu veux réserver une table, organiser un événement ou simplement nous
          dire bonjour ?
          <span class="text-[#d18181] font-semibold"
            >Écris-nous ou passe nous voir&nbsp;!</span
          >
        </p>

        <div class="space-y-2 text-gray-700">
          <h3 class="text-2xl font-semibold text-[#2c2c2c]">
            Restaurant Coquette
          </h3>
          <p>
            123 rue de la Belle-Vie<br />
            Sainte-Anne-de-Beaupré, QC G0A 3C0
          </p>
          <p class="mt-3">📞 (418) 123-4567</p>
          <p>✉️ info@coquette.ca</p>
          <p class="text-sm italic text-gray-500 mt-2">
            Ouvert du mardi au dimanche · 17h à 23h
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
          class="w-full h-[400px] rounded-xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.3611088672957!2d-70.9313376!3d47.0238754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8c9f479aaa64b%3A0xbb7929c5684e82e4!2sSanctuaire%20de%20Sainte-Anne-de-Beaupr%C3%A9%20(1934)!5e0!3m2!1sfr!2sca!4v1712793600000!5m2!1sfr!2sca"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from "@/composables/useScrollReveal";

const { el: leftCol, isVisible: showLeft } = useScrollReveal();
const { el: rightCol, isVisible: showRight } = useScrollReveal();
</script>
