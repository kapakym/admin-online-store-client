<template>
  <ps-table :data="test" :headers="head">
    <template v-slot:td>
      <ps-button>Hello</ps-button>
    </template>
  </ps-table>
</template>

<script>
import PsTable from "@/components/UI/PsTable";
import PsButton from "@/components/UI/PsButton";

export default {
  name: "TemplatePage",
  components: {PsButton, PsTable},
  data() {
    return {
      head: ["s", "s", "sss"],
      test: [{
        id: 1,
        name: "dsfasdfadsf"
      }, {
        id: 1,
        name: "dsfasdfadsf"
      }, {
        id: 1,
        name: "dsfasdfadsf"
      }],
    }
  }
}
</script>

<style scoped>

</style>