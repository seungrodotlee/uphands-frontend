<template>
  <div
    class="login-wrap container full-y is-flex is-align-items-center is-justify-content-center"
  >
    <form action="" class="login-form shadow">
      <div class="input-wrap box no-shadow">
        <b-field label="이메일">
          <b-input type="email" name="email"> </b-input>
        </b-field>
        <b-field label="비밀번호">
          <b-input type="password" name="password" password-reveal> </b-input>
        </b-field>
        <p>
          <b-checkbox
            v-model="autoLogin"
            name="autoLogin"
            :true-value="true"
            :false-value="false"
            :native-value="autoLogin"
          >
            {{ autoLoginLabel }}
          </b-checkbox>
        </p>
        <p>
          <b-checkbox
            v-model="saveId"
            :true-value="true"
            :false-value="false"
            :native-value="saveId"
          >
            {{ saveIdLabel }}
          </b-checkbox>
        </p>
        <p class="link-wrap">
          <router-link to="/join">회원가입</router-link> /
          <router-link to="/">아이디 </router-link> /
          <router-link to="/">비밀번호 찾기</router-link>
        </p>
      </div>
      <b-button
        class="login-btn bold squared"
        native-type="submit"
        type="is-primary"
        expanded
        >로그인</b-button
      >
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      autoLogin: false,
      autoLoginLabel: "자동으로 로그인하지 않습니다",
      saveId: false,
      saveIdLabel: "아이디를 저장하지 않습니다",
    };
  },
  methods: {},
  watch: {
    autoLogin: function(val) {
      this.autoLoginLabel = val
        ? "자동으로 로그인합니다"
        : "자동으로 로그인하지 않습니다";
    },
    saveId: function(val) {
      this.saveIdLabel = val
        ? "아이디를 저장합니다"
        : "아이디를 저장하지 않습니다";
    },
  },
  mounted: function() {},
};
</script>

<style lang="scss">
@import "../assets/variables.scss";

.login-form {
  border-radius: 0.25rem;
  overflow: hidden;
}

.login-wrap .checkbox {
  font-size: 0.75rem;
  font-weight: 500;
}

.link-wrap,
.link-wrap > a {
  font-size: 0.75rem;
  color: $grey;
}
</style>
