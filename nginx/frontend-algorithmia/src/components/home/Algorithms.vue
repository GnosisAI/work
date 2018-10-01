<template>
<div class="col-md-12" >
            
            <div >
              <ul class="nav nav-tabs">
                <li role="presentation" class="active"><a role="tab"><i class="fa fa-star"></i> Top Rated</a></li>
                <li role="presentation"><a role="tab"><i class="fa fa-arrow-circle-o-down"></i> Most Called</a></li>
                <li role="presentation"><a role="tab"><i class="fa fa-clock-o"></i> Recently Added</a></li>
              </ul>
              <div class="tab-content">
                <div id="top-rated-algorithms" role="tabpanel" class="tab-pane active" style="display:;">
                  <div >
                    <!---->
                    <div class="pv-32 api-loading"  v-if="loading">
                      <span class="mr-8" >
                        <i class="aspinner" ></i></span>
                      <span class="pb-8" >Loading...</span>
                    </div>
                    <div v-if="!loading">
                      <algo-item v-for="algo in algorithmsList" :key="algo.id" v-bind="algo" />
                    </div>
                    <!---->
                  </div>
                </div>
              </div>
              <div class="tab-content">
                <div id="most-called-algorithms" role="tabpanel" class="tab-pane active" style="display:none;">
                  <div >
                    <!---->
                    <div class="pv-32 loading" ><span class="mr-8" ><i class="aspinner"
                          ></i></span><span class="pb-8" >Loading...</span></div>
                    <!---->
                    <!---->
                  </div>
                </div>
              </div>

              <div class="tab-content">
                <div id="recent-algorithms" role="tabpanel" class="tab-pane active" style="display:none;">
                  <div >
                    <!---->
                    <div class="pv-32 loading" ><span class="mr-8" ><i class="aspinner"
                          ></i></span><span class="pb-8" >Loading...</span></div>
                    <!---->
                    <!---->
                  </div>
                </div>
              </div>
            </div>
          </div>


</template>
<script>
import AlgoItem from './AlgoItem'
export default {
  name: 'Algorithms',
  components:{
    AlgoItem
  },
  props:{
    algorithmsList:Array,
    loading:Boolean
  },
  show:false,
  data(){
    return {
    }
  }
}
</script>


<style scoped>
.api-loading{
  color:#5000be;
}
</style>