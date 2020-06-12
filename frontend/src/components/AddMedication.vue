<template>
  <div>
    <h2>Clicking this will add this drug to your medication list</h2>
    <h3>It will be reflected in your userpage</h3>
    <button @click="addMedication"></button>
  </div>
</template>

<script>
import { ADD_MEDICATION } from "../store/actions.type";
export default {
  methods: {
    data() {
      return {};
    },
    addMedication: function() {
      this.$store.dispatch(ADD_MEDICATION);
    }
  }
};
</script>

<style scoped>
</style>