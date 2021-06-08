<template>
  <div class="join container full-y">
    <!-- <check-to-go :checkList="joinChecks" :pass.sync="allChecked"></check-to-go> -->
    <div
      class="join-form-wrap full-y is-flex is-align-items-center is-justify-content-center"
      v-if="allChecked"
    >
      <div class="join-form shadow">
        <div class="input-wrap box no-shadow">
          <b-field label="이메일" :type="emailType" :message="emailMsg">
            <b-input type="email" v-model="email"> </b-input>
          </b-field>
          <b-field label="비밀번호" :type="passType" :message="passMsg">
            <b-input type="password" v-model="password" password-reveal>
            </b-input>
          </b-field>
          <b-field
            label="비밀번호 확인"
            :type="passCheckType"
            :message="passCheckMsg"
          >
            <b-input type="password" v-model="passwordCheck"> </b-input>
          </b-field>
        </div>
        <b-button type="is-primary" class="bold squared" expanded
          >회원가입</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      joinChecks: [
        "업핸즈 가입을 위해서는 사업자등록번호를 제출해야 합니다",
        "업핸즈 가입은 사용자의 가입요청 이후 관리자의 승인 하에 이루어집니다",
      ],
      allChecked: true,
      checkEmailValidTriggered: null,
      email: "",
      emailType: "",
      emailMsg: "",
      password: "",
      passType: "",
      passMsg: "",
      passwordCheck: "",
      passCheckType: "",
      passCheckMsg: "",
    };
  },
  methods: {
    checkEmailValid() {},
  },
  watch: {
    password(to, from) {
      let reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

      if (!reg.test(to)) {
        this.passType = "is-danger";
        this.passMsg =
          "비밀번호는 최소 8자로, 영문자, 숫자, 특수문자를 최소 하나씩 포함하고 있어야 합니다!";
      } else {
        this.passType = "is-success";
        this.passMsg = "";
      }
    },
    passwordCheck(to, from) {
      if (this.password === to) {
        this.passCheckType = "is-success";
        this.passCheckMsg = "";
      } else {
        this.passCheckType = "is-danger";
        this.passCheckMsg = "비밀번호를 다시 확인해주세요!";
      }
    },
  },
};
</script>

<style>
.join-form {
  border-radius: 0.25rem;
  overflow: hidden;
}
</style>
