<template>
        <div class="col-md-12 mb-32" >
                <div class="input-group"><input  v-model="value" placeholder="Search..." autocomplete="off" 
                    class="form-control input-lg" @keyup.enter="searchAlgo()">
                  <div class="input-group-btn">
                      <button type="submit" @click="searchAlgo()" class="btn btn-default btn-lg">
                      <i aria-hidden="true" class="fa fa-search"></i>
                      </button>
                  </div>
                </div>
            <hr>
          </div>
</template>
<script>
export default {
  name: 'Search',
  data(){
    return {
      value: this.$route.query.q
    }
  },
  methods:{
    searchAlgo(){
      var query = {q:this.value}
     this.$router.push({ path: '/search/',query:query});
    this.$store.dispatch('getFiltredAlgos',{ q: this.$route.query.q});
    }
  }


}
</script>


<style scoped>

</style>