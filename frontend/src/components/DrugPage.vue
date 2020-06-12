<template>
<div class="drug-page">
  <div class="drug-details shadow">
    <div class="drug-title">
      <h1>{{ getDrug.name }}</h1>
      <div class="drug-rating">
        <span>
          <h2>{{getDrug.rating.toFixed(2)}}</h2>
        </span>
        <img src="@/assets/star.png" height="25px" />
      </div>
    </div>

    <h2>Added by {{drug.drugAuthor}}</h2>

    <hr />
    <hr />

    <div class="drug-desc">
      <h1>What is {{ getDrug.name }}?</h1>
      <h2>{{getDrug.description}}</h2>
    </div>

    <div class="drug-dosage">
      <h2 class="label">Dosage:</h2>
      <h2>{{ getDrug.dosage }}</h2>
    </div>

    <div class="drug-comments">
      <div class="comment shadow" v-for="(comment, index) in getCurDrugComments" v-bind:key="index">
        <h3 class="username">{{ comment.username }}</h3>
        <h3 class="comment">{{ comment.comment_desc }}</h3>
      </div>
    </div>

    <div class="drugs-diseases">
      <div class="similar-drugs">
        <h2 v-if="drug.similarDrugs.length == 0">No Similar Drugs to Show</h2>
        <h2 v-if="drug.similarDrugs.length > 0">Similar Drugs</h2>
        <div id="tag" v-for="(drug,index) in drug.similarDrugs" v-bind:key="index">{{drug}}</div>
      </div>

      <div class="diseases-cured">
        <h2 v-if="drug.diseasesCured.length == 0">No Diseases Cured to Show</h2>
        <h2 v-if="drug.diseasesCured.length > 0">Diseases Cured</h2>
        <div id="tag" v-for="(disease, index) in drug.diseasesCured" v-bind:key="index">{{disease}}</div>
      </div>
    </div>

    <div id="rating-comment" v-if="isAuthenticated">
      <MedRevCommentEditor />
      <MedRevRating />
      <button @click="addMedication(getDrug.id, currentUser.id)">Add to medication</button>
    </div>
  </div>
</div>
</template>

<script>
import { GET_DRUG, GET_DRUG_COMMENTS } from "../store/actions.type";
import { mapGetters } from "vuex";
import MedRevCommentEditor from "../components/commentEditor";
import MedRevRating from "../components/Rating";
import ApiService from "../common/api.service";
export default {
  components: {
    MedRevCommentEditor,
    MedRevRating
  },
  data() {
    return {
      drug: {
        drugName: this.$route.params.name,
        drugAuthor: "",
        similarDrugs: [],
        diseasesCured: []
      }
    };
  },

  computed: {
    ...mapGetters([
      "getDrug",
      "getCurDrugComments",
      "currentUser",
      "isAuthenticated"
    ])
  },

  created() {
    this.$store.dispatch(GET_DRUG, this.drug.drugName).then(() => {
      this.$store.dispatch(GET_DRUG_COMMENTS, this.getDrug.id);
      return this.getAuthor(this.getDrug.id);
    });
  },

  mounted() {
    console.log("get drug....", this.getDrug);
  },

  methods: {
    getAuthor: function(id) {
      console.log("get Author", id);
      return new Promise((resolve, reject) => {
        ApiService.get(`/drug/get-author?did=${id}`)
          .then(response => {
            console.log(response.data);
            this.drug.drugAuthor = response.data.author;
            reject(response);
            return this.getSimilarDrugs(id);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    },

    getSimilarDrugs: function(id) {
      console.log("get similar drugs....", id);
      return new Promise((resolve, reject) => {
        ApiService.get(`/drug/get-similardrugs?did=${id}`)
          .then(response => {
            console.log("similar.....", response.data);
            this.drug.similarDrugs = response.data;
            reject(response);
            return this.getDiseasesCured(id);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    },

    getDiseasesCured: function(id) {
      console.log("get diseases cured....", id);
      return new Promise((resolve, reject) => {
        ApiService.get(`/drug/get-diseasescured?did=${id}`)
          .then(response => {
            console.log("diseasesssss", response.data);
            this.drug.diseasesCured = response.data;
            reject(response);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    },

    addMedication: function(did, uid) {
      return new Promise((resolve, reject) => {
        ApiService.post("/add-medication", {
          uid: uid,
          did: did
        })
          .then(response => {
            reject(response);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
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

.drug-details {
  margin: 20px;
  border-radius: 4px;
  padding: 20px;
}

.drug-page {
  height: 100vh;
}

.drug-title {
  padding-bottom: 10px;
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: row;
}

#rating-comment > button {
  font-size: 1.4em;
}

#rating-comment > button:active {
  transform: translateY(4px);
}

#rating-comment > button:hover {
  background: #3ca55c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #b5ac49,
    #3ca55c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #b5ac49, #3ca55c);
}
.drug-rating {
  display: flex;
  flex-direction: row;
}

.drug-rating > h2 {
  font-size: 1.4em;
}

.diseases-cured > h2 {
  font-family: 'Raleway', sans-serif;
  padding: 8px;
}

.similar-drugs > h2 {
  font-family: 'Raleway', sans-serif;
  padding: 8px;
}
.drug-rating > span > h2 {
  font-family: 'Roboto', sans-serif;
}
.drug-title > h1 {
  margin-right: 20px;
}
.drug-desc {
  padding-top: 10px;
  font-family: 'Raleway', sans-serif;
  padding-bottom: 20px;
}

.drug-dosage {
  display: flex;
  font-family: 'Raleway', sans-serif;
}

.label {
  padding-right: 20px;
  color: red;
  font-size: 1.4em;
}

.drug-comments {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.shadow {
  -moz-box-shadow: 3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow: 3px 3px 5px 6px #ccc;
}

.comment {
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 15px;
}
#tag {
  background: grey;
  padding: 4px;
  margin: 4px;
  text-align: center;
  border-radius: 10px;
  color: white;
  display: inline-block;
}
.drugs-diseases {
  margin: 1.3em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.similar-drugs {
  background: burlywood;
  flex-basis: 50%;
  text-align: center;
  border-radius: 4px;
}
.diseases-cured {
  background: blanchedalmond;
  border-radius: 4px;
  flex-basis: 50%;
  text-align: center;
}

.username {
  color: #00acee;
}
</style>