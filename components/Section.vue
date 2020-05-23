<template>
  <div>
    <div
      class="section-header"
      :class="'section-' + section.id"
      :data-image="section.image"
    >
      <div class="wrapper">
        <div class="section-header-content">
          <p class="section-surtitre">{{ section.place }}</p>
          <h1 class="section-title">
            {{ section.title }}
          </h1>
          <p class="section-museum">{{ section.museum }}</p>
          <nuxt-link
            v-if="!fullContent"
            class="button section-cta"
            :to="section.slug"
          >
            {{ sectionLinkText[lang] }}
          </nuxt-link>
          <ul v-if="fullContent" class="section-summary">
            <li
              v-for="(chapter, index) in section.chapters"
              :key="chapter.chapter"
              class="section-summary-item"
            >
              <nuxt-link :to="'#chapter-' + index" class="section-summary-link">
                {{ chapter.chapter }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="fullContent" class="section-help">
      <h2>{{ helpTitle[lang] }}</h2>
      <p>{{ helpText[lang] }}</p>
    </div>
    <template v-if="fullContent">
      <Chapter
        v-for="(chapter, index) in section.chapters"
        :key="chapter.chapter"
        :chapter="chapter"
        :index="index"
      />
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Chapter from '@/components/Chapter.vue'

export default {
  name: 'Section',
  components: {
    Chapter
  },
  props: {
    section: {
      type: Object,
      required: true
    },
    fullContent: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      sectionLinkText: {
        en: 'Enter the exhibition',
        fr: "Visiter l'exposition"
      },
      helpTitle: {
        en: 'Découvrir les documents en détail',
        fr: 'Découvrir les documents en détail'
      },
      helpText: {
        en: 'Cliquer sur les images pour zoomer',
        fr: 'Cliquer sur les images pour zoomer'
      }
    }
  },
  computed: {
    ...mapState(['lang'])
  }
}
</script>

<style lang="scss" scoped>
$section-header-gradient: linear-gradient(
  112deg,
  $white 0%,
  $white 25%,
  rgba(255, 255, 255, 0.4) 75%
);

.section-header {
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: 50% 33%;
  background-size: cover;
  border-bottom: $onepix solid $grey;
  color: $black;
}

.section-elbeuf {
  background-image: $section-header-gradient, url('/img/header-680-elbeuf.jpg');
}

.section-marseille {
  background-image: $section-header-gradient,
    url('/img/header-680-marseille.jpg');
}

.section-montreal {
  background-image: $section-header-gradient,
    url('/img/header-680-montreal-2.jpg');
}

.section-header-content {
  padding: $margin * 2 $margin;
}

.section-surtitre {
  margin: 0;
  font-size: $fs-big;
  font-family: $ff-title;
  text-transform: uppercase;
}

.section-title {
  margin-bottom: $margin/2;
}

.section-museum {
  margin-bottom: $margin * 2;
  font-size: $fs-big;

  &::after {
    content: '';
    display: block;
    width: 10rem;
    height: 0.25rem;
    margin-top: $margin;
    background-color: $primary;
  }
}

.section-cta {
  margin-top: $margin * 2;
}

.section-summary {
  margin: 0;
  list-style: none;
  font-family: $ff-alt;
}

.section-summary-item {
  margin-bottom: $margin;
}

.section-summary-link {
  display: flex;
  align-items: center;
  color: $black;
  text-decoration: none;

  &::before {
    content: '';
    flex-shrink: 0;
    display: inline-block;
    width: 1.6rem;
    height: 1.5rem;
    margin-right: $margin;
    background: url('/img/arrow.svg') no-repeat;
    background-size: contain;
  }

  &:focus,
  &:hover {
    text-decoration: underline;
  }
}

.section-help {
  padding: $margin * 2;
  background-color: $primary;

  &::before {
    content: '';
    float: left;
    display: block;
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    background: transparent url('/img/eye.svg') 50% 50% no-repeat;
    background-size: 2rem 2rem;
  }

  h2 {
    margin-bottom: 0;
  }

  p {
    margin-left: 3rem;
  }
}

@media (min-width: $mq-680) {
  .section-header {
    padding-left: $margin * 2;
    padding-right: $margin * 2;
  }

  .section-elbeuf {
    background-image: $section-header-gradient,
      url('/img/header-1920-elbeuf.jpg');
  }

  .section-marseille {
    background-image: $section-header-gradient,
      url('/img/header-1920-marseille.jpg');
  }

  .section-montreal {
    background-image: $section-header-gradient,
      url('/img/header-1920-montreal-2.jpg');
  }

  .section-help {
    padding: $margin * 2 $margin * 4 $margin $margin * 17;
  }
}
</style>
