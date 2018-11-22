<template>
    
    <div class="container">
        <br>
        <Search :value="getSearchVal"/>
        
        <h3 class="mb-32" >Search Result for "{{getSearchVal}}"</h3>

        <div v-if="!algorithmsList">
            <h3> No result found</h3>
        </div>
        <div v-else>
        <Algorithms  :algorithms-list="algorithmsList" />
        </div>
    </div>

</template>

<script>
import Search from '../home/Search.vue'
import Algorithms from '../home/Algorithms.vue'

export default {
    name:'SearchResult',
    components:{
        Search,
        Algorithms
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
