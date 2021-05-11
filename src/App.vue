<template>
  <div id="app">
    <div class="main-logo-container container">
      <router-link
        to="/"
        class="main-logo-wrap is-inline-flex is-align-items-center"
      >
        <logo class="main-logo"></logo>
        <h1 class="black-font">UPHANDS</h1>
      </router-link>
    </div>
    <navigation></navigation>
    <router-view />
  </div>
</template>
<style lang="scss">
//@import "./assets/variables.scss";

html,
body,
#app {
  height: 100%;
  width: 100%;
}

#app {
  position: relative;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-logo-container {
  pointer-events: none;
  z-index: 100;
}

.main-logo-wrap {
  pointer-events: all;
  position: absolute;
  height: 2.5rem;
  margin: 1rem;
  left: 0;
  color: $black;
}

.main-logo-wrap > * {
  max-height: 2.5rem;
}

.main-logo-wrap h1 {
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
