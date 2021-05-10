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
<style lang="scss">
@import "../assets/main.scss";

.navigation {
  min-height: 2rem;
  border-radius: 1.25rem;
  background: rgba(saturate($primary-darker, 10), 0.8);
  bottom: 1rem;
  right: 1rem;
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

.navigation > .button::before {
  content: "";
  position: absolute;
  width: 10ch;
  text-align: right;
  left: calc(-10ch - 1rem);
  transform: translateX(1rem);
  color: black;
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0;
  transition: opacity 1s, transform 1s;
  transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
}

.navigation:hover > .button::before {
  transform: translateX(0);
  opacity: 1;
}

.navigation > .button.nav-home-btn::before {
  content: "메인으로";
}
.navigation > .button.nav-login-btn::before {
  content: "로그인";
}
.navigation > .button.nav-account-btn::before {
  content: "내 정보";
}
.navigation > .button.nav-members-btn::before {
  content: "회원사목록";
}
.navigation > .button.nav-announce-btn::before {
  content: "공지사항";
}
.navigation > .button.nav-new-bid-btn::before {
  content: "새 공고";
}
.navigation > .button.nav-bids-btn::before {
  content: "공고목록";
}
.navigation > .button.nav-back-btn::before {
  content: "뒤로가기";
}
</style>
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
