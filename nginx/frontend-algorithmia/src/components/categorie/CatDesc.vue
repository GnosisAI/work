<template>
   <div class="category-overview" v-if="cat">
      <h2><img src="@/assets/images/categories/default.png" class="category-icon">
         {{cat.name}}
      </h2>
      <div>
         <p>{{cat.description}}</p>
         <h3>Blogs</h3>
         <ul v-for="blog in cat.blogs" :key="blog.name">
            <li><a :href="blog.url">{{blog.name}}</a></li>
         </ul>
         <h3>Useful videos & Tutorials</h3>
         <ul v-for="video in cat.videos" :key="video.name">
            <li><a :href="video.url" >{{video.name}}</a></li>
         </ul>
      </div>
      <hr>
   </div>
</template>
<script>
export default {
  name: 'CatDesc',
  components:{

  },
  data(){
    return{

    }
  },
  props:{
    cat:Object
  }
}
</script>


<style scoped>
a{
  color: #5000be
}
</style>
