<template>
  <div class="bid-agreement-wrapper content" v-if="!pass">
    <div class="box level" v-for="(c, i) in checkList" :key="i">
      {{ c }}
      <b-checkbox-button
        v-model="userChecked"
        :native-value="i"
        type="is-success"
        >확인했습니다</b-checkbox-button
      >
    </div>
    <b-button
      type="is-success"
      expanded
      :disabled="userChecked.length < checkList.length"
      @click="$emit('update:pass', true)"
      >모두 확인했습니다</b-button
    >
  </div>
</template>

<script>
export default {
  props: ["checkList", "pass"],
  data() {
    return {
      userChecked: [],
    };
  },
  methods: {},
};
</script>

<style></style>
