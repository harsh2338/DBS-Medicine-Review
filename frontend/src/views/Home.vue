<template>
<div class="container">
    <div class="search">
          <BaseSearch v-model="query" v-on:change="search" />
          <div>
            <ul>
              <li v-for="(drug,index) in getDrugs" v-bind:key="index">{{drug}}</li>
            </ul>
          </div>
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

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway|Roboto&display=swap');

  .container {
    text-align: center;
    margin-top: 20px;
  }
  .search {
    display: inline-block;
    width: 100%;
  }

  li {
    text-decoration: none;
    list-style: none;
    height: 40px;
    font-family: Roboto, sans-serif;
    padding-top: 10px;
  }

  li:hover {
    background: #ddd;
  }
  ul {
    border: 1px solid gray;
    width: 60.5%;
    margin: 0 auto;
    padding-inline-start: 0;
  }
</style>
