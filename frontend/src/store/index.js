import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("access_token") || null,
    user: {},
  },
  getters: {
    loggedIn(state) {
      return state.token != null;
    },

    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token;
    },

    destroyToken(state) {
      state.token = null;
    },

    addUserData(state, user) {
      state.user = user;
    },
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post("/login", {
            username: credentials.username,
            password: credentials.password,
          })
          .then(function(response) {
            const token = response.data.token;
            // console.log(response);
            localStorage.setItem("access_token", token);
            context.commit("retrieveToken", token);
            resolve(response);
          })
          .catch(function(error) {
            console.log(error);
            reject(error);
          });
      });
    },

    destroyToken(context) {
      if (context.getters.loggedIn) {
        localStorage.removeItem("access_token");
        context.commit("destroyToken");
      }
    },

    getUserData(context) {
      var len = localStorage.getItem("access_token").length;
      var str = localStorage.getItem("access_token").slice(4, len);
      return new Promise((resolve, reject) => {
        axios
          .get("/profile/me", {
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${str}`,
            },
          })
          .then(function(response) {
            console.log(response);
            context.commit("addUserData", response.data[0]);
            resolve(response);
          })
          .catch(function(error) {
            console.log(error);
            reject(error);
          });
      });
    },

    registerUser(context, user) {
      return new Promise((resolve, reject) => {
        axios
          .post("/register", {
            username: user.username,
            password: user.password,
            email: user.email,
            blood_grp: user.bloodgrp,
            name: user.name,
            ph_number: user.mobnum,
            dob: user.dob,
            height: user.height,
            weight: user.weight,
            gender: user.gender,
          })
          .then(function(response) {
            console.log(response);
            resolve(response);
          })
          .catch(function(error) {
            console.log(error);
            reject(error);
          });
      });
    },
  },
  modules: {},
});
