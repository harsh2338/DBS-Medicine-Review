<template>
  <div id="home-page">
    <div class="brand-banner">
      <div class="brand-title">
        <h1>MEDREV</h1>
        <h2>A place to search Drugs</h2>
      </div>
    </div>
    <SearchDrug />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SearchDrug from "../components/SearchDrug";
export default {
  components: {
    SearchDrug
  },

  computed: {
    ...mapGetters(["isAuthenticated", "currentUser"])
  }
};
</script>
<style scoped>
h1 {
  color: white;
  font-family: "sans-serif";
}

h2 {
  color: white;
  font-family: "Raleway", "sans-serif";
}

.brand-banner {
  padding-top: 2em;
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  background-image: url("../assets/pharmacy.jpeg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  text-align: center;
}

.brand-title {
  padding: 10px;
  border-radius: 4px;
  margin: 0 auto;
}

.brand-title > h1 {
  font-size: 3em;
}

#home-page {
  height: 100vh;
  background: #a8ff78; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #78ffd6,
    #a8ff78
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #78ffd6,
    #a8ff78
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>