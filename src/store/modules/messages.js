import messagesClient from '../../api/MessagesClient'

const state = {
  messages: [],
  allSelected: false
}

const getters = {
  getAllMessages: state => state.messages,
  getAllSelected: state => state.allSelected,
  getMessage: (state) => (id) => {
    return state.messages.find(message => message.Id === id)
  }
}

const mutations = {
  setMessages (state, { messages }) {
    state.messages = messages
  },
  updateSnippet (state, { message, snippet }) {
    message.Snippet = snippet
  },
  setSelectedUnselected (state, { message, value }) {
    message.selected = value
  },
  setAllSelected (state, { value }) {
    state.allSelected = value
  },
  removeLastMessage (state) {
    state.messages.pop()
  },
  assignMessage (state, { message }) {
    message.AssignedName = 'Sebastià Sansó'
  },
  unassignMessage (state, { message }) {
    message.AssignedName = ''
  }
}

const actions = {
  async getAllMessages ({ commit }) {
    let messages = await messagesClient.getMessages()
    messages.forEach(message => { message.selected = false })
    commit('setMessages', { messages })
  },
  async getMessage ({ commit }, { id }) {
    let message = await messagesClient.getMessage(id)
    message.selected = false
    commit('setCurrentMessage', { message })
  },
  selectUnselectAll ({ commit, state }, { value }) {
    state.messages.forEach(message => {
      commit('setSelectedUnselected', { message: message, value: value })
    })
    commit('setAllSelected', { value: value })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
