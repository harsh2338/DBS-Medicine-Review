<template>
  <div id="add-disease">
    <form @submit.prevent="addDisease(disease)">
      <fieldset>
        <input type="text" placeholder="Enter Disease Name" v-model="$v.disease.name.$model" />
      </fieldset>

      <fieldset>
        <input type="text" placeholder="Enter Description" v-model="$v.disease.description.$model" />
      </fieldset>

      <div class="drug-list">
        <div v-if="this.disease.drugList.length == 0">
          <h2>Drugs that treat the diseases appear here</h2>
        </div>
        <div v-if="this.disease.drugList.length != 0">
          <h2>Drug Cures</h2>
        </div>
        <div id="tag" v-for="drug in disease.drugList" v-bind:key="drug.id">
          {{drug.name}}
          <img src="../assets/delete.png" @click="removeFromList(drug)" />
        </div>
      </div>

      <fieldset>
        <input type="submit" value="Post Disease" />
      </fieldset>
      <fieldset>
        <input id="search-bar" type="text" placeholder="Search Drug" v-model="searchStr" @change="search" />
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
    </form>
  </div>
</template>

<script>
import { ADD_DISEASE, SEARCH_DRUGS } from "../store/actions.type";
import { required } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      searchStr: "",
      disease: {
        name: "",
        description: "",
        drugList: []
      }
    };
  },

  validations: {
    disease: {
      name: {
        required
      },

      description: {
        required
      },

      drugList: {
        required
      }
    }
  },

  computed: {
    ...mapGetters(["getDrugResults"]),
    drugListString: function() {
      var newDrugs = this.disease.drugList.map(drug => {
        return drug.id;
      });
      return newDrugs.toString();
    }
  },

  methods: {
    addDisease: function() {
      this.$store.dispatch(ADD_DISEASE, {
        name: this.disease.name,
        description: this.disease.description,
        cures: this.drugListString,
        userid: this.$store.getters.currentUser.id
      });
    },

    search() {
      this.$store.dispatch(SEARCH_DRUGS, this.searchStr);
    },

    addToList: function(drug) {
      if (this.disease.drugList.indexOf(drug) == -1) {
        this.disease.drugList.push(drug);
      }
    },

    removeFromList: function(drug) {
      var index = this.disease.drugList.indexOf(drug);
      if (index != -1) {
        this.disease.drugList.splice(index, 1);
      }
    }
  }
};
</script>

<style scoped>
#add-disease {
  width: 50%;
  margin: 0 auto;
  height: 100vh;
}

#tag {
  background: grey;
  padding: 4px;
  margin: 2px;
  text-align: center;
  border-radius: 10px;
  color: white;
  display: inline-block;
}

.drug-list {
  background: lightgray;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.drug-list > div > h2 {
  font-family: 'Raleway', sans-serif;
}
#tag > img {
  height: 15px;
  width: 15px;
}

#search-bar {
  border-radius: 20px;
}

.results > ul > li {
  list-style: none;
  font-family: 'Raleway', sans-serif;
  padding: 6px;
  font-size: 1.2em;
}

.results > ul > li:hover {
  background: lightgrey;
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