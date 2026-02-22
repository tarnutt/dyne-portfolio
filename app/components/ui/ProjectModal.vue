<script setup lang="ts">
const props = defineProps<{
  project: any | null
}>()

const emit = defineEmits(['close'])
const { t } = usePortfolio()

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-400 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-if="project"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]/90 p-4 backdrop-blur-3xl sm:p-6"
    >
      <div
        class="relative flex max-h-[75vh] w-full max-w-4xl flex-col overflow-hidden rounded-[2rem] border border-cyan-500/30 bg-[#020617] shadow-[0_0_80px_rgba(34,211,238,0.15)] md:max-h-[80vh] md:rounded-[2.5rem]"
      >
        <button
          @click="handleClose"
          class="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-black/60 text-white shadow-2xl backdrop-blur-xl transition-all duration-300 hover:rotate-90 hover:scale-110 hover:bg-rose-600 md:right-6 md:top-6 md:h-12 md:w-12"
        >
          <Icon name="lucide:x" class="text-xl md:text-2xl" />
        </button>

        <div class="custom-scrollbar overflow-y-auto overflow-x-hidden">
          <div
            class="relative h-56 w-full overflow-hidden bg-[#020617] sm:h-80 lg:h-[400px]"
          >
            <img
              :src="project.image"
              alt="Cover"
              class="animate-slow-zoom h-full w-full scale-105 object-cover opacity-60"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent"
            ></div>

            <div
              class="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-12 md:right-12"
            >
              <span
                class="mb-3 inline-block rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] md:mb-4 md:rounded-xl md:px-4 md:py-2 md:text-sm"
              >
                {{ project.company }}
              </span>
              <h2
                class="mb-2 text-2xl font-semibold leading-tight tracking-tighter text-white drop-shadow-2xl md:text-5xl lg:text-6xl"
              >
                {{ project.title }}
              </h2>
              <p
                class="text-xs font-extrabold uppercase tracking-widest text-cyan-400 md:text-lg"
              >
                {{ project.role }}
              </p>
            </div>
          </div>

          <div
            class="relative space-y-6 bg-[#020617] p-6 md:space-y-10 md:p-12"
          >
            <div
              class="relative space-y-8 overflow-hidden rounded-[2rem] border border-white/[0.05] bg-[#0f172a]/40 p-5 shadow-inner backdrop-blur-md md:space-y-10 md:rounded-[2.5rem] md:p-10"
            >
              <div class="group relative z-10">
                <h4
                  class="mb-3 flex items-center gap-4 text-lg font-semibold text-white md:mb-4 md:gap-5 md:text-2xl"
                >
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-orange-500/30 bg-[#020617] text-orange-400 shadow-lg transition-transform group-hover:scale-110 md:h-14 md:w-14 md:rounded-2xl"
                  >
                    <Icon
                      name="lucide:message-circle"
                      class="text-xl md:text-3xl"
                    />
                  </div>
                  {{ t.experience.challenge }}
                </h4>
                <p
                  class="pl-14 text-sm font-light leading-relaxed text-slate-300 md:pl-20 md:text-lg"
                >
                  {{ project.challenge }}
                </p>
              </div>

              <div
                class="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
              ></div>

              <div class="group relative z-10">
                <h4
                  class="mb-3 flex items-center gap-4 text-lg font-semibold text-white md:mb-4 md:gap-5 md:text-2xl"
                >
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-[#020617] text-cyan-400 shadow-lg transition-transform group-hover:scale-110 md:h-14 md:w-14 md:rounded-2xl"
                  >
                    <Icon name="lucide:layout" class="text-xl md:text-3xl" />
                  </div>
                  {{ t.experience.approach }}
                </h4>
                <p
                  class="pl-14 text-sm font-light leading-relaxed text-slate-300 md:pl-20 md:text-lg"
                >
                  {{ project.approach }}
                </p>
              </div>

              <div
                v-if="project.techStack"
                class="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
              ></div>

              <div v-if="project.techStack" class="group relative z-10">
                <h4
                  class="mb-4 flex items-center gap-4 text-lg font-semibold text-white md:mb-5 md:gap-5 md:text-2xl"
                >
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-[#020617] text-purple-400 shadow-lg transition-transform group-hover:scale-110 md:h-14 md:w-14 md:rounded-2xl"
                  >
                    <Icon name="lucide:code-2" class="text-xl md:text-3xl" />
                  </div>
                  Tech Stack
                </h4>
                <div class="flex flex-col gap-3 pl-14 md:gap-4 md:pl-20">
                  <div
                    v-if="project.techStack.fe"
                    class="flex flex-col items-start gap-1.5 md:flex-row md:items-center md:gap-4"
                  >
                    <span
                      class="whitespace-nowrap rounded border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-cyan-300 md:px-3 md:py-1.5 md:text-[10px]"
                    >
                      Frontend
                    </span>
                    <span class="text-sm font-light text-slate-300 md:text-lg">
                      {{ project.techStack.fe }}
                    </span>
                  </div>

                  <div
                    v-if="project.techStack.be"
                    class="flex flex-col items-start gap-1.5 md:flex-row md:items-center md:gap-4"
                  >
                    <span
                      class="whitespace-nowrap rounded border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-blue-300 md:px-3 md:py-1.5 md:text-[10px]"
                    >
                      Backend
                    </span>
                    <span class="text-sm font-light text-slate-300 md:text-lg">
                      {{ project.techStack.be }}
                    </span>
                  </div>
                </div>
              </div>

              <div
                class="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
              ></div>

              <div class="group relative z-10">
                <h4
                  class="mb-4 flex items-center gap-4 text-lg font-semibold text-white md:mb-5 md:gap-5 md:text-2xl"
                >
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-[#020617] text-emerald-400 shadow-lg transition-transform group-hover:scale-110 md:h-14 md:w-14 md:rounded-2xl"
                  >
                    <Icon
                      name="lucide:arrow-right"
                      class="text-xl md:text-3xl"
                    />
                  </div>
                  {{ t.experience.impact }}
                </h4>
                <div
                  class="ml-14 rounded-r-xl border-l-2 border-emerald-500 bg-gradient-to-r from-emerald-500/10 to-transparent px-4 py-3 shadow-lg md:ml-20 md:rounded-r-2xl md:border-l-4 md:px-6 md:py-5"
                >
                  <p
                    class="text-sm font-medium leading-relaxed tracking-wide text-emerald-300 md:text-xl"
                  >
                    {{ project.impact }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
@keyframes slowZoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
.animate-slow-zoom {
  animation: slowZoom 20s linear infinite alternate;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(30, 41, 59, 0.8);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(34, 211, 238, 0.8);
}
</style>
