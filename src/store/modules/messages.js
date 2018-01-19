import messagesClient from '../../api/MessagesClient'
// initial state
const state = {
  allSelected: false,
  messages: [],
  current: null,
  labels: []
}

// getters
const getters = {
  getAllMessages: state => state.messages,
  getMessage: (state) => (id) => {
    return state.messages.find(message => message.Id === id)
  },
  getCurrent: state => state.current,
  getAllSelected: state => state.allSelected,
  getLabel: (state) => (id) => {
    return state.labels.find(label => label.Id === id)
  },
  getLabels: state => state.labels
}

// actions
const actions = {
  async getAllMessages ({ commit }) {
    let messages = await messagesClient.getMessages()
    messages.forEach(message => { message.selected = false }) // Add custom property for our app
    commit('setMessages', { messages })
  },
  async getMessage ({ commit }, { id }) {
    let message = await messagesClient.getMessage(id)
    message.selected = false
    commit('setCurrentMessage', { message })
  },
  async getLabels ({ commit }) {
    let labels = await messagesClient.getLabels()
    commit('setLabels', { labels })
  },
  removeCurrent ({ commit }) {
    commit('setCurrent', { id: null })
  },
  updateMessageListWithCurrent ({ commit, state }) {
    if (state.current != null) {
      state.messages.forEach((message, i) => { if (message.Id === state.current.Id) commit('updateMessageFromMessageList', { pos: i, newMessage: state.current }) })
    }
  }
}

// mutations
const mutations = {
  setCurrent (state, { id }) {
    if (!id) state.current = null
    else state.current = state.messages.find(message => message.Id === id)
  },
  updateMessageFromMessageList (state, { pos, newMessage }) {
    state.messages[pos] = newMessage
  },
  setCurrentMessage (state, { message }) {
    state.current = message
  },
  setMessages (state, { messages }) {
    state.messages = messages
  },
  updateSnippet (state, { message, snippet }) {
    message.Snippet = snippet
  },
  setSelectedUnselected (state, { message, value }) {
    message.selected = value
  },
  setLabel (state, { message, label }) {
    if (message.LabelList.indexOf(label) === -1) message.LabelList.push(label)
  },
  unsetLabel (state, { message, label }) {
    var index = message.LabelList.indexOf(label)
    if (index > -1) message.LabelList.splice(index, 1)
  },
  setAllSelected (state, { value }) {
    state.allSelected = value
  },
  setLabels (state, { labels }) {
    state.labels = labels
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
