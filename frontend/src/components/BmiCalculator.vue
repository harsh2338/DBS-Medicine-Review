<template>
  <div class="bmi-calculator">
    <h1>BMI calculator</h1>
    <div class="bmi-input">
      <input
        type="text"
        name="weight-input"
        placeholder="Enter weight in Kgs"
        v-model.lazy="weightinput"
      />
    </div>

    <div class="bmi-input">
      <input
        type="text"
        name="height-input"
        placeholder="Enter height in metres"
        v-model.lazy="heightinput"
      />
    </div>

    <button @click="result = calculateBMI(heightinput, weightinput)">Calculate BMI</button>

    <div class="bmi-output">
      <h2 v-if="result == 0">Let's find your BMI!</h2>
      <h2 v-else-if="result < 16">Severe Thinness</h2>
      <h2 v-else-if="result >= 16 && result < 17">Moderate Thinness</h2>
      <h2 v-else-if="result >=17 && result < 18.5">Mild Thinness</h2>
      <h2 v-else-if="result >= 18.5 && result < 25">Normal</h2>
      <h2 v-else-if="result >= 25 && result < 30">Overweight</h2>
      <h2 v-else-if="result >= 30 && result < 35">Obese Class I</h2>
      <h2 v-else-if="result >= 35 && result < 40">Obese Class II</h2>
      <h2 v-else-if="result > 40">Obese Class III</h2>
      <h2 v-else>"Hmm.. Can you check your input again?"</h2>  
    </div>
  </div>
</template>

<script>
export default {
  name: "MedRevBMIcalculator",
  data() {
    return {
      heightinput: "",
      weightinput: "",
      result: 0.0
    };
  },
  methods: {
    calculateBMI: (heightinput, weightinput) => {
      return weightinput / (heightinput * heightinput);
    }
  }
};
</script>

<style scoped>
.bmi-calculator {
  text-align: center;
  width: 400px;
  margin: 4em auto;
  background: #ffd7c7;
  border-radius: 4px;
}

.bmi-calculator > h1 {
  font-family: "sans-serif";
}

.bmi-calculator > button {
  width: 200px;
  font-size: 1.4em;
  font-family: 'Raleway', sans-serif;
}
.bmi-input > input {
  padding: 10px;
  margin-bottom: 10px;
}

.bmi-input {
  padding: 10px;
}

.bmi-output {
  font-size: 1.6em;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  background: cornflowerblue;
  font-family: 'Raleway', sans-serif;
  color: white;
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