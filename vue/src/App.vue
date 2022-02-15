<template>
  <div id="app">
  <Header></Header>
<!--    <Home></Home>-->
<!--    <About></About>-->
    <router-view></router-view> <!--필수!!!!!!!!!!!오래 애먹었네-->
  <Footer></Footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Nanum+Myeongjo:wght@400;700;800&family=Nanum+Pen+Script&family=Song+Myung&display=swap');
@font-face {
  font-family: 'OTWelcomeBA';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/OTWelcomeBA.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'SF_HambakSnow';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/SF_HambakSnow.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'HoengseongHanu';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202@1.0/HoengseongHanu.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
@import "~ag-grid-community/dist/styles/ag-grid.css";
@import "~ag-grid-community/dist/styles/ag-theme-alpine.css";
#app {
  font-family: "Pretendard-Regular", "Segoe UI", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
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