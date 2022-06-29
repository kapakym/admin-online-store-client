<template>
  <div class="category">
    <ps-dialog v-model:show="dialogVisible"
      ><new-category-form @create="closeDialog" :parent="parentCategory"
    /></ps-dialog>
    <h1>Категории товаров</h1>
    <div v-if="!isCategoryLoading" style="width: 100%; height: 100%">
      <div class="viewtree">
        <ps-tree-view
          class="tree"
          :name="catproducts.name"
          :childrens="catproducts.childrens"
          :picture="catproducts.picture"
          :id="catproducts.id"
          :key="catproducts.id"
          :parentId="0"
          @show-dialog="showDialog"
          @info-category="infoCategory"
        ></ps-tree-view>
        <div class="treeinfo">
          <info-category
            @show-dialog="showDialog"
            :select_category="select_category"
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
import PsTreeView from "../components/UI/PsTreeView.vue";
import NewCategoryForm from "../components/NewCategoryForm.vue";
import PsButton from "../components/UI/PsButton.vue";
import PsInput from "../components/UI/PsInput.vue";
import InfoCategory from "../components/InfoCategory.vue";
export default {
  components: { PsTreeView, NewCategoryForm, PsButton, PsInput, InfoCategory },
  setup(props) {
    const { catproducts, catresponse, isCategoryLoading } = useCategory();
    return { catproducts, catresponse, isCategoryLoading };
  },
  data() {
    return {
      dialogVisible: false,
      parentCategory: {},
      select_category: {},
    };
  },
  methods: {
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
      this.select_category.id = info_cat.id;
      this.select_category.parentId = info_cat.parentId;
      this.select_category.name = info_cat.name;
      this.select_category.picture = info_cat.picture;
      this.select_category.childrens = info_cat.childrens;
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