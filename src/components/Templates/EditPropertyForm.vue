<template>
  <ps-button><ps-icon name="add"></ps-icon> Добавить</ps-button>
</template>

<script lang="ts">
import { mapState } from "vuex";

export default {
  name: "EditPropertyForm",
  computed: {
    ...mapState({}),
  },
  data() {},
};
</script>

<style scoped></style>
