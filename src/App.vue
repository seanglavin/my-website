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
  <router-view/>
</template>

<style>
#app {
  min-height: 100vh;
  font-family: "IBMPlexMono", "Roboto", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary-light);
  background-color: var(--secondary-blue-light);
}

.top-bar {
  background-color: var(--secondary-blue-dark);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: var(--primary-light);
}

nav a.router-link-exact-active {
  color: var(--accent-color);
}
</style>
