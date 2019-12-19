import Vue from 'vue'
import App from './App'
import router from './router'
import Rem from "../static/js/rem"
// ����vant
// ����vant scss��ʽ
import 'vant/lib/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// ����vant�γ�ר�ÿ��
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
