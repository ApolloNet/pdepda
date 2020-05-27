<template>
  <footer class="main-footer">
    <div class="wrapper">
      <ul class="footer-logos">
        <li class="footer-logos-item">
          <a
            class="footer-logos-link"
            href="https://framemuseums.org/"
            title="FRAME - French AMercian Museum Exchange"
            target="_blank"
            rel="noopener"
          >
            <img
              loading="lazy"
              class="footer-logos-logo"
              src="/img/logo-frame.svg"
              alt="FRAME - French AMercian Museum Exchange"
              width="195"
              height="80"
            />
          </a>
        </li>
        <li class="footer-logos-item">
          <a
            class="footer-logos-link"
            href="https://musees-rouen-normandie.fr/"
            title="Réunion des Musées Métropolitains Rouen Normandie"
            target="_blank"
            rel="noopener"
          >
            <img
              loading="lazy"
              class="footer-logos-logo"
              src="/img/logo-rmm.svg"
              alt="Réunion des Musées Métropolitains Rouen Normandie"
              width="114"
              height="80"
            />
          </a>
        </li>
        <li class="footer-logos-item">
          <a
            class="footer-logos-link"
            href="https://musee-histoire-marseille-voie-historique.fr/"
            title="Musée d'Histoire de Marseille"
            target="_blank"
            rel="noopener"
          >
            <img
              loading="lazy"
              class="footer-logos-logo"
              src="/img/logo-mhmarseille.svg"
              alt="Musée d'Histoire de Marseille"
              width="211"
              height="80"
            />
          </a>
        </li>
        <li class="footer-logos-item">
          <a
            class="footer-logos-link"
            href="https://www.mbam.qc.ca/"
            title="Musée des Beaux-Arts de Montréal"
            target="_blank"
            rel="noopener"
          >
            <img
              loading="lazy"
              class="footer-logos-logo"
              src="/img/logo-mbam.svg"
              alt="Musée des Beaux-Arts de Montréal"
              width="148"
              height="80"
            />
          </a>
        </li>
        <li class="footer-logos-item">
          <a
            class="footer-logos-link"
            href="https://museeholocauste.ca/"
            title="Musée de l'Holocauste de Montréal"
            target="_blank"
            rel="noopener"
          >
            <img
              loading="lazy"
              class="footer-logos-logo"
              :src="`/img/logo-mhmontreal-${lang}.svg`"
              alt="Musée de l'Holocauste de Montréal"
              width="154"
              height="80"
            />
          </a>
        </li>
      </ul>
      <ul class="footer-links">
        <li class="footer-links-item">
          <nuxt-link :to="homeLinkURI[lang]">{{
            homeLinkText[lang]
          }}</nuxt-link>
        </li>
        <li class="footer-links-item">
          <nuxt-link :to="aboutLinkURI[lang]">{{
            aboutLinkText[lang]
          }}</nuxt-link>
        </li>
        <li class="footer-links-item">
          <nuxt-link :to="legalLinkURI[lang]">{{
            legalLinkText[lang]
          }}</nuxt-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Footer',
  data() {
    return {
      homeLinkText: {
        en: 'Home',
        fr: 'Accueil'
      },
      homeLinkURI: {
        en: '/en',
        fr: '/fr'
      },
      aboutLinkText: {
        en: 'About',
        fr: 'Présentation'
      },
      aboutLinkURI: {
        en: '/en/pages/about',
        fr: '/fr/pages/presentation'
      },
      legalLinkText: {
        en: 'Legal Notice',
        fr: 'Mentions légales'
      },
      legalLinkURI: {
        en: '/en/pages/legal-notice',
        fr: '/fr/pages/mentions-legales'
      }
    }
  },
  computed: {
    ...mapState(['lang'])
  }
}
</script>

<style lang="scss" scoped>
.main-footer {
  padding: $margin * 4 $margin $margin $margin;
  background-color: $grey;
  border-top: 1em solid $primary;

  ul,
  li {
    margin: 0;
  }
}

.main-footer .wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-logos {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}

.footer-logos-logo {
  display: block;
  max-width: 100%;
  height: auto;
  max-height: 80px;
  margin: 0 $margin * 3 $margin * 2 0;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  text-align: center;
}

.footer-links-item {
  padding: 0 $margin/2;
}

@media (min-width: $mq-680) {
  .main-footer {
    padding-left: $margin * 2;
    padding-right: $margin * 2;
  }
}
</style>
