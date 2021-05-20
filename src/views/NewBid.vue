<template>
  <div class="new-bid container fit-spacer">
    <b-input
      type="text"
      class="title-input is-large black square"
      placeholder="공고 제목을 입력하세요"
    />
    <section class="category-section columns">
      <b-dropdown
        class="category-selector column is-4"
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
          />
        </template>
        <b-dropdown-item
          aria-role="listitem"
          v-for="i in categoryList"
          :key="i"
          :value="i"
          >{{ i }}</b-dropdown-item
        >
      </b-dropdown>
      <b-taginput
        class="column is-8"
        placeholder="태그를 입력하세요"
        type="is-primary"
        v-model="tags"
      ></b-taginput>
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
      <b-field class="column is-6 addi-field" v-for="(a, i) in addis" :key="i">
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
        <b-button type="is-primary" @click="insertAddi">정보 추가하기</b-button>
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
    <!-- <section class="qualification-section">
      <h2>입찰참가자격</h2>
      <b-field v-for="(q, i) in qualis" :key="i">
        <b-input v-model="qualis[i]" expanded></b-input>
        <p class="control">
          <b-button
            type="is-danger"
            icon-right="delete"
            @click="qualis.splice(i, 1)"
          ></b-button>
        </p>
      </b-field>
      <b-field>
        <b-input
          v-model="qualiInput"
          expanded
          @keyup.native.enter="insertQauli"
        ></b-input>
        <p class="control">
          <b-button
            type="is-primary"
            icon-right="plus"
            @click="insertQauli"
          ></b-button>
        </p>
      </b-field>
    </section> -->
    <section class="qualification-section">
      <list-writer :list.sync="qualis"></list-writer>
    </section>
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
      noRange: null,
      range: 0,
      categoryList: ["공사", "구매", "용역", "매각"],
      tags: [],
      categorySelected: null,
      bidStart: null,
      bidEnd: null,
      addis: [],
      article: "",
      qualiInput: "",
      qualis: [],
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
    insertQauli() {
      if (this.qualiInput !== "") {
        this.qualis.push(this.qualiInput);
      }

      this.qualiInput = "";
    },
  },
  watch: {
    qualis(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="scss">
.new-bid {
  min-height: 100%;
  border: $border-color;
  box-shadow: 0 0 15px rgba($primary, 0.3);
}

.qualification-section > * {
  margin-bottom: 1rem;
}

.new-bid > * {
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
