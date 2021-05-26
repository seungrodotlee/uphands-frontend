<template>
  <div class="annos">
    <div class="list-table-wrap container full-y">
      <b-table
        class="anoo-list list-table flex vertical is-align-items-center is-justify-content-space-between"
        :data="annosData"
        default-sort="annoNo"
        paginated
        per-page="10"
        @click="annoClicked($event)"
      >
        <b-table-column
          field="annoNo"
          label="공지번호"
          width="6em"
          sortable
          numeric
          v-slot="props"
        >
          {{ props.row.annoNo }}
        </b-table-column>
        <b-table-column field="annoName" label="공지명" sortable v-slot="props">
          {{ props.row.annoName }}
        </b-table-column>
        <b-table-column
          field="annoDate"
          label="공지일시"
          sortable
          v-slot="props"
          width="6em"
        >
          {{ props.row.annoDate }}
        </b-table-column>
        <b-table-column
          field="tag"
          label="태그"
          sortable
          v-slot="props"
          width="12em"
        >
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
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      annosData: [
        {
          annoNo: 1,
          annoName: "가나다",
          annoDate: "2021.01.01",
          tag: [
            {
              tagTitle: "테스트",
              tagType: "info",
            },
          ],
        },
      ],
    };
  },
  methods: {
    annoClicked(evt) {
      this.$router.push({ path: `/anno/${evt.annoNo}` });
    },
    minimizeTags(t) {
      return t.slice(0, 3);
    },
  },
};
</script>

<style></style>
