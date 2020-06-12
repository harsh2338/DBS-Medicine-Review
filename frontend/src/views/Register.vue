<template>
<div class="signup-page">
  <div class="auth-form">
    <h1>Sign Up</h1>
    <router-link :to="{ name: 'login'}">
      <h2>Already a Member?</h2>
    </router-link>

    <form @submit.prevent="onSubmit(user)">
      <fieldset>
        <input type="text" placeholder="Name" v-model.lazy="$v.user.name.$model" />
      </fieldset>

      <fieldset>
        <input type="text" placeholder="Username" v-model.lazy="$v.user.username.$model" />
      </fieldset>

      <fieldset>
        <input type="email" placeholder="Email" v-model.lazy="$v.user.email.$model" />
      </fieldset>

      <fieldset>
        <input type="password" placeholder="Password" v-model.lazy="$v.user.password.$model" />
      </fieldset>

      <fieldset>
        <input type="text" placeholder="DOB (yyyy-mm-dd)" v-model.lazy="$v.user.dob.$model" />
      </fieldset>

      <fieldset>
        <input type="number" placeholder="Phone Number" v-model.lazy="$v.user.ph_number.$model" />
      </fieldset>

      <div class="b-h-w-g">
        <fieldset>
          <input type="text" placeholder="Blood group" v-model.lazy="$v.user.blood_grp.$model" />
        </fieldset>

        <fieldset>
          <input type="text" placeholder="Height (cms)" v-model.lazy="$v.user.height.$model" />
        </fieldset>

        <fieldset>
          <input type="text" placeholder="Weight (kg)" v-model.lazy="$v.user.weight.$model" />
        </fieldset>

        <fieldset>
          <input type="text" placeholder="Gender (M/F)" v-model.lazy="$v.user.gender.$model" />
        </fieldset>
      </div>

      <fieldset>
        <label id="label" for="user-role">Are you a pharmacist?</label>
        <input
          class="checkbox"
          type="checkbox"
          name="user-role"
          v-model="checked"
          v-on:change="setUserRole(checked)"
        />
      </fieldset>

      <input type="submit" name="login" id="submit" value="SIGNUP" />
    </form>
    <div v-if="errors == true" class="errors">
      <p v-if="!$v.user.username.minLength">Username has to be a minimum of 4 characters</p>
      <p v-else-if="!$v.user.email.email">Email entered is not valid</p>
      <p v-else-if="!$v.user.dob.validDate && $v.user.dob.$anyDirty">Please enter a valid date</p>
      <p v-else-if="$v.user.ph_number.$anyError">Phone number has to be 10 digits long</p>
      <p
        v-else-if="!$v.user.gender.validGender && $v.user.gender.$anyDirty"
      >Please enter M for Male and F for Female</p>
      <p v-else-if="$v.user.$invalid">This form hasn't been filled properly</p>
    </div>
  </div>
</div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
import { REGISTER } from "../store/actions.type";
export default {
  data() {
    return {
      checked: false,
      uiState: "submit not clicked",
      errors: false,
      empty: false,
      user: {
        name: "",
        username: "",
        email: "",
        password: "",
        dob: "",
        ph_number: "",
        blood_grp: "",
        height: "",
        weight: "",
        gender: "",
        user_role: "user"
      }
    };
  },

  validations: {
    user: {
      name: {
        required
      },

      username: {
        required,
        minLength: minLength(4)
      },

      email: {
        required,
        email
      },

      password: {
        required
      },

      dob: {
        required,
        validDate(dob) {
          return /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(dob);
        }
      },

      ph_number: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(10)
      },

      blood_grp: {
        required
      },

      height: {
        required
      },

      weight: {
        required
      },

      gender: {
        required,
        validGender(gender) {
          return /([mMfF])/.test(gender);
        }
      }
    }
  },

  methods: {
    onSubmit(user) {
      this.empty = !this.$v.user.$anyDirty;
      this.errors = this.$v.user.$invalid;
      if (this.errors == false && this.empty == false) {
        this.uiState = "form submitted";
        this.$store.dispatch(REGISTER, user).then(() => {
          this.$router.push({ name: "home" });
        });
      }
    },

    setUserRole(checked) {
      if (checked) {
        this.user.user_role = "pharmacist";
      } else {
        this.user.user_role = "user";
      }
    }
  }
};
</script>

<style scoped>
.auth-form {
  width: 700px;
  margin: 0 auto;
  text-align: center;
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

.checkbox {
  height: 20px;
}

.b-h-w-g {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.signup-page {
  height: 100vh;
}
.b-h-w-g > fieldset {
  width: 24%;
}
.errors {
  color: red;
  font-family: "Raleway", "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
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

#label {
  font-family: 'Raleway', sans-serif;
  margin: 8px;
}

@media screen and (max-width: 800px) {
  .b-h-w-g {
    display: flex;
    flex-direction: column;
  }

  .b-h-w-g > fieldset {
    width: 100%;
  }
}
</style>