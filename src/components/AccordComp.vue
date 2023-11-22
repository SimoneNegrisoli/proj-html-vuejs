<template>
    <div v-for="(el, index) in accordiumData" class="my-acc-container my-3 " @click="toggleAcc(index)">
        <div class="my-ac">
            <h5>
                <button>
                    {{ el.accTitle }} <i v-show="!el.isActive" class="fa-solid fa-circle-plus"></i> <i v-show="el.isActive"
                        class="fa-solid fa-circle-minus"></i>
                </button>
            </h5>
            <div>
                <div v-show="el.isActive" class="mytext-acc">
                    {{ el.accText }}
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { accordiumData } from '../data/store.js';

export default {
    name: 'AccordComp',
    data() {
        return {
            accordiumData
        }
    },
    methods: {
        toggleAcc(index) {
            this.accordiumData[index].isActive = !this.accordiumData[index].isActive;
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

.my-acc-container {
    width: 100%;
    background-color: $mywithe;

    .my-ac {
        border: 1px solid;
        border-radius: 10px;

        h5 {
            margin-bottom: 0;
        }
    }

    button {
        width: 100%;
        color: $mygrey;
        border: none;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        border-radius: 10px;




        &:hover {
            background-color: $mygreen;
            color: $mywithe;
        }
    }

    .active {
        display: block;
    }

    .mytext-acc {
        padding: 15px;
    }
}
</style>