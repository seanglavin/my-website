<template>
  <footer class="bot-bar bg-secondaryBlueDark p-6">
    <ul class="bot-bar-links flex items-center justify-center list-none gap-2 m-0">
      <li class="footer-link list-none text-accentColor2" v-for="(link, index) in footerLinks" :key="index">
        <a :href="link.url" :target="link.target" :rel="link.rel">
          {{ link.text }}
        </a>
        <!-- add a | between each link -->
        <span v-if="index < footerLinks.length - 1" class="text-primaryLight"> | </span>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerLinks: [
        {
          text: 'Email Link',
          url: 'https://www.youtube.com/watch?v=KxGRhd_iWuE',
          target: '_blank',
          rel: 'noopener'
        },
        {
          text: 'LinkedIn',
          url: 'https://www.linkedin.com/in/skglavin/',
          target: '_blank',
          rel: 'noopener'
        },
        {
          text: 'Github',
          url: 'https://github.com/seanglavin',
          target: '_blank',
          rel: 'noopener'
        }
      ]
    }
  }
}
</script>
