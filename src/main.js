import Vue from 'vue'

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})

router.push('home')
