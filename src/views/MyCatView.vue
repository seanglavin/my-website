<template>
  <div class="my-cat">
    <h1>This is a page for my cat, Girl!</h1>
    <img :src="require('@/assets/images/20220420_202838_small.jpg')" alt="My Cat Girl" height="600px" width="600">
    <!-- <button @click="showNextImage">Next Image</button> -->
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  data() {
    return {
      imageFolder: '@/assets/images/',
      imageList: ['20220420_202838_small.jpg', 'IMG_20220624_121520_688_2.jpg'],
      currentIndex: 0
    }
  },
  computed: {
    // eslint-disable-next-line
    currentImageUrl() {
      return require(`${this.imageFolder}${this.imageList[this.currentIndex]}`)
    }
  },
  methods: {
    // eslint-disable-next-line
    showNextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.imageList.length
    }
  }
}
</script>
