<template>
    <div class="userpage">
  <div class="user-banner">
    <div class="user-image">
     <img src="@/assets/user.jpeg">
    </div>
    
    <div class="username">
      <h1>{{ currentUser.username }}</h1>
    </div>
  </div>
  
  <div class="userdetails shadow">
    <div class="detail">
      <div class="label"><h2>Name</h2></div>
      <div class="det"><h2>{{ currentUser.name }}</h2></div>
    </div>
  
        <div class="detail">
          <div class="label"><h2>Date of Birth</h2></div>
          <div class="det"><h2>{{currentUser.dob.slice(0, 10)}}</h2></div>
    </div>
    
        <div class="detail">
          <div class="label"><h2>Blood Group</h2></div>
          <div class="det"><h2>{{currentUser.blood_grp}}</h2></div>
    </div>
    
        <div class="detail">
          <div class="label"><h2>Height</h2></div>
          <div class="det"><h2>{{currentUser.height}}</h2></div>
    </div>
    
        <div class="detail">
      <div class="label"><h2>Weight</h2>       </div>
        <div class="det"><h2>{{currentUser.weight}}</h2></div>
    </div>
    
        <div class="detail">
          <div class="label"><h2>Gender</h2></div>
          <div class="det"><h2>{{currentUser.gender}}</h2></div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["currentUser"])
    }
}
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
  background-image: url('../assets/banner.jpeg');
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
  color:white;
  font-size: 20px;
  border-radius: 6px;
  padding: 5px;
  margin-bottom: 1em;

background: #0F2027;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

.user-image > img {
    height: 8em;
    border-radius: 50%;
    border: 4px solid white;
}

.user-image {
    margin-top: 1em;
}

.userdetails {
  margin: 4em auto;
  border-radius: 4px;
  width: 50%;
}

.detail {
  display: flex;
  padding: 10px;
}

.det > h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.4em;
}

.label > h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.4em;
}

.label {
  padding: 5px;
  background: lightgreen;
  border-radius: 4px 0px 0px 4px;
}

.username > h1 {
    font-family: 'Raleway',sans-serif;
}
.det {
  padding-left: 1em;
  border-radius: 0px 4px 4px 0px;
  background: lightsalmon;
  padding-right: 1em;
  padding-top: 5px;
  padding-bottom: 5px;
}

.shadow {
  -moz-box-shadow:    3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
   box-shadow:         3px 3px 5px 6px #ccc;
}
</style>