<template>
  <div class="participate">
    <section class="participate-container container">
      <h1 class="title">
        입찰에 참가하기 위해 아래 내용들을 자세히 읽고 확인해주세요!
      </h1>
      <div class="content">
        <div class="box level" v-for="(a, i) in agreementList" :key="i">
          {{ a }}
          <b-checkbox-button
            v-model="userAgreements"
            :native-value="i"
            type="is-success"
            >확인했습니다</b-checkbox-button
          >
        </div>
      </div>
      <div class="box">
        <b-field label="입찰가를 제시해주세요">
          <b-numberinput
            v-model="bidPrice"
            step="10000"
            :disabled="userAgreements.length < agreementList.length"
          >
          </b-numberinput>
        </b-field>
      </div>
      <b-button
        class="participate-bid-button full-x"
        :disabled="bidPrice === 0 || bidPrice === null"
        type="is-success"
        outlined
        >입찰가 제출</b-button
      >
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      agreementList: [
        "입찰 마감 이후 입찰 취소 시 입찰가의 1%가 부과됩니다",
        "입찰가는 기초가의 10% 범위 내에서 작성되어야 합니다",
      ],
      userAgreements: [],
      bidPrice: null,
    };
  },
  watch: {
    agreements(to, from) {
      console.log(to);
    },
  },
};
</script>

<style>
.participate-agreement-container .box {
  font-size: 1.25rem;
}

.button.participate-bid-button {
  font-size: 1.25rem;
  padding: 1.25em;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgb(32 32 32 / 10%),
    0 0px 0 1px rgb(32 32 32 / 2%) !important;
}
</style>
