<template>
  <article class="doc" :class="document.component">
    <div class="wrapper">
      <div v-if="document.medias" class="doc-medias">
        <div class="doc-medias-inner sticky">
          <Media
            v-for="(media, index) in document.medias"
            :key="document.document + index"
            :index="index"
            :src="media.file ? media.file : media"
            :alt="document.legend"
            :legend="media.legend ? media.legend : null"
          />
        </div>
      </div>
      <div class="doc-content">
        <div class="sticky">
          <h3 class="doc-title" v-html="document.document"></h3>
          <div v-if="document.text" class="doc-body" v-html="document.text"></div>
          <p v-if="document.legend" class="doc-legend" v-html="document.legend"></p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import Media from '@/components/Media.vue'

export default {
  name: 'Document',
  components: {
    Media
  },
  props: {
    document: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.doc {
  padding: $margin * 4 $margin;

  &:nth-of-type(even) {
    background: $grey;

    &.doc-multiple.doc-top .doc-medias::after {
      background: linear-gradient(to right, transparent, $grey);
    }
  }
}

.doc .wrapper {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
}

// Document elements

.doc-title {
  font-size: $fs-big;
}

.doc-medias {
  margin-bottom: $margin;
}

.doc-legend {
  margin: 0;
  font-size: $fs-small;
  color: $grey-dark;
}

// Bottom

.doc-bottom {
  .wrapper {
    flex-direction: column-reverse;
  }
}

@media (min-width: $mq-680) {
  .doc {
    padding-left: $margin * 2;
    padding-right: $margin * 2;
  }

  // Multiple

  .doc-multiple {

    .doc-medias {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 15rem;
        height: 100%;
        background: linear-gradient(to right, transparent, $white);
      }
    }

    .doc-medias-inner {
      display: flex;
      align-items: stretch;
      flex-wrap: nowrap;
      overflow-x: auto;
      padding-right: 15rem;
    }

    .media {
      flex: 0 0 auto;
      margin-right: $margin;
    }
  }

  // Left / Right

  .doc-right,
  .doc-left {
    .doc-content,
    .doc-medias {
      flex-basis: 50%;
    }

    .sticky {
      position: sticky;
      top: $margin;
    }
  }

  .doc-left .wrapper {
    flex-direction: row;

    .doc-content {
      padding-left: $margin * 2;
    }
  }

  .doc-right .wrapper {
    flex-direction: row-reverse;

    .doc-content {
      padding-right: $margin * 2;
    }
  }

  // Top & bottom

  .doc-top,
  .doc-bottom {
    .doc-content {
      padding-right: $margin * 6;
      padding-left: $margin * 20;
    }

    .doc-medias {
      width: 100%;
    }
  }

  .doc-top .doc-content {
    padding-top: $margin * 2;
  }

  .doc-bottom .doc-content {
    padding-bottom: $margin * 2;
  }
}
</style>
