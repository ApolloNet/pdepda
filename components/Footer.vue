<template>
  <footer class="main-footer">
    <div class="wrapper">
      <ul class="footer-logos">
        <li>
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
        <li>
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
        <li>
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
              width="299"
              height="80"
            />
          </a>
        </li>
        <li>
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
        <li>
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
        <li>
          <a
            class="footer-logos-link"
            href="https://www.musees.strasbourg.eu/"
            title="Musées de la Ville de Strasbourg"
            target="_blank"
            rel="noopener"
          >
            <img
              loading="lazy"
              class="footer-logos-logo"
              src="/img/logo-musees-strasbourg.jpg"
              alt="Musées de la Ville de Strasbourg"
              width="960"
              height="80"
            />
          </a>
        </li>
        <li>
          <a
            class="footer-logos-link"
            href="https://www.unistra.fr/"
            title="Université de Strasbourg"
            target="_blank"
            rel="noopener"
          >
            <img
              loading="lazy"
              class="footer-logos-logo"
              src="/img/logo-universite-strasbourg.png"
              alt="Université de Strasbourg"
              width="190"
              height="80"
            />
          </a>
        </li>
        <li>
          <a
            class="footer-logos-link"
            href="http://judaisme.sdv.fr/today/musee/"
            title="Musée judéo-alsacien de Bouxwiller"
            target="_blank"
            rel="noopener"
          >
            <img
              loading="lazy"
              class="footer-logos-logo"
              src="/img/logo-mjab.png"
              alt="Musée judéo-alsacien de Bouxwiller"
              width="140"
              height="80"
            />
          </a>
        </li>
        <li>
          <a
            class="footer-logos-link"
            href="http://judaisme.sdv.fr/today/shial/"
            title="Société d’histoire des Israélites d’Alsace et de Lorraine"
            target="_blank"
            rel="noopener"
          >
            <img
              loading="lazy"
              class="footer-logos-logo"
              src="/img/logo-shial.png"
              alt="Société d’histoire des Israélites d’Alsace et de Lorraine"
              width="77"
              height="80"
            />
          </a>
        </li>
        <li>
          <a
            class="footer-logos-link"
            href="https://www.musee-aquitaine-bordeaux.fr/fr/article/centre-national-jean-moulin"
            title="Centre National Jean Moulin"
            target="_blank"
            rel="noopener"
          >
            <img
              loading="lazy"
              class="footer-logos-logo"
              src="/img/logo-bordeaux-jean-moulin.jpg"
              alt="Centre National Jean Moulin"
              width="36"
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

  @media (min-width: $mq-680) {
    padding-left: $margin * 2;
    padding-right: $margin * 2;
  }

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
  display: none;
  flex-wrap: wrap;
  list-style: none;

  @media (min-width: $mq-680) {
    display: flex;
  }
}

.footer-logos-logo {
  display: block;
  height: auto;
  max-width: 300px;
  max-height: 80px;
  margin: 0 ($margin * 3) ($margin * 2) 0;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  text-align: center;
}

.footer-links-item {
  padding: 0 calc($margin/2);
}
</style>
