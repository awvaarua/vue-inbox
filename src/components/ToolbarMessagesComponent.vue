<template>
  <v-list-tile>
    <v-list-tile-action>
      <v-checkbox v-model="allSelected"></v-checkbox>
    </v-list-tile-action>
    <v-list-tile-content>
      <div class="text-xs-center" v-if="atLeastOneSelected()">
        <v-menu origin="center center" transition="scale-transition" bottom >
          <v-btn color="primary" dark slot="activator" @click="deleteSelected">Eliminar</v-btn>
        </v-menu>
      </div>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
import LabelsComponent from './LabelsComponent'

export default {
  name: 'ToolbarMessagesComponent',
  components: { LabelsComponent },
  computed: {
    allSelected: {
      get () {
        return this.$store.getters.getAllSelected
      },
      set (value) {
        this.$store.dispatch('selectUnselectAll', { value })
      }
    },
    messages () {
      return this.$store.getters.getAllMessages
    }
  },
  methods: {
    deleteSelected () {
      this.messages.forEach(message => {
        if (message.selected) console.log(message.Id)
      })
    },
    atLeastOneSelected () {
      for (let i = 0; i < this.messages.length; i++) {
        if (this.messages[i].selected) return true
      }
      return false
    }
  }
}
</script>

<style scoped>

</style>
