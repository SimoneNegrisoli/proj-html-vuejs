<template>
    <div class="d-flex align-items-center justify-content-between ">
        <div class="img-cont">
            <img src="../assets/img/dark-logo.png" alt="">
        </div>
        <div class="d-flex align-items-center">
            <ul class="mb-0">
                <li v-for="(opt, index) in navData" class="mx-3">
                    <a href="#">{{ opt }}</a>
                </li>
            </ul>
            <div class="input-group myinput">
                <input type="text" class="form-control" placeholder="Cerca.." aria-describedby="src-btn">
                <span class="input-group-text my-glass" id="src-btn"><i class="fa-solid fa-magnifying-glass"></i></span>
            </div>
        </div>
    </div>
</template>

<script>

import { navData, exploreData, informationData } from '../data/store.js'
export default {
    name: 'SearchComp',
    props: {
        optNav: String
    },
    data() {
        return {
            navData
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

.my-glass {
    background-color: white;
}

input {
    border-left: none;
}

ul {
    display: flex;
    list-style: none;

    li a {
        color: black;
        text-decoration: none;
    }
}

.myinput {
    width: 200px;
}

.img-cont {
    width: 160px;

    img {
        width: 100%;
    }
}
</style>

