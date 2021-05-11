<template>
  <div class="spacer" :style="{ height: size }"></div>
</template>

<script>
export default {
  props: ["size"],
};
</script>

<style>
.spacer {
  width: 1px;
}
</style>
