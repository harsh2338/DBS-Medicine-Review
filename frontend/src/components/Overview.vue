<template>
  <div class="user-content">
        <div class="detail">
        <span class="label">Name: </span><span class="det">{{getUser.name}}</span>
        </div>
        <div class="detail">
        <span class="label">Email: </span><span class="det">{{getUser.email}}</span>
        </div>
        <div class="detail">
        <span class="label">Blood group: </span><span class="det">{{getUser.blood_grp}}</span>
        </div>
        <div class="detail">
        <span class="label">Phone: </span><span class="det">{{getUser.ph_number}}</span>
        </div>
        <div class="detail">
        <span class="label">Date of Birth: </span><span class="det">{{getUser.dob}}</span>
        </div>
        <div class="detail">
        <span class="label">height: </span><span class="det">{{getUser.height}}</span>
        </div>
        <div class="detail">
        <span class="label">weight: </span><span class="det">{{getUser.height}}</span>
        </div>
        <div class="detail">
        <span class="label">Gender: </span><span class="det">{{getUser.gender}}</span>
        </div>
        
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["getUser"]),
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway|Roboto&display=swap');

.username {
  font-family: 'Roboto', sans-serif;
}
.detail {
  margin: 8px;
}
.label {
  padding: 8px;
  font-family: 'Roboto', sans-serif;
}

.det {
  font-family: 'Raleway', sans-serif;
}

</style>
