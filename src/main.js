import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "./utils/config";

import "./assets/js/config";
import "./assets/css/common.less";
import "normalize.css/normalize.css";

//引入公共loadder
import loader from "./components/element/loader";
Vue.component("v-loader", loader);

// 代码高亮
import VueHighlightJS from "vue-highlightjs";
import "highlight.js/styles/atom-one-dark.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
