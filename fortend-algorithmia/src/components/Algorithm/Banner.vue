<template lang="html">

  <section class="banner">
    <div class="container">

      <div class="row" >
         <div class="col-md-7 vcenter" >
            <div class="row" >
               <div class="col-md-12" >
                  <h2 >
                     <span style="display:;" >{{description.title}}</span> <!----> <!---->
                  </h2>
               </div>
               <div class="col-sm-12" >
                  <p class="lead" >{{objectif}}</p>
               </div>

               <div class="col-sm-12 algo-run--tags" >
                <Tags v-bind:tags="tags"/>
               </div>
               <div class="col-sm-12 algo--permissions" >
                  <div ><label >Description</label></div>
                  <p>{{description.details}}</p>
              </div>
               <div class="col-sm-12 algo--permissions" >
                  <div ><label >Permissions</label></div>
                  <!----> <span >Copyright ©</span> <span >
                  · <a id="internet-popover-target" >MIT Licence</a> <span style="display:none;" ><span ></span></span></span> <span >
                  · <a id="calls-other-popover-target" >Open Source</a> <span style="display:none;" ><span ></span></span></span> <!----> <br > <!---->
               </div>
            </div>
         </div>
         <div class="col-md-5 hidden-sm hidden-xs text-center vcenter" >
           <br>
           <br>
           <img :src="image" >
         </div>
      </div>
    </div>
    <br>

  </section>

</template>

<script lang="js">
import Tags from '../home/Tags'
  export default  {
    name: 'banner',
    props: {
        objectif:String,
        description:Object,
        image:String,
        tags:Array
    },
    components:{
      Tags
    },
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
  .banner {

  }
  img{
    width: 100%;
  }
  .vcenter {
    display: inline-block;
    vertical-align: middle;
    float: none;
}
</style>
