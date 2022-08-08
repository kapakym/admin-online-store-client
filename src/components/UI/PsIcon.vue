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
  color: teal;
  /*border: 1px solid red;*/
  /*margin: 2px;*/
  padding-left: 4px;
  padding-right: 4px;
}

</style>