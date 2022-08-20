<template>
  <div>
    <ps-button><ps-icon :name="'add'" /> Добавить</ps-button>
  </div>
</template>
<script>
import PsIcon from "../UI/PsIcon.vue";
export default {
  components: { PsIcon },
  name: "EditTemplateForm",
};
</script>
<style scoped></style>
