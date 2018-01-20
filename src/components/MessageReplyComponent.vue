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
      bodyCopy: `
                <div>
                  <br>
                  <br>
                  El 16 de enero de 2018, 17:13, Amazon.es 
                  <span dir="ltr">&lt;<a href="mailto:fuedoip@uib.cat" target="_blank">fuedoip@uib.cat</a>&gt;</span>
                  <blockquote style="margin:0 0 0 .8ex;border-left:1px #ccc solid;padding-left:1ex">
                    ${this.body.repeat(1)}
                  </blockquote>
                </div>
                `,
      plugins: ['fullscreen'],
      toolbar1: 'formatselect | bold italic  strikethrough  forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat | fullscreen',
      options: {
        paste_data_images: true,
        images_upload_handler: function (blobInfo, success, failure) {
          success(`data:${blobInfo.blob().type};base64,${blobInfo.base64()}`)
        },
        content_style: 'body {  background: #ffffff !important; }'
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

<style>
</style>
