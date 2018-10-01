<template>
  <div id="app">
    <Nav/>
    <transition name="router-anim" >
      <router-view/>
    </transition>
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
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css";
.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: 0.65s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
