<template>
  <div class="hrapper">
    <Header v-if="!isHome" />
    <Error v-if="isError" />
    <Home v-if="isHome" />
    <Section v-if="isSection" :section="content" :full-content="true" />
    <Page v-if="isPage" :page="content" />
    <Footer />
    <Analytics />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Analytics from '@/components/Analytics.vue'
import Error from '@/components/Error.vue'
import Footer from '@/components/Footer.vue'
import Home from '@/components/Home.vue'
import Header from '@/components/Header.vue'
import Page from '@/components/Page.vue'
import Section from '@/components/Section.vue'

export default {
  components: {
    Analytics,
    Error,
    Footer,
    Home,
    Header,
    Page,
    Section
  },
  computed: {
    path() {
      return '/' + this.$route.params.pathMatch.replace(/\/$/, '')
    },
    isHome() {
      const homes = ['/', '/fr', '/en']
      return homes.includes(this.path)
    },
    content() {
      return this.contents[this.path] || false
    },
    isSection() {
      return this.content && this.content.dir.includes('section')
    },
    isPage() {
      return this.content && this.content.dir.includes('page')
    },
    isError() {
      return !this.isHome && !this.isSection && !this.isPage
    },
    ...mapState(['contents'])
  },
  head() {
    const url = 'https://destinees-juives.expositionsvirtuelles.fr' + this.path
    const title = this.content
      ? this.content.title + " | Ports d'Exil, Ports d'Attache"
      : "Ports d'Exil, Ports d'Attache"
    const description =
      'Exposition virtuelle : destinées juives à Elbeuf, Marseille et Montréal'
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:url', name: 'twitter:url', content: url },
        { hid: 'twitter.title', name: 'twitter:title', content: title },
        {
          hid: 'twitter.description',
          name: 'twitter:description',
          content: description
        }
      ],
      script: [
        {
          hid: 'openseadragon',
          src:
            'https://cdn.jsdelivr.net/npm/openseadragon@2.4/build/openseadragon/openseadragon.min.js',
          defer: true
        },
        {
          hid: 'imagesZoom',
          src: '/imagesZoom.js',
          defer: true
        }
      ]
    }
  }
}
</script>
