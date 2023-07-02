// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [{ name: 'description', content: 'Everything about Nuxt 3' }],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/css/tailwind.css'],
  runtimeConfig: {
    currencyApiKey: process.env.CURRENCYAPI_API_KEY,
  },
})
