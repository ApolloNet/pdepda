<template>
  <div>
    <div class="home-header">
      <div class="wrapper">
        <img
          class="home-header-img"
          :src="`/img/logo-home-${lang}2.svg`"
          alt="Ports d'Exil, Ports d'Attache"
          width="391"
          height="300"
        />
      </div>
    </div>
    <div class="home-intro">
      <div class="wrapper">
        <h2>{{ introText[lang] }}</h2>
        <nuxt-link :to="aboutURI[lang]">{{ aboutText[lang] }}</nuxt-link>
      </div>
    </div>
    <Section
      v-for="section in sections"
      :key="section.slug"
      :section="section"
      :full-content="false"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Section from '@/components/Section.vue'

export default {
  components: {
    Section
  },
  data() {
    return {
      introText: {
        en: 'Jewish Fates During the Second World War',
        fr: 'Destinées juives pendant la Seconde guerre mondiale'
      },
      aboutText: {
        en: 'About the exhibition',
        fr: "Présentation de l'exposition"
      },
      aboutURI: {
        en: '/en/pages/about',
        fr: '/fr/pages/presentation'
      }
    }
  },
  computed: {
    ...mapState(['lang']),
    ...mapGetters(['sections'])
  }
}
</script>

<style lang="scss" scoped>
$home-header-gradient: linear-gradient(
  112deg,
  transparent 0%,
  fade-out($black, 0.1) 66%
);

.home-header {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 40% 50%;
  background-image: $home-header-gradient, url('/img/header-680-home.jpg');
}

.home-header .wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: $margin;
}

.home-header-img {
  display: block;
  width: auto;
  height: 50vh;
  max-width: 90vw;
}

.home-intro {
  padding: $margin * 4 $margin * 3 $margin * 2 $margin * 3;
  background: $black;
  color: $white;

  h2 {
    text-transform: uppercase;
  }

  a {
    color: $white;
  }
}

@media (min-width: $mq-680) {
  .home-header {
    background-image: $home-header-gradient, url('/img/header-1920-home.jpg');
  }

  .home-header-img {
    margin-left: auto;
    margin-right: 8rem;
  }
}
</style>
