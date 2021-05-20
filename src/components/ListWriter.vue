<template>
  <div class="list-writer">
    <b-field v-for="(q, i) in list" :key="i">
      <b-input v-model="list[i]" expanded></b-input>
      <p class="control">
        <b-button
          type="is-danger"
          icon-right="delete"
          @click="$emit('update:list', spliceList(i))"
        ></b-button>
      </p>
    </b-field>
    <b-field>
      <b-input v-model="input" expanded @keyup.native.enter="insert"></b-input>
      <p class="control">
        <b-button
          type="is-primary"
          icon-right="plus"
          @click="insert"
        ></b-button>
      </p>
    </b-field>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data: function() {
    return {
      input: "",
    };
  },
  methods: {
    spliceList(i) {
      this.list.splice(i, 1);
      return this.list;
    },
    pushList(val) {
      this.list.push(this.input);
      return this.list;
    },
    insert() {
      if (this.input !== "") {
        this.$emit("update:list", this.pushList(this.input));
      }

      this.input = "";
    },
  },
};
</script>

<style></style>
