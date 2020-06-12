<template>
  <div class="userpage">
    <div class="user-banner">
      <div class="user-image">
        <img src="@/assets/user.jpeg" />
      </div>

      <div class="username">
        <h1>{{ currentUser.username }}</h1>
        <img v-if="currentUser.user_role == 'pharmacist'" class="pharmacist-logo" src="@/assets/pharmacist.png" alt />
      </div>
    </div>

    <div class="userdetails shadow">
      <div class="detail">
        <div class="label">
          <h2>Name</h2>
        </div>
        <div class="det">
          <h2>{{ currentUser.name }}</h2>
        </div>
      </div>

      <div class="detail">
        <div class="label">
          <h2>Date of Birth</h2>
        </div>
        <div class="det">
          <h2>{{currentUser.dob.slice(0, 10)}}</h2>
        </div>
      </div>

      <div class="detail">
        <div class="label">
          <h2>Blood Group</h2>
        </div>
        <div class="det">
          <h2>{{currentUser.blood_grp}}</h2>
        </div>
      </div>

      <div class="detail">
        <div class="label">
          <h2>Height</h2>
        </div>
        <div class="det">
          <h2>{{currentUser.height}}</h2>
        </div>
      </div>

      <div class="detail">
        <div class="label">
          <h2>Weight</h2>
        </div>
        <div class="det">
          <h2>{{currentUser.weight}}</h2>
        </div>
      </div>

      <div class="detail">
        <div class="label">
          <h2>Gender</h2>
        </div>
        <div class="det">
          <h2>{{currentUser.gender}}</h2>
        </div>
      </div>
      <div class="detail">
        <div class="label">
          <h2>BMI</h2>
        </div>
        <div class="det">
          <h2>{{currentUser.weight/(currentUser.height/100)*(currentUser.height/100)}}</h2>
        </div>
      </div>

      <div class="show-medications"><div class="show" title="Click to see your medications" v-on:click="getMedication(currentUser.id)">Medications</div>
        <div class="medications">
          <h2 class="no-medications" v-if="medications.length == 0">No medications to Show :(.<router-link :to="{name: 'home'}">Search a drug to add to Medications?</router-link></h2>
          <div v-for="(medication,index) in medications" v-bind:key="index" id="medication">
            <router-link :to="{name: 'drug', params: {name: medication}}">{{medication}}</router-link>
          </div>
        </div>
      </div>
    </div>
    <MedRevBMIcalculator />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MedRevBMIcalculator from "../components/BmiCalculator";
// import { GET_MEDICATION } from "../store/actions.type";
import Axios from "axios";
export default {
  data() {
    return {
      medications: {}
    };
  },
  components: {
    MedRevBMIcalculator
  },

  computed: {
    ...mapGetters(["currentUser"])
  },

  methods: {
    getMedication: function(id) {
      // console.log('userid:',id);
      // this.$store.dispatch(GET_MEDICATION, {uid: id})

      Axios.get("http://localhost:3000/get-medication", {
        params: {
          uid: id
        }
      }).then(response => {
        console.log(response.data);
        this.medications = response.data;
      });
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.userpage {
  display: flex;
  flex-direction: column;
}
.user-banner {
  background-image: url("../assets/banner.jpeg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user-image > h1 {
  font-size: 90px;
}
.username {
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 20px;
  border-radius: 6px;
  padding: 5px;
  margin-bottom: 1em;
  background: #0f0c29; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #24243e,
    #302b63,
    #0f0c29
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #24243e,
    #302b63,
    #0f0c29
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.user-image > img {
  height: 8em;
  border-radius: 50%;
  border: 4px solid white;
}
.user-image {
  margin-top: 1em;
}

.show-medications {
  padding: 8px;
}

.no-medications {
  padding: 8px;
  font-size: 1.2em;
  font-family: 'Raleway', sans-serif;
}
.show {
  background-color: cornflowerblue;
  font-size: 1.5em;
  color: white;
  padding: 8px;
}

.userdetails {
  margin: 4em auto;
  border-radius: 4px;
  width: 50%;
}
.bmi-calculator {
  width: 50%;
  margin: 4em auto;
}
.detail {
  display: flex;
  padding: 10px;
}
.det > h2 {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.4em;
}
.label > h2 {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.4em;
}

.pharmacist-logo {
  height: 40px;
  width: 40px;
  margin-left: 12px;
}
.label {
  padding: 5px;
  background: lightgreen;
  border-radius: 4px 0px 0px 4px;
}
.username > h1 {
  font-family: "Raleway", sans-serif;
}
.det {
  padding-left: 1em;
  border-radius: 0px 4px 4px 0px;
  background: lightsalmon;
  padding-right: 1em;
  padding-top: 5px;
  padding-bottom: 5px;
}

#medication {
  padding: 4px;
  color: green;
  font-size: 1.4em;
}
.shadow {
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
}
</style>