<template>
  <div style="height: 100%">
    <ps-dialog v-model:show="changePictureDialogVisible">
      <change-category-picture
          :params="select_category.items"
          @close="changePictureDialogVisible = false"
      />
    </ps-dialog>
    <h2>Сведения о категории</h2>
    <div v-if="select_category?.items">
      <div class="contentInfo">
        <ps-label-input
            placeholder="Введите название"
            v-model="select_category.items.name"
            type="text"
        >Название категории
        </ps-label-input
        >
        <ps-label-select
            v-if="select_category.items.id != 0"
            style="margin-top: 15px"
            :model="response"
            v-model="select_category.items.parentId"
            @change="labelChange"
        >Родитель
        </ps-label-select
        >

        <div>
          <ps-group-buttons>
            <ps-button @click="$emit('show-dialog', select_category.items)"
            >
              <ps-icon :name="'add'"/>
              Добавить
            </ps-button
            >
            <ps-button
                v-if="select_category.items.id != 0"
                @click="deleteCategory"
                style="margin-left: 10px"
            >
              <ps-icon :name="'delete'"/>
              Удалить
            </ps-button
            >
            <ps-button
                style="margin-left: 10px"
                @click="updateCategory"
                v-if="select_category.items.id != 0"
            >
              <ps-icon :name="'save'"/>
              Сохранить
            </ps-button
            >
          </ps-group-buttons>

        </div>
        <img
            v-if="select_category.items.id != 0"
            class="picture-category"
            :src="
            'http://localhost:7000/' +
            (select_category.items?.picture
              ? select_category.items?.picture
              : 'notpicture.png')
          "
        />
        <ps-button
            @click="changePictureDialogVisible = true"
            v-if="select_category.items.id != 0"
        >
          <ps-icon :name="'add_photo_alternate'"/>
          Изменить картинку
        </ps-button
        >
      </div>
    </div>
    <div v-else>Выберите категорию</div>
  </div>
</template>

<script>
import PsLabelSelect from "../UI/PsLabelSelect.vue";
import ChangeCategoryPicture from "./ChangeCategoryPicture.vue";
import apiUpdateCategory from "@/api/Category/apiUpdateCategory.ts";
import apiDeleteCategory from "@/api/Category/apiDeleteCategory";
import PsIcon from "@/components/UI/PsIcon";
import PsGroupButtons from "@/components/UI/PsGroupButtons";

export default {
  components: {PsGroupButtons, PsIcon, PsLabelSelect, ChangeCategoryPicture},
  props: {
    select_category: {},
    response: {},
  },
  methods: {
    async deleteCategory() {
      this.$popup("Вы действительно хотите удалить категорию (" + this.select_category.items.name + ")?"
          , async () => {
            await apiDeleteCategory(this.select_category.items?.id);
            await this.$emit("refresh");
          });
    },

    async updateCategory() {
      this.$popup("Вы действительно хотите сохранить изменения в категории (" + this.select_category.items.name + ")?"
          , async () => {
            const result = await apiUpdateCategory({
              id: this.select_category.items.id,
              parentId: this.select_category.items.parentId,
              name: this.select_category.items.name,
            });
            await this.$emit("refresh");
          });

    },
    labelChange(event) {
      console.log(event);
    },
  },
  data() {
    return {
      name_info: "",
      changePictureDialogVisible: false,
    };
  },
  setup() {
    return {};
  },
  mounted() {
  },
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
