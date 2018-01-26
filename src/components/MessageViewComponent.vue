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
            </v-list-tile>
          </v-list>
        </v-card>
        <labels-component v-if="message.LabelList.length" :messageLabels="message.LabelList" :message="message"></labels-component>
        <br>
        <message-reply-component :body="message.Body" :showBody="(value) => {showBody = value}"></message-reply-component>
        <message-body-component v-if="showBody" :body="message.Body"></message-body-component>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LabelsComponent from './LabelsComponent'
import MessageBodyComponent from './MessageBodyComponent'
import MessageReplyComponent from './MessageReplyComponent'

export default {
  name: 'MessageViewComponent',
  components: { LabelsComponent, MessageBodyComponent, MessageReplyComponent },
  data () {
    return {
      showBody: true
    }
  },
  computed: {
    message () {
      return this.$store.getters.getMessage(this.$route.params.id)
    }
  },
  methods: {
    isImportant () {
      return this.message.LabelList.indexOf('IMPORTANT') > -1
    }
  }
}
</script>

<style scoped>

</style>
