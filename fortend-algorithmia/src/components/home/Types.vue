<template>
    <div class="col-md-12" >
            <div class="categories" >
              <ul class="grid grid-nav category-grid category-even" >
                <Item v-for="(item, index) in items" :key="index" v-bind="item" />
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
          ],
          items :[
              {
                  img:"text-analysis.svg",
                  title:"Text Analysis",
                  desc:"Make sense of unstructured text"
              },
                            {
                  img:"@/assets/images/categories/machine-learning.svg",
                  title:"Machine Learning",
                  desc:"Teach your app to teach itself"
              },
                            {
                  img:"@/assets/images/categories/computer-vision.svg",
                  title:"Computer Vision",
                  desc:"Identify objects in images"
              },
                            {
                  img:"@/assets/images/categories/deep-learning.svg",
                  title:"Deep Learning",
                  desc:"Learn from your data"
              }          
            ]
      }
  }

}
</script>


<style scoped>

</style>