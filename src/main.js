import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import store from './common/store.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store:store
}).$mount('#app')
