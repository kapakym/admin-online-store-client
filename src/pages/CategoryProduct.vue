<template>
  <div class="category">
    <ps-dialog v-model:show="dialogVisible"
    >
      <new-category-form
          @hide="closeDialog"
          :parent="parentCategory"
          @close="dialogVisible=false"
      />
    </ps-dialog>
    <h1>Категории товаров</h1>
    <div v-if="!isCategoryLoading"
         style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center">
      <div class="viewtree">
        <ps-tree-view
            class="tree"
            :items="categoryGraph"
            :key="categoryGraph.id"
            :parentId="0"
            @show-dialog="showDialog"
            @info-category="infoCategory"
        ></ps-tree-view>
        <div class="treeinfo">
          <info-category
              @refresh="refresh"
              @show-dialog="showDialog"
              :select_category="active"
              :response="categoryList"
          />
        </div>
      </div>
    </div>
    <div v-else>Идет загрузка</div>
  </div>
</template>

<script>
import apiGetCategory from "@/api/Category/apiGetCategory";
import PsTreeView from "../components/UI/PsTreeView.vue";
import NewCategoryForm from "../components/Category/NewCategoryForm.vue";
import PsButton from "../components/UI/PsButton.vue";
import PsInput from "../components/UI/PsInput.vue";
import InfoCategory from "../components/Category/InfoCategory.vue";
import {mapActions, mapState} from "vuex";

export default {
  components: {PsTreeView, NewCategoryForm, PsButton, PsInput, InfoCategory},

  data() {
    return {
      dialogVisible: false,
      parentCategory: {},
      select_category: {},
      active: {},
      isCategoryLoading: false
    };
  },

  computed: {
    ...mapState({
      categoryGraph: state => state.category.categoryGraph,
      categoryList: state => state.category.categoryList
    }),

  },

  async mounted() {
    this.isCategoryLoading = true;
    await this.fetchCategory();
    this.isCategoryLoading = false;
  },

  methods: {
    ...mapActions({
      fetchCategory: "category/fetchCategory"
    }),
    async refresh() {
      const result = await apiGetCategory();
      console.log("refresh");
      this.catproducts = result.catproducts.value;
      this.catresponse = result.catresponse.value;
      this.isCategoryLoading = result.isCategoryLoading.value;
    },
    closeDialog() {
      this.dialogVisible = false;
      // this.catproducts.value = [];
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
  width: 100%;
  height: 90vh;
}

.viewtree {
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 99%;
  height: 99%;
}

.tree {
  width: 40%;
  height: 100%;
  overflow: auto;
  text-align: left;
  /*border: 1px solid black;*/
  box-shadow: 1px 1px 5px;
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 5px;
  font-size: 1.5rem;
}

.treeinfo {
  width: 60%;
  box-shadow: 1px 1px 5px;
  height: 100%;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 5px;
}
</style>
