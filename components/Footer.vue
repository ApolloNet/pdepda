<template>
  <footer class="main-footer">
    <div class="wrapper">
      <ul class="footer-logos">
        <li class="footer-logos-item">
          <a
            class="footer-logos-link"
            href="https://musees-rouen-normandie.fr/"
            target="_blank"
          >
            <img
              class="footer-logos-logo"
              src="/img/logo-rmm.png"
              alt="Réunion des Musées Métropolitains Rouen Normandie"
              width="120"
              height="120"
            />
          </a>
        </li>
        <li class="footer-logos-item">
          <a
            class="footer-logos-link"
            href="https://musee-histoire-marseille-voie-historique.fr/"
            target="_blank"
          >
            <img
              class="footer-logos-logo"
              src="/img/logo-mhmarseille.png"
              alt="Musée d'Histoire de Marseille"
              width="317"
              height="120"
            />
          </a>
        </li>
        <li class="footer-logos-item">
          <a
            class="footer-logos-link"
            href="https://www.mbam.qc.ca/"
            target="_blank"
          >
            <img
              class="footer-logos-logo"
              src="/img/logo-mbam.png"
              alt="Musée des Beaux-Arts de Montréal"
              width="222"
              height="120"
            />
          </a>
        </li>
        <li class="footer-logos-item">
          <a
            class="footer-logos-link"
            href="https://museeholocauste.ca/"
            target="_blank"
          >
            <img
              class="footer-logos-logo"
              src="/img/logo-mhmontreal.png"
              alt="Musée de l'Holocauste de Montréal"
              width="120"
              height="120"
            />
          </a>
        </li>
      </ul>
      <ul class="footer-links">
        <li class="footer-links-item">
          <nuxt-link to="/fr">Accueil</nuxt-link>
        </li>
        <li class="footer-links-item">
          <nuxt-link to="/fr/pages/mentions-legales"
            >Mentions légales</nuxt-link
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.main-footer {
  padding: $margin * 4 $margin $margin $margin;
  background-color: $primary;
  color: $black;

  ul,
  li {
    margin: 0;
  }

  a {
    color: $black;
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
  margin: 0 $margin $margin 0;
  background-color: $white;
}

.footer-links {
  list-style: none;
}

.footer-links-item {
}

@media (min-width: $mq-680) {
  .main-footer {
    padding-left: $margin * 2;
    padding-right: $margin * 2;
  }
}
</style>
