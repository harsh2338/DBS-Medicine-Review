<template>
    <div class="user-content">
        <h3>Name: {{ getUser.name}}</h3>
        <h3>Username: {{ getUser.username}}</h3>
        <h3>Email: {{ getUser.email}}</h3>
        <h3>Blood Group: {{ getUser.blood_grp}}</h3>
        <h3>Phone number: {{ getUser.ph_number}}</h3>
        <h3>Date of Birth: {{ getUser.dob}}</h3>
        <h3>height: {{ getUser.height}}</h3>
        <h3>weight: {{ getUser.weight}}</h3>
        <h3>Gender: {{ getUser.gender}}</h3>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: mapGetters(['getUser']), 
}
</script>

<style scoped>
.user-content {
    background: aquamarine;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
</style>