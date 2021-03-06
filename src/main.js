// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import "./assets/js/config.js";
import store from "./assets/js/store";
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
// Vue.use(VueAwesomeSwiper, /* { default options with global component } ) */

import { formatDate } from "./assets/js/filter.js";

Vue.filter("formatDate", formatDate);

import "./ui/elementui.js";

//echart 主题文件
import "echarts/theme/macarons.js";

//全局样式
import "./assets/css/common.less";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store,
    template: "<App/>",
    components: {
        App
    }
});
