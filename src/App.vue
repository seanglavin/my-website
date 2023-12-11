<template>
  <header class="top-bar">
    <nav class="top-bar-nav">
      <router-link to="/">
        <!-- Add nav icons later! -->
        <!-- <i class="icon-home"></i> -->
        <span>Home</span>
      </router-link> |
      <router-link to="/about">
        <span>About</span>
      </router-link> |
      <router-link to="/mycat">
        <span>My Cat</span>
      </router-link> |
      <router-link to="/resume">
        <span>Resume</span>
      </router-link> |
      <router-link to="/blog">
        <span>Blog</span>
      </router-link>
    </nav>
  </header>
  <div class="router-view-container">
    <router-view />
  </div>
  <footer class="bot-bar">
    <ul class="bot-bar-links">
      <!-- Add link icons later! -->
      <!-- <i class="icon-home"></i> -->
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
          rel="noopener">Email Link</a></li> |
      <li><a href="https://www.linkedin.com/in/skglavin/" target="_blank" rel="noopener">LinkedIn</a></li> |
      <li><a href="https://github.com/seanglavin" target="_blank" rel="noopener">Github</a></li>
    </ul>
  </footer>
</template>

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

.top-bar {
  background-color: var(--secondary-blue-dark);
  padding: 30px;
}

.bot-bar {
  background-color: var(--secondary-blue-dark);
  padding: 20px;
}

.router-view-container {
  flex: 1;
  padding: 10px;
  position: relative;
  overflow: hidden;
}

nav a {
  font-weight: bold;
  color: var(--primary-light);
}

nav a.router-link-exact-active {
  color: var(--accent-color);
}

ul {
  list-style-type: none;
  /* padding: 20px; */
  margin: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: var(--accent-color-2)
}
</style>
