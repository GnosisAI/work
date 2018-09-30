<template>
   <div class="category-overview">
      <h2><img src="@/assets/images/categories/default.png" class="category-icon">
         {{title}}
      </h2>
      <div>
         <p>Time Series Analysis uses a set of powerful statistical and machine learning tools for predicting future events based on past data.<b>&nbsp;Read more:&nbsp;<a href="http://blog.algorithmia.com/sentiment-time-series-analysis/">Understanding customer data using time series analysis</a>.&nbsp;</b></p>
         <h3>Interactive Time Series Demos</h3>
         <ul>
            <li><a href="http://demos.algorithmia.com/timeseries/" target="">Time Series Analysis</a></li>
         </ul>
         <h3>Time Series Tutorials</h3>
         <ul>
            <li><a href="http://blog.algorithmia.com/predictive-algorithms-track-real-time-health-trends/">Using predictive time series algorithms to track real-time health trends</a></li>
            <li><a href="http://blog.algorithmia.com/forecast-sentiment-analysis-with-r/">Use R to build a sentiment analysis forecasting pipeline</a></li>
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
    title:String
  }
}
</script>


<style scoped>
a{
  color: #5000be
}
</style>
