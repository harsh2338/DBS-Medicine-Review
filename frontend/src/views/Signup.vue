<template>
  <div>
    <h1>Create you account</h1>
    <h3>
      Already have an account?
      <router-link class="link" :to="{ name: 'login' }">Sign in...</router-link>
    </h3>
    <BaseInput placeholder="Name" type="text" v-model="user.name" />
    <BaseInput placeholder="email address" type="email" v-model="user.email" />
    <BaseInput placeholder="password" type="password" v-model="user.password" />
    <BaseInput placeholder="Username" type="text" v-model="user.username" />
    <BaseInput
      placeholder="Mobile Number"
      type="text"
      v-model.number="user.mobnum"
    />
    <BaseInput placeholder="Blood group" type="text" v-model="user.bloodgrp" />
    <BaseInput placeholder="Date of birth" type="text" v-model="user.dob" />
    <BaseInput placeholder="Height" type="text" v-model.number="user.height" />
    <BaseInput placeholder="Weight" type="text" v-model.number="user.weight" />
    <BaseInput placeholder="Gender" type="text" v-model="user.gender" />
    <BaseButton @performAction="performSubmit">Signup</BaseButton>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        username: "",
        mobnum: "",
        bloodgrp: "",
        dob: "",
        height: "",
        weight: "",
        gender: "",
      },
    };
  },
  methods: {
    ...mapActions(["registerUser"]),
    performSubmit() {
      this.registerUser(this.user)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
