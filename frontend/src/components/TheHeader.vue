<template>
    <header>
	    <router-link class="navbar-brand" :to="{ name: 'home' }">
                MEDREV
        </router-link>
			<nav>
                <ul v-if="!isAuthenticated" class="">
                    <li class="">
                        <img src="../assets/home.png" class="icon"/>
                        <router-link :to="{ name: 'home' }">Home</router-link>
                    </li>

                    <li class="">
                        <img src="../assets/login.png" class="icon"/>
                        <router-link :to="{ name: 'login' }"><span class="login"></span>Signin</router-link>
                    </li>

                    <li class="">
                        <img src="../assets/signup.png" class="icon"/>
                        <router-link :to="{ name: 'register' }">Signup</router-link>
                    </li>
                </ul>

                <ul v-else class="">
                    <li class="">
                        <img src="../assets/home.png" class="icon"/>
                        <router-link :to="{ name: 'home' }">Home</router-link>
                    </li>

                     <li v-if="isAuthenticated">
                    <router-link :to="{ name: 'overview' }">@{{ currentUser.username }}</router-link>
                    </li>

                    <li>
                    <img src="../assets/logout.png" class="icon"/>
                    <a @click="logout">Logout</a>
                    </li>

                </ul>
    		</nav>
    </header>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "../store/actions.type"

export default {
    name: "MedRevHeader",
    computed: {
        ...mapGetters(["currentUser", "isAuthenticated"])
    },
    methods: {
        logout() {
            this.$store.dispatch(LOGOUT)
            .then(() => {this.$router.push({ name: 'home' })})
        }
    }
}
</script>

<style scoped>
     * {
        font-family: 'Roboto','sans-serif';
     }
	header,
    nav {
        display: flex;
    }

    img {
        margin: 0;
    }
    header {
        flex-direction: row;
        justify-content: space-between;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
    }

    .navbar-brand {
        padding-left: 5%;
        font-size: 1.5em;
        margin: 0;
        color: #3f6826;
        font-weight: 500;
    }

    nav a {
        padding-left: 5px;
        padding-right: 20px;
        text-align: center;
        color: #bebebe;
    }

    nav a:hover {
        color: #808080;
    }

    nav a.router-link-exact-active {
        color: #000000;
    }
    li {
        display: inline;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a{
        text-decoration: none;

    }

    .login {
        background: url('../assets/login.png');
    }

    .icon {
        height: 15px;
        width: 15px;
    }
</style>
