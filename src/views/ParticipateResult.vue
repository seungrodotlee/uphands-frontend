<template>
  <div class="participate-result flex is-justify-content-center">
    <div class="result-wrap box squared lined no-shadow">
      <h2 class="has-text-centered">정상적으로 입찰에 참여하였습니다!</h2>
      <spacer size="1.5rem"></spacer>
      <p>
        입찰명 <strong>{{ $store.state.bidData[0].bidName }}</strong>
      </p>
      <p>
        입찰종료일시 <strong>{{ $store.state.bidData[0].bidClose }}</strong>
      </p>
      <p>자세한 정보는 다운로드 되는 파일을 참고해주세요.</p>
      <b-button size="is-small" type="is-text"
        >파일이 다운로드 되지 않으시나요?</b-button
      >
      <spacer size="1.5rem"></spacer>
      <b-button type="is-primary" tag="router-link" to="/" expanded
        >메인으로</b-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
