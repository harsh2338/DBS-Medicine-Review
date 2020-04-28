<template>
  <div>
      <div>
          <tabs>
            <tab title="Overview" active><Overview /></tab>
            <tab title="Edit Details"><EditDetails /></tab>
            <tab title="Add to family"><AddFamily /></tab>
          </tabs>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Overview from "../components/Overview";
import EditDetails from "../components/EditDetails";
import AddFamily from "../components/AddFamily";
import Tabs from "../components/Tabs";
import Tab from "../components/Tab";

export default {
  name: "profile",
  components: {
    Overview,
    EditDetails,
    AddFamily,
    Tabs,
    Tab,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getUserData"]),
    performGetUserData() {
      this.$store.dispatch("getUserData");
    },
  },
  created() {
    this.performGetUserData();
  },
};
</script>

<style scoped>
</style>
