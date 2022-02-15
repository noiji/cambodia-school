<template>
  <Carousel class="carouselHome">
    <template #slides>
<!--      <Slide v-for="slide in slides" :key="slide.id">-->
      <Slide v-for="slide in images" :key="slide.id">
        <div class="carousel__item">
          <img :src="slide.src" />
        </div>
      </Slide>
    </template>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent, toRefs} from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
// import App from '../App.vue';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'CarouselSmall',
  props: {
    images: Array,
    message: String,
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup(props){
    const { tempimages } = toRefs(props);
    return {tempimages};
  }
  // data(){
  //   return {
  //     slides : [
  //       // { id: 1, src: "../assets/aboutbanner.jpg" },
  //       // { id: 2, src: "../assets/children.jpg" },
  //       // { id: 3, src: "../assets/school.jpg" },
  //       { id: 1, src: require(`@/assets/children.jpg`) },
  //       { id: 2, src: require(`@/assets/aboutbanner.jpg`) },
  //       { id: 3, src: require(`@/assets/school1.jpg`) },
  //     ],
  //     message: "캄보디아학교세우기모임에 오신 것을 환영합니다."
  //   }
  // },
});
</script>

<style scoped>
.carouselHome{
  margin-top: 150px;
}
.carousel__item {
  /*min-height: 650px;*/
  height: 650px;
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
  font-size: xxx-large;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: SF_HambakSnow;
  text-shadow: 2px 2px #303030;
}

</style>