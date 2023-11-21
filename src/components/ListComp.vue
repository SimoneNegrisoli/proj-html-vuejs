<template>
    <ul>
        <li v-for="(el, index) in data ">{{ el }}</li>
    </ul>
</template>

<script>
import { exploreData, informationData } from '../data/store.js';
export default {
    name: 'ListComp',
    props: {
        data: Array
    }
}
</script>

<style lang="scss" scoped>
ul li {
    list-style: none;

    a {
        text-decoration: none;
        color: black;
    }
}
</style>