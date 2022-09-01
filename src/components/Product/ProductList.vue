<template>
  <ps-dialog v-model:show="visibleChangePhotoDialog">
    <change-product-photo :product="selectedProduct" @close="visibleChangePhotoDialog=false"/>
  </ps-dialog>

  <div v-if="products?.length==0"><h1>Добавьте новый товар!</h1></div>
  <ps-dialog v-model:show="visibleDialogInfo">
    <product-edit-info-from :product="productIDEditInfoAndPhoto"
                            @close="visibleDialogInfo=false"></product-edit-info-from>
  </ps-dialog>
  <ps-paginator
      v-if="products.length > 0"
      :current-page="page"
      :total-pages="totalPages"
      @changePage="changePage"
  ></ps-paginator>
  <div class="container">
    <div v-for="item of products" style="display: flex; flex-grow: 1; box-sizing: border-box;">
      <product-item :item="item" :brands="brands" :categorys="categorys" :templates="templates" @edit="editInfo"
                    @editPhoto="editPhoto"/>
    </div>
  </div>
  <ps-paginator
      v-if="products.length > 0"
      :current-page="page"
      :total-pages="totalPages"
      @changePage="changePage"
  ></ps-paginator>
</template>

<script>
import {mapActions, mapState} from "vuex";
import ProductItem from "@/components/Product/ProductItem";
import apiGetBrand from "@/api/Brand/apiGetBrand";
import apiGetCategory from "@/api/Category/apiGetCategory";
import apiGetTemplate from "@/api/Template/apiGetTemplate";
import ProductEditInfoFrom from "@/components/Product/ProductEditInfoFrom";
import ChangeProductPhoto from "@/components/Product/changeProductPhoto";
import PsDialog from "@/components/UI/PsDialog";

export default {
  name: "ProductList",
  components: {PsDialog, ChangeProductPhoto, ProductItem, ProductEditInfoFrom},

  computed: {
    ...mapState({
      products: state => state.product.products,
      page: state => state.product.page,
      limit: state => state.product.limit,
      totalPages: state => state.product.totalPages,
    }),
  },
  async mounted() {
    await this.changePage(this.page)
    this.brands = await apiGetBrand();
    const {categoryList} = await apiGetCategory();
    categoryList.value.splice(0, 1);
    this.categorys = categoryList;
    this.templates = await apiGetTemplate();
  },

  methods: {
    ...mapActions({
      getProductsByPage: "product/getProductsByPage"
    }),
    async changePage(numberPage) {
      await this.getProductsByPage({page: numberPage});
    },
    editInfo(productId) {
      console.log(productId)
      this.productIDEditInfoAndPhoto = productId;
      this.visibleDialogInfo = true;
    },
    editPhoto(item) {
      this.selectedProduct = item;
      this.visibleChangePhotoDialog = true;
    }
  },
  data() {
    return {
      brands: [],
      categorys: [],
      templates: [],
      visibleDialogInfo: false,
      productIDEditInfoAndPhoto: 0,
      visibleChangePhotoDialog: false,
      selectedProduct: Object
    }
  },

  props: {
    modelValue: Object
  }
}
</script>

<style scoped>
.container {
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  flex-grow: 1;
}

</style>