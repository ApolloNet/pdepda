import contents from './contents/contents.json'
const routes = ['/', '/fr', '/en', ...Object.keys(contents)]

export default {
  mode: 'universal',
  head: {
    title: "Ports d'Exil, Ports d'Attache",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '192x192',
        href: '/apple-icon.png'
      },
      { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]
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
