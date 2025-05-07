// src/composables/useScrollReveal.js
import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScrollReveal(threshold = 0.2) {
  const el = ref(null)
  const isVisible = ref(false)

  let observer

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.value = entry.isIntersecting
      },
      { threshold }
    )
    if (el.value) observer.observe(el.value)
  })

  onBeforeUnmount(() => {
    if (el.value && observer) observer.unobserve(el.value)
  })

  return { el, isVisible }
}
