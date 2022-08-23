<template>
  <input style="margin: 5px; width: 100%"
         class="fileUpload"
         type="file"
         @change="fileChange" multiple
         accept="image/*"
  />

</template>

<script>
export default {
  name: "PsInputFilesUpload",
  props: {
    // modelValue: Object
  },
  data() {
    return {}
  },

  methods: {

    fileChange(event) {
      const urls = []
      for (const url of event.target.files) urls.push(URL.createObjectURL(url))
      this.$emit('update:modelValue', {files: event.target.files, urls: urls})
    },

  }
}
</script>

<style scoped>
.fileUpload {
  align-self: auto;
  padding: 10px;
  background: none;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  margin: 5px;
}
</style>