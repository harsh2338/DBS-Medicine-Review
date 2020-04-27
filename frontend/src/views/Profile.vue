<template>
  <div>
    <h2>Welcome {{ getUser.name }}!</h2>
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Overview" active><Overview /></b-tab>
        <b-tab title="Edit Details"><EditDetails /></b-tab>
        <b-tab title="Add to family"><AddFamily /></b-tab>
      </b-tabs>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import Overview from "../components/Overview";
import EditDetails from "../components/EditDetails";
import AddFamily from "../components/AddFamily";
export default {
  name: "profile",
  components: {
    Overview,
    EditDetails,
    AddFamily,
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
  computed: mapGetters(["getUser"]),
  created() {
    this.performGetUserData();
  },
};
</script>

<style scoped></style>
