import messagesClient from '../../api/MessagesClient'
// initial state
const state = {
  messages: [],
  labels: [],
  allSelected: false
}

// getters
const getters = {
  getAllMessages: state => state.messages,
  getMessage: (state) => (id) => {
    return state.messages.find(message => message.Id === id)
  },
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
  selectUnselectAll ({ commit, state }, { value }) {
    state.messages.forEach(message => {
      commit('setSelectedUnselected', { message: message, value: value })
    })
    commit('setAllSelected', { value: value })
  }
}

// mutations
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
  },
  removeLastMessage (state) {
    state.messages.pop()
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
