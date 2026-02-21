<script setup lang="ts">
const { lang, toggleLang, t } = usePortfolio()
</script>

<template>
  <nav
    class="fixed top-0 z-50 w-full border-b border-white/[0.05] bg-[#020617]/50 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-2xl transition-colors duration-500"
  >
    <div class="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
      <NuxtLink
        to="/"
        class="group flex items-center gap-2 font-sans text-2xl font-extrabold tracking-tighter text-white"
      >
        <Icon
          name="lucide:code-2"
          class="text-cyan-400 transition-transform duration-500 group-hover:rotate-180"
          size="24"
        />
        Dyne<span class="animate-pulse text-cyan-400">.</span>
      </NuxtLink>

      <div class="flex items-center gap-6">
        <div
          class="mr-4 hidden gap-8 text-sm font-bold tracking-wide text-slate-400 md:flex"
        >
          <NuxtLink
            to="#about"
            class="transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            >{{ t.nav.about }}</NuxtLink
          >
          <NuxtLink
            to="#tech"
            class="transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            >{{ t.nav.tech }}</NuxtLink
          >
          <NuxtLink
            to="#projects"
            class="transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            >{{ t.nav.exp }}</NuxtLink
          >
          <NuxtLink
            to="#contact"
            class="transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            >{{ t.nav.contact }}</NuxtLink
          >
        </div>

        <button
          @click="toggleLang"
          class="group flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2.5 text-xs font-bold shadow-lg transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
        >
          <Icon
            name="lucide:globe"
            size="16"
            class="text-cyan-400 transition-transform duration-500 group-hover:rotate-180"
          />
          <span
            :class="
              lang === 'th' ? 'text-white drop-shadow-md' : 'text-slate-500'
            "
            >TH</span
          >
          <span class="font-sans text-slate-600">/</span>
          <span
            :class="
              lang === 'en' ? 'text-white drop-shadow-md' : 'text-slate-500'
            "
            >EN</span
          >
        </button>
      </div>
    </div>
  </nav>
</template>
