// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/scss/main.scss'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700;800;900&display=swap'
        }
      ]
    }
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03'
})
