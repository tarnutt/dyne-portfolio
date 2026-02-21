<script setup lang="ts">
const props = defineProps<{
  delay?: number
}>()

const divRef = ref<HTMLElement | null>(null)
const isFocused = ref(false)
const position = reactive({ x: 0, y: 0 })
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" })

  if (divRef.value) observer.observe(divRef.value)
  
  onUnmounted(() => {
    if (divRef.value) observer.disconnect()
  })
})

const handleMouseMove = (e: MouseEvent) => {
  if (!divRef.value) return
  const rect = divRef.value.getBoundingClientRect()
  position.x = e.clientX - rect.left
  position.y = e.clientY - rect.top
}
</script>

<template>
  <div
    ref="divRef"
    @mousemove="handleMouseMove"
    @mouseenter="isFocused = true"
    @mouseleave="isFocused = false"
    @focus="isFocused = true"
    @blur="isFocused = false"
    :class="[
      'relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#020617]/60 backdrop-blur-2xl transition-all duration-1000 ease-out',
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
    ]"
    :style="{ transitionDelay: `${delay || 0}ms` }"
  >
    <div
      class="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-0"
      :style="{
        opacity: isFocused ? 1 : 0,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34,211,238,0.15), transparent 40%)`
      }"
    />
    
    <div class="relative z-10 h-full w-full">
      <slot />
    </div>
  </div>
</template>