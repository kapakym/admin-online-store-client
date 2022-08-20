<template>
  <div class="container">
    <input type="checkbox"/>
    <div>

    </div>
  </div>
</template>

<script>


export default {
  name: "PsCheckBox",
  props: {
    modelValue: Boolean,
    label: String
  }
}
</script>

<style scoped>
.container {
  display: flex;
}
</style>