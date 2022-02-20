<template>
  <body>
  <Carousel :autoplay="5000" :wrap-around="true" class="carouselHome">
    <template #slides>
      <Slide v-for="slide in slides" :key="slide.id">
        <div class="carouselHome__item">
          <img :src="slide.src" />
          <div class="centeredTextOverImage">
            {{slide.text}}</div>
        </div>
      </Slide>
    </template>
    <template #addons >
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  </body>
</template>

<script>
// import { defineComponent, ref} from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

// export default defineComponent({
export default ({
  name: 'Home',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data(){
    return {
      slides : [
        { id: 1, src: require(`@/assets/children.jpg`), text: "아동결연맺기에 참여할 수 있어요" },
        { id: 2, src: require(`@/assets/aboutbanner.jpg`), text: "교육으로 미래를 밝힙니다" },
        { id: 3, src: require(`@/assets/school1.jpg`), text: "학교세우기에 함께해주세요"},
      ],
      message: "캄보디아학교세우기모임에 오신 것을 환영합니다."
    }
  }
});
</script>

<style>
body{
  min-height: 90vh;
  display: flex;
  flex-direction: column;
}
.carouselHome{
  height: 50%;
  width: 95vw;
  margin-top: 150px;
  align-self: center;
}
.carouselHome__item {
  /*min-height: 650px;*/
  height: 100%;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
img{
  width: inherit;
  height: inherit;
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.centeredTextOverImage {
  /*font-size: xxx-large;*/
  font-size: 2em;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: SF_HambakSnow;
  text-shadow: 2px 2px #303030;
}
</style>