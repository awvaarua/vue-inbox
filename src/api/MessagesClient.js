import axios from 'axios'

export default {
  async getMessages () {
    try {
      let response = await axios.get(`http://localhost:60704/api/inbox/Messages?userId=12755&departmentId=88&filterLabelList=UNREAD`)
      return response.data.MessageList
    } catch (e) {
      return []
    }
  }
}
