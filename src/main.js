import Vue from 'vue';
import InstantSearch from 'vue-instantsearch';
import App from './App.vue';

import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.use(InstantSearch);

new Vue({
  render: h => h(App),
}).$mount('#app');
