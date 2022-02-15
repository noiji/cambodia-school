<template>

  <body>
    <div class="banner" data-aos="fade-down">
      <img src="@/assets/children.jpg" class="bannerImage" style="width:100%;">
      <div class="centeredTextOverImage">활동</div>
    </div>
    <container class="activityCard" data-aos="zoom-in">
      <div class="activityTextL">
        <div class="activityLine"></div>
        <div class="activityTitle" >1. 학교 설립 및 운영</div>
        <div class="activityDetail">쁘렉농 희망학교와 깜뽕츠낭 희망학교를 개교 및 운영 중에 있습니다. 전·현직 교사와 많은 분들이 뜻을 합쳐서  ‘쁘렉농 희망학교’가 2011년 10월 개교되었습니다. 유치원(25명), 초등학교(190명) 과정이며 2019년 11월 중학교를 개교했으며, 쁘렉농 마을 청/장년들을 위해서 기술학교(용접, 오토바이 정비, 미용, 봉재)를 세우는 꿈을 갖고 있습니다. 또 다른 지역 깜뽕츠낭에 ‘깜뽕츠낭 꿈의학교’가 2014년 11월  세워졌습니다. 유치원(24명) 초등학교(144명) 과정이며  2019년 9월 중학교를 개교하였습니다.</div>
      </div>
      <Carousel class="carouselActivityR" :wrap-around="true" :autoplay="5000">
        <template #slides>
          <Slide v-for="slide in slides1" :key="slide.id">
            <div class="carouselActivity__item">
              <img :src="slide.src" />
              <div class="centeredTextOverImage">
                {{slide.text}}
              </div>
            </div>
          </Slide>
        </template>
        <template #addons >
<!--          <Navigation   />-->
          <Pagination />
        </template>
      </Carousel>
    </container>

    <container class="activityCard" data-aos="zoom-in">
      <div class="activityTextR">
        <div class="activityLine"></div>
        <div class="activityTitle">2. 어린이/청소년 결연</div>
        <div class="activityDetail">학교에 다니려면 비공식적으로  리언꾸(수업료)를 내는 것이 관행화되어 있어서
          가정형편이 어려운 많은 아이들이 학교를 못 다니고 있습니다.
          캄보디아 세곳의 낙후지역(스텅스러우, 벙축, 싸앙)  어린이·청소년들이
          한국 후원자와 결연(월 2만원)을 맺어 초등학교, 중학교를 다니도록 돕고 있습니다.</div>
      </div>
      <Carousel class="carouselActivityL" :wrap-around="true" :autoplay="5000">
        <template #slides>
          <Slide v-for="slide in slides1" :key="slide.id">
            <div class="carouselActivity__item">
              <img :src="slide.src" />
              <div class="centeredTextOverImage">
                {{slide.text}}
              </div>
            </div>
          </Slide>
        </template>
        <template #addons >
          <!--          <Navigation   />-->
          <Pagination />
        </template>
      </Carousel>
    </container>

    <container class="activityCard" data-aos="zoom-in">
      <div class="activityTextL">
        <div class="activityLine"></div>
        <div class="activityTitle">3. 교육/의료봉사</div>
        <div class="activityDetail">쁘렉농 희망학교와 깜뽕츠낭 희망학교를 개교 및 운영 중에 있습니다. 전·현직 교사와 많은 분들이 뜻을 합쳐서  ‘쁘렉농 희망학교’가 2011년 10월 개교되었습니다. 유치원(25명), 초등학교(190명) 과정이며 2019년 11월 중학교를 개교했으며, 쁘렉농 마을 청/장년들을 위해서 기술학교(용접, 오토바이 정비, 미용, 봉재)를 세우는 꿈을 갖고 있습니다. 또 다른 지역 깜뽕츠낭에 ‘깜뽕츠낭 꿈의학교’가 2014년 11월  세워졌습니다. 유치원(24명) 초등학교(144명) 과정이며  2019년 9월 중학교를 개교하였습니다.</div>
      </div>
      <Carousel class="carouselActivityR" :wrap-around="true" :autoplay="5000">
        <template #slides>
          <Slide v-for="slide in slides1" :key="slide.id">
            <div class="carouselActivity__item">
              <img :src="slide.src" />
              <div class="centeredTextOverImage">
                {{slide.text}}
              </div>
            </div>
          </Slide>
        </template>
        <template #addons >
          <!--          <Navigation   />-->
          <Pagination />
        </template>
      </Carousel>
    </container>

  </body>
</template>


<script>
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  name: "Activity",
  components: {
    Carousel, Pagination, Slide,
  },
  data() {
    return {
      slides1: [
        {id: 1, src: require(`@/assets/children.jpg`), text: "1"},
        {id: 2, src: require(`@/assets/aboutbanner.jpg`), text: "2"},
        {id: 3, src: require(`@/assets/school1.jpg`), text: "3"},
      ],
    }
  }
};

</script>

<style scoped>
body{
  min-height: 90vh;
  display: flex;
  flex-direction: column;
}
.activityCard{
  margin: 20px;
  height: auto;
  alignment: center;
}
.activityCard .activityTextL{
  width: 50%;
  position: relative;
  float: left;
  text-align: left;
}
.activityCard .activityTextR{
  width: 50%;
  position: relative;
  float: right;
  text-align: right;
}

.activityTitle{
  margin-top: 3vh;
  font-size: xxx-large;
  font-family: "OTWelcomeBA";
}
.activityDetail{
  line-height: 2;
}
p{
  margin-top: 100px;
  font-size: 100px;
}
.activityCard .carouselActivityR{
  width: 400px;
  height: auto;
  position: relative;
  float: right;
  margin-top: 50px;
}
.activityCard .carouselActivityL{
  width: 400px;
  height: auto;
  position: relative;
  float: left;
  padding-top: 20px;
}
.carouselActivity__item {
  /*background-color: var(--vc-clr-primary);*/
  color:  var(--vc-clr-white);
  /*font-size: 20px;*/
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carouselActivity__item img{
  width: 400px;
  height: auto;
}
</style>