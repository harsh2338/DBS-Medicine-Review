<template>
  <div id="app">
    <header>
      <router-link :to="{ name: 'home' }"><img src="@/assets/logo3.png" class="logo" alt=""></router-link>
    <div class="links">
    <router-link v-if="!loggedIn" :to="{ name: 'login' }"><p>Login</p></router-link>
    <router-link v-if="!loggedIn" :to="{ name: 'signup' }"><p>SignUp</p></router-link>
    <router-link v-if="loggedIn" :to="{ name: 'logout' }"><p>Logout</p></router-link>
    </div>
    </header>
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
@import url('https://fonts.googleapis.com/css?family=Raleway|Roboto&display=swap');
#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.logo {
  height: 50px;
  margin: 10px;
}

header {
  display: flex;
  justify-content: space-between;
  background: #ddd;
  align-items: center;
}

.links {
  display: flex;
  flex-direction: row;
  margin: 0 10px;
}

a {
  margin-left: 20px;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
}
</style>
