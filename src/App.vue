<template>
    <div id="app">
        <div></div>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {}
    }
</script>

<style>
    @import "./assets/style/common.css";
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        width: 100vw;
        height: 100vh;
    }
</style>
