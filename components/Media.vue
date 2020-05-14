<template>
  <div class="media">
    <img
      v-if="isImage"
      :id="filename"
      loading="lazy"
      class="media-image"
      :src="`/files/derivatives/small/${file}`"
      :alt="alt"
      :srcset="
        `/files/derivatives/small/${file} 480w,
          /files/derivatives/medium/${file} 799w,
          /files/derivatives/large/${file} 1280w,
          /files/derivatives/giant/${file} 1600w`
      "
    />
    <audio v-if="isAudio" class="media-audio" controls :src="src" />
  </div>
</template>

<script>
export default {
  name: 'Media',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
  },
  computed: {
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
    }
  }
}
</script>

<style lang="scss" scoped>
.media {
  margin-bottom: $margin;
  text-align: center;
}

.media-image {
  width: 100%;
  height: auto;
}

@media (min-width: $mq-680) {
  .media-image {
    width: auto;
    max-width: 100%;
    max-height: 90vh;
  }
}
</style>
