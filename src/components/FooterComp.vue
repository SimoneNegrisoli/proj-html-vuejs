<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 ">
                    <h4>Address</h4>
                    <ul>
                        <li>382 NE 191st St # 87394 Miami, FL 33179-3899</li>
                        <li>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</li>
                        <li><a href="#">support@maxcoach.com</a></li>
                        <li class="d-flex">
                            <div><i class="fa-brands fa-facebook"></i></div>
                            <div class="mx-2"><i class="fa-brands fa-twitter"></i></div>
                            <div><i class="fa-brands fa-instagram"></i></div>
                            <div class="mx-2"><i class="fa-brands fa-linkedin"></i></div>
                        </li>
                    </ul>

                </div>
                <div class="col-12 col-md-6 d-flex justify-content-between  ">
                    <div>
                        <h4>Explore</h4>
                        <ListComp :data="exploreData" />
                    </div>
                    <div>
                        <h4>Information</h4>
                        <ListComp :data="informationData" />
                    </div>
                </div>
            </div>
            <div class="row pt-5 pb-4">
                <div class="col-12 text-center">© 2020 Maxcoach. All Rights Reserved</div>

            </div>
        </div>
    </footer>
</template>

<script>
import { exploreData, informationData } from '../data/store.js';
import ListComp from './ListComp.vue'
export default {
    name: 'FooterComp',
    components: {
        ListComp
    },
    data() {
        return {
            informationData,
            exploreData,
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

footer {
    background-color: $mylightwithe;
    padding-top: 60px;
}

ul {
    padding-left: 0;

    li {
        list-style: none;

        a {
            text-decoration: none;
            color: black;
        }
    }
}
</style>