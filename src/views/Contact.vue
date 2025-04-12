<template>
  <section id="contact" class="px-6 py-20 md:px-12">
    <div class="max-w-6xl mx-auto">
      <h2
        class="text-3xl md:text-4xl font-bold text-center mb-4 text-[#2c2c2c] section-scroll-offset"
      >
        Nous joindre
      </h2>
      <p class="text-center text-gray-500 max-w-xl mx-auto mb-12">
        Tu veux réserver une table, organiser un événement ou simplement nous
        dire bonjour ? Écris-nous ou passe nous voir 🍷
      </p>

      <div class="grid md:grid-cols-2 gap-10 items-start">
        <!-- Info / texte -->
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold text-[#2c2c2c]">
            Restaurant Coquette
          </h3>
          <p class="text-gray-600">
            123 rue de la Belle-Vie<br />
            Sainte-Anne-de-Beaupré, QC G0A 3C0
          </p>

          <div>
            <p class="text-gray-800 font-medium">📞 (418)-123-4567</p>
            <p class="text-gray-800 font-medium">✉️ info@coquette.ca</p>
          </div>

          <p class="text-sm text-gray-500 italic">
            Ouvert du mardi au dimanche · 17h à 23h
          </p>

          <!-- Image d’ambiance -->
          <img
            src="/images/contact.jpg"
            alt="Restaurant extérieur"
            class="rounded-lg shadow-lg object-cover w-full h-64"
          />
        </div>

        <!-- Google Map - Basilique -->
        <iframe
          class="w-full h-[400px] rounded-lg shadow-lg"
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
// rien à ajouter ici pour le moment
</script>
