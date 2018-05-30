import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUi)
// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
