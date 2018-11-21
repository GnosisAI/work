<template>
    <div class="container content-container" >
      <div class="row" >
        <Search/>
        <CatDesc :title="getTitle"/>
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
    this.$store.dispatch('getCatAlgos',{ cat: this.$route.params.name});
  },
  computed:{
    getTitle(){
      return this.$route.params.name
    },
    algorithmsList(){
      return this.$store.state.algorithm.catAlgorithms
    }
  }
}
</script>

<style scoped>

</style>
