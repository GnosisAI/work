<template>
   <div>
      <nav role="navigation" class="navbar navbar-default navbar-fixed-top">
         <div class="container-fluid navbar-container mh-16">
            <div class="navbar-header">
               <button type="button" data-toggle="collapse" data-target="#primary-navbar-collapse"
                  aria-expanded="false" class="navbar-toggle collapsed"><span class="sr-only">Toggle navigation</span>
               <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>
               </button> 
               <a href="http://cv.zakaria.im" title="Zakaria CV" class="navbar-brand active"><span id="nav-logo" class="nav-logo-full"></span>
                  Zakaria CV
                </a>
               <!---->
            </div>
            <div id="primary-navbar-collapse" class="collapse navbar-collapse">
               <div>
                  <ul class="nav navbar-nav navbar-links">
                     <li><a href="/"><span>Home</span></a></li>
                     <li><a href="http://cv.zakaria.im#contact"><span>Contact</span></a></li>
                  </ul>
                  <!---->
               </div>
            </div>
         </div>
      </nav>
   </div>
</template>
<script>
export default {
  name: 'Nav',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
