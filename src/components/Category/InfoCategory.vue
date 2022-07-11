<template>
  <div style="height: 100%">
    <ps-dialog v-model:show="changePictureDialogVisible">
      <change-category-picture
        :params="select_category.items"
        @close="changePictureDialogVisible = false"
      />
    </ps-dialog>
    <h2>Сведения о категории</h2>
    <div class="contentInfo">
      <ps-label-input
        placeholder="Введите название"
        :model="select_category.items?.name"
        type="text"
        >Название категории</ps-label-input
      >

      <ps-label-select
        style="margin-top: 15px"
        :model="response"
        :parentId="select_category.parentId"
        >Родитель</ps-label-select
      >

      <img
        class="picture-category"
        :src="
          'http://localhost:7000/' +
          (select_category.items?.picture
            ? select_category.items?.picture
            : 'notpicture.png')
        "
      />
      <ps-button @click="changePictureDialogVisible = true"
        >Изменить картинку</ps-button
      >
      <div>
        <ps-button @click="$emit('show-dialog', select_category.items)"
          >Добавить</ps-button
        >
        <ps-button
          @click="$emit('delete-category', select_category.items?.id)"
          style="margin-left: 10px"
          >Удалить</ps-button
        >
        <ps-button style="margin-left: 10px">Сохранить</ps-button>
      </div>
    </div>
  </div>
</template>

<script>
import PsLabelSelect from "../UI/PsLabelSelect.vue";
import axios from "axios";
import ChangeCategoryPicture from "./ChangeCategoryPicture.vue";
export default {
  components: { PsLabelSelect, ChangeCategoryPicture },
  props: {
    select_category: {},
    response: {},
  },
  methods: {},
  data() {
    return {
      name_info: "",
      changePictureDialogVisible: false,
    };
  },
  setup() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="css" scoped>
.contentInfo {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  height: 100%;
}

.picture-category {
  margin-top: 15px;
  border: 1px solid black;
  width: 200px;
}
</style>