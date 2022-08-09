<template>
  <select multiple="multiple">
    <option v-for="item in items"> {{ item }}</option>
  </select>
</template>

<script>
export default {
  name: "PsMultiLineSelect",
  props: {
    items: Array
  }
}
</script>

<style scoped>

</style>