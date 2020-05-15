<template>
  <div class="page">
    <div class="wrapper">
      <h1>{{ page.title }}</h1>
      <div v-html="page.html"></div>
    </div>
  </div>
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
  padding: $margin * 2 $margin;
}

@media (min-width: $mq-680) {
  .page {
    padding-left: $margin * 2;
    padding-right: $margin * 2;
  }
}
</style>
