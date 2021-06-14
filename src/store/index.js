import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      userName: "이승로",
    },
    bidData: [
      {
        bidNo: 1,
        bidName: "엘레베이터 공사",
        bidder: "전주대학교",
        bidDetail:
          "전주대학교 공학관 엘레베이터를 새로 설치하려 합니다. 많은 참여 부탁드립니다.",
        annoDate: "2021-01-01",
        bidStart: "2021-02-02",
        bidOpen: "2021-03-02",
        bidClose: "2021-03-09",
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
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
