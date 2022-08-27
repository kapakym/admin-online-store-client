<template>
  <div class="groupbuttons">
    <slot style="width: 100%"></slot>
  </div>
</template>

<script>
export default {
  name: "PsGroupButtons",
}
</script>

<style scoped>
.groupbuttons {
  display: flex;
  align-content: center;
  justify-items: center;
  justify-content: center;
  align-items: center;
  margin: 5px;
  /*height: fit-content;*/
}
</style>

