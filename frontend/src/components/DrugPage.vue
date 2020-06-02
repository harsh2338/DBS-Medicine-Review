<template>
  <div class="drug-details shadow">
  <div class="drug-title">
    <h1>{{ getDrug.name }}</h1>
  </div>

  <hr><hr>
  
  <div class="drug-desc">
    <h1>What is {{ getDrug.name }}?</h1>
    <h2>{{getDrug.description}}</h2>
  </div>
  
  <div class="drug-dosage">
    <h2 class="label">Dosage: </h2>
    <h2>{{ getDrug.dosage }}</h2>
  </div>
  
  <div class="drug-comments">
    <div class="comment shadow"  v-for="(comment, index) in getCurDrugComments" v-bind:key="index">
    <h3 class="username">{{ comment.username }}</h3>
    <h3 class="comment">{{ comment.comment_desc }}</h3>
    </div>
  </div>
</div>
</template>

<script>
import { GET_DRUG, GET_DRUG_COMMENTS } from '../store/actions.type';
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            drug: {
                drugName: this.$route.params.name,
            }
        }
    },

    computed: {
        ...mapGetters(["getDrug", "getCurDrugComments"])
    },
    
    created() {
        this.$store.dispatch(GET_DRUG, this.drug.drugName).
        then(() => {
            this.$store.dispatch(GET_DRUG_COMMENTS, this.getDrug.id)
        })
    }
}
</script>

<style scoped>
    *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.drug-details {
  margin: 20px;
  border-radius: 4px;
  padding: 20px;
}

.drug-title {
  padding-bottom: 10px;
}

.drug-desc {
  padding-top: 10px;
  padding-bottom: 20px;
}

.drug-dosage {
  display: flex;
}

.label {
  padding-right: 20px;
  color: red;
}

.drug-comments {
  display: flex;
  flex-direction: column;
  padding: 20px;
  
}

.shadow {
  -moz-box-shadow:    3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
   box-shadow:         3px 3px 5px 6px #ccc;
}

.comment {
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 15px;
}

.username {
  color: #00acee;
}

</style>