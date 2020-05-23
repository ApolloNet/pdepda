<template>
  <div class="error">
    <div class="wrapper">
      <h1>{{ titleText[lang] }}</h1>
      <p>
        <nuxt-link :to="homeLinkURI[lang]">{{ homeLinkText[lang] }}</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Error',
  data() {
    return {
      titleText: {
        en: 'Page not found',
        fr: 'Page non trouvée'
      },
      homeLinkText: {
        en: 'Back to the homepage',
        fr: "Retour à l'accueil"
      },
      homeLinkURI: {
        en: '/en',
        fr: '/fr'
      }
    }
  },
  computed: {
    ...mapState(['lang'])
  }
}
</script>

<style lang="scss" scoped>
.error {
  padding: $margin;
}
</style>
