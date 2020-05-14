<template>
  <main>
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
    <Section
      v-for="section in sections"
      :key="section.slug"
      :section="section"
      :full-content="false"
    />
  </main>
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
.home-header {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 40% 50%;
  background-image: linear-gradient(
      67deg,
      transparent 0%,
      $black 75%,
      $black 100%
    ),
    url('/img/header-home.png');
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

@media (min-width: $mq-680) {
  .home-header-img {
    margin-left: auto;
    margin-right: 8rem;
  }
}
</style>
