<template>
  <div>
    <v-layout row>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-list two-line>
            <toolbar-messages-component v-if="messages && messages.length > 0"  :messages="messages"></toolbar-messages-component>
            <message-component v-for="(message, index) in messages" :key="index" :message="message"></message-component>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MessageComponent from './MessageComponent'
import ToolbarMessagesComponent from './ToolbarMessagesComponent'

export default {
  name: 'MessagesComponent',
  components: { MessageComponent, ToolbarMessagesComponent },
  computed: mapGetters({
    messages: 'getAllMessages'
  })  
}
</script>

<style scoped>

</style>
