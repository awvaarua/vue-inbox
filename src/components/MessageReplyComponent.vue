<template>
  <div>
    <tinymce id="replyTiny" :other_options="options" :toolbar1="toolbar1" v-model="bodyCopy"></tinymce>
  </div>
</template>

<script>
import tinymce from 'vue-tinymce-editor'

export default {
  name: 'MessageReplyComponent',
  components: { tinymce },
  data () {
    return {
      bodyCopy: this.body.repeat(1),
      plugins: ['fullscreen'],
      toolbar1: 'formatselect | bold italic  strikethrough  forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat | fullscreen',
      options: {
        paste_data_images: true,
        images_upload_handler: function (blobInfo, success, failure) {
          success(`data:${blobInfo.blob().type};base64,${blobInfo.base64()}`)
        }
      }
    }
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
