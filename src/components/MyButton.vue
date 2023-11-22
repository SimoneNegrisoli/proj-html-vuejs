<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'MyButton'
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

button {
    background-color: $mygreen;
    padding: 15px 35px 15px 35px;
    border-radius: 5px;
    color: $mywithe;
    border: none;
    transition: all 0.4s;

    &:hover {
        background-color: $mypurple;
    }
}
</style>