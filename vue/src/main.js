import { createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
// import VueCarousel from 'vue-carousel'
import AOS from 'aos';
import "aos/dist/aos.css";
// import axios from "axios";

const app = createApp(App)

// Vue.prototype.$http = axios

app.use(router)
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