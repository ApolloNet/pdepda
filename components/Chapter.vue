<template>
  <section :id="'chapter-' + index" class="chapter">
    <div class="chapter-header">
      <div class="wrapper">
        <h2 class="h1 chapter-title">{{ chapter.chapter }}</h2>
        <div class="chapter-intro" v-html="chapter.text"></div>
      </div>
    </div>
    <Document
      v-for="document in chapter.documents"
      :key="document.document"
      :document="document"
    />
  </section>
</template>

<script>
import Document from '@/components/Document.vue'

export default {
  name: 'Chapter',
  components: {
    Document
  },
  props: {
    chapter: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.chapter-header {
  padding: $margin * 6 $margin $margin * 2 $margin;
  background: $black;
  color: $white;
}

.chapter:first-of-type {
  .chapter-header {
    background: $grey;
    color: $black;
  }
}

@media (min-width: $mq-680) {
  .chapter-header {
    padding-right: $margin * 6;
    padding-left: $margin * 20;
  }
}
</style>
