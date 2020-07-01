import Vue from 'vue'
import App from './App.vue'
import './styles/common.less'
import './styles/iconfont.less'
import router from './router'
import hmheader from './components/hm-header.vue'
import hmlogo from './components/hm-logo.vue'
import { Button, Field, Form, Toast } from 'vant'
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3000'
Vue.component('hm-header', hmheader)
Vue.component('hm-logo', hmlogo)
Vue.use(Button)
Vue.use(Field)
Vue.use(Form)
Vue.use(Toast)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
