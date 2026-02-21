<script setup lang="ts">
const { t } = usePortfolio()
</script>

<template>
  <section
    id="about"
    class="relative mt-10 flex min-h-[80vh] flex-col justify-center md:mt-0"
  >
    <div
      class="pointer-events-none absolute left-1/2 top-1/4 z-0 -translate-x-1/2 -translate-y-1/2 select-none md:top-1/2"
    >
      <div
        class="whitespace-nowrap font-sans text-[8rem] font-black tracking-tighter text-white/[0.02] md:text-[20rem]"
      >
        DYNE
      </div>

      <div
        class="animate-float absolute -left-10 -top-10 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-600/20 blur-[100px] md:h-[500px] md:w-[500px] md:blur-[120px]"
      ></div>

      <div
        class="animate-float-delayed absolute -bottom-10 -right-10 -z-10 h-[250px] w-[250px] rounded-full bg-purple-600/20 blur-[100px] md:h-[400px] md:w-[400px] md:blur-[120px]"
      ></div>
    </div>

    <div
      class="animate-fade-in-up relative z-10 grid items-center gap-6 lg:grid-cols-2 lg:gap-12"
    >
      <div
        class="flex flex-col items-center text-center lg:items-start lg:text-left"
      >
        <div
          class="group mb-8 inline-flex w-fit cursor-default items-center gap-2 rounded-full border border-cyan-500/30 bg-[#0f172a]/80 px-4 py-2 text-xs font-bold text-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.2)] backdrop-blur-xl transition-colors hover:border-cyan-400 sm:text-sm"
        >
          <Icon name="lucide:sparkles" class="animate-pulse" size="16" />
          {{ t.hero.badge }}
        </div>

        <h1
          class="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {{ t.hero.greeting }}
          <span
            class="animate-gradient bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500 bg-[length:300%_300%] bg-clip-text font-sans text-transparent"
          >
            {{ t.hero.title }}
          </span>
        </h1>

        <div class="relative mb-12 pl-0 lg:pl-6">
          <div
            class="absolute bottom-2 left-0 top-2 hidden w-1.5 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500 lg:block"
          ></div>
          <p
            class="max-w-xl text-base font-light leading-relaxed text-slate-400 drop-shadow-md sm:text-lg md:text-xl"
          >
            {{ t.hero.desc }}
          </p>
        </div>

        <div class="relative flex w-full flex-col gap-5 sm:w-auto sm:flex-row">
          <NuxtLink
            to="#projects"
            class="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl border border-cyan-400/50 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,211,238,0.6)] sm:w-auto"
          >
            <div
              class="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0"
            ></div>
            <span class="relative z-10 flex items-center gap-2">
              {{ t.hero.btnExp }}
              <Icon
                name="lucide:arrow-right"
                size="18"
                class="transition-transform group-hover:translate-x-1"
              />
            </span>
          </NuxtLink>

          <button
            class="group flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#020617]/50 px-8 py-4 font-semibold text-white shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 sm:w-auto"
          >
            {{ t.hero.btnResume }}
            <Icon
              name="lucide:download"
              size="18"
              class="text-cyan-400 transition-transform group-hover:translate-y-1"
            />
          </button>
        </div>
      </div>

      <div
        class="animate-fade-in-up relative z-10"
        style="animation-delay: 0.2s"
      >
        <div class="relative mx-auto mt-10 w-full max-w-lg">
          <div
            class="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-cyan-500/30 to-purple-600/30 blur-[80px]"
          ></div>

          <div
            class="group relative flex h-full w-full transform flex-col rounded-[2rem] border border-white/10 bg-[#0a0f1c]/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-500 hover:-rotate-1 hover:scale-[1.02]"
          >
            <div class="mb-8 flex gap-2.5 border-b border-white/5 pb-4">
              <div
                class="h-3.5 w-3.5 rounded-full bg-rose-500/80 shadow-[0_0_10px_rgba(244,63,94,0.5)]"
              ></div>
              <div
                class="h-3.5 w-3.5 rounded-full bg-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
              ></div>
              <div
                class="h-3.5 w-3.5 rounded-full bg-emerald-500/80 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
              ></div>
            </div>

            <div
              class="flex-1 space-y-1 font-mono font-sans text-[15px] leading-relaxed text-cyan-100/90"
            >
              <p>
                <span class="text-purple-400">const </span>
                <span class="text-blue-400">developer</span> = {
              </p>
              <p class="pl-6">
                name:
                <span class="text-emerald-400">'Tanutcha Khunthong (Dyne)'</span
                >,
              </p>
              <p class="pl-6">
                role: <span class="text-emerald-400">'Senior Full Stack'</span>,
              </p>
              <p class="pl-6">skills: [</p>
              <p class="pl-12 text-amber-300">
                'Nuxt.js', 'Vue.js', 'Tailwind CSS', 'TS',
              </p>
              <p class="pl-12 text-amber-300">
                'PHP Laravel', 'NestJS', 'Redis', 'MariaDB / SQL'
              </p>
              <p class="pl-6">],</p>
              <p class="pl-6">
                passion:
                <span class="text-emerald-400"
                  >'Building for scale, driven by UX.'</span
                >
              </p>
              <p>};</p>
              <br />
              <p class="mt-2">
                <span class="text-purple-400">developer</span>.<span
                  class="text-blue-400"
                  >execute</span
                >();<span
                  class="ml-1 inline-block h-4 w-2 animate-pulse bg-cyan-400 align-middle"
                ></span>
              </p>
            </div>

            <div
              class="p-4.5 animate-float absolute -bottom-8 left-0 rounded-xl border border-emerald-500/30 bg-[#020617]/90 shadow-[0_0_30px_rgba(16,185,129,0.15)] backdrop-blur-xl lg:-bottom-8 lg:-left-8"
            >
              <div class="flex items-center gap-4">
                <div
                  class="rounded-xl border border-emerald-500/20 bg-emerald-500/20 p-3 text-emerald-400"
                >
                  <Icon name="lucide:cpu" size="24" />
                </div>
                <div class="hidden lg:block">
                  <p
                    class="font-sans text-[10px] font-bold uppercase tracking-widest text-slate-400"
                  >
                    System Status
                  </p>
                  <p
                    class="mr-3 font-sans text-base font-black tracking-wide text-emerald-400"
                  >
                    Highly Scalable
                  </p>
                </div>
              </div>
            </div>

            <div
              class="p-4.5 animate-float-delayed absolute right-0 top-0 rounded-xl border border-purple-500/30 bg-[#020617]/90 shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-xl lg:-right-8 lg:-top-8"
            >
              <div class="flex items-center gap-4">
                <div
                  class="rounded-xl border border-purple-500/20 bg-purple-500/20 p-3 text-purple-400"
                >
                  <Icon name="lucide:database" size="24" />
                </div>
                <div class="hidden lg:block">
                  <p
                    class="font-sans text-[10px] font-bold uppercase tracking-widest text-slate-400"
                  >
                    Database
                  </p>
                  <p
                    class="mr-3 font-sans text-base font-black tracking-wide text-purple-400"
                  >
                    Zero Downtime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
