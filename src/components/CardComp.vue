<template>
    <div class="text-center">
        <div>
            <img :src="imgPath" :alt="imgTitle">
        </div>
        <div>
            <h5>{{ imgTitle }}</h5>
            <p>{{ textCard }}</p>
            <button>Start Now <i class=" fa-solid fa-long-arrow-right"></i></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComp',
    props: {
        imgPath: String,
        imgTitle: String,
        textCard: String,
        textButton: String
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

button {
    color: $mylightpurple;
    border: none;
    width: 100%;
    background-color: transparent;
    border-radius: 10px;
    padding: 10px;
    transition: all 0.4s;

    &:hover {
        background-color: rgb(248, 248, 248);
        color: $mygreen;
    }
}
</style>