<template>
  <input
    type="text"
    v-bind:class="classObj"
    v-bind:placeholder="placeholderObj"
    v-on:input="updateValue($event.target.value)"
    v-on:keyup="signalChange()"
  />
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    classObj: {
      type: String,
      default: "home-search",
    },
    placeholderObj: {
      type: String,
      default: "Enter the name of the drug",
    },
  },
  methods: {
    updateValue: function(value) {
      this.$emit("input", value);
    },
    signalChange: function(event) {
      this.$emit("change", event);
    },
  },
};
</script>

<style scoped>
.searchInput {
  width: 100%;
}

.home-search {
  width: 60%;
  height: 50px;
  margin: 10px;
}
</style>
