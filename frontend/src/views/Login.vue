<template>
  <div class="form">
    <h1>Login</h1>
    <BaseInput placeholder="Username or Email" type="text" v-model="username" />
    <BaseInput placeholder="password" type="password" v-model="password" />
    <BaseButton @performAction="performLogin">Login</BaseButton>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    performLogin() {
      this.$store
        .dispatch("retrieveToken", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "profile" });
        });
    },
  },
};
</script>

<style scoped>
.form {
  direction: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
</style>
