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
               <input-console v-on:submit="onSubmit"/>
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
import env from '../../config/env'
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
    console.log('The id is: ' + this.$route.params.name);
      this.$store.dispatch('getAlgoByName',{ name: this.$route.params.name});
    },
    methods:{
       objToString (obj) {
          var str = '{\n';
          for (var p in obj) {
              if (obj.hasOwnProperty(p)) {
                  str += '\t"' +p + '" : "' + obj[p] + '"\n';
              }
          }
          str += '}'
          return str;
      },
      onSubmit(value){

      axios.post(env.API_URL+'algorithm/predict/conv',JSON.parse(value))
        .then(prediction => {
        this.output = this.objToString(prediction.data)})
      }
    },
    data(){
      return {output:''}
    },
    computed:{
      result(){
        return this.output 
      },
      algo(){
        return this.$store.state.algorithm
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
