import {createApp} from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./styles/main.scss";
import {Vue3Mq} from "vue3-mq";

createApp(App)
    .use(Vue3Mq)
    .mount('#app')
