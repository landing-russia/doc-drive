// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@nuxt/content",
  ],
  colorMode: {
    preference: "light",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: "material-darker",
    },
  },
})
