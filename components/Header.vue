<template>
  <header class="main-header">
    <div class="wrapper main-nav">
      <nuxt-link to="/" class="header-logo">
        <img
          src="/img/logo-inline--v2.svg"
          alt="Ports d'Exil, Ports d'Attache"
          width="466"
          height="32"
        />
      </nuxt-link>
      <nav>
        <ul v-if="false" class="switch-lang">
          <li class="switch-lang-item">
            <nuxt-link class="switch-lang-link" to="/en" title="English">
              EN
            </nuxt-link>
          </li>
          <li class="switch-lang-item">
            <nuxt-link class="switch-lang-link" to="/fr" title="Français">
              FR
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.main-header {
  background-color: $black;
  color: $white;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $margin;

  a {
    color: $white;
  }
}

.header-logo {
  display: block;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
}

.switch-lang {
  margin: 0;
  list-style: none;
}

.switch-lang-item {
  display: inline-block;
  margin: 0;
}

@media (min-width: $mq-680) {
  .main-header {
    padding-left: $margin * 2;
    padding-right: $margin * 2;
  }
}
</style>
