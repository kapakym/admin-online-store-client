<template>
  <input style="margin: 5px; width: 100%"
         class="fileUpload"
         type="file"
         @change="fileChange"
  />
</template>

<script>
export default {
  name: "PsInputFileUpload",

  methods: {
   
    fileChange(event) {
      this.$emit('update:modelValue', event.target.files[0])
    }

  }
}
</script>

<style scoped>
.fileUpload {
  /* margin-top: 15px; */
  align-self: auto;
  padding: 10px;
  background: none;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px;
  /* width: 100%; */
}
</style>