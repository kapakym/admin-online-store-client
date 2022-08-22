<template>
  <transition name="fade-dialog">
    <div class="psdialog" v-if="show" @click="hideDialog">
      <div @click.stop class="psdialog_content" v-if="show">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "ps-dialog",
  mixins: [toggleMixin],
  props: {},
};
</script>

<style lang="css" scoped>
.psdialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  /*background: rgba(0, 0, 0, 0.5);*/
  position: fixed;
  display: flex;
  text-align: center;
}

.psdialog_content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 400px;
  max-height: 80vh;
  padding: 20px;
  /*border: 1px solid black;*/
  box-shadow: 4px 4px 15px black;
  overflow: auto;
}

/*
enter - появление компонента leave
enter-active - весит на элементе, то время, за которое его нужно анимировать leave
enter-to - финальное состояние элемента leave
 */

/*.fade-dialog-leave-active, .fade-dialog-enter-active {*/
/*  transition: opacity 1s*/
/*}*/

/*.fade-dialog-enter-from, .fade-dialog-leave-to {*/
/*  opacity: 0*/
/*}*/

.fade-dialog-enter-active,
.fade-dialog-leave-active {
  transition: all 0.5s;
}

.fade-dialog-enter-from,
.fade-dialog-leave-to {
  transform: scale(0.5, 0.5);
  opacity: 0;
}
</style>
