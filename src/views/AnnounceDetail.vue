<template>
  <div class="anno">
    <article class="box container no-shadow-article squared lined">
      <div class="article-head level">
        <h1>{{ annoData.annoName }}</h1>
        <p>
          작성일 <strong>{{ annoData.annoDate }}</strong>
        </p>
      </div>
      <div class="content">
        {{ annoData.annoArticle }}
      </div>
      <div class="tags">
        <router-link
          class="bold"
          v-for="(t, i) in annoData.tag"
          :key="i"
          :to="{ path: '/annos', query: { query: t.tagTitle, target: 'tag' } }"
        >
          #{{ t.tagTitle }}
        </router-link>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      annoData: {
        annoNo: 1,
        annoName: "업핸즈 오픈을 축하합니다!",
        annoArticle: "아직 안 했는데요",
        annoDate: "2021.01.01",
        tag: [
          {
            tagTitle: "테스트",
            tagType: "info",
          },
        ],
      },
    };
  },
};
</script>

<style></style>
