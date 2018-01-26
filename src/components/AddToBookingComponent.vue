<template>
  <v-card tile>
    <v-toolbar card dark color="primary">
      <v-btn icon @click.native="close()" dark>
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>Add mail to booking</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark flat @click.native="dialog = false">Guardar</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-card-text>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'AddToBookingComponent',
  props: {
    close: {
      required: true,
      type: Function
    }
  }
}
</script>

<style scoped>
</style>
