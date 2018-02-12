import messagesClient from '../../api/MessagesClient'

const state = {
  labels: []
}

const getters = {
  getLabels: state => state.labels,
  getLabel: (state) => (id) => {
    return state.labels.find(label => label.Id === id)
  },
  getLabelByName: (state) => (name) => {
    return state.labels.find(label => label.Name.toUpperCase() === name.toUpperCase())
  }
}

const mutations = {
  setLabel (state, { message, label }) {
    if (message.LabelList.indexOf(label) === -1) message.LabelList.push(label)
  },
  unsetLabel (state, { message, label }) {
    var index = message.LabelList.indexOf(label)
    if (index > -1) message.LabelList.splice(index, 1)
  },
  setLabels (state, { labels }) {
    state.labels = labels
  }
}

const actions = {
  async getLabels ({ commit }) {
    let labels = await messagesClient.getLabels()
    commit('setLabels', { labels })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
