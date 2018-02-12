import messages from './modules/messages'
import labels from './modules/labels'
import Vuex from 'vuex'

export default new Vuex.Store({
  modules: { messages, labels }
})
