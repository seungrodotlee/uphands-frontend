<template>
  <div class="navigation flex vertical centering abs vertical">
    <b-button class="nav-home-btn" tag="router-link" to="/" type="is-black">
      <icon>home</icon>
    </b-button>
    <b-button
      :class="!logined ? 'nav-login-btn' : 'nav-account-btn'"
      tag="router-link"
      to="/"
      type="is-black"
    >
      <icon>account_circle</icon>
    </b-button>
    <b-button class="nav-members-btn" tag="router-link" to="/" type="is-black">
      <icon>business</icon>
    </b-button>
    <b-button class="nav-announce-btn" tag="router-link" to="/" type="is-black">
      <icon>campaign</icon>
    </b-button>
    <b-button class="nav-new-bid-btn" tag="router-link" to="/" type="is-black">
      <icon>create</icon>
    </b-button>
    <b-button class="nav-bids-btn" tag="router-link" to="/" type="is-black">
      <icon>list_alt</icon>
    </b-button>
    <b-button class="nav-back-btn" tag="router-link" to="/" type="is-black">
      <icon>arrow_back</icon>
    </b-button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      logined: true,
    };
  },
  methods: {},
  created: function() {},
};
</script>

<style>
.navigation {
  min-height: 2rem;
  border-radius: 1.25rem;
  background: rgba(0, 0, 0, 0.8);
  bottom: 2rem;
  right: 2rem;
  padding: 0.25rem;
  gap: 0.25rem;
  backdrop-filter: saturate(180%) blur(20px);
}

.navigation > .button {
  height: 2rem;
  width: 2rem;
  font-size: 1.25rem;
  background: transparent !important;
  color: white;
  padding: unset;
  border-radius: 50%;
  opacity: 0.5;
  transition: opacity 1s;
}

.navigation > .button:hover {
  opacity: 1;
}
</style>
