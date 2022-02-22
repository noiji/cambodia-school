<template>
  <div id="app">

  <Header></Header>
<!--    <Home></Home>-->
<!--    <About></About>-->
    <router-view></router-view> <!--필수!!!!!!!!!!!오래 애먹었네-->
  <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    // About,
    Footer,
    Header,
    // Home
  },
  data: ()=>({
    isMobile: false
  }),
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 600
      console.log("Mobile: ".concat(this.isMobile))
    }
  }
}
</script>

<style>
@import './style.css';
</style>
