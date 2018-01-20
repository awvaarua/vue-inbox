<template>
  <div>
    <tinymce id="d1" v-model="body"></tinymce>
  </div>
</template>

<script>
import tinymce from 'vue-tinymce-editor'

export default {
  name: 'MessageReplyComponent',
  components: { tinymce },
  data () {
    return {
      config: {
      }
    }
  },
  mounted () {
  },
  props: {
    body: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
span .mce-branding {
  visibility: hidden !important;
}
</style>
