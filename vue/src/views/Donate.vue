<template>
  <body>
  <div class="banner" data-aos="fade-up">
    <img src="@/assets/aboutbanner.jpg" class="bannerImage" style="width:100%;">
    <div class="centeredTextOverImage">함께해요</div>
  </div>
  <!--  <p class="quot" data-aos="slide-up">“</p>-->
  <p id = "headText" class = "titleText" data-aos="slide-up">
    따뜻한 참여가 큰 힘이 됩니다.
  </p>
  <!--  <p class="quot" data-aos="slide-up">”</p>-->
  <container class="containerOfTwo">
    <container id = "inquiry">
      <div id = "title1" class = "titleText">
      문의
      </div>
      <li class = "list">
        <p class = "listDetail1">
          캄보디아학교세우기모임 대표 노장권
        </p>
        <p class = "listDetail2">
          010-9936-4102 / enoch95@hanmail.net
        </p>
      </li>
    </container>
    <container id = "donate">
      <div id = "title2" class = "titleText">
      후원계좌
      </div>
      <li class = "list">
        <p class = "listDetail1">
          쁘렉농 희망학교 후원
        </p>
        <p class = "listDetail2">
          농협 301-0131-9584-01 캄보디아학교세우기모임
        </p>
      </li>
      <li class = "list">
        <p class = "listDetail1">
          깜뽕츠낭 꿈의학교 후원
        </p>
        <p class = "listDetail2">
          농협 301-0130-9568-11 캄보디아학교세우기모임
        </p>
      </li>
      <li class = "list">
        <p class = "listDetail1">
          어린이/청소년 결연맺기 후원
        </p>
        <p class = "listDetail2">
          농협 351-0533-8160-33 캄보디아학교세우기모임
        </p>
      </li>
    </container>
  </container>
  </body>
</template>

<script>
// @ is an alias to /src
// import App from '../App.vue';
// import About from './About.vue'
export default {
  name: 'About',
  path: '/about',
  components: {
    // About
    // App
  }
}


</script>

<style>
#headText {
  /*height: 30vh;*/
  padding: 20vh 0;
  font-family: "SF_HambakSnow";
}
.containerOfTwo{
  background-color: #f0f0f0;
  /*padding-left: 10vh;*/
  /*padding-right: 10vh;*/
  padding: 5%;
  height: auto;
  alignment: center;
}
#inquiry{
  width: 50%;
  position: relative;
  top:20%;
  float: left;
}
#donate{
  width: 50%;
  position: relative;
  top:20%;
  float: right;
}
#title1, #title2{
  font-family: "OTWelcomeBA";
  color: #42b983;
}
.list{
  margin-bottom: 3vh;
  list-style-type: none;
}
.listDetail1{
  font-weight: bold;
}
</style>
