<template>
  <article class="doc" :class="document.component">
    <div class="wrapper">
      <div class="doc-medias">
        <div class="doc-medias-inner">
          <Media
            v-for="media in document.medias"
            :key="media"
            :src="media"
            :alt="document.legend"
          />
        </div>
      </div>
      <div class="doc-content">
        <div class="sticky">
          <h3 class="doc-title">{{ document.document }}</h3>
          <div class="doc-body" v-html="document.text"></div>
          <p class="doc-legend">{{ document.legend }}</p>
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

@media (min-width: $mq-680) {
  .doc {
    padding-left: $margin * 2;
    padding-right: $margin * 2;
  }

  // Multiple

  .doc-multiple.doc-top {
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
      flex-wrap: nowrap;
      overflow-x: auto;
    }

    .media {
      flex: 0 0 auto;
      padding-right: $margin;

      &:last-of-type {
        padding-right: 15rem;
      }
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

  // Top

  .doc-top {
    flex-direction: column-reverse;

    .doc-content {
      padding: $margin * 2 $margin * 6 0 $margin * 20;
    }

    .doc-medias {
      width: 100%;
    }
  }
}
</style>
