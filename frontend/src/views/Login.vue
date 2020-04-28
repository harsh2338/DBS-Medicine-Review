<template>
  <div class="form">
      <h1>Login</h1>
      
      <BaseInput placeholder="Username or Email" type="text"     v-model="username" />
      <BaseInput placeholder="password"          type="password" v-model="password" />
      
      <BaseButton @performAction="performLogin">Login</BaseButton>
  </div>
</template>

<script>

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
@import url('https://fonts.googleapis.com/css?family=Raleway|Roboto&display=swap');
h1 {
  font-family: Raleway, sans-serif;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}


</style>
