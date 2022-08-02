<template>
  <a class="material-icons psicon">{{ name }}</a>
</template>

<script>
export default {
  name: "PsIcon",
  props: {
    name: String
  }

}
</script>

<style scoped>

.psicon {
  color: #555;
  /*border: 1px solid red*/
}

</style>