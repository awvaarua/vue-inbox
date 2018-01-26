<template>
  <div>
    <v-list-tile avatar ripple @click="() => {}">
      <v-list-tile-action>
        <v-checkbox v-model="message.selected" @change="onSelecteUnselect"></v-checkbox>
      </v-list-tile-action>
      <v-list-tile-content @click="goInMessage">
        <v-list-tile-title>{{ getFrom() }}</v-list-tile-title>
        <v-list-tile-sub-title class="text--primary">{{ message.Subject }}</v-list-tile-sub-title>
        <v-list-tile-sub-title>{{ message.Snippet }}</v-list-tile-sub-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-list-tile-action-text>10 min</v-list-tile-action-text>
        <v-list-tile-sub-title v-if="message.AssignedName"><p class="assignedName">{{ message.AssignedName }}</p></v-list-tile-sub-title>
        <!-- <v-icon color="grey lighten-1" v-if="!isImportant()" @click="markAsImportant">star_border</v-icon>
        <v-icon color="yellow darken-2" v-else @click="unmarkAsImportant">star</v-icon> -->
      </v-list-tile-action>
    </v-list-tile>
    <v-divider v-if="!isLast"></v-divider>
  </div>
</template>

<script>
export default {
  name: 'MessageComponent',
  props: {
    isLast: {
      type: Boolean,
      required: true
    },
    message: {
      type: Object,
      required: true
    }
  },
  methods: {
    onSelecteUnselect (currentValue) {
      this.$store.commit('setSelectedUnselected', { message: this.message, value: currentValue })
    },
    goInMessage () {
      this.$router.push({path: `/messages/${this.message.Id}`})
    },
    // markAsImportant () {
    //   this.$store.commit('setLabel', { message: this.message, label: 'IMPORTANT' })
    // },
    // unmarkAsImportant () {
    //   this.$store.commit('unsetLabel', { message: this.message, label: 'IMPORTANT' })
    // },
    // isImportant () {
    //   return this.message.LabelList.indexOf('IMPORTANT') > -1
    // },
    getFrom () {
      if (!this.message.From || !this.message.From.length) return 'Cannot recover from'
      return this.message.From[0].Name || this.message.From[0].Mail
    }
  }
}
</script>

<style scoped>
.assignedName {
  color: #2276d2;
  margin-bottom: 0px;
}
</style>
