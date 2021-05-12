<template>
  <div class="bid-detail container">
    <b-button
      class="abs back-to-list-btn"
      tag="router-link"
      to="/bids"
      type="is-ghost"
    >
      목록으로 돌아가기
    </b-button>
    <article class="bid-article">
      <section class="sub-info-section level box">
        <p class="bid-no">
          공고번호 <span class="bold">{{ bidData.bidNo }}</span>
        </p>
        <p class="bidder">
          작성자 <span class="bold">{{ bidData.bidder }}</span>
        </p>
      </section>
      <b-collapse class="card" animation="slide" :open="false">
        <template #trigger="props">
          <div class="card-header" role="button">
            <p class="card-header-title">
              세부정보
            </p>
            <a class="card-header-icon">
              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
            </a>
          </div>
        </template>

        <div class="card-content">
          <div class="content">
            ㅇㅇ
          </div>
        </div>
      </b-collapse>
      <section class="box">
        <h1 class="bid-title title black">{{ bidData.bidName }}</h1>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      bidData: {
        bidNo: 1,
        bidName: "엘레베이터 공사",
        bidder: "전주대학교",
        bidDetail: "",
        annoDate: "2021-01-01",
        bidStart: "2021-02-02",
        bidEnd: "2021-03-02",
        tag: [{ tagTitle: "공사", tagType: "info" }],
        current: "입찰진행중",
      },
    };
  },
  mounted: function() {},
};
</script>

<style lang="scss">
.button.back-to-list-btn {
  height: 2.5rem;
  font-size: 1.5rem;
  top: 1rem;
  right: 0;
  font-weight: 700;
  text-decoration: none !important;
  color: black !important;
  transition: transform 0.5s;
}

.button.back-to-list-btn:hover {
  transform: translateX(-0.5rem);
}

.bid-article * {
  box-shadow: none !important;
}

.bid-article .box,
.bid-article .card {
  border-radius: 0;
  border: 1px solid rgba($grey, 0.25);
  margin-bottom: 0.5rem !important;
}

.bid-detail {
  padding-top: 6.5rem;
}
</style>
