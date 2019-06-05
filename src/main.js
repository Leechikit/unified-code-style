import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

var b = 1
const a = b == 1 ? 1 : 0
console.log(a)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
