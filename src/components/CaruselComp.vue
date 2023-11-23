<template>
    <div v-for="(el, index) in caruselCoach" class="p-5 m-4 my-carusel text-center ">
        <div class="my-img-container">
            <img :src="el.imgCoach" :alt="el.nameCoach">
        </div>
        <div>
            <div>{{ el.presentation }}</div>
            <div>{{ el.nameCoach }}</div>
            <div>{{ el.professionCoach }}</div>
        </div>

    </div>
</template>

<script>
import { caruselCoach } from '../data/store.js';
export default {
    name: 'CaruselComp',
    data() {
        return {
            caruselCoach: caruselCoach,
        }
    }
}
</script>
<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

.my-carusel {
    border: 1px solid $mylightwithe;
    position: relative;
    background-color: $mywithe;
    border-radius: 10px;

}

.my-img-container {
    width: 100%;

    img {
        width: 100px;
        height: 100px;
        object-fit: contain;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%)
    }
}
</style>