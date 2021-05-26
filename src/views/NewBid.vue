<template>
  <div class="new-bid container fit-spacer">
    <div class="bid-agreement-wrapper content" v-if="!userAgreementsChecked">
      <spacer size="1.5rem"></spacer>
      <div class="box level" v-for="(a, i) in agreementList" :key="i">
        {{ a }}
        <b-checkbox-button
          v-model="userAgreements"
          :native-value="i"
          type="is-success"
          >확인했습니다</b-checkbox-button
        >
      </div>
      <b-button
        type="is-success"
        expanded
        :disabled="userAgreements.length < agreementList.length"
        @click="userAgreementsChecked = true"
        >모두 확인했습니다</b-button
      >
    </div>
    <div class="bid-form" v-if="userAgreementsChecked">
      <b-input
        type="text"
        class="title-input is-large black square"
        placeholder="공고 제목을 입력하세요"
      />
      <section class="dropdown-section columns">
        <b-dropdown
          class="category-selector column is-6"
          aria-role="list"
          v-model="categorySelected"
        >
          <template #trigger="{active}">
            <b-button
              :label="
                categorySelected !== null
                  ? categorySelected
                  : '카테고리를 선택해주세요'
              "
              type="is-primary"
              :icon-right="active ? 'menu-up' : 'menu-down'"
              expanded
            />
          </template>
          <b-dropdown-item
            aria-role="listitem"
            v-for="c in categoryList"
            :key="c"
            :value="c"
            >{{ c }}</b-dropdown-item
          >
        </b-dropdown>
        <b-dropdown
          class="selection-rule-selector column is-6"
          aria-role="list"
          v-model="selectionRuleSelected"
        >
          <template #trigger="{active}">
            <b-button
              :label="
                selectionRuleSelected !== null
                  ? selectionRuleSelected
                  : '낙찰방식을 선택해주세요'
              "
              type="is-primary"
              :icon-right="active ? 'menu-up' : 'menu-down'"
              expanded
            />
          </template>
          <b-dropdown-item
            aria-role="listitem"
            v-for="s in selectionRules"
            :key="s"
            :value="s"
            >{{ s }}</b-dropdown-item
          >
        </b-dropdown>
      </section>

      <section class="schedule-section columns">
        <div class="range-selector-wrap column is-4">
          <b-field label="계약기간 (개월)" grouped>
            <p class="control">
              <b-checkbox-button v-model="noRange" :native-value="true"
                >추후협의</b-checkbox-button
              >
            </p>
            <b-numberinput
              :disabled="noRange === true"
              v-model="range"
              controls-position="compact"
              step="1"
            ></b-numberinput>
          </b-field>
        </div>
        <div class="column is-4">
          <b-field label="입찰시작일">
            <b-datepicker
              v-model="bidStart"
              icon="calendar-today"
              trap-focus
            ></b-datepicker>
          </b-field>
        </div>
        <div class="column is-4">
          <b-field label="입찰마감일">
            <b-datepicker
              v-model="bidEnd"
              icon="calendar-today"
              trap-focus
            ></b-datepicker>
          </b-field>
        </div>
      </section>
      <section class="additional-section columns is-flex-wrap-wrap">
        <b-field
          class="column is-6 addi-field"
          v-for="(a, i) in addis"
          :key="i"
        >
          <b-input
            class="addi-title"
            v-model="a.addiTitle"
            placeholder="정보명"
          ></b-input>
          <b-input
            class="addi-value"
            v-model="a.addiValue"
            placeholder="정보내용"
            expanded
          ></b-input>
          <p class="control">
            <b-button
              class="addi-del"
              type="is-danger"
              icon-right="delete"
              @click="addis.splice(i, 1)"
            ></b-button>
          </p>
        </b-field>
        <div class="column is-6">
          <b-button type="is-primary" @click="insertAddi"
            >정보 추가하기</b-button
          >
        </div>
      </section>
      <hr />
      <section class="article-section content">
        <div
          class="article-input"
          contenteditable
          @keyup="writeArticle($event)"
        ></div>
      </section>
      <hr />
      <section class="tag-section">
        <h2>태그입력</h2>
        <b-taginput
          placeholder="태그를 입력하세요"
          type="is-primary"
          v-model="tags"
        ></b-taginput>
      </section>
      <hr />
      <section class="qualification-section">
        <h2>입찰참가자격</h2>
        <list-writer :list.sync="qualis"></list-writer>
      </section>
      <hr />
      <section class="submit-docs-section">
        <h2>제출서류</h2>
        <list-writer :list.sync="submitDocs"></list-writer>
      </section>
      <hr />
      <section class="notes-section">
        <h2>기타사항</h2>
        <list-writer :list.sync="notes"></list-writer>
      </section>
      <section>
        <b-button type="is-success" expanded @click="submitBidForm"
          >작성 완료</b-button
        >
      </section>
    </div>
  </div>
</template>

<script>
import ListWriter from "../components/ListWriter.vue";

export default {
  components: {
    "list-writer": ListWriter,
  },
  data: function() {
    return {
      agreementList: [
        "입찰 수수료는 최종 낙찰자 결정 혹은 입찰 취소 시에 결제합니다.",
        "낙찰자가 낙찰을 거부할 경우 후순위 입찰자가 낙찰자로 선정됩니다.",
      ],
      userAgreements: [],
      userAgreementsChecked: false,
      noRange: null,
      range: 0,
      categoryList: ["공사", "구매", "용역", "매각"],
      categorySelected: null,
      selectionRules: ["최저가 낙찰", "적정가 낙찰", "최고가 낙찰"],
      selectionRuleSelected: null,
      bidStart: null,
      bidEnd: null,
      addis: [],
      article: "",
      tags: [],
      qualis: [],
      submitDocs: [],
      notes: [],
    };
  },
  methods: {
    writeArticle(e) {
      if (
        e.target.innerHTML !== "" &&
        e.target.textContent.replace(/\s/gi, "") === ""
      ) {
        e.target.innerHTML = "";
      }
    },
    insertAddi() {
      this.addis.push({
        addiTitle: "",
        addiValue: "",
      });
    },
    submitBidForm() {
      
    }
  },
};
</script>

<style lang="scss">
.new-bid {
  min-height: 100%;
  border: $border-color;
  box-shadow: 0 0 15px rgba($primary, 0.3);
}

.dropdown-section .dropdown {
  margin: 0 !important;
}

.selection-rule-selector .dropdown-menu,
.category-selector .dropdown-menu {
  width: calc(100% - 1.5rem);
}

.qualification-section > *,
.submit-docs-section > *,
.notes-section > * {
  margin-bottom: 1rem;
}

.bid-agreement-wrapper,
.bid-form > * {
  padding: 0 1.125rem;
  margin-bottom: 1.5rem;
}

.title-input {
  padding: 0 !important;
  border-bottom: $border-color;
}

.title-input > input {
  font-size: 1.5rem;
  font-weight: 900;
  border: 0;
}

.article-input {
  min-height: 7.5rem;
}

.article-input:empty::before {
  content: "본문 내용을 입력해주세요";
  color: rgba($black, 0.25);
}
</style>
