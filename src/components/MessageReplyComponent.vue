<template>
  <div>
    <v-btn flat small color="primary" @click="replyClick">Reply</v-btn>
    <v-btn flat small color="primary" @click="forwardClick">Forward</v-btn>
    <div v-show="reply || forward">
      <v-flex xs12 md12>
        <v-select :items="fromList" v-model="to" label="From" autocomplete></v-select>
        <v-text-field v-model="from" label="To"></v-text-field>
      </v-flex>
      <tinymce id="replyTiny" :toolbar1="toolbar1" v-model="bodyCopy" :other_options="options"></tinymce>
      <v-btn class="no-margin-left" color="primary" :loading="loading" @click.native="loader = 'loading'" :disabled="loading" >
        Enviar
      </v-btn>
    </div>
  </div>
</template>

<script>
import tinymce from 'vue-tinymce-editor'

export default {
  name: 'MessageReplyComponent',
  components: { tinymce },
  data () {
    return {
      loader: null,
      loading: false,
      from: 'twitch@gmail.com',
      to: '',
      fromList: ['sanso.barcelo94@gmail.com', 'miquel@hotmail.com'],
      reply: false,
      forward: false,
      bodyCopy: ``,
      plugins: ['fullscreen'],
      toolbar1: 'formatselect | bold italic  strikethrough  forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat | fullscreen',
      options: {
        paste_data_images: true,
        images_upload_handler: function (blobInfo, success, failure) {
          success(`data:${blobInfo.blob().type};base64,${blobInfo.base64()}`)
        },
        content_style: 'body {  background: #ffffff !important; }',
        height: '250px',
        branding: false
      }
    }
  },
  props: {
    body: {
      type: String,
      required: true
    },
    showBody: {
      type: Function,
      required: true
    }
  },
  methods: {
    replyClick () {
      this.reply = !this.reply
      this.forward = false
      this.showBody(!this.reply && !this.forward)
      if (this.reply) {
        this.bodyCopy = `
          <div>
            <br>
            <br>
            El 16 de enero de 2018, 17:13, Amazon.es 
            <span dir="ltr">&lt;<a href="mailto:fuedoip@uib.cat" target="_blank">fuedoip@uib.cat</a>&gt;</span>
            <blockquote style="margin:0 0 0 .8ex;border-left:1px #ccc solid;padding-left:1ex">
              ${this.body.repeat(1)}
            </blockquote>
          </div>
        `
      }
    },
    forwardClick () {
      this.forward = !this.forward
      this.reply = false
      this.showBody(!this.reply && !this.forward)
      if (this.forward) {
        this.bodyCopy = `
          <div>
            <br>
            <br>
            ---------- Mensaje reenviado ----------<br>
            De: <strong>Twitch</strong> <no-reply@twitch.tv><br>
            Fecha: 20 de enero de 2018, 17:14<br>
            Asunto: BreaK está en directo: Lets goooooo!<br>
            Para: sanso.barcelo94@gmail.com<br>
            <br>
            ${this.body.repeat(1)}
          </div>
        `
      }
    }
  },
  watch: {
    loader () {
      const l = this.loader
      console.log(this[l])
      this[l] = !this[l]
      setTimeout(() => {
        this[l] = false
        this.$toasted.show('Mensaje enviado correctament').goAway(1000)
      }, 3000)
      this.loader = null
    }
  }
}
</script>

<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.no-margin-left {
  margin-left: 0px;
}
</style>
