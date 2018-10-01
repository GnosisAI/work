<template>
    <div class="container content-container" >
      <div class="row" >
        <Search/>
        <Types/>
        <h3 class="mb-32" >Browse all algorithms:</h3>
        <Algorithms :algorithms-list="algorithms" :loading="loading"/>
      </div>
    </div>
</template>
<script>

import Search from './Search.vue'
import Types from './Types.vue'
import Algorithms from './Algorithms.vue'

 
export default {
  name: 'Container',
  components:{
    Search,
    Types,
    Algorithms
  },
  data(){
    return{
      loading:true
    }
  },
  created(){
    this.$store.dispatch('getAlgos');
  },
  computed:{
    algorithms(){
    if(this.$store.state.algorithms != null){
          this.loading=false
    }
    return this.$store.state.algorithms
    }
  }
}
</script>

<style scoped>

</style>
