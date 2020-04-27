<template>
  <input 
  type="text"
  v-bind:class="classObj"
  v-bind:placeholder="placeholderObj"/>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    classObj: {
      type: String,
      default: "home-search"
    },
    placeholderObj: {
      type: String,
      default: "Enter the name of the drug"
    }
  },
  methods: {
    updateValue: function(value) {
      this.$emit('input',value)
    }
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

