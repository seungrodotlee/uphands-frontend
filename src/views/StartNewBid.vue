<template>
  <div class="start-new-bid flex is-justify-content-center">
    <div class="result-wrap box squared lined no-shadow">
      <h2>
        요청하신 {{ bidData.bidName }} 입찰의 기초가는
        {{ bidData.basePrice }}원으로 결정되었습니다.
      </h2>
      <spacer size="1.5rem"></spacer>
      <p>
        예정가는 아래 버튼을 클릭하시면 기초가 범위 내에서 랜덤으로 책정되며,
        예정가 책정 완료 후 안내사항과
        <strong class="has-text-danger">예정가 및 보안코드</strong>가 담긴
        파일이 다운로드 되니주의하여 보관하시길 바랍니다.
      </p>
      <spacer size="2rem"></spacer>
      <b-button type="is-success" expanded>예정가 책정</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bidData: {
        bidName: "",
        basePrice: 0,
      },
    };
  },
};
</script>

<style>
.start-new-bid > .result-wrap {
  max-width: 40%;
  text-align: justify;
}
</style>
