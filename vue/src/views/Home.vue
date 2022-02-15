<template>
  <body>
  <Carousel class="carouselHome">
    <template #slides>
      <Slide v-for="slide in slides" :key="slide.id">
        <div class="carousel__item"><img :src="slide.src" /></div>
      </Slide>
    </template>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  </body>
</template>

<script>
import { defineComponent} from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
// import App from '../App.vue';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Home',
  components: {
    // App,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data(){
    return {
      slides : [
        // { id: 1, src: "../assets/aboutbanner.jpg" },
        // { id: 2, src: "../assets/children.jpg" },
        // { id: 3, src: "../assets/school.jpg" },
        { id: 1, src: require(`@/assets/logo.png`) },
        { id: 2, src: "https://picsum.photos/300/200?q=2" },
        { id: 3, src: "https://picsum.photos/300/200?q=3" },
      ]
    }
  },
});
</script>

<style>
body{
  min-height: 90vh;
  display: flex;
  flex-direction: column;
}
.carouselHome{
  margin-top: 150px;
}
.carousel__item {
  min-height: 650px;
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
</style>