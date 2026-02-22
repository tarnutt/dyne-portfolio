<script setup lang="ts">
const props = defineProps<{
  project: any | null
}>()

const emit = defineEmits(['close'])
const { t } = usePortfolio()

// เมื่อกดปิด ให้ส่ง event ไปบอก Component แม่
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
        class="relative flex max-h-[95vh] w-full max-w-4xl flex-col overflow-hidden rounded-[2.5rem] border border-cyan-500/30 bg-[#020617] shadow-[0_0_80px_rgba(34,211,238,0.15)] md:max-h-[85vh]"
      >
        <button
          @click="handleClose"
          class="absolute right-6 top-6 z-50 rounded-full border border-white/[0.1] bg-black/60 p-3 text-white shadow-2xl backdrop-blur-xl transition-all duration-300 hover:rotate-90 hover:scale-110 hover:bg-rose-600"
        >
          <Icon name="lucide:x" size="24" />
        </button>

        <div class="custom-scrollbar overflow-y-auto overflow-x-hidden">
          <div
            class="relative h-64 w-full overflow-hidden bg-[#020617] sm:h-80 lg:h-[400px]"
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
              class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_70%)]"
            ></div>

            <div
              class="absolute bottom-8 left-8 right-8 md:left-12 md:right-12"
            >
              <span
                class="mb-4 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 font-sans text-xs font-black uppercase tracking-widest text-white shadow-[0_0_25px_rgba(34,211,238,0.4)] md:text-sm"
              >
                {{ project.company }}
              </span>
              <h2
                class="mb-2 font-sans text-3xl font-black leading-none tracking-tighter text-white drop-shadow-2xl md:text-5xl lg:text-6xl"
              >
                {{ project.title }}
              </h2>
              <p
                class="font-sans text-sm font-extrabold uppercase tracking-widest text-cyan-400 md:text-lg"
              >
                {{ project.role }}
              </p>
            </div>
          </div>

          <div class="relative space-y-10 bg-[#020617] p-8 md:p-12">
            <div
              class="relative space-y-10 overflow-hidden rounded-[2.5rem] border border-white/[0.05] bg-[#0f172a]/40 p-6 shadow-inner backdrop-blur-md md:p-10"
            >
              <div
                class="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-cyan-600/10 blur-[100px]"
              ></div>

              <div class="group relative z-10">
                <h4
                  class="mb-4 flex items-center gap-4 text-xl font-black text-white md:text-2xl"
                >
                  <div
                    class="rounded-2xl border border-orange-500/30 bg-[#020617] p-3 text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-transform group-hover:scale-110"
                  >
                    <Icon name="lucide:message-circle" size="24" />
                  </div>
                  {{ t.experience.challenge }}
                </h4>
                <p
                  class="pl-[4rem] text-base font-light leading-relaxed text-slate-300 md:pl-16 md:text-lg"
                >
                  {{ project.challenge }}
                </p>
              </div>

              <div
                class="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-white/[0.1] to-transparent"
              ></div>

              <div class="group relative z-10">
                <h4
                  class="mb-4 flex items-center gap-4 text-xl font-black text-white md:text-2xl"
                >
                  <div
                    class="rounded-2xl border border-cyan-500/30 bg-[#020617] p-3 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-transform group-hover:scale-110"
                  >
                    <Icon name="lucide:layout" size="24" />
                  </div>
                  {{ t.experience.approach }}
                </h4>
                <p
                  class="pl-[4rem] text-base font-light leading-relaxed text-slate-300 md:pl-16 md:text-lg"
                >
                  {{ project.approach }}
                </p>
              </div>

              <div
                class="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-white/[0.1] to-transparent"
              ></div>

              <div class="group relative z-10">
                <h4
                  class="mb-5 flex items-center gap-4 text-xl font-black text-white md:text-2xl"
                >
                  <div
                    class="rounded-2xl border border-emerald-500/30 bg-[#020617] p-3 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-transform group-hover:scale-110"
                  >
                    <Icon name="lucide:arrow-right" size="24" />
                  </div>
                  {{ t.experience.impact }}
                </h4>
                <div
                  class="ml-[4rem] rounded-r-2xl border-l-4 border-emerald-500 bg-gradient-to-r from-emerald-500/10 to-transparent px-5 py-4 shadow-lg md:ml-16 md:px-6 md:py-5"
                >
                  <p
                    class="text-base font-bold leading-relaxed tracking-wide text-emerald-300 md:text-xl"
                  >
                    {{ project.impact }}
                  </p>
                </div>
              </div>

              <div
                v-if="project.techStack"
                class="relative z-10 h-px w-full bg-gradient-to-r from-transparent via-white/[0.1] to-transparent"
              ></div>

              <div v-if="project.techStack" class="group relative z-10">
                <h4
                  class="mb-5 flex items-center gap-4 text-xl font-black text-white md:text-2xl"
                >
                  <div
                    class="rounded-2xl border border-purple-500/30 bg-[#020617] p-3 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-transform group-hover:scale-110"
                  >
                    <Icon name="lucide:cpu" size="24" />
                  </div>
                  Tech Stack
                </h4>
                <div class="ml-[4rem] flex flex-col gap-4 md:ml-16">
                  <div
                    v-if="project.techStack.fe"
                    class="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4"
                  >
                    <span
                      class="whitespace-nowrap rounded border border-cyan-500/30 bg-cyan-500/20 px-3 py-1.5 font-sans text-[10px] font-bold uppercase tracking-wider text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                    >
                      Frontend
                    </span>
                    <span
                      class="font-sans text-base font-light text-slate-300 md:text-lg"
                    >
                      {{ project.techStack.fe }}
                    </span>
                  </div>

                  <div
                    v-if="project.techStack.be"
                    class="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4"
                  >
                    <span
                      class="whitespace-nowrap rounded border border-blue-500/30 bg-blue-500/20 px-3 py-1.5 font-sans text-[10px] font-bold uppercase tracking-wider text-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.2)]"
                    >
                      Backend
                    </span>
                    <span
                      class="font-sans text-base font-light text-slate-300 md:text-lg"
                    >
                      {{ project.techStack.be }}
                    </span>
                  </div>
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
