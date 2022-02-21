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

// import About from "@/views/About";
// import Home from './views/Home'

export default {
  components: {
    // About,
    Footer,
    Header,
    // Home
  }
}
</script>

<style>
@import './style.css';
</style>
