<template>
    <button v-on:click="submit" class="button">
      <slot></slot>
    </button>
      <!-- <b-button
      class="button"
      @click="submit"
      >
      <slot></slot>
      </b-button> -->
</template>

<script>
export default {
  methods: {
    submit() {
      this.$emit('performAction');
    }
  }
}
</script>
<style scoped>
  .button {
    background-color: green;
    color: white;
    width: 300px;
    font-size: 16px;
    margin: 10px;
    padding: 5px;
    border-radius: 5px;
  }
</style>