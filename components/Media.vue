<template>
  <div :class="cssClass">
    <img
      v-if="isImage"
      :id="filename + '-' + index"
      loading="lazy"
      class="media__image"
      :src="`/files/derivatives/small/${file}`"
      :alt="alt"
      :srcset="`
        /files/derivatives/small/${file} 480w,
        /files/derivatives/medium/${file} 799w,
        /files/derivatives/large/${file} 1280w,
        /files/derivatives/giant/${file} 1600w
      `"
    />
    <audio v-if="isAudio" controls :src="src" />
    <a v-if="isPdf" class="media--pdf" :href="src" target="_blank">
      Voir la traduction
    </a>
    <iframe
      v-if="isYoutube"
      width="560"
      height="315"
      :src="src"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
    <p v-if="legend" class="media__legend" v-html="legend"></p>
  </div>
</template>

<script>
export default {
  name: 'Media',
  props: {
    alt: {
      type: String,
      default: ''
    },
    legend: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  },
  computed: {
    cssClass() {
      const cssClass = ['media']
      if (this.isAudio) {
        cssClass.push('media--audio')
      }
      if (this.legend) {
        cssClass.push('media--with-legend')
      }
      return cssClass.join(' ')
    },
    file() {
      return this.src.split('/').pop()
    },
    filename() {
      return this.file.split('.').shift()
    },
    ext() {
      return this.file.split('.').pop()
    },
    isImage() {
      return ['jpg', 'jpeg', 'png'].includes(this.ext)
    },
    isAudio() {
      return ['mp3'].includes(this.ext)
    },
    isPdf() {
      return ['pdf'].includes(this.ext)
    },
    isYoutube() {
      return this.src.includes('https://www.youtube.com/')
    }
  },
}
</script>

<style lang="scss" scoped>
.media {
  position: relative;
  margin-bottom: $margin;
}

.doc-multiple .media--with-legend {
  @media (min-width: $mq-680) {
    max-width: 20rem;
  }
}

.media--pdf {
  display: block;
  font-size: $fs-small;
  text-align: center;
}

.media--audio {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid darken($grey, 10%);
  border-radius: 0.25rem;
  box-shadow: 0.25rem 0.25rem 0.25rem darken($grey, 2%);

  @media (min-width: $mq-680) {
    max-height: 60vh;
    padding: 4rem 2rem;
  }
}

.media__image {
  display: block;
  width: 100%;
  height: auto;
  margin: 0 auto;
  cursor: pointer;

  @media (min-width: $mq-680) {
    width: auto;
    max-width: 100%;
    max-height: 60vh;
  }
}

.media__legend {
  padding: 1rem;

  @media (min-width: $mq-680) {
    font-size: $fs-small;
  }
}

.openseadragon-canvas {
  cursor: pointer;
}
</style>
