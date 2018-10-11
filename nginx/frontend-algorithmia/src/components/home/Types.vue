<template>
    <div class="col-md-12" >
            <div class="categories" >
              <ul class="grid grid-nav category-grid category-even" >
                <li class="media category col-md-3" >
                    <router-link  class="algo-list-link" to="/cat/Text Analysis">
                        <div class="media-left" ><img src="@/assets/images/categories/text-analysis.svg" class="media-object category-icon"
                            ></div>
                        <div class="media-body" >
                            <h4 class="media-heading" >
                                   Text Analysis
                            </h4>
                        <p >
                            Make sense of unstructured text
                        </p>
                        </div>
                    </router-link>
                </li>
                <li class="media category col-md-3" >
                    <router-link  class="algo-list-link" to="/cat/Computer Vision">
                        <div class="media-left" ><img src="@/assets/images/categories/computer-vision.svg" class="media-object category-icon"
                            ></div>
                        <div class="media-body" >
                        <h4 class="media-heading" >Computer Vision</h4>
                        <p >Identify objects in images</p>
                        </div>
                    </router-link>
                </li>
                <li class="media category col-md-3" >
                    <router-link  class="algo-list-link" to="/cat/Deep Learning">
                        <div class="media-left" ><img src="@/assets/images/categories/deep-learning.svg" class="media-object category-icon"
                            ></div>
                        <div class="media-body" >
                        <h4 class="media-heading" >Deep Learning</h4>
                        <p >Learn from your data</p>
                        </div>

                    </router-link>
                </li>
                <li class="media category col-md-3" >
                    <router-link  class="algo-list-link" to="/cat/Machine Learning">
                        <div class="media-left" ><img src="@/assets/images/categories/machine-learning.svg" class="media-object category-icon"
                            ></div>
                        <div class="media-body" >
                        <h4 class="media-heading" >Machine Learning</h4>
                        <p >Teach your app to teach itself</p>
                        </div>
                    </router-link>
                </li>
              </ul>
            </div>
            <!--        Tags        -->
            <Tags v-bind:tags="tags"/>
        <hr >
    </div>

</template>
<script>
import Tags from './Tags.vue'
import Item from './Item.vue'

export default {
  name: 'Types',
  components:{
      Tags,
      Item
  },
  data(){
      return{
          tags:[
              "utilities", "microservices","web","Sentiment Analysis"
          ]
      }
  }

}
</script>


<style scoped>

</style>
