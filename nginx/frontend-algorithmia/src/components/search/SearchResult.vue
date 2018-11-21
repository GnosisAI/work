<template>
    
    <div class="container">
        <br>
        <Search :value="getSearchVal"/>
        
        <h3 class="mb-32" >Search Result for "{{getSearchVal}}"</h3>
        <Algorithms  :algorithms-list="algorithmsList" />
    </div>

</template>

<script>
import Search from '../home/Search.vue'
import Algorithms from '../home/Algorithms.vue'

export default {
    name:'Search Result',
    components:{
        Search,
        Algorithms
    },
    created(){
    this.$store.dispatch('getFiltredAlgos',{ q: this.$route.query.q});
    },
    computed:{
        getSearchVal(){
            return this.$route.query.q
        },
        algorithmsList(){
            return this.$store.state.algorithm.filtredAlgorithms
        }
    }
}
</script>
