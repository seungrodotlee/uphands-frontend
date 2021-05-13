<template>
  <div
    class="search-bar-wrap abs is-flex is-justify-content-center is-align-items-center"
  >
    <div class="search-bar">
      <div
        class="search-bar-frame is-flex is-align-items-center is-justify-content-space-between"
      >
        <input type="text" v-model="query" placeholder="검색어를 입력하세요" />
        <b-button class="search-submit" @click="submitQuery" rounded>
          <icon>search</icon>
        </b-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      query: "",
    };
  },
  methods: {
    submitQuery: function() {
      this.$router.push({ name: "Bids", query: { query: this.query } });
    },
  },
};
</script>
<style lang="scss">
@import "../assets/variables.scss";

.search-bar-wrap {
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 0;
  z-index: 10;
}

.search-bar-frame {
  height: 2.5rem;
  width: 360px;
  background: rgba($primary, 0.5);
  border-radius: 1.25rem;
  box-shadow: 0px 0px 10px rgba($black, 0.3);
  transition: background 0.5s;
}

.search-bar-frame:hover {
  background: $primary;
}

.search-bar-frame input {
  width: 300px;
  margin-left: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  border: 0;
  color: $white;
  background: transparent;
}

.search-bar-frame input::placeholder {
  color: rgba($white, 0.75);
}

.search-bar-frame .button.search-submit {
  padding: 0;
  height: 2rem;
  width: 2rem;
  margin-right: 0.25rem;
}
</style>
