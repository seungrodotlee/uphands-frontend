<template>
  <object v-bind:data="source" type="image/svg+xml"></object>
</template>
<script>
export default {
  props: ["source"],
};
</script>
