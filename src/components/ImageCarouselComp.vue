<template>
  <div>
    <VueCarousel>
      <div v-for="(image, index) in images" :key="index">
        <img :src="require(`@/assets/${folder}/${image}`)" alt="carousel-image">
      </div>
    </VueCarousel>
  </div>
</template>

<script>
import { ref } from 'vue'
import { VueCarousel } from 'vue-carousel'

export default {
  components: {
    VueCarousel
  },
  props: {
    folder: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      images: ref([]) // Array to store image filenames
    }
  },
  mounted() {
    this.loadImages()
  },
  methods: {
    async loadImages() {
      try {
        // Use import statement to import all images from the folder
        const imagesContext = await require.context(`@/assets/${this.folder}/*.(png|jpe?g|gif|svg)`)

        // Extract filenames from the imagesContext object
        this.images = Object.keys(imagesContext).map(key => key.replace(`@/assets/${this.folder}/`, ''))
      } catch (error) {
        console.error('Error loading images:', error)
      }
    }
  }
}
</script>

<style scoped>
/* Add any styles specific to your carousel component */
</style>
