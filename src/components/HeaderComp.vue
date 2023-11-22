<template>
    <header>
        <nav>
            <div class="container">
                <SearchComp />
            </div>
        </nav>
    </header>
</template>

<script>
import { navData } from '../data/store.js';
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
    background-color: $mybeige;
    width: 100%;
    padding: 20px;
}
</style>
