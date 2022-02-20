<template>
  <header class="header">
<!--    <container class = "container">-->
    <container class="inner">
      <router-link to="/" exact>
        <img class="logo" src="./logo.png" alt="logo" >
      </router-link>
      <div class = "menu">
        <router-link to="/about" style="text-decoration: none;color: inherit; margin-left: 80px;">소개</router-link>
        <router-link to="/activity" style="text-decoration: none; color: inherit; margin-left: 80px;">활동</router-link>
        <router-link to="/donate" style="text-decoration: none; color: inherit; margin-left: 80px;">함께해요</router-link>
        <router-link to="/report" style="text-decoration: none; color: inherit; margin-left: 80px;">재정보고</router-link>
      <!--      <a class="github" href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank" rel="noopener">-->
      <!--        Built with Vue.js-->
      <!--      </a>-->
<!--        <router-view></router-view>-->
      </div>

    </container>
<!--    </container>-->
  </header>
</template>

<script>
export default {
  name: "Header.vue"
}
</script>

<style>

.header{
  background-color: white;
  position: fixed;
  z-index: 999;
  /*height: 80px;*/
  height: 10vh;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  font-family: OTWelcomeBA;
}
.inner {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 4%;
  align-items: center;
  /*alignment: center;*/
  /*padding: 15px 5px;*/
}
.logo{
  width: 20%;
  min-width: 200px;
  max-width: 300px;
  padding-right: 1vh;
  padding-left: 1vh;
  display: inline-block;
  float:left;
  position: relative;
  top:20%;
}
.menu {
  color: #42b983;
  padding-top: 1vh;
  margin-right: 8vh;
  font-size: 1.2em;
  font-weight: bold;
  float:right;
  position: relative;
  top:20%;
}
.menu router-link{
  text-decoration: none; color: inherit;
  /*margin-left: 5vw;*/
}
/*@media (max-width: 860px) {*/
/*  .header .inner {*/
/*  padding: 15px 30px}*/
/*}*/

</style>