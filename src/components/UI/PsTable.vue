<template>
  <table class="pstable">

    <tr v-if="headers">
      <th class="psth" v-for="cell in headers">
        {{ cell }}
      </th>
    </tr>
    <ps-table-tr v-for="row in data" :row="row">
      <slot name="td"></slot>
    </ps-table-tr>

  </table>

</template>

<script>
import PsTableTr from "@/components/UI/PsTableTr";
import PsButton from "@/components/UI/PsButton";
import PsInput from "@/components/UI/PsInput";

export default {
  name: "PsTable",
  components: {PsInput, PsButton, PsTableTr},
  props: {
    headers: [],
    data: []

  },
  data() {
    return {}
  }
}
</script>

<style>
.pstable {
  background: Beige;
}

.psth {
  font-weight: bold;
  text-align: center;
  border: none;
  padding: 10px 15px;
  background: teal;
  font-size: 14px;
  color: white;
  border-top: 1px solid #ddd;
}


</style>