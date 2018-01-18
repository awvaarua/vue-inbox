<template>
  <v-menu origin="center center" transition="scale-transition" :close-on-content-click="false" :nudge-width="200" bottom >
    <v-btn color="primary" dark slot="activator">Etiquetas</v-btn>
    <v-card>
      <v-list>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Etiquetas</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
      </v-list>
    </v-card>
    <v-card>
      <v-list one-line>
        <v-list-tile avatar ripple @click="console.log('as')" >
          <v-list-tile-action>
            <v-checkbox v-model="selected"></v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>aaaaaaaaa</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>

export default {
  name: 'LabelsComponent',
  data () {
    return {
      selected: true,
      items: [
        { title: 'Label 1' },
        { title: 'Label 2' },
        { title: 'Label 3' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
