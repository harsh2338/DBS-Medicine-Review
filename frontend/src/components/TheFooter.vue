<template>
    <footer>
            <router-link :to="{ name: 'home' }">MEDREV</router-link>
            <span class="attribution">A learning project</span>
    </footer>
</template>

<script>
export default {
    name: "MedRevFooter",
}
</script>

<style scoped>

    footer {
        display: flex;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        justify-content: center;
        background: #d2f8d2;
    }
    .attribution {
        font-family: 'Raleway', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    footer > a {
        color: #3f6826;
        text-decoration: none;
        padding-left: 30px;
        padding-right: 30px;
        font-family: 'Roboto',sans-serif;
    }
</style>