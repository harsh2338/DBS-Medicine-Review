<template>
  <div id="app">
    <MedRevHeader/>
    <router-view/>
    <MedRevFooter/>
  </div>
</template>

<script>
import MedRevHeader from "./components/TheHeader"
import MedRevFooter from "./components/TheFooter"
export default {
  name: "App",
 components: {
    MedRevHeader,
    MedRevFooter,
  }
  
}
</script>
