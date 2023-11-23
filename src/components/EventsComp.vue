<template>
    <div v-for="(el, index) in eventsData" class="col-12 col-md-6 my-container-card">
        <div class="myevent-card">
            <div>
                <div class="my-city">
                    <i class="fa-solid fa-location-dot"></i> {{ el.city }}
                </div>
                <div>
                    {{ el.conferenceName }}
                </div>
            </div>
            <div class="my-date">
                <div>{{ el.data }}</div>
                <div>{{ el.mounth }}</div>
                <div>
                    <button>Get ticket</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyButton from './MyButton.vue';
import { eventsData } from '../data/store.js'
export default {
    name: 'EventsComp',
    components: {
        MyButton,
    },
    data() {
        return {
            eventsData: eventsData,
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

.my-container-card {}

.myevent-card {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    background-color: rgb(248, 248, 248);
    padding: 30px;

    &:hover {
        background-color: $mywithe;

    }

    .my-date {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button {
        background-color: $mygreen;
        color: $mywithe;
        border: 0;
        border-radius: 5px;
        padding: 5px 25px;
    }
}
</style>