<template>
  <div id="app">
    <navigation></navigation>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Spoqa Han Sans Neo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
