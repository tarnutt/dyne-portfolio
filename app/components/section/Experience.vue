<script setup lang="ts">
const { t, selectedProjectId } = usePortfolio()

const selectedProject = computed(() => {
  if (selectedProjectId.value === null) return null
  return t.value.experience.projects.find(
    (p: any) => p.id === selectedProjectId.value
  )
})

const closeModal = () => {
  selectedProjectId.value = null
}

watch(selectedProjectId, (newVal) => {
  if (newVal !== null) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})
</script>

<template>
  <section id="projects" class="relative z-20 scroll-mt-32">
    <div class="mb-16 text-center transition-all md:text-left">
      <h2
        class="mb-3 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent drop-shadow-lg md:text-5xl"
      >
        {{ t.experience.title }}
      </h2>
      <p class="text-base font-light text-slate-400 md:text-lg">
        {{ t.experience.subtitle }}
      </p>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
      <UiSpotlightCard
        v-for="(project, index) in t.experience.projects"
        :key="project.id"
        :delay="index * 100"
        class="group flex h-full cursor-pointer flex-col p-6 hover:-translate-y-2 md:p-8"
      >
        <div class="flex h-full w-full flex-col">
          <div
            class="relative mb-10 flex h-[250px] w-full shrink-0 items-center justify-center sm:h-[320px]"
            @click="selectedProjectId = project.id"
          >
            <div
              class="pointer-events-none absolute inset-0 z-20 rounded-[1.5rem] bg-gradient-to-b from-transparent to-[#020617] opacity-50"
            ></div>

            <div class="relative flex h-fit w-full items-end justify-center">
              <div
                class="relative z-10 w-[95%] transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03] sm:w-[85%]"
              >
                <div
                  class="relative aspect-[16/10] overflow-hidden rounded-t-xl border-[1px] border-slate-700/80 bg-[#0f172a] p-1.5 shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-colors duration-500 group-hover:border-cyan-500/50 sm:rounded-t-2xl sm:border-[2px] sm:p-2.5"
                >
                  <div
                    class="relative h-full overflow-hidden rounded-md border border-slate-800 bg-[#020617] sm:rounded-lg"
                  >
                    <img
                      :src="project.image"
                      alt="Desktop View"
                      class="h-full w-full object-cover opacity-90 transition-all duration-1000 ease-out group-hover:scale-105 group-hover:opacity-100"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div
                  class="relative -left-[5%] z-10 h-2 w-[110%] rounded-b-xl rounded-t-sm bg-slate-700 shadow-2xl sm:h-4 sm:rounded-b-2xl"
                >
                  <div
                    class="absolute left-1/2 top-0 h-[2px] w-1/5 -translate-x-1/2 rounded-b-md bg-slate-800 sm:h-[4px]"
                  ></div>
                </div>
              </div>

              <div
                class="absolute -bottom-2 -right-1 z-30 aspect-[9/19] w-[28%] translate-y-4 transform rounded-[1rem] border-[1px] border-slate-600 bg-[#0f172a] p-1 shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out group-hover:-translate-y-6 group-hover:rotate-[-5deg] sm:-bottom-4 sm:-right-2 sm:w-[24%] sm:rounded-[1.5rem] sm:border-[2px] sm:p-1.5 sm:shadow-[0_40px_80px_rgba(0,0,0,1)] sm:group-hover:-translate-y-8"
              >
                <div
                  class="relative h-full w-full overflow-hidden rounded-[0.8rem] border border-slate-800 bg-[#020617] sm:rounded-[1.2rem]"
                >
                  <div
                    class="absolute left-1/2 top-0 z-20 h-2 w-1/2 -translate-x-1/2 rounded-b-md bg-[#0f172a] sm:h-3 sm:rounded-b-lg"
                  ></div>
                  <img
                    :src="project.mobileImage"
                    alt="Mobile View"
                    class="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            class="relative z-20 flex flex-1 flex-col text-center md:text-left"
          >
            <span
              class="mx-auto mb-4 inline-block w-fit rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] md:mx-0 md:text-xs"
            >
              {{ project.role }}
            </span>
            <h3
              class="text-2xl font-semibold leading-tight tracking-tight text-white transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent md:text-3xl"
            >
              {{ project.title }}
            </h3>
            <p
              class="mb-5 mt-2 text-xs font-bold uppercase tracking-wide text-blue-400/80 md:text-sm"
            >
              {{ project.company }}
            </p>

            <p
              class="mb-8 text-sm font-light leading-relaxed text-slate-400 md:text-base"
            >
              {{ project.summary }}
            </p>

            <button
              @click="selectedProjectId = project.id"
              class="group/btn relative mt-auto flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl border border-white/[0.1] bg-white/[0.03] py-4 font-bold text-white shadow-lg backdrop-blur-md transition-all duration-500 hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600"
            >
              <span class="relative z-10">{{ t.experience.viewBtn }}</span>
              <Icon
                name="lucide:chevron-right"
                size="18"
                class="relative z-10 transform transition-transform duration-300 group-hover/btn:translate-x-2"
              />
            </button>
          </div>
        </div>
      </UiSpotlightCard>
    </div>

    <UiProjectModal :project="selectedProject" @close="closeModal" />
  </section>
</template>
