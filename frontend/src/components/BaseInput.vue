<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input
    :type="type"
    v-bind:placeholder="placeholder" 
    :id="id" 
    v-on:input ="updateValue($event.target.value)"/> 
    <!-- <b-col sm="3">
      <b-form-input 
      :type="type" 
      :id="id" 
      :placeholder="placeholder" 
      v-on:input ="updateValue($event.target.value)"></b-form-input>
    </b-col> -->
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    id: {
      type: String,
      default: "text"
    }
  },

  methods: {
    updateValue: function(value) {
      this.$emit('input',value)
    }
  }
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
input {
  display: inline-block;
  margin: 10px;
  height: 40px;
  border-radius: 2px;
  border: 1px solid gray;
  padding: 10px;
  width: 300px;
}
input:focus {
  outline: none;
  border: 2px solid aquamarine;
}
</style>
