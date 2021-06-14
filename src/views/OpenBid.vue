<template>
  <div
    class="open-bid full flex is-align-items-center is-justify-content-center"
  >
    <div class="validate-success squared lined" v-if="validateResult">
      <h2 class="has-background-success has-text-white has-text-centered">
        검증에 성공하였습니다
      </h2>
      <div class="box no-shadow">
        <p>
          {{ $store.state.user.userName }}님의 입찰가는 {{ price }}원 입니다.
        </p>
        <p>결과 발표는 {{ $store.state.bidData[0].bidClose }}일입니다.</p>
      </div>
      <b-button
        class="squared"
        type="is-success"
        tag="router-link"
        to="/"
        expanded
        ><h2>메인으로</h2></b-button
      >
    </div>
    <div class="validate-fail squared lined" v-if="!validateResult">
      <h2 class="has-background-danger has-text-white has-text-centered">
        검증에 실패하였습니다
      </h2>
      <div class="box no-shadow">
        <p>
          반드시 이메일로 전송받으신 링크를 통해 접속해주시길 바랍니다.
        </p>
      </div>
      <b-button
        class="squared"
        type="is-danger"
        tag="router-link"
        to="/"
        expanded
        ><h2>메인으로</h2></b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["code", "price"],
  data() {
    return {
      validateResult: true,
    };
  },
  methods: {
    validatePrice(code, price) {
      //서버에서 검증
    },
  },
};
</script>

<style>
.open-bid > div > h2 {
  padding: 0.5rem;
}
</style>
