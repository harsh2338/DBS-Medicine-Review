<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="dark">
      <b-navbar-brand href="#"
        ><img height="50" src="@/assets/logo.png" alt=""
      /></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="!loggedIn" :to="{ name: 'login' }"
            ><p>Login</p></b-nav-item
          >
          <b-nav-item v-if="!loggedIn" :to="{ name: 'signup' }"
            ><p>SignUp</p></b-nav-item
          >
          <b-nav-item v-if="loggedIn" :to="{ name: 'logout' }"
            ><p>Logout</p></b-nav-item
          >
          <!-- <b-nav-form>
                                            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                                            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                                          </b-nav-form> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

p {
  font-size: 20px;
  color: white;
}
</style>
