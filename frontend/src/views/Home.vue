<template>
  <div>
    <h1>Find drugs</h1>
      <BaseSearch v-model="query" v-on:change="search" />
      <div>
        <ul>
          <li v-for="(drug,index) in getDrugs" v-bind:key="index">{{drug}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      query: "",
      drugs: [],
    };
  },
  methods: {
    ...mapActions(["getDrugsApi"]),
    search() {
      this.getDrugsApi(this.query);
    },
  },
  computed: mapGetters(["getDrugs"]),
};
</script>
