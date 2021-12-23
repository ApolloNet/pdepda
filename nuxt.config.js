import contents from './contents/contents.json'
const routes = ['/', '/fr', '/en', ...Object.keys(contents)]

const env = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://destinees-juives.expositionsvirtuelles.fr',
  mainTitle: "Ports d'Exil, Ports d'Attache",
  mainDesc:
    'Exposition virtuelle : destinées juives à Elbeuf, Marseille et Montréal'
}

export default {
  target: 'static',
  head: {
    title: env.mainTitle,
    htmlAttrs: {
      lang: 'fr',
      dir: 'ltr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: env.mainTitle },
      { hid: 'description', name: 'description', content: env.mainDesc },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og.description', name: 'og.description', content: env.mainDesc },
      {
        hid: 'og:image',
        property: 'og:image',
        content: env.url + '/apple-icon.png'
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '192'
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '192'
      },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' }
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
    hostname: env.url + '/',
    gzip: true,
    routes
  }
}
