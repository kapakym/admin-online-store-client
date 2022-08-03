<template>
  <div class="newuserform">
    <h4>Добавление нового производителя</h4>
    <ps-input v-model="nameBrand" placeholder="Название производителя"/>
    <ps-input-file-upload v-model="fileUpload"/>
    <ps-group-buttons>
      <ps-button @click="createBrand">
        <ps-icon :name="'done'" style="color: green"/>
        Добавить
      </ps-button>
      <ps-button @click="$emit('hide')">
        <ps-icon :name="'cancel'" style="color: red"/>
        Закрыть
      </ps-button>
    </ps-group-buttons>


  </div>
</template>
<script>
import PsButton from "@/components/UI/PsButton";
import PsGroupButtons from "@/components/UI/PsGroupButtons";
import PsInputFileUpload from "@/components/UI/PsInputFileUpload";
import apiAddBrand from "@/api/Brand/apiAddBrand";

export default {
  components: {PsInputFileUpload, PsGroupButtons, PsButton},
  methods: {
    async createBrand() {
      await apiAddBrand({name: this.nameBrand, file: this.fileUpload});
      this.$emit("refresh");
    }
  },
  data() {
    return {
      nameBrand: "",
      fileUpload: Blob
    }
  }
};
</script>
<style lang="css" scoped>
form {
  display: flex;
  flex-direction: column;
}

.newuserform {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.fileUpload {
  /* margin-top: 15px; */
  align-self: auto;
  padding: 10px;
  background: none;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  /* width: 100%; */
}
</style>

