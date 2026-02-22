<script setup lang="ts">
const { t } = usePortfolio()
</script>

<template>
  <section id="tech" class="relative z-20 scroll-mt-32">
    <div class="mb-14 text-center md:text-left">
      <h2
        class="mb-3 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent drop-shadow-lg md:text-5xl"
      >
        {{ t.tech.title }}
      </h2>
      <p class="text-base font-light text-slate-400 md:text-lg">
        {{ t.tech.subtitle }}
      </p>
    </div>

    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
      <UiSpotlightCard :delay="100" class="group p-8 md:p-10 lg:col-span-2">
        <div class="mb-8 flex items-center gap-4">
          <div
            class="rounded-2xl bg-cyan-500/10 p-3.5 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)] ring-1 ring-cyan-500/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20"
          >
            <Icon name="lucide:layout" size="28" />
          </div>
          <h3 class="text-2xl font-semibold tracking-tight text-white">
            Frontend
          </h3>
        </div>
        <div class="flex flex-wrap gap-3">
          <span
            class="rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >Nuxt.js (Expert)</span
          >
          <span
            class="rounded-xl border border-white/[0.08] bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-emerald-400"
          >
            Vue.js
          </span>
          <span
            class="rounded-xl border border-white/[0.08] bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-cyan-400"
          >
            Tailwind CSS
          </span>
          <span
            class="rounded-xl border border-white/[0.08] bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-blue-400"
          >
            TypeScript
          </span>
          <span
            class="rounded-xl border border-white/[0.08] bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-purple-400"
          >
            Bootstrap
          </span>
          <span
            class="rounded-xl border border-white/[0.08] bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-fuchsia-400"
          >
            BootstrapVue
          </span>
          <span
            class="rounded-xl border border-white/[0.08] bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-sky-300"
          >
            Vuetify
          </span>
        </div>
      </UiSpotlightCard>

      <UiSpotlightCard :delay="200" class="group p-8 md:p-10 lg:col-span-2">
        <div class="mb-8 flex items-center gap-4">
          <div
            class="rounded-2xl bg-blue-500/10 p-3.5 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)] ring-1 ring-blue-500/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500/20"
          >
            <Icon name="lucide:server" size="28" />
          </div>
          <h3 class="text-2xl font-semibold tracking-tight text-white">
            Backend & API
          </h3>
        </div>
        <div class="flex flex-wrap gap-3">
          <span
            class="rounded-xl border border-blue-500/40 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >Laravel (Advanced)</span
          >
          <span
            class="rounded-xl border border-white/[0.08] bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-indigo-300"
          >
            PHP
          </span>
          <span
            class="rounded-xl border border-white/[0.08] bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-sky-300"
          >
            NestJS
          </span>
          <span
            class="rounded-xl border border-white/[0.08] bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-teal-300"
          >
            Node.js
          </span>
          <span
            class="rounded-xl border border-white/[0.08] bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-cyan-300"
          >
            FastAPI
          </span>
          <span
            class="rounded-xl border border-white/[0.08] bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-blue-300"
          >
            Python
          </span>
          <span
            class="rounded-xl border border-white/[0.08] bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-purple-400"
          >
            RESTful API Design
          </span>
        </div>
      </UiSpotlightCard>

      <UiSpotlightCard
        :delay="300"
        class="group overflow-hidden !border-cyan-500/30 bg-gradient-to-br from-[#0a192f]/90 to-[#020617]/80 p-8 md:p-10 lg:col-span-2"
      >
        <div
          class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-[80px] transition-all duration-700 group-hover:bg-cyan-400/30"
        ></div>

        <div class="relative z-10 mb-8 flex items-center gap-4">
          <div
            class="rounded-2xl bg-cyan-500/20 p-3.5 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] ring-1 ring-cyan-400/50 transition-transform duration-300 group-hover:rotate-12"
          >
            <Icon name="lucide:message-circle" size="28" />
          </div>
          <h3
            class="font-prompt text-2xl font-semibold tracking-tight text-white"
          >
            {{ t.tech.specTitle }}
          </h3>
        </div>
        <p
          class="font-prompt relative z-10 mb-6 text-sm font-light leading-relaxed text-slate-300"
        >
          {{ t.tech.specDesc }}
        </p>
        <div class="relative z-10 flex flex-wrap gap-3">
          <span
            class="rounded-xl border border-cyan-400/50 bg-cyan-500/20 px-5 py-2.5 text-sm font-semibold text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.4)]"
            >LINE LIFF Development</span
          >
          <span
            class="rounded-xl border border-white/[0.1] bg-[#0f172a]/80 px-5 py-2.5 text-sm font-semibold text-slate-200"
            >Messaging API</span
          >
        </div>
      </UiSpotlightCard>

      <UiSpotlightCard
        :delay="400"
        class="group flex flex-col items-center justify-center p-8 text-center md:p-10"
      >
        <Icon
          name="lucide:database"
          size="56"
          class="mb-5 animate-pulse text-sky-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-transform duration-300 group-hover:scale-110"
        />
        <h3 class="mb-2 text-xl font-semibold tracking-tight text-white">
          Database
        </h3>
        <p class="font-prompt text-sm font-light text-slate-400">
          {{ t.tech.redisDesc }}
        </p>
      </UiSpotlightCard>

      <UiSpotlightCard
        :delay="500"
        class="group flex flex-col items-center justify-center p-8 text-center md:p-10"
      >
        <Icon
          name="lucide:wrench"
          size="52"
          class="mb-5 text-indigo-400 drop-shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
        />
        <h3 class="mb-2 text-xl font-semibold tracking-tight text-white">
          DevOps & Tools
        </h3>
        <p class="font-prompt text-sm font-light text-slate-400">
          {{ t.tech.devopsDesc }}
        </p>
      </UiSpotlightCard>
    </div>
  </section>
</template>
