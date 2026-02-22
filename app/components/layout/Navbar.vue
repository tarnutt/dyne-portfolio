<script setup lang="ts">
const { lang, toggleLang, t } = usePortfolio()
const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav
    class="fixed top-0 z-50 w-full border-b border-white/[0.05] bg-[#020617]/80 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-2xl transition-colors duration-500"
  >
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
      <NuxtLink
        to="/"
        class="group relative z-[60] flex items-center gap-2 font-sans text-2xl font-extrabold tracking-tighter text-white"
        @click="closeMenu"
      >
        <Icon
          name="lucide:code-2"
          class="text-cyan-400 transition-transform duration-500 group-hover:rotate-180"
          size="24"
        />
        Dyne<span class="animate-pulse text-cyan-400">.</span>
      </NuxtLink>

      <div class="flex items-center gap-3 md:gap-6">
        <div
          class="mr-4 hidden gap-8 text-sm font-bold tracking-wide text-slate-400 md:flex"
        >
          <NuxtLink to="#about" class="nav-link">{{ t.nav.about }}</NuxtLink>
          <NuxtLink to="#tech" class="nav-link">{{ t.nav.tech }}</NuxtLink>
          <NuxtLink to="#projects" class="nav-link">{{ t.nav.exp }}</NuxtLink>
          <NuxtLink to="#contact" class="nav-link">{{
            t.nav.contact
          }}</NuxtLink>
        </div>

        <button
          @click="toggleLang"
          class="group relative z-[60] flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2.5 text-xs font-bold shadow-lg transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/20"
        >
          <Icon name="lucide:globe" size="16" class="text-cyan-400" />
          <span :class="lang === 'th' ? 'text-white' : 'text-slate-500'"
            >TH</span
          >
          <span class="text-slate-600">/</span>
          <span :class="lang === 'en' ? 'text-white' : 'text-slate-500'"
            >EN</span
          >
        </button>

        <button
          @click="isMenuOpen = !isMenuOpen"
          class="relative z-[60] flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
        >
          <Icon :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'" size="24" />
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-y-[-100%] opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-[-100%] opacity-0"
    >
      <div
        v-show="isMenuOpen"
        class="fixed inset-0 z-50 flex flex-col bg-[#020617]/95 pt-24 backdrop-blur-3xl md:hidden"
      >
        <div
          class="flex min-h-screen flex-col items-center gap-6 bg-[#020617] p-8"
        >
          <NuxtLink to="#about" class="mobile-nav-link" @click="closeMenu">{{
            t.nav.about
          }}</NuxtLink>
          <NuxtLink to="#tech" class="mobile-nav-link" @click="closeMenu">{{
            t.nav.tech
          }}</NuxtLink>
          <NuxtLink to="#projects" class="mobile-nav-link" @click="closeMenu">{{
            t.nav.exp
          }}</NuxtLink>
          <NuxtLink to="#contact" class="mobile-nav-link" @click="closeMenu">{{
            t.nav.contact
          }}</NuxtLink>

          <div
            class="h-px w-20 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          ></div>

          <p
            class="text-xs font-medium uppercase tracking-[0.2em] text-slate-500"
          >
            Get in touch
          </p>
          <div class="flex gap-4">
            <a
              href="https://github.com/tarnutt"
              class="text-slate-400 hover:text-cyan-400"
              ><Icon name="lucide:github" size="20"
            /></a>
            <!-- <a href="#" class="text-slate-400 hover:text-cyan-400"
              ><Icon name="lucide:linkedin" size="20"
            /></a> -->
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.nav-link {
  @apply transition-all duration-300 hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)];
}

.mobile-nav-link {
  @apply text-2xl font-bold tracking-tight text-white transition-all active:scale-95 active:text-cyan-400;
}
</style>
