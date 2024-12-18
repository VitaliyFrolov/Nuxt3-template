// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/test-utils/module'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  tailwindcss: {
    configPath: './tailwind.config.js',
  },
  alias: {
    '@': '../src'
  },
  dir: {
    pages: './src/app/routes',
    layouts: './src/app/layouts'
  },
  css: [
    './src/app/styles/index.css'
  ]
})
