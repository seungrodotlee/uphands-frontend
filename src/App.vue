<template>
  <div id="app">
    <router-link
      to="/"
      class="main-header is-inline-flex is-align-items-center"
    >
      <logo class="main-logo"></logo>
      <h1 class="black-font">UPHANDS</h1>
    </router-link>
    <navigation></navigation>
    <router-view />
  </div>
</template>
<style lang="scss">
@import "./assets/main.scss";

#app {
  position: relative;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-header {
  position: absolute;
  height: 2.5rem;
  margin: 1rem;
  left: 0;
  color: $black;
}

.main-header > * {
  max-height: 2.5rem;
}

.main-header h1 {
  font-size: 1.5rem;
  font-weight: 900;
  margin-left: 0.75rem;
}

.main-logo {
  height: 2.5rem;
  fill: $primary;
}
</style>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  components: {
    navigation: Navigation,
  },
  data: function() {
    return {};
  },
  methods: {},
};
</script>
