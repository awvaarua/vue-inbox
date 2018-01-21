<template>
  <div class="intrinsic-container intrinsic-container-16x9">
    <iframe :srcdoc="body"></iframe>
  </div>
</template>

<script>
export default {
  name: 'MessageBodyComponent',
  props: {
    body: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.intrinsic-container {
  position: relative;
  height: 0;
  overflow: hidden;
}

/* 16x9 Aspect Ratio */
.intrinsic-container-16x9 {
  padding-bottom: 45%;
}

/* 4x3 Aspect Ratio */
.intrinsic-container-4x3 {
  padding-bottom: 42%;
}

.intrinsic-container iframe {
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #ccc;
}
</style>
