<template>
  <transition name="fade">
    <!--    <div class="toast" v-html="msg" :style="style" @click="closeHandle"></div>-->
    <ps-dialog v-model:show="visible" @click="closeHandle(false)">
      <div class="headpopup">
        <div>
          ИНФОРМАЦИЯ
        </div>
        <div class="iconpopup">
          <i class="material-icons " @click="closeHandle(false)">close</i>
        </div>

      </div>
      <div class="contentpopup">
        {{ msg }}
      </div>
      <div class="footerpopup">
        <ps-group-buttons>
          <ps-button @click="popupOk">Ok</ps-button>
          <ps-button @click="closePopup">Отмена</ps-button>
        </ps-group-buttons>
      </div>

    </ps-dialog>
  </transition>
</template>

<script>
import {onMounted, onUnmounted} from 'vue'
import PsDialog from "@/components/UI/PsDialog";
import PsGroupButtons from "@/components/UI/PsGroupButtons";
import PsButton from "@/components/UI/PsButton";

export default {
  name: "Toast",
  components: {PsButton, PsGroupButtons, PsDialog},
  props: {
    msg: {type: String, required: true},

    visible: {type: Boolean, default: true},
    backgroundColor: {type: String},
    color: {type: String},
    // closing the Toast immediately by click it, not wait the timed out.
    clickToClose: {type: Boolean, default: true},
    // a function provied by ToastPlugin.js, to unmout the toast.
    close: {type: Function, required: true},
    btnOk: {type: Function, required: true},
    btnCancel: {type: Function, required: true},
    done: {type: Promise}
  },
  methods: {
    closePopup() {
      this.btnCancel()
      this.closeHandle(false);
    },
    popupOk() {
      this.btnOk();
      this.closeHandle(false);
    }
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
    const closeHandle = (state) => {
      if (props.clickToClose)
        props.close(state);
    }

    const popupDone = async (params) => {
      this.done(params)
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

    return {closeHandle, popupDone};
  },
}
</script>

<style scoped>
.headpopup {
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 5px;
}

.footerpopup {
  border-top: 1px solid black;
  margin-top: 15px;
  padding-top: 5px;
}

.iconpopup {
  cursor: pointer;
  border-radius: 4px;
  align-items: center;
  align-content: center;
}

.iconpopup:hover {
  background: lightgray;
}

</style>