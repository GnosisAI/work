<template lang="html">
   <section class="algorithm">
      <div class="jumbotron">
         <h4 class="text-center"> <span>{{algo.category[0]}}/</span><strong>{{algo.name}}/</strong>{{ algo.version }}</h4>
      </div>
      <Banner v-bind="algo"/>
      <br>
      <div class="container">
         <div class="row">
            <div class="col-md-12" >
               <h2 >Run an Example</h2>
            </div>
            <div class="col-md-6">
               <input-console v-on:submit="onSubmit" :loading="loading" :inputs="inputs"/>
               <div class="text-center">
               </div>
               <br>
            </div>
            <div class="col-md-6">
               <output-console :output="result"/>
            </div>
         </div>
         <hr>
         <hr>
        <Links v-bind:links="algo.links"/>
      </div>
   </section>
</template>

<script lang="js">
import InputConsole from './InputConsole.vue'
import OutputConsole from './OutputConsole.vue'
import Links from './Links.vue'
import axios from 'axios';
import {API_URL} from '../../config/env'
import Banner from './Banner.vue'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


  export default  {
    name: 'algorithm',
    components:{
      InputConsole,
      OutputConsole,
      Banner,
      Links
      
    },    
    created(){
      this.$store.dispatch('getAlgoByName',{ name: this.$route.params.name});
    },
    methods:{
      onSubmit(value){
       if(! this.loading){
        this.loading = true
        global.console.log(value)
        axios.post(API_URL+'algorithm/predict/'+this.$route.params.name,JSON.parse(value))
        .then(prediction => {
            this.output = JSON.stringify(prediction.data,null,'\t')
            this.loading = false 
        })
       }
      }
    },
    data(){
      return {
          output:'',
          loading:false,
      }
    },
    computed:{
      result(){
        return this.output 
      },
      algo(){
        return this.$store.state.algorithm.algorithm
      },
      inputs(){
        return JSON.stringify(this.$store.state.algorithm.algorithm.example.inputs,null,2)
      }
    }
}
</script>

<style scoped lang="css">
.jumbotron {
  background-color: #fafafa;
  height: 70px;
}
h4{
  color: black;
  font-family: 'Rubik', sans-serif
}
.jumbotron span{
  color: #5000be
}

</style>
