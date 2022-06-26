<template>
  <div class="psdialog" v-if="show" @click="hideDialog">
    <div @click.stop class="psdialog_content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import toggleMixin from "@/mixins/toggleMixin";
export default {
  name: "ps-dialog",
  mixins: [toggleMixin],
};
</script>

<style lang="css" scoped>
.psdialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.psdialog_content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
  border: 1px solid black;
  box-shadow: 4px 4px 4px black;
}
</style>