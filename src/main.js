import Vue from 'vue'
import App from './App'

import { Vue2Dragula } from 'vue2-dragula'

console.log('VueDragula', Vue2Dragula)

Vue.config.debug = true

Vue.use(Vue2Dragula, {logging: true})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
