<template>
  <a
    :href="href"
    v-bind="$attrs"
    class="group relative inline-block text-[#d18181] transition-all duration-300"
  >
    <slot />
    <span
      class="absolute left-0 bottom-0 h-[2px] w-0 bg-[#d18181] group-hover:w-full transition-all duration-300"
    />
  </a>
</template>

<script setup>
defineProps({
  href: String,
});
</script>
