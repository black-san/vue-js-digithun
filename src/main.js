import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'
import router from "./router";
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(Vuex)

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
