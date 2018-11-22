<template>
<div class="col-md-12" v-if="algorithmsList">
 <ul class="nav nav-tabs">
  <li class="active"><a data-toggle="tab" href="#most-called"> <i class="fa fa-star"></i> Most Called</a></li>
  <li><a data-toggle="tab" href="#new"> <i class="fa fa-clock"></i> Recently Added</a></li>
</ul>

<div class="tab-content">
  <div id="most-called" class="tab-pane fade in active">
               <div class="pv-32 api-loading"  v-if="loading">
                  <span class="mr-8" >
                  <i class="aspinner" ></i></span>
                  <span class="pb-8" >Loading...</span>
               </div>
               <div v-if="!loading">
                  <div v-if="algorithmsList.length > 0">
                  <algo-item v-for="algo in bestAlgorithmList" :key="algo.id" v-bind="algo" />
                  </div>
                  <div v-else>
                    <h4>no result was found</h4>
                  </div>
               </div>
  </div>
  <div id="new" class="tab-pane fade">
                <div class="pv-32 api-loading"  v-if="loading">
                  <span class="mr-8" >
                  <i class="aspinner" ></i></span>
                  <span class="pb-8" >Loading...</span>
               </div>
               <div v-if="!loading">
                  <div v-if="algorithmsList.length > 0">
                  <algo-item v-for="algo in newAlgorithmList" :key="algo.id" v-bind="algo" />
                  </div>
                  <div v-else>
                    <h4>no result was found</h4>
                  </div>
               </div>
  </div>
</div>
</div>

</template>
<script>
import AlgoItem from "./AlgoItem";
export default {
  name: "Algorithms",
  components: {
    AlgoItem
  },
  props: {
    algorithmsList: Array,
    loading: Boolean
  },
  show: false,
  data() {
    return {};
  },
  computed:{
    newAlgorithmList(){
      function compare(a, b) {
        if (a.updated < b.updated)
          return 1;
        if (a.updated > b.updated)
          return -1;
        return 0;
      }
      
      return [...this.algorithmsList].sort(compare);
    },
    bestAlgorithmList(){
      function compare(a, b) {
        if (a.stars < b.stars)
          return 1;
        if (a.stars > b.stars)
          return -1;
        return 0;
      }
      
      return [...this.algorithmsList].sort(compare);
    }
  }
};
</script>


<style scoped>
.api-loading {
  color: #5000be;
}
</style>