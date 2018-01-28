<template>
  <div class="text-xs-left">
    <v-chip v-if="getLabels"
            v-for="(label, idx) in messageLabels"
            :key="idx"
            color="primary" text-color="white"
            @input="remove(label)"
            :close="label !== getLabelIdByName('assigned')" disabled>
              {{ getLabelName(label) | capitalize }}
    </v-chip>
    <h4 v-else> No labels</h4>
  </div>
</template>

<script>
export default {
  name: 'LabelsComponent',
  props: {
    messageLabels: {
      type: Array,
      required: true
    },
    message: {
      type: Object,
      required: true
    }
  },
  computed: {
    getLabels () {
      return (this.$store.getters.getLabels && this.$store.getters.getLabels.length > 0)
    }
  },
  methods: {
    getLabelName (id) {
      return this.$store.getters.getLabel(id).Name
    },
    getLabelIdByName (name) {
      const label = this.$store.getters.getLabelByName(name)
      if (label) return label.Id
      return label.Name
    },
    remove (id) {
      this.$store.commit('unsetLabel', { message: this.message, label: id })
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString().toUpperCase()
      return value.split('_').join(' ')
    }
  }
}
</script>

<style scoped>
</style>
