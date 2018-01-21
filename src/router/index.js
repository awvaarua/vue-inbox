import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import MessagesComponent from '@/components/MessagesComponent'
import MessageViewComponent from '@/components/MessageViewComponent'

Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/messages',
      name: 'MessagesComponent',
      component: MessagesComponent
    },
    {
      path: '/messages/:id',
      component: MessageViewComponent,
      props: true
    }
  ]
})
