export default defineNuxtConfig({
  mode:'spa',
  components:true,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt',],
  ssr: false,
  build: {
    target: 'esnext' //browsers can handle the latest ES features
  },
  esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    },
  }
  },
)
// 'nuxt-sweetalert2'
