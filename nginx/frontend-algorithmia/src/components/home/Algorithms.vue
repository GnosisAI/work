<template>
<div class="col-md-12" >
 <ul class="nav nav-tabs">
  <li class="active"><a data-toggle="tab" href="#top-rated"> <i class="fa fa-star"></i> Top Rated</a></li>
  <li><a data-toggle="tab" href="#new"> <i class="fa fa-clock"></i> Recently Added</a></li>
</ul>

<div class="tab-content">
  <div id="top-rated" class="tab-pane fade in active">
               <div class="pv-32 api-loading"  v-if="loading">
                  <span class="mr-8" >
                  <i class="aspinner" ></i></span>
                  <span class="pb-8" >Loading...</span>
               </div>
               <div v-if="!loading">
                  <algo-item v-for="algo in algorithmsList" :key="algo.id" v-bind="algo" />
               </div>
  </div>
  <div id="new" class="tab-pane fade">
    <p>New Algorithms</p>
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
  }
};
</script>


<style scoped>
.api-loading {
  color: #5000be;
}
</style>