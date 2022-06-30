<template>
  <div style="height: 100%">
    <h2>Сведения о категории</h2>
    <div class="contentInfo">
      <ps-label-input
        placeholder="Введите название"
        :model="select_category.name"
        type="text"
        >Название категории</ps-label-input
      >

      <ps-label-select
        style="margin-top: 15px"
        :model="response"
        :select="select_category"
        >Родитель</ps-label-select
      >

      <img
        class="picture-category"
        :src="
          'http://localhost:7000/' +
          (select_category.picture ? select_category.picture : 'notpicture.png')
        "
      />
      <div>
        <ps-button
          @click="
            $emit('show-dialog', {
              id: select_category.id,
              name: select_category.name,
              childrens: select_category.childrens,
            })
          "
          >Добавить</ps-button
        >
        <ps-button @click="deleteCategory" style="margin-left: 10px"
          >Удалить</ps-button
        >
        <ps-button style="margin-left: 10px">Сохранить</ps-button>
      </div>
    </div>
  </div>
</template>

<script>
import PsLabelSelect from "./UI/PsLabelSelect.vue";
import axios from "axios";
export default {
  components: { PsLabelSelect },
  props: {
    select_category: {},
    response: {},
    treeStructure: [],
  },
  methods: {
    async deleteCategory() {
      const response = await axios.post(
        "http://localhost:7000/product-type/delete",
        {
          id: Number(this.select_category.id),
        }
      );

      this.select_category.childrens = [];
    },
  },
  data() {
    return {
      name_info: "",
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