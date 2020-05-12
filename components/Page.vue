<template>
  <main class="page">
    <div class="wrapper">
      <h1>{{ page.title }}</h1>
      <div v-html="page.text"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Page',
  props: {
    page: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  padding: $margin;
}
</style>
