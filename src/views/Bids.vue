<template>
  <div class="bids full">
    <div class="bid-list-wrap container full-y">
      <b-table
        class="bid-list flex vertical is-align-items-center is-justify-content-space-between"
        :data="bidsData"
        default-sort="bidNo"
        paginated
        per-page="10"
        @click="bidClicked($event)"
      >
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
            <b-tag
              type="is-info"
              v-for="t in minimizeTags(props.row.tag)"
              :key="t.tagTitle"
            >
              {{ t.tagTitle }}
            </b-tag>
            <span v-if="props.row.tag.length > 3">...</span>
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
        {
          bidNo: 2,
          bidName: "손소독제 구매",
          bidder: "전주대학교",
          annoDate: "2021-01-02",
          bidStart: "2021-02-03",
          bidEnd: "2021-03-03",
          tag: [
            { tagTitle: "구매", tagType: "info" },
            { tagTitle: "대량", tagType: "info" },
            { tagTitle: "긴급", tagType: "info" },
            { tagTitle: "구매", tagType: "info" },
            { tagTitle: "구매", tagType: "info" },
            { tagTitle: "구매", tagType: "info" },
            { tagTitle: "구매", tagType: "info" },
          ],
          current: "입찰진행중",
        },
      ],
    };
  },
  methods: {
    bidClicked(evt) {
      this.$router.push({ path: `/bid/${evt.bidNo}` });
    },
    minimizeTags: function(t) {
      return t.slice(0, 3);
    },
  },
  mounted: function() {},
};
</script>

<style lang="scss">
.bid-list {
  height: 100%;
  padding: 2rem 0;
  box-shadow: 0 0 15px rgba($primary, 0.3);
}

.bid-list > .table-wrapper {
  width: 100%;
}

.bid-list > .top.level {
  justify-content: center;
}

.bid-list tr {
  cursor: pointer;
  transition: background 0.5s;
}

.bid-list tbody tr:hover {
  background: rgba($black, 0.1);
}
</style>
