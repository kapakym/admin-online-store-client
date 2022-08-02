<template>
  <div class="category">
    <ps-dialog v-model:show="dialogVisible"
    >
      <new-category-form
          @create="closeDialog"
          :parent="parentCategory"
          @refresh="refresh"
          @close="dialogVisible=false"
      />
    </ps-dialog>
    <h1>Категории товаров</h1>
    <div v-if="!isCategoryLoading" style="width: 100%; height: 100%">
      <div class="viewtree">
        <ps-tree-view
            class="tree"
            :items="catproducts"
            :key="catproducts.id"
            :parentId="0"
            @show-dialog="showDialog"
            @info-category="infoCategory"
        ></ps-tree-view>
        <div class="treeinfo">
          <info-category
              @refresh="refresh"
              @show-dialog="showDialog"
              :select_category="active"
              :response="catresponse"
          />
        </div>
      </div>
    </div>
    <div v-else>Идет загрузка</div>
  </div>
</template>

<script>
import useCategory from "@/hooks/useCategory";

import apiGetCategory from "@/api/apiGetCategory";
import PsTreeView from "../components/UI/PsTreeView.vue";
import NewCategoryForm from "../components/Category/NewCategoryForm.vue";
import PsButton from "../components/UI/PsButton.vue";
import PsInput from "../components/UI/PsInput.vue";
import InfoCategory from "../components/Category/InfoCategory.vue";

export default {
  components: {PsTreeView, NewCategoryForm, PsButton, PsInput, InfoCategory},
  setup(props) {
    const {catproducts, catresponse, isCategoryLoading} = useCategory();
    return {catproducts, catresponse, isCategoryLoading};
  },

  data() {
    return {
      dialogVisible: false,
      parentCategory: {},
      select_category: {},
      active: {},
    };
  },

  methods: {
    async refresh() {
      const result = await apiGetCategory();
      console.log("refresh");
      this.catproducts = result.catproducts.value;
      this.catresponse = result.catresponse.value;
      this.isCategoryLoading = result.isCategoryLoading.value;
    },
    closeDialog() {
      this.dialogVisible = false;
      this.catproducts.value = [];
    },
    showDialog(parentCategory) {
      console.log(parentCategory);
      this.parentCategory = parentCategory;
      this.dialogVisible = true;
    },
    infoCategory(info_cat) {
      if (info_cat != this.active) this.active.isActive = false;
      this.active = info_cat;
    },
  },
};
</script>

<style lang="css" scoped>
.category {
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid green;
  width: 100%;
  height: 90vh;
}

.viewtree {
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 100%;
  height: 100%;
}

.tree {
  width: 40%;
  height: 100%;
  overflow: auto;
  text-align: left;
  border: 1px solid black;
}

.treeinfo {
  width: 60%;
  border: 1px solid black;
  height: 100%;
}
</style>
