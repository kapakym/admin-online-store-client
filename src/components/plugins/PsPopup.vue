<template>
  <transition name="fade">
    <!--    <div class="toast" v-html="msg" :style="style" @click="closeHandle"></div>-->
    <ps-dialog v-model:show="visible" @click="closeHandle">
      <div class="headpopup">HEAD
        
      </div>
      <div class="contentpopup">
        {{ msg }}
      </div>
      <div class="footerpopup">
        FOOTER
      </div>

    </ps-dialog>
  </transition>
</template>

<script>
import {onMounted, onUnmounted} from 'vue'
import PsDialog from "@/components/UI/PsDialog";

export default {
  name: "Toast",
  components: {PsDialog},
  props: {
    msg: {type: String, required: true},
    visible: {type: Boolean, default: true},
    backgroundColor: {type: String},
    color: {type: String},
    // closing the Toast when timed out. 0:not closed until to call this.$closeToast()
    timeout: {
      type: Number, default: 2000, validate: function (val) {
        return val >= 0
      }
    },
    // closing the Toast immediately by click it, not wait the timed out.
    clickToClose: {type: Boolean, default: true},
    // a function provied by ToastPlugin.js, to unmout the toast.
    close: {type: Function, required: true}
  },

  setup(props) {
    // let innerTimeout = ref();
    // const style = computed(
    //     () => {
    //       return {
    //         backgroundColor: props.backgroundColor ? props.backgroundColor : '#696969',
    //         color: props.color ? props.color : '#FFFFFF'
    //       }
    //     }
    // );

    onMounted(() => {
      // toClearTimeout();
      // if (props.timeout > 0)
      //   innerTimeout.value = setTimeout(() => {
      //     props.close();
      //   }, props.timeout);
    });

    /**
     * when toast be unmounted, clear the 'innerTimeout'
     */
    onUnmounted(() => {
      // toClearTimeout()
    })

    /**
     * unmount the toast
     */
    const closeHandle = () => {
      if (props.clickToClose)
        props.close();
    }

    /**
     * to clear the 'innerTimeout' if it exists.
     */
    const toClearTimeout = () => {
      if (innerTimeout.value) {
        try {
          clearTimeout(innerTimeout.value);
        } catch (e) {
          console.error(e);
        }
      }
    }

    return {closeHandle};
  },
}
</script>

<style scoped>
.headpopup {
  border-bottom: 1px solid black;
}

</style>