<template>
  <div class="text-xs-left">
    <v-chip v-if="getLabels"
            v-for="(label, idx) in messageLabels"
            :key="idx"
            color="primary" text-color="white"
            @input="remove(label)"
            close disabled>
              {{ getLabelName(label) }}
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
    remove (id) {
      this.$store.commit('unsetLabel', { message: this.message, label: id })
    }
  }
}
</script>

<style scoped>
</style>
