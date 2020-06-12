<template>
  <div>
    <div class="comment-editor">
      <textarea rows="3" placeholder="Enter comment" v-model="comment"></textarea>
      <div class="card-footer">
        <h1>A</h1>
        <button v-bind:disabled="commentStatus" v-on:click="addComment">Post comment</button>
      </div>
    </div>
  </div>
</template>


<script>
import { ADD_COMMENT } from "../store/actions.type";
export default {
  name: "MedRevCommentEditor",
  data() {
    return {
      comment: ""
    };
  },

  computed: {
    commentStatus: function() {
      if (this.comment.length == 0) {
        return true;
      } else return false;
    }
  },

  methods: {
    addComment() {
      this.$store
        .dispatch(ADD_COMMENT, {
          uid: this.$store.getters.currentUser.id,
          did: this.$store.getters.getDrug.id,
          comment_desc: this.comment
        })
        .then(console.log("comment added"));
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

.comment-editor {
  width: 50%;
  background: lightgray;
  padding: 8px;
  border-radius: 4px;
  margin: 1em;
}

.card-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
textarea {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
}

.card-footer > button {
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 1px;
  width: 100px;
  height: 50px;
}

.card-footer > button:hover {
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

.card-footer > button:active {
    transform: translateY(4px);

}
</style>