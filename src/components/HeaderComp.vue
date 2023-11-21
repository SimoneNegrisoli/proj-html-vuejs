<template>
    <header>
        <nav>
            <SearchComp />
        </nav>
    </header>
</template>

<script>
import { navData, exploreData, informationData } from '../data/store.js';
import SearchComp from './SearchComp.vue';

export default {
    name: 'HeaderComp',
    components: {
        SearchComp
    },
    data() {
        return {
            nav: navData
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

nav {
    height: 100px;
    position: fixed;
    z-index: 1000;
    background-color: $mylightwithe;
    width: 100%;
    padding: 20px;
}
</style>