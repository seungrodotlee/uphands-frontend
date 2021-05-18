<template>
  <div class="bid-detail container">
    <article class="bid-article">
      <section class="sub-info-section level box">
        <p class="bid-no">
          공고번호 <span class="bold">{{ bidData.bidNo }}</span>
        </p>
        <p class="bidder">
          작성자
          <router-link
            :to="{ name: 'Member', params: { memberName: bidData.bidder } }"
            class="bold"
            >{{ bidData.bidder }}</router-link
          >
        </p>
      </section>
      <b-collapse class="card" animation="slide">
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
          <div class="bid-detail-content grid content">
            <div class="bid-detail-content-item">
              공고개시일 <span class="bold">{{ bidData.annoDate }}</span>
            </div>
            <div class="bid-detail-content-item">
              입찰시작일 <span class="bold">{{ bidData.bidStart }}</span>
            </div>
            <div class="bid-detail-content-item">
              입찰마감일 <span class="bold">{{ bidData.bidEnd }}</span>
            </div>
            <div class="bid-detail-content-item">
              기초가 <span class="bold">금 {{ bidData.basePrice }}원</span>
            </div>
            <div class="bid-detail-content-item">
              {{ bidData.period.type }}기간
              <span class="bold">{{ bidData.period.data }}</span>
            </div>
            <div
              class="bid-detail-content-item"
              v-for="d in bidData.etc"
              :key="d.index"
            >
              {{ d.detailTitle }} <span class="bold">{{ d.detailData }}</span>
            </div>
          </div>
        </div>
      </b-collapse>
      <section class="bid-main-article box">
        <h1 class="bid-title title black is-flex is-align-items-center">
          {{ bidData.bidName }}
          <div class="bid-current-step-tag tag is-large is-primary">
            {{ progressSteps[bidData.current] }}
          </div>
          <router-link
            class="join-bid-btn tag is-large is-success"
            v-if="bidData.current === 1"
            :to="{ name: 'ParticipateBid', params: { bidNo: bidData.bidNo } }"
            >입찰참가하기</router-link
          >
        </h1>
        <div class="content">
          {{ bidData.bidDetail }}
        </div>
        <div class="tags">
          <router-link
            class="bid-tag bold"
            :to="{ path: '/bids', query: { query: t.tagTitle, target: 'tag' } }"
            v-for="t in bidData.tag"
            :key="t.tagTitle"
            >#{{ t.tagTitle }}</router-link
          >
        </div>
      </section>
      <section class="qualification-section box">
        <h1 class="subtitle bold">입찰참가자격</h1>
        <list-builder :list="bidData.qualification"></list-builder>
      </section>
      <section class="selection-rule-section box">
        <h1 class="subtitle bold">낙찰자 결정방법</h1>
        <list-builder :list="bidData.selectionRule"></list-builder>
      </section>
      <section class="submit-docs-section box">
        <h1 class="subtitle bold">제출서류</h1>
        <list-builder :list="bidData.submitDocs"></list-builder>
      </section>
      <section class="notes-section box">
        <h1 class="subtitle bold">기타사항</h1>
        <list-builder :list="bidData.notes"></list-builder>
      </section>
    </article>
    <spacer size="4.5rem"></spacer>
  </div>
</template>

<script>
import ListBuilder from "../components/ListBuilder.vue";
export default {
  components: { ListBuilder },
  data: function() {
    return {
      bidData: {
        bidNo: 1,
        bidName: "엘레베이터 공사",
        bidder: "전주대학교",
        bidDetail:
          "전주대학교 공학관 엘레베이터를 새로 설치하려 합니다. 많은 참여 부탁드립니다.",
        annoDate: "2021-01-01",
        bidStart: "2021-02-02",
        bidEnd: "2021-03-02",
        basePrice: "100,000",
        period: { type: "공사", data: "3개월" },
        etc: [
          {
            index: 0,
            detailTitle: "공사위치",
            detailData: "전북 전주시 천잠로 303 전주대학교 공학관",
          },
          { index: 1, detailTitle: "현장설명", detailData: "2021-01-20" },
        ],
        tag: [{ tagTitle: "공사", tagType: "info" }],
        selectionRule: ["제일 유리한 조건"],
        qualification: [
          "건설산업기본법에 의한 실내건축공사업 면허를 보유한 업체",
          "입찰공고일 현재 부도업체, 법정관리업체, 화의개시업체, 국가기관으로부터 입찰참가자격제재 중에 있는 업체 또는 본교에서 발주한 용역 중 정당한 사유 없이 계약체결을 이행하지 않은 업체는 참가대상에서 제외.",
        ],
        submitDocs: [
          "사업자등록증 사본 1부",
          "인감증명서 1부",
          "사용인감계 1부",
          "법인등기부등본 1부",
          "제안서 6부",
        ],
        notes: [
          "입찰참가자는 제안서 작성 방법과 평가 방법 등 본 건에 관한 모든 사항에 대하여 완전히 숙지하고 입찰에 응하여야 하며 숙지하지 못한 책임은 입찰자에게 있습니다.",
          "제출된 제안서는 일절 반환하지 않으며, 본 제안과 관련된 모든 소요 비용은 제안사의 부담으로 하여야 합니다.",
          "제안내용 확인을 위하여 추가자료 요청을 할 수 있으며, 제안사는 이에 응하여야 합니다.",
          "기타 입찰에 관한 사항은 본교 총무지원실 계약담당(☏063-220-2145)에게 문의하시고, 제안서에 관한 사항은 시설지원실(☏063-220-2182)로 문의하시기 바랍니다.",
        ],
        current: 1,
      },
      progressSteps: ["공고게시중", "입찰진행중", "개찰중", "낙찰완료"],
    };
  },
  mounted: function() {},
};
</script>

<style lang="scss">
.bid-article * {
  box-shadow: none !important;
}

.bid-article .box,
.bid-article .card {
  border-radius: 0;
  border: 1px solid rgba($grey, 0.25);
  margin-bottom: 0.5rem !important;
}

.bid-detail-content {
  grid-template-columns: repeat(3, 1fr);
}

.bid-title > .bid-current-step-tag,
.bid-title > .join-bid-btn {
  transform: translateY(0.075em);
  margin-left: 1rem;
}
</style>
