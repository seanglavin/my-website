<template>
  <HeaderComp />
  <div class="router-view-container">
    <router-view />
  </div>
  <FooterComp />
</template>

<script>
import FooterComp from '@/components/FooterComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'

export default {
  components: {
    FooterComp,
    HeaderComp
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  min-width: 320px;
  font-family: "IBMPlexMono", "Roboto", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary-light);
  background-color: var(--secondary-blue-light);
  background-image: url('@/assets/images/sideprofileoverlay2-removebg.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.router-view-container {
  flex: 1;
  padding: 10px;
  position: relative;
  overflow: hidden;
}
</style>
