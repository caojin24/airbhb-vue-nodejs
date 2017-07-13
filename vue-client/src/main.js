import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import {routes} from "./routes";

import iview from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

import axios from 'axios';
import VueAxios from 'vue-axios';


Vue.use(VueAxios, axios);

Vue.use(VueRouter);
Vue.use(iview);

const router = new VueRouter({
  routes,
  mode:'history',

})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
