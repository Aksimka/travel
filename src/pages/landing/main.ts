import Vue from 'vue';
import App from './App.vue';

import registerComponents from './components/registerComponents';

// fonts
import 'landing/assets/fonts/monsterrat/monsterrat.css';

Vue.config.productionTip = false;

// components registration
registerComponents(Vue);

const vm = new Vue({
  render: (h) => h(App),
}).$mount('#app');
