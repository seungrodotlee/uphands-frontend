<template>
  <div class="bids full flex vertical is-align-items-center">
    <search-bar class="rel"></search-bar>
    <div class="bids-list-wrap">
      <b-table :data="bidsData">
        <b-table-column
          field="bidNo"
          label="공고번호"
          sortable
          numeric
          v-slot="props"
        >
          {{ props.row.bidNo }}
        </b-table-column>
        <b-table-column field="bidName" label="공고명" sortable v-slot="props">
          {{ props.row.bidName }}
        </b-table-column>
        <b-table-column field="bidder" label="공고자" sortable v-slot="props">
          {{ props.row.bidder }}
        </b-table-column>
        <b-table-column
          field="annoDate"
          label="공고일시"
          sortable
          v-slot="props"
        >
          {{ props.row.annoDate }}
        </b-table-column>
        <b-table-column
          field="bidStart"
          label="입찰개시"
          sortable
          v-slot="props"
        >
          {{ props.row.bidStart }}
        </b-table-column>
        <b-table-column field="bidEnd" label="입찰마감" sortable v-slot="props">
          {{ props.row.bidEnd }}
        </b-table-column>
        <b-table-column field="tag" label="태그" sortable v-slot="props">
          <b-taglist>
            <b-tag type="is-info" v-for="t in props.row.tag" :key="t.tagTitle">
              {{ t.tagTitle }}
            </b-tag>
          </b-taglist>
        </b-table-column>
        <b-table-column
          field="current"
          label="현재상태"
          sortable
          v-slot="props"
        >
          <b-tag type="is-primary">
            {{ props.row.current }}
          </b-tag>
        </b-table-column>
      </b-table>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
export default {
  components: {
    "search-bar": SearchBar,
  },
  data: function() {
    return {
      bidsData: [
        {
          bidNo: 1,
          bidName: "엘레베이터 공사",
          bidder: "전주대학교",
          annoDate: "2021-01-01",
          bidStart: "2021-02-02",
          bidEnd: "2021-03-02",
          tag: [{ tagTitle: "공사", tagType: "info" }],
          current: "입찰진행중",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.bids-list-wrap {
  height: calc(100% - 10rem);
  width: calc(100% - 10rem);
  border-radius: 2.25rem;
  margin-top: 2rem;
  box-shadow: 0 0 15px rgba($primary, 0.5);
  overflow: hidden;
}
</style>
