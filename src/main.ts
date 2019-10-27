import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import './element-variables.scss';
import 'normalize.css/normalize.css';

const locale = require('element-ui/lib/locale/lang/en');

Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });

new Vue({
  render: h => h(App)
}).$mount('#app');
