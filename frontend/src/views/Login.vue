<template>
  <div class="auth-form">
    <h1>Sign in</h1>
    <router-link :to="{ name: 'register'}">
      <h2>Don't have an account?</h2>
    </router-link>

    <form>
      <fieldset>
        <input type="text" placeholder="Username" v-model="$v.formResponses.username.$model" />
      </fieldset>

      <fieldset>
        <input type="password" placeholder="Password" v-model="$v.formResponses.password.$model" />
      </fieldset>

      <input
        type="submit"
        name="login"
        id="submit"
        value="LOGIN"
        @click="submitForm(formResponses.username,formResponses.password)"
      />
    </form>

    <div class="errors">
      <p v-if="empty && uiState=='submit clicked'">Fill the form before submitting</p>
      <p v-else-if="errors && uiState=='submit clicked'">This form isn't filled properly</p>
      <p v-else-if="getErrors">Check your details again!</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGIN } from "../store/actions.type";
import { required } from "vuelidate/lib/validators";
export default {
  name: "MedRevLogin",
  data() {
    return {
      uiState: "submit not clicked",
      errors: false,
      empty: false,
      formResponses: {
        username: "",
        password: ""
      }
    };
  },

  validations: {
    formResponses: {
      username: {
        required
      },

      password: {
        required
      }
    }
  },

  methods: {
    submitForm(username, password) {
      this.empty = !this.$v.formResponses.$anyDirty;
      this.errors = this.$v.formResponses.$invalid;
      this.uiState = "submit clicked";
      if (this.errors == false && this.empty == false) {
        this.uiState = "form submitted";
        this.$store.dispatch(LOGIN, { username, password }).then(() => {
          this.$router.push({ name: "home" });
        });
      }
    }
  },

  computed: {
    ...mapGetters(["getErrors"])
  }
};
</script>

<style scoped>
.auth-form {
  width: 35%;
  margin: 0 auto;
  text-align: center;
  height: 100vh;
  border-radius: 8px;
}

.errors {
  color: red;
  font-family: "Raleway", "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.auth-form > h1 {
  font-family: "Roboto", "Franklin Gothic Medium", "Arial Narrow", Arial,
    sans-serif;
  font-weight: 400;
  margin-bottom: 10px;
}

.auth-form > a {
  color: #56893c;
  font-family: "Raleway", "Franklin Gothic Medium", "Arial Narrow", Arial,
    sans-serif;
}

form {
  padding-top: 30px;
}

input[type="submit"]:hover {
  background: #3ca55c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #b5ac49,
    #3ca55c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #b5ac49,
    #3ca55c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

input[type="submit"]:active {
  transform: translateY(4px);
}
</style>
