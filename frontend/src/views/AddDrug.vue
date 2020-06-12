<template>
  <div class="add-drug">
    <form>
      <fieldset>
        <input type="text" placeholder="Enter Drug Name" v-model="$v.drug.name.$model" />
      </fieldset>

      <fieldset>
        <input type="text" placeholder="Enter Description" v-model="$v.drug.description.$model" />
      </fieldset>

      <fieldset>
        <input type="text" placeholder="Enter Dosage" v-model="$v.drug.dosage.$model" />
      </fieldset>

      <div id="tags-div">
        <div id="drugs-div">
          <h2 v-if="this.drug.similarDrugList.length == 0">Similar Drugs added appear here</h2>
          <h2 v-if="this.drug.similarDrugList.length > 0">Similar Drugs</h2>
          <div id="tag" v-for="drug in this.drug.similarDrugList" v-bind:key="drug.id">
            {{drug.name}}
            <img src="../assets/delete.png" @click="removeFromList(drug)" />
          </div>
        </div>
        <div id="diseases-div">
          <h2 v-if="this.drug.diseasesCuredList.length == 0">Diseases Cured added appear here</h2>
          <h2 v-if="this.drug.diseasesCuredList.length > 0">Diseases Cured</h2>
          <div id="tag" v-for="disease in this.drug.diseasesCuredList" v-bind:key="disease.id">
            {{disease.name}}
            <img src="../assets/delete.png" @click="removeDiseaseFromList(disease)" />
          </div>
        </div>
      </div>

      <button @click="addDrug">Post Drug</button>
    </form>
    <div class="search-bars">
      <fieldset>
        <input type="text" placeholder="Add to similar drugs" v-model="searchStr" @change="search" />
        <div class="results">
          <ul>
            <li v-if="getDrugResults.length == 0" class="noresult">No Drug by that name</li>
            <li
              v-for="drug in getDrugResults"
              v-bind:key="drug.id"
              @click="addToList(drug)"
            >{{ drug.name }}</li>
          </ul>
        </div>
      </fieldset>

      <fieldset>
        <input
          type="text"
          placeholder="Add to diseases cured"
          v-model="searchStrDisease"
          @change="searchDisease"
        />
        <div class="results">
          <ul>
            <li
              v-if="this.diseases.length == 0 && this.diseaseBarTouched==true"
              class="noresult"
            >No Disease by that name</li>
            <li
              v-for="disease in diseases"
              v-bind:key="disease.id"
              @click="addToDiseaseList(disease)"
            >{{ disease.name }}</li>
          </ul>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { ADD_DRUG } from "../store/actions.type";
import { mapGetters } from "vuex";
import { SEARCH_DRUGS } from "../store/actions.type";
import ApiService from "../common/api.service";
export default {
  data() {
    return {
      diseaseBarTouched: false,
      searchStr: "",
      diseases: [],
      searchStrDisease: "",
      uiState: "submit not clicked",
      drug: {
        name: "",
        description: "",
        dosage: "",
        userid: this.$store.getters.currentUser.id,
        similarDrugList: [],
        diseasesCuredList: []
      }
    };
  },

  validations: {
    drug: {
      name: {
        required
      },

      description: {
        required
      },

      dosage: {
        required
      },

      userid: {
        required
      }
    }
  },

  computed: {
    ...mapGetters(["getDrugResults"]),

    similarDrugsListString: function() {
      var drugs = this.drug.similarDrugList.map(drug => {
        return drug.id;
      });

      return drugs.toString();
    },

    curedDiseasesListString: function() {
      var diseases = this.drug.diseasesCuredList.map(disease => {
        return disease.id;
      });
      return diseases.toString();
    }
  },

  methods: {
    search() {
      this.$store.dispatch(SEARCH_DRUGS, this.searchStr);
    },

    searchDisease: function() {
      return new Promise((resolve, reject) => {
        ApiService.get(`/search-disease?name=${this.searchStrDisease}`)
          .then(response => {
            this.diseaseBarTouched = true;
            this.diseases = response.data;
            resolve(response);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    },

    addDrug: function() {
      this.$store.dispatch(ADD_DRUG, {
        name: this.drug.name,
        description: this.drug.description,
        dosage: this.drug.dosage,
        diseaseid_list: this.curedDiseasesListString,
        drugid_list: this.similarDrugsListString,
        userid: this.$store.getters.currentUser.id
      });
    },

    addToList: function(drug) {
      if (this.drug.similarDrugList.indexOf(drug) == -1) {
        this.drug.similarDrugList.push(drug);
      }
    },

    addToDiseaseList: function(disease) {
      if (this.drug.diseasesCuredList.indexOf(disease) == -1) {
        this.drug.diseasesCuredList.push(disease);
      }
    },

    removeFromList: function(drug) {
      var index = this.drug.similarDrugList.indexOf(drug);
      if (index != -1) {
        this.drug.similarDrugList.splice(index, 1);
      }
    },

    removeDiseaseFromList: function(disease) {
      var index = this.drug.diseasesCuredList.indexOf(disease);
      if (index != -1) {
        this.drug.diseasesCuredList.splice(index, 1);
      }
    }
  }
};
</script>

<style scoped>
.add-drug {
  width: 50%;
  margin: 0 auto;
  padding: 4em;
  border-radius: 8px;
  height: 100vh;
}

.add-drug > h2{
  font-family: 'Raleway', sans-serif;
  font-size: 1.2em;
  margin-bottom: 1em;
}
.search-bars {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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

#tag > img {
  height: 15px;
  width: 15px;
}

#tags-div {
  background: lightgray;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
}

#drugs-div {
  background: darkseagreen;
  border-radius: 4px;
  padding: 10px;
  flex-basis: 50%;
}
#diseases-div {
  background: darkcyan;
  padding: 10px;
  border-radius: 4px;
  flex-basis: 50%;
}

#diseases-div > #tag {
  background: lightsalmon;
}

#tags-div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

form > button {
  margin-bottom: 20px;
  width: 100%;
  font-size: 1.4em;
}

.search-bars > fieldset > input {
  border-radius: 20px;
}

#drugs-div > h2 {
  font-family: 'Raleway', sans-serif;
}

#diseases-div > h2 {
  font-family: 'Raleway', sans-serif;
}

li {
  height: 40px;
  font-size: 1em;
  font-family: "Roboto", sans-serif;
  padding-left: 10px;
  list-style: none;
}

.results {
  border: 1px solid whitesmoke;
  border-radius: 20px;
}
li:hover {
  background: whitesmoke;
}

button:hover {
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

button:active {
  transform: translateY(4px);
}
</style>