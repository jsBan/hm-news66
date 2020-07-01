import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'

import { Button, Search } from 'vant'
Vue.use(Button)

Vue.use(Search)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
