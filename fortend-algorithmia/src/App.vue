<template>
  <div id="app">
    <Nav/>
      <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import Algorithm from './components/Algorithm/Algorithm.vue'

export default {
  name: 'app',
  components: {
    Nav,
    Footer,
    Algorithm
  }
}
</script>

<style>
#app {

}
</style>
