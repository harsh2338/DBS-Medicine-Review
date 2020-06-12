<template>
  <div id="rating-editor">
    <star-rating
      :increment="0.5"
      v-model="rating"
      @rating-selected="setRating"
      v-bind:star-size="40"
      v-bind:show-rating="false"
    ></star-rating>
    <button v-bind:disabled="ratingSubmitted" @click="submitRating">{{ratingStatus}}</button>
  </div>
</template>

<script>
import { ADD_RATING } from "../store/actions.type";
import StarRating from "vue-star-rating";
export default {
  name: "MedRevRating",
  components: {
    StarRating
  },
  data() {
    return {
      rating: null,
      ratingSubmitted: false
    };
  },

  computed: {
    ratingStatus: function() {
      if (this.ratingSubmitted == false) {
        return "Submit rating";
      } else return "Rating Submitted";
    }
  },
  methods: {
    setRating: function(rating) {
      this.rating = rating;
    },

    submitRating: function() {
      this.$store
        .dispatch(ADD_RATING, {
          rating: this.rating,
          did: this.$store.getters.getDrug.id
        })
        .then((this.ratingSubmitted = true));
    }
  }
};
</script>

<style scoped>
#rating-editor {
  display: flex;
  flex-direction: row;
  margin: 2em;
}

#rating-editor > button {
  width: 100px;
  padding: 0px;
}

#rating-editor > button:hover {
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
  );
}

#rating-editor > button:active {
    transform: translateY(4px);

}

#rating-editor > button:disabled {
  background: lightgreen;
  color: black;
}

</style>