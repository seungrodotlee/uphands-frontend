<template>
  <div class="auth-page container fit-spacer full-y lined">
    <spacer size="1.5rem"></spacer>
    <h1>관리자 페이지</h1>
    <hr />
    <h2>요청된 공고 게시</h2>
    <hr />
    <b-table
      class="bid-list list-table flex vertical is-align-items-center is-justify-content-space-between"
      :data="requestedNewBids"
      detailed
      detail-key="bidName"
      paginated
      per-page="10"
      @click="bidClicked($event)"
    >
      <b-table-column field="bidName" label="공고명" sortable v-slot="props">
        {{ props.row.bidName }}
      </b-table-column>
      <b-table-column field="bidder" label="공고자" sortable v-slot="props">
        {{ props.row.bidder }}
      </b-table-column>
      <b-table-column field="tag" label="태그" sortable v-slot="props">
        <b-taglist>
          <b-tag
            :type="`is-${t.tagType}`"
            v-for="t in minimizeTags(props.row.tag)"
            :key="t.tagTitle"
          >
            {{ t.tagTitle }}
          </b-tag>
          <span v-if="props.row.tag.length > 3">...</span>
        </b-taglist>
      </b-table-column>
      <template #detail="props">
        <article class="bid-article no-shadow-article">
          <section class="sub-info-section level box squared lined">
            <p class="bid-no">
              공고번호 <span class="bold">{{ props.row.bidNo }}</span>
            </p>
            <p class="bidder">
              작성자
              <router-link
                :to="{
                  name: 'MemberName',
                  params: { memberName: props.row.bidder },
                }"
                class="bold"
                >{{ props.row.bidder }}</router-link
              >
            </p>
          </section>
          <b-collapse class="card squared lined" animation="slide">
            <template #trigger="props">
              <div class="card-header" role="button">
                <p class="card-header-title">
                  세부정보
                </p>
                <a class="card-header-icon">
                  <b-icon :icon="props.open ? 'menu-down' : 'menu-up'">
                  </b-icon>
                </a>
              </div>
            </template>

            <div class="card-content">
              <div class="bid-detail-content grid content">
                <div class="bid-detail-content-item">
                  {{ props.row.period.type }}기간
                  <span class="bold">{{ props.row.period.data }}</span>
                </div>
                <div
                  class="bid-detail-content-item"
                  v-for="d in props.row.etc"
                  :key="d.index"
                >
                  {{ d.detailTitle }}
                  <span class="bold">{{ d.detailData }}</span>
                </div>
              </div>
            </div>
          </b-collapse>
          <section class="bid-main-article box squared lined">
            <h1 class="bid-title title black is-flex is-align-items-center">
              {{ props.row.bidName }}
            </h1>
            <div class="content">
              {{ props.row.bidDetail }}
            </div>
            <div class="tags">
              <router-link
                class="bid-tag bold"
                :to="{
                  path: '/bids',
                  query: { query: t.tagTitle, target: 'tag' },
                }"
                v-for="(t, i) in props.row.tag"
                :key="i"
                >#{{ t.tagTitle }}</router-link
              >
            </div>
          </section>
          <section class="qualification-section box squared lined">
            <h1 class="subtitle bold">입찰참가자격</h1>
            <list-builder :list="props.row.qualification"></list-builder>
          </section>
          <section class="selection-rule-section box squared lined">
            <h1 class="subtitle bold">낙찰자 결정방법</h1>
            <list-builder :list="props.row.selectionRule"></list-builder>
          </section>
          <section class="submit-docs-section box squared lined">
            <h1 class="subtitle bold">제출서류</h1>
            <list-builder :list="props.row.submitDocs"></list-builder>
          </section>
          <section class="notes-section box squared lined">
            <h1 class="subtitle bold">기타사항</h1>
            <list-builder :list="props.row.notes"></list-builder>
          </section>
        </article>
        <b-field>
          <b-input placeholder="기초가를 입력하세요"></b-input>
          <p class="control">
            <b-button
              tag="a"
              :href="
                `mailto:?subject=[UPHANDS]%20요청하신%20공고의%20기초가를%20결정하였습니다.&body=https://www.uphands.com/startnewbid/${props.row.bidNo} 로%20이동하여%20예정가를%20책정하고%20공고를%20게시하세요!`
              "
              type="is-primary"
              >입력</b-button
            >
          </p>
        </b-field>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      requestedNewBids: [
        {
          bidNo: 1,
          bidName: "엘레베이터 공사",
          bidder: "전주대학교",
          bidDetail:
            "전주대학교 공학관 엘레베이터를 새로 설치하려 합니다. 많은 참여 부탁드립니다.",
          tag: [{ tagTitle: "공사", tagType: "info" }],
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
        },
      ],
    };
  },
  methods: {
    minimizeTags(t) {
      return t.slice(0, 3);
    },
    bidClicked(evt) {},
  },
};
</script>

<style></style>
