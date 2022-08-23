<template>
  <div class="groupbuttons">
    <slot style="width: 100%"></slot>
  </div>
</template>

<script>
export default {
  name: "PsGroupButtons"
}
</script>

<style scoped>
.groupbuttons {
  display: flex;
  flex-direction: row;
  width: 100%;
  /*border: 1px solid black;*/
  align-content: center;
  justify-items: center;
  justify-content: right;
  
  margin: 5px;
}
</style>

