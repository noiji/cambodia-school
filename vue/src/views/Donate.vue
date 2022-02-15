<template>
  <body>
  <div class="banner" data-aos="fade-down">
    <img src="@/assets/aboutbanner.jpg" class="bannerImage" style="width:100%;">
    <div class="centeredTextOverImage">함께해요</div>
  </div>
  <!--  <p class="quot" data-aos="slide-up">“</p>-->
  <p class="headText" data-aos="slide-up">
    따뜻한 참여가 큰 힘이 됩니다.
  </p>
  <!--  <p class="quot" data-aos="slide-up">”</p>-->
  <container class="containerOfTwo" data-aos="slide-up">
    <container class = "inquiry">
      <div class = "title">
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
    <container class = "donate">
      <div class = "title">
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
body {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
}

.headText {
  /*height: 30vh;*/
  padding: 20vh;
  line-height: 40px;
  font-family: "SF_HambakSnow";
  font-size: 45px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.containerOfTwo{
  background-color: #f0f0f0;
  padding-left: 10vh;
  padding-right: 10vh;
  height: 50vh;
  alignment: center;
}
.inquiry{
  width: 50%;
  position: relative;
  top:20%;
  float: left;
}
.donate{
  width: 50%;
  position: relative;
  top:20%;
  float: right;
}
.title{
  font-size: xxx-large;
  font-family: "OTWelcomeBA";
  color: #42b983;
}
.banner {
  position: relative;
  text-align: center;
  color: white;
  font-family: OTWelcomeBA;
}

.bannerImage {
  width: 100vh;
  height: 50vh;
}

.centeredTextOverImage {
  font-size: xxx-large;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.list{
  margin-bottom: 3vh;
  list-style-type: none;
}
.listDetail1{
  font-weight: bold;
}
</style>
