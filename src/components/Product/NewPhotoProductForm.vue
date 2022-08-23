<template>
  <div>
    <h1>Добавление фотографий продукта</h1>
    <ps-input-files-upload v-model="files"/>
    <div v-if="files?.urls" class="carusel">
      <ps-carusel-loader v-model="files"/>
    </div>
    <ps-group-buttons>
      <ps-button @click="addPhoto">
        <ps-icon name="add" style="color:green"/>
        Добавить
      </ps-button>
      <ps-button @click="$emit('close')">
        <ps-icon name="cancel" style="color:red"/>
        Отменав
      </ps-button>
    </ps-group-buttons>
  </div>


</template>

<script>
import PsInputFileUpload from "@/components/UI/PsInputFileUpload";
import PsInputFilesUpload from "@/components/UI/PsInputFilesUpload";
import PsButton from "@/components/UI/PsButton";
import PsCaruselLoader from "@/components/UI/PsCaruselLoader";
import PsGroupButtons from "@/components/UI/PsGroupButtons";
import PsIcon from "@/components/UI/PsIcon";

export default {
  name: "NewPhotoProductForm",
  components: {PsIcon, PsGroupButtons, PsCaruselLoader, PsButton, PsInputFilesUpload, PsInputFileUpload},
  data() {
    return {
      files: Object
    }
  },
  props: {
    modelValue: {}
  },
  methods: {
    addPhoto() {
      this.$emit("update:modelValue", this.files.files);
      console.log(this.modelValue)
      this.$emit("close");
    }
  }
}

</script>

<style scoped>
.carusel {
  display: flex;
  justify-content: center;
  padding: 10px;
  /*border: 1px solid black;*/
  border-radius: 5px;
  box-shadow: 0px 0px 5px black;
}

</style>