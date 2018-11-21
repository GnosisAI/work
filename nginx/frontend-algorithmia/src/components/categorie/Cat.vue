<template>
    <div class="container content-container" >
      <div class="row" >
        <Search/>
        <CatDesc :cat="categorie"/>
        <Algorithms :algorithms-list="algorithmsList"/>
      </div>
    </div>
</template>
<script>

import Search from '../home/Search.vue'
import Algorithms from '../home/Algorithms.vue'
import CatDesc from './CatDesc.vue'

 
export default {
  name: 'cat',
  components:{
    Search,
    CatDesc,
    Algorithms
  },
    data(){
    return{
    }
  },
  created(){
    this.$store.dispatch('getCatByName',{ name: this.$route.params.name});
    this.$store.dispatch('getCatAlgos',{ cat: this.$route.params.name});
  },
  computed:{
    algorithmsList(){
      return this.$store.state.algorithm.catAlgorithms
    },
    categorie(){
      return this.$store.state.categorie.categorie
    }
  }
}
</script>

<style scoped>

</style>
