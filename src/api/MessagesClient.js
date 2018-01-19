import axios from 'axios'

export default {
  async getMessages () {
    try {
      let response = await axios.get(`http://localhost:60704/api/inbox/Messages?userId=12755&departmentId=88&filterLabelList=UNREAD`)
      return response.data.MessageList
    } catch (e) {
      return []
    }
  },
  async getMessage (id) {
    try {
      let response = await axios.get(`http://localhost:60704/api/inbox/messages/${id}?userId=12755&departmentId=88`)
      return response.data
    } catch (e) {
      return []
    }
  },
  async getLabels () {
    try {
      let response = await axios.get(`http://localhost:60704/api/inbox/labels?userId=12755&departmentId=88`)
      return response.data
    } catch (e) {
      return []
    }
  }
}
