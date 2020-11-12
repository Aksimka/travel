import Vue from 'vue';
import registerCommonComponents from '@/components/registerComponents';
import App from './App.vue';

import registerComponents from './components/registerComponents';

// fonts
// import '@/pages/landing/assets/fonts/montserrat/montserrat.css';

Vue.config.productionTip = false;

// components registration
registerCommonComponents(Vue);
registerComponents(Vue);

const vm = new Vue({
  render: (h) => h(App),
}).$mount('#app');
