<template>
  <v-container v-if="!message">
    <h4>Message not found</h4>
  </v-container>
  <v-container v-else>
    <v-layout row>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-list one-line>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ message.Subject }}</v-list-tile-title>
                <v-list-tile-sub-title></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
        <labels-component :messageLabels="message.LabelList" :message="message"></labels-component>
        <div v-html="message.Body"></div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LabelsComponent from './LabelsComponent'

export default {
  name: 'MessageViewComponent',
  components: { LabelsComponent },
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
