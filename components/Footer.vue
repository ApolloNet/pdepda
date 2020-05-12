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
  display: flex;
  justify-content: space-between;
  padding: $margin/2 $margin * 2;
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

.footer-links {
  display: flex;
  list-style: none;
}

.footer-links-item {
  padding: 0 $margin/2;
}
</style>
