<template>
  <div class="ordered-list">
    <div class="is-flex" v-for="(d, i) in list" :key="i">
      <div class="ordered-list-index">{{ i + 1 }}.</div>
      <div class="ordered-list-data">{{ d }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style>
.ordered-list-data {
  margin-left: 0.5rem;
}
</style>
