import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import store from './store/index.js'
import Toasted from 'vue-toasted'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(Toasted)

Vue.config.productionTip = false

/* eslint-disable */
window.VueApp = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  created () {
    this.$store.dispatch('getAllMessages')
    this.$store.dispatch('getLabels')
  }
})
