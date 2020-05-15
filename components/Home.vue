<template>
  <div>
    <div class="home-header">
      <div class="wrapper">
        <img
          class="home-header-img"
          src="/img/logo-home.svg"
          alt="Ports d'Exil, Ports d'Attache"
          width="391"
          height="300"
        />
      </div>
    </div>
    <div class="home-intro">
      <div class="wrapper">
        <h2>Destinées juives pendant la Seconde guerre mondiale</h2>
        <nuxt-link to="/fr/pages/presentation">
          Présentation de l'exposition
        </nuxt-link>
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
import { mapGetters } from 'vuex'
import Section from '@/components/Section.vue'

export default {
  components: {
    Section
  },
  computed: {
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
  padding: $margin * 2;
  background: $black;
  color: $white;
  text-align: center;

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
