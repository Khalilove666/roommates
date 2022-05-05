<script setup lang="ts">
import Header from "./components/Header.vue";
import Home from "./views/Home.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <Header/>
    <Home/>
    <Footer/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#app {
    font-family: Poppins, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
