<template>
  <div class="relative min-h-screen transition-colors duration-500">
    <div
      class="pointer-events-none fixed inset-0 z-0 opacity-[0.03] mix-blend-overlay"
      style="
        background-image: url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E&quot;);
      "
    ></div>

    <div
      class="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,#1e293b40_1px,transparent_1px),linear-gradient(to_bottom,#1e293b40_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"
    ></div>

    <LayoutNavbar />

    <slot />
  </div>
</template>
