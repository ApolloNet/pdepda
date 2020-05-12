<template>
  <div class="media">
    <img v-if="isImage" :id="id" class="media-image" :src="src" :alt="alt" />
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
    id() {
      return this.src
        .split('/')
        .pop()
        .split('.')
        .shift()
    },
    ext() {
      return this.src.split('.').pop()
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
  text-align: center;
}

.media-image {
  max-width: 100%;
  max-height: 80vh;
}
</style>
