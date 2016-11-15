import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './router'
import { Vue2Dragula } from 'vue2-dragula'

console.log('VueDragula', Vue2Dragula)
console.log('router', router)

Vue.config.debug = true

Vue.use(Vue2Dragula, {
  logging: {
    service: true
  }
})

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router
}).$mount('#app')

router.push('home')
