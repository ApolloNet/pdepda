<template>
  <main>
    <div
      class="section-header"
      :class="'section-' + section.id"
      :data-image="section.image"
    >
      <div class="wrapper">
        <div class="section-header-content">
          <p class="section-surtitre">{{ section.place }}</p>
          <h1 class="section-title">
            <nuxt-link class="section-title-link" :to="section.slug">{{
              section.title
            }}</nuxt-link>
          </h1>
          <p class="section-museum">{{ section.museum }}</p>
          <nuxt-link v-if="!fullContent" class="section-cta" :to="section.slug">
            Visiter l'exposition
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
    <template v-if="fullContent">
      <Chapter
        v-for="(chapter, index) in section.chapters"
        :key="chapter.chapter"
        :chapter="chapter"
        :index="index"
      />
    </template>
  </main>
</template>

<script>
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
  }
}
</script>

<style lang="scss" scoped>
.section-header {
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: 50% 33%;
  background-size: cover;
  color: $black;

  a {
    color: $black;

    &:focus,
    &:hover {
      color: $primary;
    }
  }
}

.section-header-content {
  padding: $margin * 2 $margin;
}

.section-elbeuf {
  background-image: linear-gradient(
      112deg,
      $white 0%,
      $white 25%,
      rgba(255, 255, 255, 0.9) 75%
    ),
    url('/img/header-elbeuf.png');
}

.section-surtitre {
  margin: 0;
  font-size: $fs-big;
}

.section-title {
  margin-bottom: $margin/2;
}

.section-title-link {
  text-decoration: none;
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
  display: inline-block;
  margin-left: 1rem;
  font-family: $ff-title;
  text-decoration: none;

  &::after {
    content: '';
    display: block;
    width: 110%;
    height: 0.5rem;
    margin: -0.5rem 0 0 -5%;
    background-color: $primary;
  }
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
  text-decoration: none;

  &::before {
    content: '';
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

@media (min-width: $mq-680) {
  .section-header {
    padding-left: $margin * 2;
    padding-right: $margin * 2;
  }

  .section-header-content {
    width: 66.66%;
  }
}
</style>
