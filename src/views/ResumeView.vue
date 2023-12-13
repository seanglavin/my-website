<template>
  <div class="resume">
    <div class="min-h-screen flex flex-col items-center justify-top">
      <div class="text-center">
        <h1 class="text-3xl font-bold p-5">This is the page for my resume</h1>
      </div>
      <ButtonComp buttonText="Download PDF" />
    </div>
  </div>
</template>

<script>
import ButtonComp from '@/components/ButtonComp.vue'

export default {
  components: {
    ButtonComp
  }
}
</script>
