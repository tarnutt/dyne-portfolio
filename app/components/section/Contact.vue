<script setup lang="ts">
const { t } = usePortfolio()
</script>

<template>
  <section id="contact" class="relative z-20 scroll-mt-32 pb-20 pt-10">
    <UiFadeInSection
      class="relative flex flex-col items-center justify-between gap-12 overflow-hidden rounded-[3rem] border border-white/[0.05] bg-[#020617]/40 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-3xl transition-all md:p-16 lg:flex-row"
    >
      <div
        class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
      ></div>

      <div
        class="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]"
      ></div>
      <div
        class="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-600/15 blur-[120px]"
      ></div>

      <div
        class="z-10 flex w-full flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:text-left lg:w-3/5"
      >
        <div
          class="h-32 w-32 shrink-0 rotate-3 overflow-hidden rounded-[2rem] border-[2px] border-slate-700 bg-slate-800 shadow-[0_0_30px_rgba(34,211,238,0.2)] ring-4 ring-[#020617] transition-all duration-500 hover:rotate-0 md:h-48 md:w-48 md:rounded-[2.5rem]"
        >
          <img
            src="/images/me.jpg"
            alt="Profile"
            class="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div class="pt-2">
          <h2
            class="mb-4 text-4xl font-extrabold tracking-tight text-white drop-shadow-md md:text-5xl"
          >
            {{ t.contact.title }}
          </h2>
          <p
            class="mb-8 text-sm font-light leading-relaxed text-slate-300 transition-all md:text-base"
          >
            {{ t.contact.desc }}
          </p>

          <div class="space-y-4">
            <div
              class="flex items-center justify-center gap-4 text-sm text-slate-200 sm:justify-start md:text-base"
            >
              <div
                class="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-2.5 shadow-[0_0_10px_rgba(34,211,238,0.1)]"
              >
                <Icon name="lucide:map-pin" size="20" class="text-cyan-400" />
              </div>
              <span class="font-medium tracking-wide transition-all">{{
                t.contact.location
              }}</span>
            </div>
            <div
              class="flex items-center justify-center gap-4 text-sm text-slate-200 sm:justify-start md:text-base"
            >
              <div
                class="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-2.5 shadow-[0_0_10px_rgba(34,211,238,0.1)]"
              >
                <Icon
                  name="lucide:graduation-cap"
                  size="20"
                  class="text-cyan-400"
                />
              </div>
              <span class="font-medium tracking-wide transition-all">{{
                t.contact.edu
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="z-10 mx-auto flex w-full flex-col gap-4 sm:w-2/3 lg:w-2/5">
        <a
          href="tel:0821342781"
          class="group flex items-center gap-5 rounded-3xl border border-white/[0.05] bg-[#020617]/60 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-cyan-500/40 hover:bg-white/[0.02]"
        >
          <div
            class="rounded-2xl bg-cyan-500/10 p-4 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all group-hover:rotate-12 group-hover:scale-110"
          >
            <Icon name="lucide:phone" size="24" />
          </div>
          <div>
            <p
              class="mb-1 text-xs font-bold uppercase tracking-widest text-slate-400 transition-all"
            >
              {{ t.contact.callMe }}
            </p>
            <p
              class="font-sans text-xl font-extrabold tracking-wider text-white transition-colors group-hover:text-cyan-400"
            >
              082-134-2781
            </p>
          </div>
        </a>

        <a
          href="mailto:tanutcha.work@gmail.com"
          class="group flex items-center gap-5 rounded-3xl border border-white/[0.05] bg-[#020617]/60 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-blue-500/40 hover:bg-white/[0.02]"
        >
          <div
            class="rounded-2xl bg-blue-500/10 p-4 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all group-hover:-rotate-12 group-hover:scale-110"
          >
            <Icon name="lucide:mail" size="24" />
          </div>
          <div class="overflow-hidden">
            <p
              class="mb-1 text-xs font-bold uppercase tracking-widest text-slate-400 transition-all"
            >
              {{ t.contact.emailMe }}
            </p>
            <p
              class="truncate font-sans text-base font-bold text-white transition-colors group-hover:text-blue-400 md:text-lg"
            >
              tanutcha.work@gmail.com
            </p>
          </div>
        </a>

        <div class="mt-3 flex flex-col gap-4 sm:flex-row">
          <!-- <a
            href="#"
            target="_blank"
            rel="noreferrer"
            class="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-white/[0.05] bg-[#020617]/60 px-6 py-4 font-sans font-bold text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-300"
          >
            <Icon name="lucide:linkedin" size="22" />
            LinkedIn
          </a> -->
          <a
            href="https://github.com/tarnutt"
            target="_blank"
            rel="noreferrer"
            class="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-white/[0.05] bg-[#020617]/60 px-6 py-4 font-sans font-bold text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-slate-300 hover:bg-white/[0.1]"
          >
            <Icon name="lucide:github" size="22" />
            GitHub
          </a>
        </div>
      </div>
    </UiFadeInSection>
  </section>
</template>
