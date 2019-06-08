import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import Ionic from '@ionic/vue';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

Vue.use(Ionic);

new Vue({
  render: h => h(App),
}).$mount('#app')
