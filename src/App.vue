<template>
  <HeaderComp />
  <MainComp />
  <FooterComp />
</template>

<script>
import { navData, exploreData, informationData } from './data/store.js';

import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';


export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp
  },
  data() {
    return {
      navData,
      exploreData,
      informationData
    }
  }
}


</script>

<style lang="scss" scoped></style>