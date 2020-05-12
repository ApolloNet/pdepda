<template>
  <section :id="'chapter-' + index" class="chapter">
    <div class="wrapper">
      <h2 class="h1 chapter-title">{{ chapter.chapter }}</h2>
      <div class="chapter-intro" v-html="chapter.text"></div>
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
.chapter-title {
  padding: $margin * 2;
}

.chapter-intro {
  padding: 0 $margin * 2;
}

@media (min-width: $mq-680) {
  .chapter-intro {
    padding: 0 $margin * 6 $margin * 2 $margin * 20;
  }
}
</style>
