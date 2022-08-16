<template>
  <tr class="pstabletr">
    <td class="pstabletd" v-for="cell in row">
      {{ cell }}
    </td>
    <slot></slot>
  </tr>
</template>

<script>
export default {
  name: "PsTableTr",
  props: {
    row: Object
  }
}
</script>

<style scoped>


.pstabletd, ::v-slotted(td) {
  text-align: left;
  border: none;
  padding: 10px 15px;
  font-size: 1.5rem;
  vertical-align: center;
}

.pstabletr:nth-child(even) {
  background: #F8F8F8;
}

.pstabletr:hover {
  background: lightgray;
}


</style>