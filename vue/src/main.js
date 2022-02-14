import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// import VueCarousel from 'vue-carousel'
import AOS from 'aos';
import "aos/dist/aos.css";

const app = createApp(App)

app.use(router)
// app.use(VueCarousel)

app.mount('#app')
app.mount(AOS.init(
    {
        delay:800,
        duration: 1000
    }
))
// Now the app has started!
// new Vue({
//     render: (h) => h(App),
//     mounted() {
//         AOS.init()
//     },
// }).$mount('#app')