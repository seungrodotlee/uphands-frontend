<template>
  <div id="app">
    <div class="top-bar fixed full-x">
      <div class="container is-flex level">
        <div class="logo-section">
          <router-link
            to="/"
            class="main-logo-wrap is-inline-flex is-align-items-center"
          >
            <logo class="main-logo"></logo>
            <h1 class="black-font">UPHANDS</h1>
          </router-link>
        </div>
        <div class="menu-section">
          <router-link
            v-if="$route.name === 'BidDetail'"
            class="back-to-list-btn is-inline-block"
            to="/bids"
          >
            목록으로 돌아가기
          </router-link>
        </div>
        <search-bar
          v-if="['Home', 'Bids'].includes($route.name)"
          class="abs"
        ></search-bar>
      </div>
    </div>
    <router-view class="main-view" />
    <navigation></navigation>
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
  font-family: "Noto Sans KR", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-view {
  padding-top: 6.5rem;
}

.main-view.no-spacer {
  padding: 0;
}

.main-view.fit-spacer {
  padding-top: 3.5rem;
}

.top-bar {
  border-bottom: 1px solid rgba($black, 0.25);
  backdrop-filter: saturate(180%) blur(20px);
  background: rgba($white, 0.6);
  z-index: 100;
}

.main-logo-wrap {
  pointer-events: all;
  height: 2.5rem;
  margin: 0.5rem;
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

.back-to-list-btn {
  height: 2.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none !important;
  color: black !important;
  transition: transform 0.5s;
}

.back-to-list-btn:hover {
  transform: translateX(-0.5rem);
}
</style>

<script>
import Navigation from "./components/Navigation.vue";
import SearchBar from "./components/SearchBar.vue";

export default {
  components: {
    navigation: Navigation,
    "search-bar": SearchBar,
  },
  data: function() {
    return {};
  },
  methods: {},
};
</script>
