<template>
  <v-container v-if="!message">
    <h4>Message not found</h4>
  </v-container>
  <v-container v-else>
    <v-layout row>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-list>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ message.Subject }}</v-list-tile-title>
                <v-list-tile-sub-title></v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action class="horizontalActions">
                <v-icon medium class="clickable" color="green lighten-1" v-if="!message.AssignedName" @click="assignMessage()">assignment_ind</v-icon>
                <v-icon medium class="clickable" color="blue lighten-1" v-if="message.AssignedName" @click="dialog = !dialog">book</v-icon>
                <v-icon medium class="clickable" color="red lighten-1" v-if="message.AssignedName" @click="unassignMessage()">assignment_return</v-icon>
                <v-icon medium class="clickable" color="red lighten-1" v-if="message.AssignedName" @click="()=>{}">delete</v-icon>
                <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false" scrollable>
                  <add-to-booking-component :close="() => { dialog = !dialog }"></add-to-booking-component>
                </v-dialog>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
        <labels-component v-if="message.LabelList.length" :messageLabels="message.LabelList" :message="message"></labels-component>
        <br>
        <message-reply-component v-if="message.AssignedName" :body="message.Body" :showBody="(value) => {showBody = value}"></message-reply-component>
        <message-body-component v-if="showBody || (!message.AssignedName && !showBody)" :body="message.Body"></message-body-component>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LabelsComponent from './LabelsComponent'
import MessageBodyComponent from './MessageBodyComponent'
import MessageReplyComponent from './MessageReplyComponent'
import AddToBookingComponent from './AddToBookingComponent'

export default {
  name: 'MessageViewComponent',
  components: { LabelsComponent, MessageBodyComponent, MessageReplyComponent, AddToBookingComponent },
  data () {
    return {
      showBody: true,
      dialog: false
    }
  },
  computed: {
    message () {
      return this.$store.getters.getMessage(this.$route.params.id)
    }
  },
  methods: {
    assignMessage () {
      this.showBody = true
      let label = this.$store.getters.getLabelByName('assigned')
      if (!label) console.log('Have to create label')
      else this.$store.commit('setLabel', { message: this.message, label: label.Id })
      this.$store.commit('assignMessage', { message: this.message })
    },
    unassignMessage () {
      this.showBody = true
      let label = this.$store.getters.getLabelByName('assigned')
      if (!label) console.log('Have to create label')
      else this.$store.commit('unsetLabel', { message: this.message, label: label.Id })
      this.$store.commit('unassignMessage', { message: this.message })
    },
    isImportant () {
      return this.message.LabelList.indexOf('IMPORTANT') > -1
    }
  }
}
</script>

<style scoped>
.horizontalActions{
  display: inline;
}
.clickable:hover {
  cursor: pointer;
}
</style>
