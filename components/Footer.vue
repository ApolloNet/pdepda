<template>
  <footer class="main-footer">
    <div class="wrapper">
      <p>Logos partenaires</p>
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
  padding: $margin/2 $margin;
  background-color: $black;
  color: $white;

  p,
  ul,
  li {
    margin: 0;
  }

  a {
    color: $white;
  }
}

.main-footer .wrapper {
  display: flex;
  justify-content: space-between;
}

.footer-links {
  display: flex;
  list-style: none;
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
