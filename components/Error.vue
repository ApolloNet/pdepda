<template>
  <main class="error">
    <div class="wrapper">
      <h1>Page non trouvée</h1>
      <p>
        <nuxt-link to="/">
          Retour à l'accueil
        </nuxt-link>
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style lang="scss" scoped>
.error {
  padding: $margin;
}
</style>
