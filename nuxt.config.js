import contents from './static/contents.json'
const routes = ['/', ...Object.keys(contents)]

export default {
  mode: 'universal',
  head: {
    title: "Ports d'Exil, Ports d'Attache",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: ['@/assets/scss/app.scss'],
  modules: ['@nuxtjs/sitemap'],
  build: {
    styleResources: {
      scss: './assets/scss/_variables.scss'
    }
  },
  buildModules: ['@nuxtjs/eslint-module'],
  router: {
    middleware: ['locale-redirect', 'contents']
  },
  generate: {
    dir: 'public',
    routes
  },
  sitemap: {
    hostname: 'https://pdepda.expositionsvirtuelles.fr',
    gzip: true,
    routes
  }
}
