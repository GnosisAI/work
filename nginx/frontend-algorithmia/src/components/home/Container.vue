<template>
    <div class="container content-container" >
      <div class="row" >
        <Search/>
        <Types/>
        <h3 class="mb-32" >Browse all algorithms:</h3>
        <Algorithms :algorithms-list="algorithms"/>
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
    created(){
    this.$store.dispatch('getAlgos');
  },
  computed:{
    algorithms(){

    return this.$store.state.algorithms
    }
  }
}
</script>

<style scoped>

</style>
